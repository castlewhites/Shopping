const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburguesa = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const aside = document.getElementById("product-detail");
const asideSecundary = document.querySelector(".product-detail-secundary");
const asideClosed = document.getElementById("detail-secundary-close");
const cardsContainer = document.querySelector(".cards-container");



menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamburguesa.addEventListener("click", toggleMobileMenu)
menuCarrito.addEventListener("click", toggleCarrito)
asideClosed.addEventListener("click", asideSecundaryClose )


function toggleDesktopMenu(){

    desktopMenu.classList.toggle("inactive")
    aside.classList.add("inactive")
    asideSecundary.classList.add("inactive")

}

function toggleMobileMenu(){

    mobileMenu.classList.toggle("inactive")
    aside.classList.add("inactive")
    asideSecundary.classList.add("inactive")

}

function toggleCarrito(){
    aside.classList.toggle("inactive")
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    asideSecundary.classList.add("inactive")

}
function openProductDetailSecundary(){
    asideSecundary.classList.remove("inactive")
    aside.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
}
function asideSecundaryClose(){
    asideSecundary.classList.add("inactive")
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
        productImg.addEventListener("click", openProductDetailSecundary )
    
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