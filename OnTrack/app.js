const data = [
    {
        id: 1,
        name: "Invicta Men's Pro Diver",
        img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 80,
        cat: "Dress",
    },
    {
        id: 11,
        name: "Nordgreen Pioneer Men's ",
        img: "https://m.media-amazon.com/images/I/610yU+WRcdL._AC_UX679_.jpg",
        price: 300,
        cat: "Dress",
    },
    {
        id: 2,
        name: "Timex Men's Expedition Scout ",
        img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
        price: 40,
        cat: "Sport",
    },
    {
        id: 3,
        name: "Breitling Superocean Heritage",
        img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
        price: 200,
        cat: "Luxury",
    },
    {
        id: 4,
        name: "Casio Classic Resin Strap ",
        img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
        price: 16,
        cat: "Sport",
    },
    {
        id: 5,
        name: "Garmin Venu Smartwatch ",
        img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
        price: 74,
        cat: "Sport",
    },
    {
        id: 6,
        name: "Fossil Men's",
        img: "https://m.media-amazon.com/images/I/81E2IhbmPBL._AC_UX679_.jpg",
        price: 75,
        cat: "Casual",
    },
    {
        id: 7,
        name: "Fossil Men's Neutra ",
        img: "https://m.media-amazon.com/images/I/71090SrgUfL._AC_UX679_.jpg",
        price: 91,
        cat: "Casual",
    },
    {
        id: 8,
        name: "OLEVS Mens Watches",
        img: "https://m.media-amazon.com/images/I/61HPMKhFNZL._AC_UX679_.jpg",
        price: 29,
        cat: "Casual",
    },
    {
        id: 9,
        name: "Chronograph Quartz Watches ",
        img: "https://m.media-amazon.com/images/I/61VTAYomTkL._AC_UX679_.jpg",
        price: 250,
        cat: "Dress",
    },
    {
        id: 10,
        name: "Analog Quartz Wrist Watch ",
        img: "https://m.media-amazon.com/images/I/71dPY9f5wGL._AC_UX679_.jpg",
        price: 99,
        cat: "Luxury",
    },
    {
        id: 11,
        name: "Wooden Watch, ",
        img: "https://m.media-amazon.com/images/I/51Ni0r9cB-L._AC_UX679_.jpg",
        price: 100,
        cat: "Luxury",
    }
];

const productsContainer = document.querySelector(".products")
const searchInput = document.querySelector(".search")
const catCont = document.querySelector(".cats")
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts.map(product => `  <div class="product">
    <img
    src=${product.img}
    alt=""
    />
    <span class="name">${product.name}</span>
    <span class="priceText">$${product.price}</span>
  </div>`
    ).join("");
}
displayProducts(data)


searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
    if (value) {
        displayProducts(data.filter(item => item.name.toLocaleLowerCase().indexOf(value) !== -1))
    } else {
        displayProducts(data)
    }
})

const setCategories = () => {
    const allCats = data.map((item) => item.cat);
    const categories = [
        "All",
        ...allCats.filter((item, i) => {
            return allCats.indexOf(item) === i;
        }),
    ];

    catCont.innerHTML = categories
        .map(
            (cat) =>
                `
        <span class="cat">${cat}</span>
      `
        )
        .join("")
    catCont.addEventListener("click", (e) => {
        const selectedCat = e.target.textContent;
        selectedCat === "All" ? displayProducts(data) : displayProducts(data.filter((item => item.cat === selectedCat)));
    })
};

const setPrices = () => {
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;

    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = "$" + e.target.value;

        displayProducts(data.filter(item => item.price <= e.target.value))
    })

}

setCategories()
setPrices()