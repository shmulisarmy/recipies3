/**
 * @type {[key: string]: number}  [key: string] refers to the name of a food item that user plans to make and the value is the amount of that item they plan to make
 */
const mealPlanner = {
    "Rice": 2,
}


/**
 * @type {{[key: string]: number}}
 */
const availableIngredients = {
    "pasta": 2,
    "beans": 2,
    "flour": 2,
    "water": 3,
    "salt": 3,
    "rice": 2,
    "chickenBreast": 2,
    "yogurt": 1,
    "tomatoes": 3,
    "cream": 1,
    "onion": 2,
    "garlic": 5,
    "vegetableBroth": 4,
    "lentils": 2,
    "carrots": 3,
    "celery": 2,
    "spinach": 3,
    "eggs": 6,
    "mushrooms": 2,
    "bellPeppers": 4,
    "cheese": 2,
    "oliveOil": 1,
    "butter": 1,
    "groundBeef": 1,
    "tortillas": 8,
    "lettuce": 1,
    "sourCream": 1,
    "avocado": 2,
    "cucumber": 2,
    "lemon": 2,
    "feta": 1,
    "oliveOil": 1,
    "chocolate chips": 2,
    "sugar": 2,
    "vanilla extract": 1,
    "baking soda": 1,
    "bananas": 3,
    "cinnamon": 1,
    "nutmeg": 1,
    "apples": 4,
    "pineNuts": 0.5,
    "parmesan": 1,
    "basil": 1,
    "cherryTomatoes": 1,
    "quinoa": 1,
    "blackBeans": 1,
    "corn": 1,
    "cumin": 1,
    "zucchini": 4,
    "peppers": 2,
    "bellPepper": 4,
    "celeryRoot": 3,
    "thyme": 2,
    "rosemary": 2,
    "parsley": 2,
    "basil": 2,
    "oregano": 2,
    "dill": 2,
    "bayLemons": 2,
    "saffron": 2,
    "cumin": 2,
    "chiliPowder": 2,
    "garlicPowder": 2,
    "onionPowder": 2,
    "blackPepper": 2,
    "cornstarch": 2,
    "cornflour": 2,
    "gratedCheese": 2,
    "cannedTuna": 2,
    "cannedChickpeas": 2,
    "cannedTomatoes": 2,
    "cannedDicedTomatoes": 2,
    "cannedBlackBeans": 2,
    "cannedCorn": 2,
    "cannedGreenChilies": 2,
    "cannedHaricotBeans": 2,
    "cannedKidneyBeans": 2,
    "cannedLentils": 2,
    "cannedMushrooms": 2,
    "cannedSweetPeppers": 2,
    "cannedTomatoPuree": 2,
    "cannedWhiteBeans": 2,
    "cannedZucchini": 2,
    "cannedPumpkin": 2,
    "greenLentils": 2,
    "chickpeas": 2,
    "greenChilies": 2,
    "haricotBeans": 2,
    "kidneyBeans": 2,
    "lentils": 2,
    "mushrooms": 2,
    "sweetPeppers": 2,
    "yellowPeppers": 2,
    "zucchinis": 2,
    "pumpkin": 2,
    "squash": 2,
    "cannelliniBeans": 2,
    "greengages": 2,
    "kidneyBeans": 2,
    "lentils": 2,
    "mungBeans": 2,
    "pintoBeans": 2,
    "whiteBeans": 2,
    "arugula": 2,
    "basil": 2,
    "cilantro": 2,
    "cucumber": 2,
    "endive": 2,
    "kale": 2,
    "mint": 2,
    "parsley": 2,
    "peppers": 2,
    "rosemary": 2,
    "sage": 2,
    "scallions": 2,
    "sorrel": 2,
    "spinach": 2,
    "springOnions": 2,
    "thyme": 2,
    "waterChestnuts": 2,
    "zucchini": 2
};

/**
 * @typedef {{
 *  name: string,
 *  ingredients: {[key: string]: number},
 *  instructions: string[]
 * }} Recipie
 */



/**
 * @type {Recipie[]}
 */




const recipies = [
    // ... previous recipes
    {
      name: "Lentil Soup",
      ingredients: { greenLentils: 1, carrots: 1, celery: 1, onion: 1, vegetableBroth: 4, spices: ["cumin", "coriander", "paprika"] },
      instructions: [
        "Sauté onion, carrot, and celery",
        "Add lentils, spices, and broth",
        "Simmer until lentils are tender",
        "Puree or leave chunky"
      ],
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      uploaderId: 2

    },
    {
      name: "Sushi Rolls",
      ingredients: { sushiRice: 2, nori: 2, avocado: 1, cucumber: 1, crabStick: 1, soySauce: 1, wasabi: 1 },
      instructions: [
        "Prepare sushi rice",
        "Lay nori sheet",
        "Add rice, avocado, cucumber, and crab stick",
        "Roll tightly",
        "Cut into pieces",
        "Serve with soy sauce and wasabi"
      ],
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      uploaderId: 3
      
    },
    {
      name: "Beef Bourguignon",
      ingredients: { beefChuck: 2, bacon: 1, carrots: 1, onion: 1, mushrooms: 1, redWine: 1, beefBroth: 1 },
      instructions: [
        "Sear beef and bacon",
        "Sauté carrots, onion, and mushrooms",
        "Deglaze pan with red wine",
        "Combine beef, vegetables, and broth",
        "Simmer for several hours"
      ],
      image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      uploaderId: 4
    },
    {
      name: "Chicken Tikka Masala",
      ingredients: { chickenBreast: 1, yogurt: 1, spices: ["cumin", "coriander", "turmeric", "garamMasala"], tomatoes: 1, cream: 1 },
      instructions: [
        "Marinate chicken in yogurt and spices",
        "Grill or bake chicken",
        "Make a tomato sauce with spices",
        "Combine chicken and sauce",
        "Add cream"
      ],
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1071&q=80"
    },
    {
      name: "Vegetable Stir Fry",
      ingredients: { mixedVegetables: 2, tofu: 1, soySauce: 1, ginger: 1, garlic: 2, sesameOil: 1 },
      instructions: [
        "Press and cube tofu",
        "Chop vegetables",
        "Stir fry tofu until golden",
        "Add vegetables and stir fry",
        "Add soy sauce, ginger, and garlic",
        "Drizzle with sesame oil"
      ],
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Chocolate Chip Cookies",
      ingredients: { flour: 2, butter: 1, sugar: 1, brownSugar: 1, eggs: 2, vanillaExtract: 1, chocolateChips: 2 },
      instructions: [
        "Cream butter and sugars",
        "Beat in eggs and vanilla",
        "Mix in flour",
        "Fold in chocolate chips",
        "Drop spoonfuls onto baking sheet",
        "Bake until golden brown"
      ],
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    },
    {
      name: "Greek Salad",
      ingredients: { cucumber: 1, tomatoes: 2, redOnion: 1, feta: 1, olives: 1, oliveoOil: 1, lemon: 1 },
      instructions: [
        "Chop cucumber, tomatoes, and red onion",
        "Cube feta cheese",
        "Mix vegetables and feta in a bowl",
        "Add olives",
        "Drizzle with olive oil and lemon juice",
        "Toss and serve"
      ],
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      uploaderId: 3
    },
    {
      name: "Mushroom Risotto",
      ingredients: { arborioRice: 1.5, mushrooms: 2, onion: 1, garlic: 2, whitewine: 1, chickenbroth: 4, parmesan: 1 },
      instructions: [
        "Sauté mushrooms, set aside",
        "Sauté onion and garlic",
        "Add rice and toast",
        "Add wine and stir until absorbed",
        "Gradually add broth, stirring constantly",
        "Stir in mushrooms and parmesan"
      ],
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      uploaderId: 4
    },
        {
          name: "Lentil Soup",
          ingredients: { greenLentils: 1, carrots: 1, celery: 1, onion: 1, vegetableBroth: 4, spices: ["cumin", "coriander", "paprika"] },
          instructions: [
            "Sauté onion, carrot, and celery",
            "Add lentils, spices, and broth",
            "Simmer until lentils are tender",
            "Puree or leave chunky"
          ],
          image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
          uploaderId: 5
        },
        {
          name: "Sushi Rolls",
          ingredients: { sushiRice: 2, nori: 2, avocado: 1, cucumber: 1, crabStick: 1, soySauce: 1, wasabi: 1 },
          instructions: [
            "Prepare sushi rice",
            "Lay nori sheet",
            "Add rice, avocado, cucumber, and crab stick",
            "Roll tightly",
            "Cut into pieces",
            "Serve with soy sauce and wasabi"
          ],
          image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          uploaderId: 6
        },
        {
          name: "Beef Bourguignon",
          ingredients: { beefChuck: 2, bacon: 1, carrots: 1, onion: 1, mushrooms: 1, redWine: 1, beefBroth: 1 },
          instructions: [
            "Sear beef and bacon",
            "Sauté carrots, onion, and mushrooms",
            "Deglaze pan with red wine",
            "Combine beef, vegetables, and broth",
            "Simmer for several hours"
          ],
          image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          uploaderId: 7
        },
        {
          name: "Chicken Tikka Masala",
          ingredients: { chickenBreast: 1, yogurt: 1, spices: ["cumin", "coriander", "turmeric", "garamMasala"], tomatoes: 1, cream: 1 },
          instructions: [
            "Marinate chicken in yogurt and spices",
            "Grill or bake chicken",
            "Make a tomato sauce with spices",
            "Combine chicken and sauce",
            "Add cream"
          ],
          image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1071&q=80",
          uploaderId: 8
        },
        {
          name: "Vegetable Stir Fry",
          ingredients: { mixedVegetables: 2, tofu: 1, soySauce: 1, ginger: 1, garlic: 2, sesameOil: 1 },
          instructions: [
            "Press and cube tofu",
            "Chop vegetables",
            "Stir fry tofu until golden",
            "Add vegetables and stir fry",
            "Add soy sauce, ginger, and garlic",
            "Drizzle with sesame oil"
          ],
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          uploaderId: 9
        },
        {
          name: "Chocolate Chip Cookies",
          ingredients: { flour: 2, butter: 1, sugar: 1, brownSugar: 1, eggs: 2, vanillaExtract: 1, chocolateChips: 2 },
          instructions: [
            "Cream butter and sugars",
            "Beat in eggs and vanilla",
            "Mix in flour",
            "Fold in chocolate chips",
            "Drop spoonfuls onto baking sheet",
            "Bake until golden brown"
          ],
          image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
          uploaderId: 10
        },
        {
          name: "Greek Salad",
          ingredients: { cucumber: 1, tomatoes: 2, redOnion: 1, feta: 1, olives: 1, oliveOil: 1, lemon: 1 },
          instructions: [
            "Chop cucumber, tomatoes, and red onion",
            "Cube feta cheese",
            "Mix vegetables and feta in a bowl",
            "Add olives",
            "Drizzle with olive oil and lemon juice",
            "Toss and serve"
          ],
          image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
          uploaderId: 11
        },
        {
          name: "Mushroom Risotto",
          ingredients: { arborioRice: 1.5, mushrooms: 2, onion: 1, garlic: 2, whitewine: 1, chickenbroth: 4, parmesan: 1 },
          instructions: [
            "Sauté mushrooms, set aside",
            "Sauté onion and garlic",
            "Add rice and toast",
            "Add wine and stir until absorbed",
            "Gradually add broth, stirring constantly",
            "Stir in mushrooms and parmesan"
          ],
          image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          uploaderId: 12
        },
        {
          name: "Pad Thai",
          ingredients: { ricenoodles: 8, shrimp: 1, tofu: 1, eggs: 2, beansprouts: 2, peanuts: 0.5, limeWedges: 2, fishSauce: 2, tamarindPaste: 2 },
          instructions: [
            "Soak rice noodles in hot water",
            "Stir-fry shrimp and tofu",
            "Push to side and scramble eggs",
            "Add drained noodles and sauce",
            "Toss with bean sprouts and peanuts",
            "Serve with lime wedges"
          ],
          image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          uploaderId: 13
        },
        {
          name: "Caprese Salad",
          ingredients: { tomatoes: 3, freshMozzarella: 1, freshBasil: 1, balsamicGlaze: 2, oliveOil: 2, salt: 1, blackPepper: 1 },
          instructions: [
            "Slice tomatoes and mozzarella",
            "Arrange alternating slices on a plate",
            "Tuck basil leaves between slices",
            "Drizzle with olive oil and balsamic glaze",
            "Season with salt and pepper"
          ],
          image: "https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          uploaderId: 14
        },
        {
          name: "Beef Tacos",
          ingredients: { groundBeef: 1, tacoseasoning: 1, tortillas: 8, lettuce: 1, tomatoes: 2, cheese: 1, sourCream: 0.5, salsa: 0.5 },
          instructions: [
            "Brown ground beef",
            "Add taco seasoning and water",
            "Warm tortillas",
            "Assemble tacos with beef and toppings",
            "Serve with sour cream and salsa"
          ],
          image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          uploaderId: 15
        },
        {
          name: "Banana Bread",
          ingredients: { ripebananas: 3, flour: 2, butter: 0.5, sugar: 0.75, egg: 1, bakingsoda: 1, salt: 0.25, vanilla: 1 },
          instructions: [
            "Mash bananas in a large bowl",
            "Cream butter and sugar, then add egg",
            "Mix in mashed bananas and vanilla",
            "Fold in flour, baking soda, and salt",
            "Pour into greased loaf pan",
            "Bake until a toothpick comes out clean"
          ],
          image: "https://images.unsplash.com/photo-1605286978633-2dec93ff88a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          uploaderId: 16
        },

          
            {
              name: "Quinoa Stuffed Bell Peppers",
              ingredients: { bellPeppers: 4, quinoa: 1, blackBeans: 1, corn: 1, onion: 1, tomatoSauce: 1, cheese: 1, cumin: 1, chiliPowder: 1 },
              instructions: [
                "Cook quinoa according to package instructions",
                "Mix quinoa with beans, corn, and spices",
                "Cut bell peppers in half and remove seeds",
                "Fill peppers with quinoa mixture",
                "Top with tomato sauce and cheese",
                "Bake until peppers are tender and cheese is melted"
              ],
              image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
            },
            {
              name: "Shakshuka",
              ingredients: { eggs: 6, tomatoSauce: 2, onion: 1, bellPepper: 1, garlic: 3, cumin: 1, paprika: 1, cayennePepper: 0.25, feta: 0.5 },
              instructions: [
                "Sauté onion and bell pepper",
                "Add garlic and spices",
                "Pour in tomato sauce and simmer",
                "Create wells in the sauce and crack eggs into them",
                "Cover and cook until eggs are set",
                "Sprinkle with feta cheese"
              ],
              image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            },
            {
              name: "Butternut Squash Soup",
              ingredients: { butternutSquash: 1, onion: 1, carrots: 2, apples: 1, vegetableBroth: 4, creamyCheese: 0.5, cinnamon: 0.5, nutmeg: 0.25 },
              instructions: [
                "Roast butternut squash",
                "Sauté onion, carrots, and apples",
                "Add roasted squash and broth",
                "Simmer until vegetables are tender",
                "Blend until smooth",
                "Stir in cream cheese and spices"
              ],
              image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            },
            {
              name: "Mango Sticky Rice",
              ingredients: { glutinousRice: 1, coconutMilk: 1, sugar: 0.5, salt: 0.25, mangoes: 2, sesameSeeds: 2 },
              instructions: [
                "Soak glutinous rice for 4 hours",
                "Steam rice until tender",
                "Heat coconut milk with sugar and salt",
                "Pour over rice and let absorb",
                "Slice mangoes",
                "Serve rice with mango slices and sprinkle with sesame seeds"
              ],
              image: "https://images.unsplash.com/photo-1511910849309-0dffb8785146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1619&q=80"
            },



    // ... previous recipes
    {
      name: "Lentil Soup",
      ingredients: { greenLentils: 1, carrots: 1, celery: 1, onion: 1, vegetableBroth: 4, spices: "cumin, coriander, paprika" },
      instructions: [
        "Sauté onion, carrot, and celery",
        "Add lentils, spices, and broth",
        "Simmer until lentils are tender",
        "Puree or leave chunky"
      ],
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
    {
      name: "Sushi Rolls",
      ingredients: { sushiRice: 2, nori: 2, avocado: 1, cucumber: 1, crabStick: 1, soySauce: 1, wasabi: 1 },
      instructions: [
        "Prepare sushi rice",
        "Lay nori sheet",
        "Add rice, avocado, cucumber, and crab stick",
        "Roll tightly",
        "Cut into pieces",
        "Serve with soy sauce and wasabi"
      ],
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Beef Bourguignon",
      ingredients: { beefChuck: 2, bacon: 1, carrots: 1, onion: 1, mushrooms: 1, redWine: 1, beefBroth: 1 },
      instructions: [
        "Sear beef and bacon",
        "Sauté carrots, onion, and mushrooms",
        "Deglaze pan with red wine",
        "Combine beef, vegetables, and broth",
        "Simmer for several hours"
      ],
      image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Chicken Tikka Masala",
      ingredients: { chickenBreast: 1, yogurt: 1, spices: "cumin coriander turmeric, garamMasala", tomatoes: 1, cream: 1 },
      instructions: [
        "Marinate chicken in yogurt and spices",
        "Grill or bake chicken",
        "Make a tomato sauce with spices",
        "Combine chicken and sauce",
        "Add cream"
      ],
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1071&q=80"
    },
    {
      name: "Vegetable Stir Fry",
      ingredients: { mixedVegetables: 2, tofu: 1, soySauce: 1, ginger: 1, garlic: 2, sesameOil: 1 },
      instructions: [
        "Press and cube tofu",
        "Chop vegetables",
        "Stir fry tofu until golden",
        "Add vegetables and stir fry",
        "Add soy sauce, ginger, and garlic",
        "Drizzle with sesame oil"
      ],
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Chocolate Chip Cookies",
      ingredients: { flour: 2, butter: 1, sugar: 1, brownSugar: 1, eggs: 2, vanillaExtract: 1, chocolateChips: 2 },
      instructions: [
        "Cream butter and sugars",
        "Beat in eggs and vanilla",
        "Mix in flour",
        "Fold in chocolate chips",
        "Drop spoonfuls onto baking sheet",
        "Bake until golden brown"
      ],
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    },
    {
      name: "Greek Salad",
      ingredients: { cucumber: 1, tomatoes: 2, redOnion: 1, feta: 1, olives: 1, oliveoOil: 1, lemon: 1 },
      instructions: [
        "Chop cucumber, tomatoes, and red onion",
        "Cube feta cheese",
        "Mix vegetables and feta in a bowl",
        "Add olives",
        "Drizzle with olive oil and lemon juice",
        "Toss and serve"
      ],
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      name: "Mushroom Risotto",
      ingredients: { arborioRice: 1.5, mushrooms: 2, onion: 1, garlic: 2, whitewine: 1, chickenbroth: 4, parmesan: 1 },
      instructions: [
        "Sauté mushrooms, set aside",
        "Sauté onion and garlic",
        "Add rice and toast",
        "Add wine and stir until absorbed",
        "Gradually add broth, stirring constantly",
        "Stir in mushrooms and parmesan"
      ],
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
        {
          name: "Lentil Soup",
          ingredients: { greenLentils: 1, carrots: 1, celery: 1, onion: 1, vegetableBroth: 4, spices: ["cumin", "coriander", "paprika"] },
          instructions: [
            "Sauté onion, carrot, and celery",
            "Add lentils, spices, and broth",
            "Simmer until lentils are tender",
            "Puree or leave chunky"
          ],
          image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        },
        {
          name: "Sushi Rolls",
          ingredients: { sushiRice: 2, nori: 2, avocado: 1, cucumber: 1, crabStick: 1, soySauce: 1, wasabi: 1 },
          instructions: [
            "Prepare sushi rice",
            "Lay nori sheet",
            "Add rice, avocado, cucumber, and crab stick",
            "Roll tightly",
            "Cut into pieces",
            "Serve with soy sauce and wasabi"
          ],
          image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          name: "Beef Bourguignon",
          ingredients: { beefChuck: 2, bacon: 1, carrots: 1, onion: 1, mushrooms: 1, redWine: 1, beefBroth: 1 },
          instructions: [
            "Sear beef and bacon",
            "Sauté carrots, onion, and mushrooms",
            "Deglaze pan with red wine",
            "Combine beef, vegetables, and broth",
            "Simmer for several hours"
          ],
          image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          name: "Chicken Tikka Masala",
          ingredients: { chickenBreast: 1, yogurt: 1, spices: ["cumin", "coriander", "turmeric", "garamMasala"], tomatoes: 1, cream: 1 },
          instructions: [
            "Marinate chicken in yogurt and spices",
            "Grill or bake chicken",
            "Make a tomato sauce with spices",
            "Combine chicken and sauce",
            "Add cream"
          ],
          image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1071&q=80"
        },
        {
          name: "Vegetable Stir Fry",
          ingredients: { mixedVegetables: 2, tofu: 1, soySauce: 1, ginger: 1, garlic: 2, sesameOil: 1 },
          instructions: [
            "Press and cube tofu",
            "Chop vegetables",
            "Stir fry tofu until golden",
            "Add vegetables and stir fry",
            "Add soy sauce, ginger, and garlic",
            "Drizzle with sesame oil"
          ],
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          name: "Chocolate Chip Cookies",
          ingredients: { flour: 2, butter: 1, sugar: 1, brownSugar: 1, eggs: 2, vanillaExtract: 1, chocolateChips: 2 },
          instructions: [
            "Cream butter and sugars",
            "Beat in eggs and vanilla",
            "Mix in flour",
            "Fold in chocolate chips",
            "Drop spoonfuls onto baking sheet",
            "Bake until golden brown"
          ],
          image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
        },
        {
          name: "Greek Salad",
          ingredients: { cucumber: 1, tomatoes: 2, redOnion: 1, feta: 1, olives: 1, oliveOil: 1, lemon: 1 },
          instructions: [
            "Chop cucumber, tomatoes, and red onion",
            "Cube feta cheese",
            "Mix vegetables and feta in a bowl",
            "Add olives",
            "Drizzle with olive oil and lemon juice",
            "Toss and serve"
          ],
          image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        },
        {
          name: "Mushroom Risotto",
          ingredients: { arborioRice: 1.5, mushrooms: 2, onion: 1, garlic: 2, whitewine: 1, chickenbroth: 4, parmesan: 1 },
          instructions: [
            "Sauté mushrooms, set aside",
            "Sauté onion and garlic",
            "Add rice and toast",
            "Add wine and stir until absorbed",
            "Gradually add broth, stirring constantly",
            "Stir in mushrooms and parmesan"
          ],
          image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          name: "Pad Thai",
          ingredients: { ricenoodles: 8, shrimp: 1, tofu: 1, eggs: 2, beansprouts: 2, peanuts: 0.5, limeWedges: 2, fishSauce: 2, tamarindPaste: 2 },
          instructions: [
            "Soak rice noodles in hot water",
            "Stir-fry shrimp and tofu",
            "Push to side and scramble eggs",
            "Add drained noodles and sauce",
            "Toss with bean sprouts and peanuts",
            "Serve with lime wedges"
          ],
          image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          name: "Caprese Salad",
          ingredients: { tomatoes: 3, freshMozzarella: 1, freshBasil: 1, balsamicGlaze: 2, oliveOil: 2, salt: 1, blackPepper: 1 },
          instructions: [
            "Slice tomatoes and mozzarella",
            "Arrange alternating slices on a plate",
            "Tuck basil leaves between slices",
            "Drizzle with olive oil and balsamic glaze",
            "Season with salt and pepper"
          ],
          image: "https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          name: "Beef Tacos",
          ingredients: { groundBeef: 1, tacoseasoning: 1, tortillas: 8, lettuce: 1, tomatoes: 2, cheese: 1, sourCream: 0.5, salsa: 0.5 },
          instructions: [
            "Brown ground beef",
            "Add taco seasoning and water",
            "Warm tortillas",
            "Assemble tacos with beef and toppings",
            "Serve with sour cream and salsa"
          ],
          image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
          name: "Banana Bread",
          ingredients: { ripebananas: 3, flour: 2, butter: 0.5, sugar: 0.75, egg: 1, bakingsoda: 1, salt: 0.25, vanilla: 1 },
          instructions: [
            "Mash bananas in a large bowl",
            "Cream butter and sugar, then add egg",
            "Mix in mashed bananas and vanilla",
            "Fold in flour, baking soda, and salt",
            "Pour into greased loaf pan",
            "Bake until a toothpick comes out clean"
          ],
          image: "https://images.unsplash.com/photo-1605286978633-2dec93ff88a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },

          
            {
              name: "Quinoa Stuffed Bell Peppers",
              ingredients: { bellPeppers: 4, quinoa: 1, blackBeans: 1, corn: 1, onion: 1, tomatoSauce: 1, cheese: 1, cumin: 1, chiliPowder: 1 },
              instructions: [
                "Cook quinoa according to package instructions",
                "Mix quinoa with beans, corn, and spices",
                "Cut bell peppers in half and remove seeds",
                "Fill peppers with quinoa mixture",
                "Top with tomato sauce and cheese",
                "Bake until peppers are tender and cheese is melted"
              ],
              image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
            },
            {
              name: "Shakshuka",
              ingredients: { eggs: 6, tomatoSauce: 2, onion: 1, bellPepper: 1, garlic: 3, cumin: 1, paprika: 1, cayennePepper: 0.25, feta: 0.5 },
              instructions: [
                "Sauté onion and bell pepper",
                "Add garlic and spices",
                "Pour in tomato sauce and simmer",
                "Create wells in the sauce and crack eggs into them",
                "Cover and cook until eggs are set",
                "Sprinkle with feta cheese"
              ],
              image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Butternut Squash Soup",
              ingredients: { butternutSquash: 1, onion: 1, carrots: 2, apples: 1, vegetableBroth: 4, creamyCheese: 0.5, cinnamon: 0.5, nutmeg: 0.25 },
              instructions: [
                "Roast butternut squash",
                "Sauté onion, carrots, and apples",
                "Add roasted squash and broth",
                "Simmer until vegetables are tender",
                "Blend until smooth",
                "Stir in cream cheese and spices"
              ],
              image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            },
            {
              name: "Mango Sticky Rice",
              ingredients: { glutinousRice: 1, coconutMilk: 1, sugar: 0.5, salt: 0.25, mangoes: 2, sesameSeeds: 2 },
              instructions: [
                "Soak glutinous rice for 4 hours",
                "Steam rice until tender",
                "Heat coconut milk with sugar and salt",
                "Pour over rice and let absorb",
                "Slice mangoes",
                "Serve rice with mango slices and sprinkle with sesame seeds"
              ],
              image: "https://images.unsplash.com/photo-1511910849309-0dffb8785146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1619&q=80"
            },
            {
              name: "Chicken and Rice Casserole",
              ingredients: { chickenBreast: 2, rice: 1, onion: 1, carrots: 1, celery: 1, creamyCheese: 0.5, chickenBroth: 4, driedThyme: 0.5, sage: 0.5, oliveOil: 0.5 },
              instructions: [
                "Brown chicken breast",
                "Stir in onion, carrots, and celery",
                "Add rice and chicken broth",
                "Simmer until rice is tender",
                "Stir in cream cheese and spices",
                "Cover and reheat until bubbly"
              ],
              image: "https://images.unsplash.com/photo-1599888039030-343081209393?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            },
            {
              name: "Pumpkin Chili",
              ingredients: { pumpkinPuree: 1, groundBeef: 1, onion: 1, bellPepper: 1, tomatoes: 2, chickenBroth: 2, beans: 1, cumin: 0.5, chiliPowder: 0.5, cayenne: 0.5 },
              instructions: [
                "Saute onion and bell pepper",
                "Add ground beef and spices",
                "Pour in tomatoes and simmer",
                "Add pumpkin puree, chicken broth, and beans",
                "Bring to a boil and reduce heat",
                "Simmer until thickened"
              ],
              image: "https://images.unsplash.com/photo-1594784687819-4a1928979938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Pasta with Tomato Sauce",
              ingredients: { pasta: 2, tomatoes: 2, garlic: 1, oliveOil: 0.5, basil: 0.5 },
              instructions: [
                "Brown garlic in olive oil",
                "Add tomatoes and cook until sauce forms",
                "Cook pasta until al dente",
                "Combine pasta and sauce"
              ],
              image: "https://images.unsplash.com/photo-1554835695-576c3298da76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Roasted Vegetable Soup",
              ingredients: { onion: 1, carrots: 1, celery: 1, garlic: 1, aromaticSpices: 1, vegetableBroth: 4, potatoes: 1, creamyCheese: 0.5, butter: 0.5 },
              instructions: [
                "Roast onion, carrots, and celery in olive oil",
                "Add garlic and spices",
                "Add vegetable broth and simmer",
                "Purée with potatoes and creamy cheese",
                "Stir in butter and serve"
              ],
              image: "https://images.unsplash.com/photo-1515984684851-4c50b893454b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Spicy Chicken Tacos",
              ingredients: { groundBeef: 1, tacoseasoning: 1, tortillas: 8, tomatoes: 2, cilantro: 0.5, jalapenos: 2 },
              instructions: [
                "Brown ground beef",
                "Add taco seasoning and cook",
                "Add tomatoes and cook until thickened",
                "Warm tortillas",
                "Assemble tacos with beef and toppings",
                "Top with cilantro and jalapenos"
              ],
              image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Green Bean Casserole",
              ingredients: { greenBeans: 1, creamyCheese: 0.5, sourCream: 0.5, onions: 1, celery: 1, chickenBroth: 4, breadcrumbs: 1, bacon: 1 },
              instructions: [
                "Saute onion and celery in bacon grease",
                "Add green beans and cook until tender",
                "Stir in creamy cheese and breadcrumbs",
                "Pour in chicken broth and simmer",
                "Top with sour cream"
              ],
              image: "https://images.unsplash.com/photo-1589971772598-f5dd4533039c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Chicken and Dumplings",
              ingredients: { chickenBreast: 2, flour: 0.5, eggs: 2, butter: 0.5, chickenBroth: 2, dumplingSkin: 2 },
              instructions: [
                "Cut chicken breast into pieces",
                "Fry in butter until browned",
                "Add flour to bind",
                "Pour in chicken broth and cook until meat is tender",
                "Wrap dumpling skin around pieces of chicken and cook in broth",
                "Serve with remaining butter"
              ],
              image: "https://images.unsplash.com/photo-1567818992757-7796379363f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Chicken and Potatoes",
              ingredients: { chickenBreast: 2, potatoes: 2, butter: 0.5, chickenBroth: 2, salt: 0.25, pepper: 0.25 },
              instructions: [
                "Brown chicken breast in butter",
                "Add chicken broth and simmer",
                "Bake potatoes until tender",
                "Assemble meal by layering potatoes, chicken, and toppings"
              ],
              image: "https://images.unsplash.com/photo-1525169715775-1b0434899483?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Pizza",
              ingredients: { flour: 0.5, pizzaSauce: 0.5, cheese: 0.5, pepperoni: 1, sausage: 0.5, mushrooms: 1, onions: 1, peppers: 1 },
              instructions: [
                "Combine flour and pizza sauce to make crust",
                "Bake crust in oven",
                "Spread cheese on top of crust",
                "Add toppings and bake until cheese is melted",
                "Serve with marinara sauce"
              ],
              image: "https://images.unsplash.com/photo-1558655865-2ee94795e39c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Mac and Cheese",
              ingredients: { macaroni: 1, cheese: 1, milk: 0.5, butter: 0.5, macNcheese: 0.5, elbowMac: 0.5 },
              instructions: [
                "Cook macaroni in boiling water",
                "Add milk, butter, and cheese to pot",
                "Stir over medium heat until cheese is melted",
                "Transfer to baking dish",
                "Bake until cheese is golden brown"
              ],
              image: "https://images.unsplash.com/photo-1534528040947-9c86370a1503?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Chicken Tikka Masala",
              ingredients: { chickenBreast: 2, tomatoes: 3, onions: 1, garlic: 5, ginger: 1, chickenBroth: 2, yogurt: 1, cumin: 1, coriander: 1, turmeric: 1, curryPowder: 1, redChiliFlakes: 0.5 },
              instructions: [
                "Mix spices in a marinade",
                "Marinate chicken breast in marinade",
                "Skewer chicken and cook in tikka masala sauce",
                "Serve with basmati rice and naan"
              ],
              image: "https://images.unsplash.com/photo-1570237801463-6b5285592710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Chicken Parmesan",
              ingredients: { chickenBreast: 2, breadcrumbs: 0.5, cheese: 1, oliveOil: 0.5, butter: 0.5, breadcrumbs: 0.5, parmesan: 1, chickenBroth: 2 },
              instructions: [
                "Brown chicken breast in butter",
                "Add breadcrumbs and cook until crispy",
                "Add olive oil and chicken broth, stir to combine",
                "Transfer to baking dish",
                "Top with cheese and bake until cheese is melted"
              ],
              image: "https://images.unsplash.com/photo-1550065875-c40679383501?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Creamy Tomato Soup",
              ingredients: { tomatoes: 4, onions: 1, garlic: 5, chickenBroth: 2, cream: 1, butter: 0.5, salt: 0.25, pepper: 0.25 },
              instructions: [
                "Saute onion and garlic in butter",
                "Add tomatoes and cook until thickened",
                "Stir in chicken broth and simmer",
                "Stir in cream and season with salt and pepper"
              ],
              image: "https://images.unsplash.com/photo-1589971772598-f5dd4533039c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Spaghetti Carbonara",
              ingredients: { spaghetti: 1, bacon: 1, eggs: 2, cheese: 1, cream: 0.5, parmesan: 1, salt: 0.25, pepper: 0.25 },
              instructions: [
                "Cook spaghetti according to package instructions",
                "Brown bacon",
                "Fry bacon in pan until crispy",
                "Add eggs and cook until set",
                "Stir in cheese and cook until melted",
                "Transfer to baking dish",
                "Top with spaghetti and bake until cheese is melted"
              ],
              image: "https://images.unsplash.com/photo-1567818992757-7796379363f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Pasta Primavera",
              ingredients: { spaghetti: 1, cherryTomatoes: 1, garlic: 3, cherryTomatoes: 1, oliveOil: 0.5, basil: 1, oregano: 0.5 },
              instructions: [
                "Cook spaghetti",
                "Saute garlic in olive oil",
                "Add cherry tomatoes, basil, and oregano",
                "Transfer to baking dish",
                "Top with spaghetti and bake until cheese is melted"
              ],
              image: "https://images.unsplash.com/photo-1583856878845-789c2790573a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "One Pot Pasta",
              ingredients: { pasta: 1, groundBeef: 1, tomatoes: 2, onions: 2, garlic: 4, oliveOil: 0.5, chickenBroth: 1, tomatoSauce: 0.5, oregano: 0.5, basil: 0.5 },
              instructions: [
                "Cook pasta according to package instructions",
                "Brown ground beef in olive oil",
                "Add onions and garlic and cook until soft",
                "Add tomatoes and cook until they break down",
                "Add chicken broth and simmer",
                "Add tomato sauce and cook until sauce is thickened",
                "Stir in oregano and basil",
                "Transfer to baking dish",
                "Top with pasta and bake until cheese is melted"
              ],
              image: "https://images.unsplash.com/photo-1604538653259-cd51578c85a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Breakfast Burrito",
              ingredients: { tortillas: 2, scrambledEggs: 2, cheese: 1, cheddar: 1, salsa: 0.5, avocado: 0.5, bellPeppers: 1, onions: 1 },
              instructions: [
                "Warm tortillas",
                "Cook scrambled eggs",
                "Slice cheese and cook until melted",
                "Heat salsa and avocado",
                "Combine eggs, cheese, salsa, and avocado",
                "Transfer to baking dish",
                "Wrap burrito with tortillas and fill with mixture",
                "Bake until cheese is melted"
              ],
              image: "https://images.unsplash.com/photo-1581203386562-915766855a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Tacos",
              ingredients: { groundBeef: 1, tacoSeasoning: 1, tortillas: 8, lettuce: 1, tomatoes: 2, cheese: 1, sourCream: 0.5, salsa: 0.5 },
              instructions: [
                "Brown ground beef",
                "Add taco seasoning and water",
                "Warm tortillas",
                "Assemble tacos with beef and toppings",
                "Serve with sour cream and salsa"
              ],
              image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Banana Bread",
              ingredients: { ripeBananas: 3, flour: 2, butter: 0.5, sugar: 0.75, egg: 1, bakingSoda: 1, salt: 0.25, vanilla: 1 },
              instructions: [
                "Mash bananas in a large bowl",
                "Cream butter and sugar, then add egg",
                "Mix in mashed bananas and vanilla",
                "Fold in flour, baking soda, and salt",
                "Pour into greased loaf pan",
                "Bake until a toothpick comes out clean"
              ],
              image: "https://images.unsplash.com/photo-1605286978633-2dec93ff88a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Spaghetti with Meat Sauce",
              ingredients: { spaghetti: 1, groundBeef: 1, tomatoSauce: 1, onion: 2, garlic: 4, oliveOil: 0.5 },
              instructions: [
                "Cook spaghetti according to package instructions",
                "Brown ground beef in olive oil",
                "Add onions and garlic and cook until soft",
                "Add tomato sauce and simmer",
                "Transfer to baking dish",
                "Top with spaghetti and bake until cheese is melted"
              ],
              image: "https://images.unsplash.com/photo-1530313113406-bd85f959f956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Breakfast Burrito",
              ingredients: { tortillas: 2, scrambledEggs: 2, cheese: 1, cheddar: 1, salsa: 0.5, avocado: 0.5, bellPeppers: 1, onions: 1 },
              instructions: [
                "Warm tortillas",
                "Cook scrambled eggs",
                "Slice cheese and cook until melted",
                "Heat salsa and avocado",
                "Combine eggs, cheese, salsa, and avocado",
                "Transfer to baking dish",
                "Wrap burrito with tortillas and fill with mixture",
                "Bake until cheese is melted"
              ],
              image: "https://images.unsplash.com/photo-1581203386562-915766855a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Chicken Tacos",
              ingredients: { groundChicken: 1, tacoSeasoning: 1, tortillas: 8, lettuce: 1, tomatoes: 2, cheese: 1, sourCream: 0.5, salsa: 0.5 },
              instructions: [
                "Brown ground chicken",
                "Add taco seasoning and water",
                "Warm tortillas",
                "Assemble tacos with chicken and toppings",
                "Serve with sour cream and salsa"
              ],
              image: "https://images.unsplash.com/photo-1601464804556-3863a455c696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Chocolate Chip Cookies",
              ingredients: { flour: 2, butter: 1, sugar: 1, brownSugar: 1, eggs: 2, vanillaExtract: 1, chocolateChips: 2 },
              instructions: [
                "Cream butter and sugars",
                "Beat in eggs and vanilla",
                "Mix in flour",
                "Fold in chocolate chips",
                "Drop spoonfuls onto baking sheet",
                "Bake until golden brown"
              ],
              image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            },
            {
              name: "Garlic Bread",
              ingredients: { bread: 1, butter: 1, garlic: 2, cheese: 1 },
              instructions: [
                "Melt butter in pan",
                "Add garlic and cook until fragrant",
                "Add bread and cook until golden",
                "Slice in half and spread with cheese"
              ],
              image: "https://images.unsplash.com/photo-1591559173309-61b659673596?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Spaghetti Carbonara",
              ingredients: { spaghetti: 1, bacon: 2, eggs: 2, parmesanCheese: 1, blackPepper: 1 },
              instructions: [
                "Cook spaghetti according to package instructions",
                "Crack eggs into a pan and cook until almost set",
                "Add bacon and cook until crispy",
                "Add parmesan cheese and black pepper",
                "Combine eggs and bacon in a separate bowl",
                "Pour over spaghetti and toss until combined"
              ],
              image: "https://images.unsplash.com/photo-1588681058105-c95455c3758c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Meatloaf",
              ingredients: { groundMeat: 1, egg: 2, breadCrumbs: 1, ketchup: 1, brownSugar: 1 },
              instructions: [
                "Mix ground meat, egg, bread crumbs, ketchup, and brown sugar",
                "Form into loaves",
                "Bake in oven until internal temperature reaches 160 degrees"
              ],
              image: "https://images.unsplash.com/photo-1601486881488-2588afa6359b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Breakfast Burrito",
              ingredients: { tortilla: 1, scrambledEggs: 1, cheese: 1, blackPepper: 1 },
              instructions: [
                "Warm tortilla",
                "Scramble eggs",
                "Sprinkle cheese and black pepper",
                "Wrap eggs and cheese in tortilla"
              ],
              image: "https://images.unsplash.com/photo-1591559173309-61b659673596?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Chicken Parmesan",
              ingredients: { groundChicken: 1, breadCrumbs: 1, oliveOil: 1, parmesanCheese: 1, blackPepper: 1 },
              instructions: [
                "Brown ground chicken in olive oil",
                "Dredge chicken in bread crumbs",
                "Fry chicken until golden",
                "Sprinkle parmesan cheese and black pepper",
                "Bake in oven until cheese is melted"
              ],
              image: "https://images.unsplash.com/photo-1459851302919-529cb75a5534?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Creamy Tomato Soup",
              ingredients: { cannedTomatoes: 1, onion: 1, garlic: 2, carrots: 2, celery: 1, chickenBroth: 2 },
              instructions: [
                "Boil onion, garlic, carrots, celery, and chicken broth",
                "Add canned tomatoes and heat until thickened"
              ],
              image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Chocolate Chip Cookies",
              ingredients: { flour: 2, butter: 1, sugar: 1, brownSugar: 1, eggs: 2, vanillaExtract: 1, chocolateChips: 2 },
              instructions: [
                "Cream butter and sugars",
                "Beat in eggs and vanilla",
                "Mix in flour",
                "Fold in chocolate chips",
                "Drop spoonfuls onto baking sheet",
                "Bake until golden brown"
              ],
              image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            },
            {
              name: "Pizza",
              ingredients: { pizzaDough: 1, tomatoSauce: 1, cheese: 1, pepperoni: 1 },
              instructions: [
                "Roll out dough and spread with tomato sauce",
                "Add cheese and pepperoni",
                "Bake in oven until crispy"
              ],
              image: "https://images.unsplash.com/photo-1581203386562-915766855a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Salmon with Lemon",
              ingredients: { salmon: 2, lemon: 2, oliveOil: 1, garlic: 1, parsley: 1 },
              instructions: [
                "Season salmon with salt and pepper",
                "Heat olive oil in pan",
                "Add salmon and cook until done",
                "Squeeze lemon juice and mix with garlic and parsley"
              ],
              image: "https://images.unsplash.com/photo-1517424498465-5f79ea37b9f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Shrimp and Vegetable Stir Fry",
              ingredients: { shrimp: 2, mixedVegetables: 2, soySauce: 1, garlic: 2, ginger: 1, sesameOil: 1 },
              instructions: [
                "Heat sesame oil in pan",
                "Add ginger and garlic",
                "Add shrimp and cook until pink",
                "Add mixed vegetables and stir fry until cooked through"
              ],
              image: "https://images.unsplash.com/photo-1521359265888-84bc3ca7c8d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Pasta with Tomato Sauce",
              ingredients: { spaghetti: 1, tomatoSauce: 2, garlic: 2, onion: 1, basil: 2 },
              instructions: [
                "Boil spaghetti",
                "Heat olive oil in pan",
                "Add garlic and onions",
                "Add tomato sauce and heat until thickened",
                "Add basil and mix into spaghetti"
              ],
              image: "https://images.unsplash.com/photo-1519744325509-578545aa511b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Chicken and Rice",
              ingredients: { chickenBreast: 2, whiteRice: 2, butter: 1, onion: 1, garlic: 1 },
              instructions: [
                "Heat butter in pan",
                "Add onion and garlic",
                "Add chicken breast and cook until cooked through",
                "Add white rice and heat until cooked through"
              ],
              image: "https://images.unsplash.com/photo-1581203386562-915766855a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
              name: "Spaghetti Carbonara",
              ingredients: { spaghetti: 1, bacon: 2, eggs: 2, parmesanCheese: 2, blackPepper: 1 },
              instructions: [
                "Boil spaghetti",
                "Heat bacon in pan",
                "Add eggs and scramble until cooked through",
                "Add parmesan cheese and black pepper"
              ],
              image: "https://images.unsplash.com/photo-1517424498465-5f79ea37b9f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
        ];