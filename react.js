function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

const cleanHTMLMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
};
function cleanHTML(input) {
    if (typeof input !== 'string') return input;
    return input.replace(/[&<>"']/g, function(match) {
        return cleanHTMLMap[match];
    });
}

function html(strings, ...args) {
    let result = '';

    for (let i = 0; i < strings.length; i++) {
        if (strings[i][strings[i].length - 1] == "/"){
            const substring = strings[i].substring(0, strings[i].length - 1);
            if (substring != false) {
                result += substring;
            }
         } else {
                result += strings[i];
            }
        if (i < args.length) {
            if (typeof args[i] == "function") {
                // todo: optimize this by finding index of last on and then tree searching from there
                if (["oninput", "onopen", "onchange", "onsubmit", "onclick", "onmouseover", "onmouseout", "onmousemove", "onmousedown", "onmouseup", "onkeydown", "onkeyup", "onkeypress", "ondblclick", "onload", "onunload"].some(substring => strings[i].includes(substring))){                                                              
                    result += `function_store[${store_function(args[i])}](event)`
                } else {
                    result += store_function(args[i]);
                }
                
                continue;
            } else if (typeof args[i] == "object") {
                result += store_data(args[i]);
                continue;
            }
            if (strings[i][strings[i].length - 1] == "/"){
               result += args[i];
            } else {
                result += cleanHTML(args[i]);
            }
        }
    }

    return result;
}

function createElementFromHTML(htmlString) {
    if (typeof htmlString !== 'string') {
        throw new Error('Expected a string as input not a ' + typeof htmlString);
    }

    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString.trim();;
    return tempDiv.firstChild;
}


function rerender(component_ref_key, props){
    console.log(component_ref_key)
    const element = get_element(component_ref_key)
    console.log(element)
    assert(element instanceof HTMLElement, "element variable is not an HTMLElement")
    let component_maker_name
    try {
        component_maker_name = element.getAttribute("rerender-with")
    } catch (error) {
        throw new Error(`${element} does not a have a 'rerender-with' attribute (used to tell the rerender function which component to use when re-rendering)`)
    }
    const component_maker = eval(component_maker_name);
    let primaryJsonData;
    if (props == undefined) {
        console.log("props", props)
        const data_key = element.getAttribute("props")
        console.log("data_key", data_key)
        primaryJsonData = data_store[data_key];
    } else {
        primaryJsonData = props
    }
    console.log("primaryJsonData", primaryJsonData)
    const newElement = createElementFromHTML(component_maker(primaryJsonData));
    element.parentElement.replaceChild(newElement, element);
    activateAllRefs(newElement)
    activateAllsignals(newElement)

}


function set(component_ref_key, component_maker, key, value){
    const element = ref_store[component_ref_key]
    const primaryJsonData = data_store[element.getAttribute("data-key")];
    primaryJsonData[key] = value
    const newElement = createElementFromHTML(component_maker(primaryJsonData));
    element.parentElement.replaceChild(newElement, element);
    activateAllRefs(newElement)
}

const data_store = {}
let data_store_upto = 1

function store_data(data){
    data_store[data_store_upto] = data
    data_store_upto++
    return data_store_upto - 1
}

const function_store = {}
let function_store_upto = 1

function store_function(func){
    function_store[function_store_upto] = func
    function_store_upto++
    return function_store_upto - 1
}

const ref_store = {}
let ref_store_upto = 1

function store_ref(element){
    ref_store[ref_store_upto] = element
    ref_store_upto++
    return ref_store_upto - 1
}

/**
 * generates a ref key for later storage in a reserved spot
 * @return {number}
 */
function genrefKey(){
    ref_store_upto++
    return ref_store_upto - 1
}

/**
 * 
 * @param {HTMLElement} element this is the element tha will have all items with the ref attribute as 
child activateed                                                                                       */
function  activateAllRefs(element){
    // assert(element instanceof HTMLElement, element)
    console.log(element)
    if (element.hasAttribute("ref_key")) {
        const ref_key = element.getAttribute("ref_key")
        ref_store[ref_key] = element
    }
    const allRefElements = element.querySelectorAll("[ref_key]")
    allRefElements.forEach(element => {
        const ref_key = element.getAttribute("ref_key")
        ref_store[ref_key] = element
    })
}


const funcs = {}

function memo(key, func, dependencies){ 
    funcs[key] = {func, dependencies, result: func(dependencies)}
}


function getMemo(funcKey, dependencies){
    if (deepEqual(funcs[funcKey].dependencies, dependencies)){
            return funcs[funcKey].result;
    }
    funcs[funcKey].dependencies = dependencies
    funcs[funcKey].result = funcs[funcKey].func(dependencies)
    return funcs[funcKey].result
}




const signals = {}
const signalFuncListeners = {}

function updateSignal(key, value){
    signals[key].value = value
    for (let i = 0; i < signals[key].listeners.length; i++){
        signals[key].listeners[i].textContent = signals[key].value
    }
    for (const listener of signalFuncListeners[key]){
        const {element, funcKey} = listener
        function_store[funcKey](element, value)
    }
}


let signals_upto = 0


function createSignal(value, key){
    if (signals[key]) {
        return [key, (value) => updateSignal(key, value), () => signals[key].value]
    }
    if (key == undefined){  
        key = `signal-${signals_upto}`
        signals_upto++
    }
    if (signals[key]) {
        return [key, (value) => updateSignal(key, value), () => signals[key].value]
    }
    signals[key] = {
        value: value,
        listeners: []
    }
    signalFuncListeners[key] = []
    return [key, (value) => updateSignal(key, value), () => signals[key].value]
}

function listen(key, listener){
    if (!signals[key]){
        createSignal(null, key)
    }
    signals[key].listeners.push(listener)
    listener.textContent = signals[key].value
}

function funcListen(key, element, funcKey){
    if (!signals[key]){
        createSignal(null, key)
    }
    signalFuncListeners[key].push({element, funcKey})
    function_store[funcKey](element, signals[key].value)
}

function activateAllsignals(element){
    if (element.hasAttribute("signal")) {
        const signal_key = element.getAttribute("signal")
        if (element.hasAttribute("signalFunc")){
            const func_key = element.getAttribute("signalFunc")
            funcListen(signal_key, element, func_key)
        } else {
            listen(signal_key, element)
        }
    }
    const allSignalElements = element.querySelectorAll("[signal]")
    allSignalElements.forEach(element => {
        const signal_key = element.getAttribute("signal")
        if (element.hasAttribute("signalFunc")){
            const func_key = element.getAttribute("signalFunc")
            funcListen(signal_key, element, func_key)
        } else {
            listen(signal_key, element)
        }
    })

    
}


function deepEqual(obj1, obj2, seen = new Set()) {
    if (obj1 === obj2) {
        return true;
    }

    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    if (seen.has(obj1) || seen.has(obj2)) {
        return obj1 === obj2;
    }

    seen.add(obj1);
    seen.add(obj2);

    if (obj1.constructor !== obj2.constructor) {
        return false;
    }

    if (obj1 instanceof Date && obj2 instanceof Date) {
        return obj1.getTime() === obj2.getTime();
    }

    if (obj1 instanceof RegExp && obj2 instanceof RegExp) {
        return obj1.toString() === obj2.toString();
    }

    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) {
            return false;
        }
        for (let i = 0; i < obj1.length; i++) {
            if (!deepEqual(obj1[i], obj2[i], seen)) {
                return false;
            }
        }
        return true;
    }

    if (obj1 instanceof Map && obj2 instanceof Map) {
        if (obj1.size !== obj2.size) {
            return false;
        }
        for (let [key, val] of obj1) {
            if (!obj2.has(key) || !deepEqual(val, obj2.get(key), seen)) {
                return false;
            }
        }
        return true;
    }

    if (obj1 instanceof Set && obj2 instanceof Set) {
        if (obj1.size !== obj2.size) {
            return false;
        }
        for (let val of obj1) {
            if (!obj2.has(val)) {
                return false;
            }
        }
        return true;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key], seen)) {
            return false;
        }
    }

    return true;
}



function get_element(ref_key){
    if (ref_key in ref_store){
        return ref_store[ref_key]
    }
    return document.querySelector(`[ref_key="${ref_key}"]`)
}                                                                                                   





/**
 * @typedef {{[ref: string]: {value: any, setValue: Function}}} StateObjectMap
 * @type {StateObjectMap} for the key it takes in the ref and the first value 
 */

const values = {}
const StateObjects = {}


/**
 * 
 * @param {string} ref 
 * @param {*} initialValue 
 * @param {string} keyTail this is used to help make the key unique when there are multiple similar useState calls on the same ref
 * @returns 
 */
function useState(ref, initialValue, keyTail = ""){
    const key = `${ref}${initialValue}${keyTail}`

    if (!(values[key])) {   
        function setValue(newValue){
            values[key].value = newValue
            rerender(ref)
        }
        values[key] = {ref, value: initialValue, setValue}
    }

    return [values[key].value, values[key].setValue]
}





