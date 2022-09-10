const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburguesa = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");



menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamburguesa.addEventListener("click", toggleMobileMenu)
menuCarrito.addEventListener("click", toggleCarrito)

function toggleDesktopMenu(){
    const isAsideMenuClosed = aside.classList.contains("inactive");

    if(!isAsideMenuClosed){
        aside.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    const isAsideMenuClosed = aside.classList.contains("inactive");

    if(!isAsideMenuClosed){
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive")
}

function toggleCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }
    aside.classList.toggle("inactive")

}


const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image:  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Tv",
    price: 300,
    image:  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Car",
    price: 500.000,
    image:  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Bag",
    price: 70,
    image:  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Skate",
    price: 100,
    image:  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Pc",
    price: 140,
    image:  "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})


function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price
        const productName = document.createElement("p");
        productPrice.innerText =  product.name;
    
        productInfoDiv.append(productPrice, productName);
        
    
    
        const productFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./Platzi_YardSale_Icons-20220826T012644Z-001/Platzi_YardSale_Icons/bt_add_to_cart.svg");
    
        productFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList)