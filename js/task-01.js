// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const allCategories = document.querySelectorAll(".item")
console.log("Number of categories:", allCategories.length)

allCategories.forEach(item => {
    const titleEl = item.firstElementChild
    console.log("Category:", titleEl.textContent)
    console.log("Elements:",titleEl.nextElementSibling.children.length)
})
   

