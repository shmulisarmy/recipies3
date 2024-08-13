function canMake(recipie){
    for (const [ingredientName, amount] of Object.entries(recipie.ingredients)){
        if (!availableIngredients[ingredientName]){
            return false
        }
        if (availableIngredients[ingredientName] < amount){
            return false
        }
    }
    return true
}

function make(recipie){
    for (const [ingredientName, amount] of Object.entries(recipie.ingredients)){
        availableIngredients[ingredientName] -= amount
    }
    if (!mealPlanner[recipie.name]) mealPlanner[recipie.name] = 0
    mealPlanner[recipie.name] += 1
}


function removeFromMealPlanner(recipie){
    for (const [ingredientName, amount] of Object.entries(recipie.ingredients)){
        availableIngredients[ingredientName] += amount
    }
    mealPlanner[recipie.name] -= 1
}

function isMaking(recipie){
    return mealPlanner[recipie.name]
}