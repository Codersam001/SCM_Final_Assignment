// script.js
const recipes = [
    { id: 1, name: "Spaghetti Carbonara", ingredients: ["pasta", "egg", "cheese", "bacon"], diet: "all" , image: "ita1.jpg" , 
        link:"span.html"
    },
    { id: 2, name: "Vegan Salad", ingredients: ["lettuce", "tomato", "cucumber"], diet: "vegan", deit:"all", image: "https://via.placeholder.com/300", 
    link:"nonveg.html" },
    { id: 3, name: "Gluten-Free Pancakes", ingredients: ["gluten-free flour", "egg", "milk"], diet: "gluten-free" ,deit:"veg", image: "https://via.placeholder.com/300" },
    {id: 4, name: "Vegetable Stir Fry", ingredients: ["carrots", "broccoli", "bell peppers", "soy sauce"], diet: "vegan",deit:"all", image: "asian1.jpg" },
    { id: 5, name: "Chicken Tikka Masala", ingredients: ["chicken", "yogurt", "garam masala", "tomatoes"], diet: "all" ,deit:"non-veg", image: "indian1.jpg" },
    { id: 6, name: "Beef Tacos", ingredients: ["ground beef", "taco shells", "cheese", "lettuce", "tomato"], diet: "non-veg",deit:"all", image: "mexican1.jpg" },
    { id: 7, name: "Grilled Cheese Sandwich", ingredients: ["bread", "butter", "cheese"], diet: "veg", image: "sandwich1.jpg" },
  { id: 8, name: "Pancakes", ingredients: ["flour", "milk", "egg", "baking powder", "butter"], diet: "all",diet:"gluten-free", image: "download.jpeg",
    link:"pan.html"
    
   },

    { 
        id: 9, 
        name: "Kung Pao Chicken", 
        ingredients: ["chicken", "peanuts", "green pepper", "soy sauce", "ginger", "garlic", "chili peppers"], 
        diet: "non-veg",
        diet:"all" ,
        image: "kungpaochicken.jpg", 
        link: "kungpaochicken.html"
    },
    { 
        id: 10, 
        name: "Sweet and Sour Pork", 
        ingredients: ["pork", "pineapple", "bell peppers", "onions", "vinegar", "sugar", "soy sauce"], 
        diet: "non-veg", 

        image: "sweetandsourpork.jpg", 
        link: "sweetandsourpork.html"
    },
    { 
        id: 11, 
        name: "Mapo Tofu", 
        ingredients: ["tofu", "ground pork", "soy sauce", "doubanjiang", "ginger", "garlic", "chili oil"], 
        diet: "non-veg", 
        image: "mapotofu.jpg", 
        link: "mapotofu.html"
    },
    { 
        id: 12, 
        name: "Vegetable Spring Rolls", 
        ingredients: ["cabbage", "carrot", "mushrooms", "spring roll wrappers", "soy sauce", "garlic"], 
        diet: "vegan", 
        deit:"veg",
        image: "vegetablespringrolls.jpg", 
        link: "vegetablespringrolls.html"
    },
    { 
        id: 13, 
        name: "Fried Rice", 
        ingredients: ["rice", "egg", "peas", "carrot", "soy sauce", "green onions"], 
        diet: "veg", 
        image: "friedrice.jpg", 
        link: ".html"
    },
    
    
    { 
        id: 14, 
        name: "Chow Mein", 
        ingredients: ["noodles", "chicken", "carrot", "bell peppers", "soy sauce", "ginger"], 
        diet: "non-veg", 
        image: "chowmein.jpg", 
        link: "chowmein.html"
    },
        {
            id: 15,
            name: "Rasam",
            ingredients: ["tamarind", "tomatoes", "toor dal", "mustard seeds", "curry leaves", "coriander", "garlic", "spices (turmeric, cumin, black pepper)"],
            diet: "vegetarian",
            image: "rasam.jpg",
            link: "rasam.html"
        },
        {
            id: 16,
            name: "Aloo Paratha",
            ingredients: ["whole wheat flour", "potatoes", "green chilies", "coriander leaves", "cumin seeds", "salt", "ghee or oil"],
            diet: "vegetarian",
            image: "alooparatha.jpg",
            link: "alooparatha.html"
        },
        {
            id: 17,
            name: "Chickpea Curry",
            ingredients: ["chickpeas", "tomatoes", "onions", "garlic", "ginger", "spices (cumin, coriander, turmeric, garam masala)"],
            diet: "vegan",
            image: "chickpeacurry.jpg",
            link: "chickpeacurry.html"
        },
        {
            id: 18,
            name: "Palak Paneer",
            ingredients: ["spinach", "paneer (Indian cottage cheese)", "onions", "tomatoes", "garlic", "ginger", "spices (garam masala, cumin, coriander)"],
            diet: "vegetarian",
            image: "palakpaneer.jpg",
            link: "palakpaneer.html"
        }

     
];



const searchButton = document.getElementById("search-button");
const ingredientInput = document.getElementById("ingredient-input");
const dietSelect = document.getElementById("diet");
const resultsSection = document.getElementById("results");

searchButton.addEventListener("click", () => {
    const inputIngredients = ingredientInput.value.toLowerCase().split(",");
    const selectedDiet = dietSelect.value;
    const filteredRecipes = recipes.filter(recipe => {
        const hasIngredients = inputIngredients.every(ing => recipe.ingredients.includes(ing.trim()));
        const matchesDiet = selectedDiet === "all" || recipe.diet === selectedDiet;
        return hasIngredients && matchesDiet;
    });

    displayResults(filteredRecipes);
});

function displayResults(recipes) {
    resultsSection.innerHTML = ""; // Clear previous results
    if (recipes.length === 0) {
        resultsSection.innerHTML = "<p>No recipes found. Try different ingredients!</p>";
    } else {
        recipes.forEach(recipe => {
            const card = document.createElement("div");
            card.classList.add("recipe-card");

            // If the recipe has a link, wrap the card in an anchor <a> tag
            const recipeContent = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
            `;

            if (recipe.link) {
                card.innerHTML = `<a href="${recipe.link}" target="_blank">${recipeContent}</a>`;
            } else {
                card.innerHTML = recipeContent;
            }

            resultsSection.appendChild(card);
        });
    }
}



function toggleSidebar() {
    // Toggle the 'open' class on the sidebar
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
  
    sidebar.classList.toggle('open'); // Show or hide sidebar
  
    // Shift the content when sidebar is opened or closed
    content.classList.toggle('shifted');
}
