// Drinks menu data organized by category
const drinks = {
  Milkshakes: [
    { 
      name: "CHOCOLATE MILKSHAKE", 
      price: "$6.99", 
      image: "images/optimized/drinks/chocolateShake.jpg",
      description: "Rich chocolate ice cream blended to perfection, topped with whipped cream and chocolate drizzle."
    },
    { 
      name: "VANILLA MILKSHAKE", 
      price: "$6.99", 
      image: "images/optimized/drinks/vanillaMilkshake.jpg",
      description: "Creamy vanilla ice cream blended to smooth perfection, topped with whipped cream and a cherry on top."
    },
    { 
      name: "OREO MILKSHAKE", 
      price: "$6.99", 
      image: "images/optimized/drinks/oreoMilkshake.jpg",
      description: "Vanilla ice cream blended with Oreo cookies, topped with whipped cream and cookie crumbles."
    }
  ],
  Smoothies: [
    { 
      name: "STRAWBERRY SMOOTHIE", 
      price: "$5.99", 
      image: "images/optimized/drinks/strawberrySmoothie.jpg",
      description: "Fresh strawberries blended with yogurt and ice."
    },
    { 
      name: "MANGO MANGO SMOOTHIE", 
      price: "$5.99", 
      image: "images/optimized/drinks/mangoSmoothie.jpg",
      description: "Fresh mango blended with yogurt and ice."
    }
  ],
  "Blended Drinks": [
    { 
      name: "BLENDED FROZEN MOCHA", 
      price: "$5.99", 
      image: "images/optimized/drinks/blendedMocha.jpg",
      description: "Rich espresso blended with chocolate, milk, and ice. Topped with whipped cream and chocolate drizzle."
    },
    { 
      name: "BLENDED ICED VANILLA", 
      price: "$5.99", 
      image: "images/optimized/drinks/vanillaMilkshake.jpg",
      description: "Smooth vanilla syrup blended with milk and ice, topped with whipped cream."
    }
  ],
  Lemonades: [
    { 
      name: "CLASSIC LEMONADE", 
      price: "$3.99", 
      image: "images/optimized/drinks/lemonade.jpg",
      description: "Freshly squeezed lemonade made with real lemons."
    },
    { 
      name: "STRAWBERRY LEMONADE", 
      price: "$4.99", 
      image: "images/optimized/drinks/strawberryLemonade.jpg",
      description: "Freshly squeezed lemonade infused with sweet strawberry puree."
    },
    { 
      name: "LAVENDER LEMONADE", 
      price: "$4.99", 
      image: "images/optimized/drinks/lavenderSoda.jpg",
      description: "Freshly squeezed lemonade infused with lavender syrup."
    },
    { 
      name: "CHERRY LEMONADE", 
      price: "$4.99", 
      image: "images/optimized/drinks/cherryLemonade.jpg",
      description: "Freshly squeezed lemonade infused with tart cherry puree."
    },
    { 
      name: "PEACH LEMONADE", 
      price: "$5.99", 
      image: "images/optimized/drinks/peachLemonade.jpg",
      description: "Freshly squeezed lemonade infused with sweet peach puree."
    },
    { 
      name: "RASPBERRY LEMONADE", 
      price: "$4.99", 
      image: "images/optimized/drinks/raspberryLemonade.jpg",
      description: "Freshly squeezed lemonade infused with raspberry puree."
    }
  ],
  Sodas: [
    { 
      name: "FOUNTAIN SODAS", 
      price: "$2.99", 
      image: "images/optimized/drinks/pepsiEtc.jpg",
      description: "Your choice of Dr. Pepper, Pepsi, Diet Pepsi, or Mug Root Beer served ice cold."
    },
    { 
      name: "STARRY SODA", 
      price: "$2.99", 
      image: "images/optimized/drinks/starryLemonade.jpg",
      description: "Crisp and refreshing lemon lime soda served over ice."
    }
  ],
  "Iced Tea": [
    { 
      name: "FRESH BREWED ICED TEA", 
      price: "$2.99", 
      image: "images/optimized/drinks/icedTeajpg.jpg",
      description: "Freshly brewed and chilled black tea served over ice with lemon."
    }
  ]
};

// Function to render drinks by category
function renderDrinks(category) {
  const drinkGrid = document.getElementById("drinkGrid");
  
  // Clear the current grid
  drinkGrid.innerHTML = "";
  
  // Add drinks from the selected category
  drinks[category].forEach(drink => {
    const drinkCard = `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <div class="card-img-wrapper">
            <img src="${drink.image}" class="card-img-top" alt="${drink.name}">
          </div>
          <div class="card-body">
            <h5 class="card-title">${drink.name}</h5>
            <p class="card-text">${drink.description}</p>
            <p class="price">${drink.price}</p>
          </div>
        </div>
      </div>
    `;
    drinkGrid.innerHTML += drinkCard;
  });
  
  // Reinitialize image viewer for the newly added drink cards
  initializeDrinkImageViewer();
}

// Function to initialize image viewer for drink cards
function initializeDrinkImageViewer() {
  // We don't need to add any specific functionality here
  // The image-viewer.js script automatically adds click events to all .card-img-top elements
  // by selecting document.querySelectorAll(".card-img-top")
  // Our newly added drink images will be picked up on the next DOM mutation or when the page is refreshed
}

// Initialize the tabs and event listeners when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  const drinkTabs = document.getElementById("drinkTabs");
  const tabs = drinkTabs.querySelectorAll(".drink-tab");
  
  // Set up click event for each tab
  tabs.forEach(tab => {
    tab.addEventListener("click", function(e) {
      e.preventDefault();
      
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove("active"));
      
      // Add active class to clicked tab
      this.classList.add("active");
      
      // Render drinks for the selected category
      renderDrinks(this.dataset.category);
    });
  });
  
  // Default: show the first category
  const firstCategory = tabs[0].dataset.category;
  renderDrinks(firstCategory);
});
