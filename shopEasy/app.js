const products = [
    {
        id: 1,
        name: "HP Laptop",
        category: "Electronics",
        description: "Powerful laptop for work and study.",
        price: 55999,
        image: "images/laptop.png",
        rating: 5
    },
    {
        id: 2,
        name: "Smartphone",
        category: "Electronics",
        description: "Latest smartphone with powerful performance.",
        price: 25999,
        image: "images/mobile.png",
        rating: 5
    },
    {
        id: 3,
        name: "Wireless Headphones",
        category: "Accessories",
        description: "Enjoy high quality sound with wireless freedom.",
        price: 2499,
        image: "images/headphone.png",
        rating: 4
    },
    {
        id: 4,
        name: "Running Shoes",
        category: "Footwear",
        description: "Comfortable and stylish shoes.",
        price: 1999,
        image: "images/shoes.png",
        rating: 4
    }
];
function createProductCard(product){
    const{id,name,description,price,image,rating}=product;
    const article = document.createElement("article");
    article.innerHTML=`<div class="product-image">
                        <span class="discount">
                            15% OFF</span>
                        <img src="${image}">
                    </div>
                    <div class="product-info">
                        <h3>${name}</h3>
                        <p class="product-description">
                           ${description}
                        </p>
                        <div class="rating">
                            ${"⭐".repeat(rating)}
                        </div>
                        <div class="product-bottom">
                            <span class="price">${"₹"+price}</span>
                            <button class="add-cart" data-id="${id}">
                                Add to Cart
                            </button>
                        </div>
                    </div>`;
    return article;
}
function createProducts(){
    const section = document.createElement("section");
    section.className="product-section";
    section.innerHTML =`<h2>Our Products</h2>
            <p class="section-description">
                Explore our popular products
            </p>`;
            products.forEach(product=>{
                section.appendChild(createProductCard(product));
            });
        return section;
}

function createHeader(){
     const header = document.createElement("header");
     header.className="header";
     header.innerHTML=`<div class="logo">🛒 ShopEasy</div>
        <nav class="navbar">
            <a href="#">Home</a>
            <a href="#products">Products</a>
            <a href="#categories">Categories</a>
            <a href="#contact">Contact</a>
            <a href="#" class="cart">
                🛒 Cart</a>
        </nav>`;
        return header;

    
}
function createHero(){
    const section = document.createElement("section");
    section.className="hero";
    section.innerHTML=`<div class="hero-content">
                <h1>Welcome to ShopEasy</h1>
                <p>
                    Find the best products at the best prices</p>
                <a href="#products" class="shop-btn">Shop Now</a>
            </div>`;
            return section;
    
}
function createCategories(){
    const section = document.createElement("section");
    section.className ="categories-section";
    section.innerHTML=`<h2>Shop by Category</h2>
            <p class="section-description">
                Explore products from different categories
            </p>
            <div class="categories">
                <div class="category">
                    <div class="category-icon"> 💻
                    </div>
                    <h3>Electronics</h3>
                </div>
                <div class="category">
                    <div class="category-icon">
                        👕</div>
                    <h3>Clothing</h3>
                </div>
                <div class="category">
                    <div class="category-icon">
                        🎒</div>
                    <h3>Accessories</h3>
                </>div>
                <div class="category">
                    <div class="category-icon">
                        👟</div>
                    <h3>Footwear</h3>
                </div>
            </div>`;
        return section;

}
export function App(root){
    const header = createHeader();
    root.appendChild(header);
    root.appendChild(createHero());
    root.appendChild(createCategories());
    root.appendChild(createProducts());
    root.appendChild(createProducts());

}