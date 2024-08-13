


function Recipie({recipie, id}) {
    const ingredientsRef = `ingredients-${id}`
    const instructionsRef = `instructions-${id}`
    const ref = `recipie-${id}`
    const [count, setCount] = useState(ref, 0)
    const [countSig, updateCount, getCount] = createSignal(0, ref)
    return html`
    <div class="recipie ${canMake(recipie) ? "can-make" : "cant-make"}"
        ref_key=${ref} rerender-with="Recipie" props=${{recipie, id}}>
        <div class="image-and-profile">
            <div class="img">
                <img src="${recipie.image}" alt="${recipie.name}" 
                />
            </div>
            /${recipie.uploaderId? UserProfile(recipie.uploaderId): ""}
        </div>

        <div class="text">
            <h1>${recipie.name}</h1>
            <details ref_key=${ingredientsRef} name="ingredients" onopen=${(event) => get_element(instructionsRef).close = false}>
                <summary>Ingredients:</summary>
                <ul>
                /${Object.keys(recipie.ingredients).map(ingredient => html`<li>/${ingredient}: /${recipie.ingredients[ingredient]}</li>`).join('')}
                </ul>
            </details>
            <details ref_key=${instructionsRef} name="instructions" onopen=${(event) => get_element(ingredientsRef).open = false}>
                <summary>instructions:</summary>
                <ol>
                    /${recipie.instructions.map(instruction => html`<li>/${instruction}</li>`).join('')}
                </ol>
            </details>
            /${canMake(recipie) ? html`<button onclick=${() => { make(recipie); rerender("App"); }} class="make">Make</button>` : ""}
            /${isMaking(recipie) ? html`<button onclick=${() => { removeFromMealPlanner(recipie); rerender("App"); }} class="remove">Remove from meal planner</button>` : ""}
            <button onclick=${() => setCount(count + 1)}>${count}</button>
            <button signal=${countSig} onclick=${() => updateCount(getCount() + 1)}></button>
        </div>
    </div>
    `;
}


function ProfileView(){
    const [showing, setShowing] = useState("ProfileView", 2)
    console.log({showing})
        
        return html`
        <div id="root"
        ref_key="ProfileView" rerender-with="ProfileView">
            /${BigUserProfile(showing)}
        </div>
        `
    }



function App(props = null) {
    const [showing, setShowing] = useState("App", "recipies")
    console.log(recipies)
    const ref = "App"

    if (showing == "recipies") {

        
        return html`    
        <div ref_key=${ref} rerender-with="App" props=${null}>
        <button onclick=${() => setShowing("ProfileView")}>profile</button>
        /${MealPlanner()}
        <main >
        /${recipies.map((recipie, index) => Recipie({recipie, id: index})).join("")}
        </main>
        </div>
        `
    } else if (showing == "ProfileView") {
        return html`
        <div ref_key=${ref} rerender-with="App" props=${null}>
        <button onclick=${() => setShowing("recipies")}>recipies</button>
                /${ProfileView()}
            </div>
        `
    }
}





console.time("App")
root.innerHTML = App()
activateAllsignals(root)
console.timeEnd("App")