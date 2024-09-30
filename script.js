//data
const products = [
  // Salads
  { name: "Regular Salad", category: "Salads", price: 15 },
  { name: "Fruit Salad", category: "Salads", price: 20 },

  // Restaurant
  { name: "Shawarma", category: "FastFood", price: 25 },
  { name: "Pizza", category: "FastFood", price: 35 },
  { name: "Burger", category: "FastFood", price: 30 },

  // Juices
  { name: "Lemon Juice", category: "Juices", price: 10 },
  { name: "Orange Juice", category: "Juices", price: 12 },
  { name: "Grape Juice", category: "Juices", price: 14 },
];

const displayFunction = document.getElementById("sectionDisplay");

function displayProducts(arrayData) {
  displayFunction.innerHTML = "";

  arrayData.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>Category: ${product.category}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
        `;
    displayFunction.appendChild(productCard);
  });
}

displayProducts(products);

const flter = document.getElementById("filter");
flter.addEventListener("change", () => {
  const category = flter.value;
  if (category === "All") {
    displayProducts(products);
  } else {
    const finalProduct = products.filter(
      (product) => product.category === category
    );
    displayProducts(finalProduct);
  }
});
