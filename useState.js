

function useState(ref, initialValue){
    assert(typeof initialValue in ["number", "string"], "initialValue must be a number or a string")
    console.log(typeof initialValue)
    const key = `${ref}${initialValue}`


    if (!(values[key])) {   
        function setValue(newValue){
            values[key].value = newValue
            rerender(ref)
        }
        values[key] = {ref, value: initialValue, setValue}
    }

    return [values[key].value, values[key].setValue]
}


function App(){
    const [count, setCount] = useState("count", 0)

    return html`
     <button ref_key="count" rerender-with="App"
      onclick=${() => setCount(count + 1)} >
        you clicked this ${count} times
    </button>
    `
}