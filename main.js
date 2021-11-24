var veganCheck = false;

var recipeArray = [
  //FIRST ITEM IN THE ARRAY (0), AN OBJECT
  {
    recipeName: "Pasta Bolognese",
    vegan: false,
    ingredients: ["yellowonion", "mincedmeat", "tomatoes", "carrots", "milk"],
    link: "https://www.arla.se/recept/klassisk-bolognese/",
    img: "imgs/pasta_bolognese_2.jpeg",
    show: false,
  },
  //SECOND ITEM IN THE ARRAY (1)
  {
    recipeName: "Roasted potatoes & carrots",
    vegan: true,
    ingredients: ["carrots", "potatoes", "yoghurt"],
    link: "https://www.wellplated.com/roasted-potatoes-and-carrots/",
    img: "imgs/Potatoes-and-Carrots-recipe.jpeg",
    show: false,
  },

  {
    recipeName: "Zucchini lasagna",
    vegan: false,
    ingredients: [
      "zucchini",
      "cottagecheese",
      "yellowonion",
      "carrots",
      "mincedmeat",
    ],
    link: "https://www.arla.se/recept/zucchinilasagne-med-keso-cottage-cheese/",
    img: "imgs/zucchini_lasagna.jpeg",
    show: false,
  },

  {
    recipeName: "Potato leek soup",
    vegan: true,
    ingredients: ["leek", "potatoes", "cream"],
    link: "https://www.onceuponachef.com/recipes/potato-leek-soup.html",
    img: "imgs/Creamy-Leek-and-Potato-Soup-Soupe-Vichyssoise-10.jpg",
    show: false,
  },

  {
    recipeName: "Ratatouille",
    vegan: true,
    ingredients: ["pepper", "zucchini", "eggplant", "tomato", "yellowonion"],
    link: "https://tasty.co/recipe/ratatouille",
    img: "imgs/ratatouille.jpeg",
    show: false,
  },
  {
    recipeName: "Alfredo lasagna",
    vegan: false,
    ingredients: ["chicken", "cream", "broccoli"],
    link: "https://tasty.co/recipe/broccoli-chicken-alfredo-lasagna",
    img: "imgs/chicken_alfredo_broccoli_lasagna_2.jpeg",
    show: false,
  },
  {
    recipeName: "Avocado lime salmon",
    vegan: false,
    ingredients: ["avocado", "salmon", "redonion"],
    link: "https://tasty.co/recipe/avocado-lime-salmon",
    img: "imgs/avocado_lime_salmon.jpeg",
    show: false,
  },
  {
    recipeName: "Bacon mozzarella pasta",
    vegan: false,
    ingredients: ["bacon", "mozzarella", "redonion", "yellowonion"],
    link: "https://www.foodandwine.com/recipes/canadian-bacon-and-mozzarella-penne",
    img: "imgs/canadian_bacon_mozzarella.jpeg",
    show: false,
  },
  {
    recipeName: "Mushroom sausage pasta",
    vegan: false,
    ingredients: ["mushrooms", "sausage", "bacon", "eggs", "cremefraiche"],
    link: "https://www.bbcgoodfood.com/recipes/mushroom-sausage-pasta",
    img: "imgs/mushroom_sausage_pasta.jpeg",
    show: false,
  },

  {
    recipeName: "Spanish omelette",
    vegan: false,
    ingredients: ["eggs", "potatoes", "yellowonion"],
    link: "https://www.bbcgoodfood.com/recipes/real-spanish-omelette",
    img: "imgs/spanish_omelette.jpeg",
    show: false,
  },
  {
    recipeName: "Beef stroganoff",
    vegan: false,
    ingredients: ["beef", "sourcream", "mushrooms", "redonion"],
    link: "https://www.recipetineats.com/beef-stroganoff/",
    img: "imgs/Beef-Stroganoff-.jpeg",
    show: false,
  },
  {
    recipeName: "Cod with pancetta",
    vegan: false,
    ingredients: ["cod", "pancetta", "tomato"],
    link: "https://www.bbcgoodfood.com/recipes/cod-olives-crispy-pancetta",
    img: "imgs/cod-pancetta.jpeg",
    show: false,
  },
  {
    recipeName: "Tuna leek pasta",
    vegan: false,
    ingredients: ["tuna", "potatoes", "leek", "sourcream", "mozzarella"],
    link: "https://www.bestrecipes.com.au/recipes/one-pan-creamy-tuna-leek-pasta-bake-recipe/tnakq0c8?r=budget/bnwz6puq&h=budget",
    img: "imgs/tuna_leek.jpeg",
    show: false,
  },

  {
    recipeName: "Portuguese fish stew",
    vegan: false,
    ingredients: ["potatoes", "yellowonion", "tomato", "cod", "salmon", "tuna"],
    link: "https://www.feastingathome.com/portuguese-fish-stew-caldeirada/",
    img: "imgs/Portuguese-Fish-Stew-.jpeg",
    show: false,
  },

  {
    recipeName: "Courgette Carrot Spagetti",
    vegan: true,
    ingredients: ["carrots", "tomato", "zucchini", "pepper"],
    link: "https://veganuary.com/recipes/courgette-and-carrot-spaghetti-with-red-pepper-and-tomato-sauce/",
    img: "imgs/Courgette and Carrot Spagetti.png",
    show: false,
  },

  {
    recipeName: "Cheesy Vegan Bake",
    vegan: true,
    ingredients: ["potatoes", "cheeses", "rawcashews", "yellowonion"],
    link: "https://veganuary.com/recipes/cheesy-vegan-potato-bake/",
    img: "imgs/Cheesy Vegan Potato Bake.png",
    show: false,
  },
];

//FUNCTION TO SUBMIT INGREDIENTS
function submitIngredients() {
  //GETTING THE CONTAINER FOR THE RECIPES INSIDE JAVASCRIPT
  var recipeDiv = document.getElementById("recipeContainer");

  var veganBtn = document.getElementById("vegan");
  if (veganBtn.checked) veganCheck = true;
  else {
    veganCheck = false;
  }

  console.log(veganCheck);
  //CLEARING THE RECIPE CONTAINER SO NOT TO REPEAT ADDING SAME RECIPES
  recipeDiv.innerHTML = "";

  //GETTING ALL THE CHECKBOXES AS A NODELIST (SIMILAR TO ARRAY)
  var ele = document.getElementsByName("ingredientCheckBox");

  //TURNING THE NODELIST INTO AN ARRAY
  var eleArray = Array.from(ele);

  //RUN A LOOP THROUGH ALL ITEMS INSIDE THE RECIPE ARRAY
  for (var i = 0; i < recipeArray.length; i++) {
    //RUN A LOOP THROUGH ALL THINGS CHECKBOXES IN THE INGREDIENTS CHECKLIST
    for (var u = 0; u < eleArray.length; u++) {
      //IF THE CHECKBOX IS CHECKED AND THE NUMBER "i" RECIPE ARRAY CONTAINS THE SAME INGREDIENT OF THE CHECKED ITEM (INGREDIENT) THEN WE SHOULD SHOW THAT RECIPE
      if (
        eleArray[u].checked &&
        recipeArray[i].ingredients.includes(eleArray[u].value)
      ) {
        if (!veganCheck) recipeArray[i].show = true;
        if (veganCheck && recipeArray[i].vegan) recipeArray[i].show = true;
      }
    }

    //IF THE RECIPE CONTAINS ONE OF THE CHECKED ITEMS
    //HERE IS WHERE YOU WOULD CHECK IF VEGAN IS TRUE OR NOT
    if (recipeArray[i].show == true) {
      //THEN WE ADD IN THE RECIPE CONTAINER (recipeDiv), THE PICTURE OF THE RECIPE, THE NAME OF THE RECIPE AND THE LINK TO THE WEBSITE
      recipeDiv.innerHTML += `
            <div class="itemBox" onclick="location.href='${recipeArray[i].link}'">
            <img src="${recipeArray[i].img}" style="height:60%; width:60%;"><br/>
            ${recipeArray[i].recipeName}<br/>
            </div>`;
      //HERE WE MAKE SURE TO RESET THE SHOW TO FALSE SO IF WE RUN THE FUNCTION AGAIN THEN WE DONT AUTOMATICALLY HAVE IT SET TO SHOW
      recipeArray[i].show = false;
    }
  }
}

// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
