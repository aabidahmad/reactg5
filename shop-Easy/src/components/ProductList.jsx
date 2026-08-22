import ProductCard from "./ProductCard";

function ProductList(){
    const products=[
    {
        id: 1,
        image: "./assets/hero.png",
        name: "HP Laptop",
        description: "Powerful laptop for work and study.",
        rating: "⭐⭐⭐⭐⭐",
        price: 55999,
        discount: 15,
        category: "Electronics",
        inStock: true
    },
    {
        id: 2,
        image: "../assets/laptop.png",
        name: "Smartphone",
        description: "Latest smartphone with powerful performance.",
        rating: "⭐⭐⭐⭐⭐",
        price: 25999,
        discount: 20,
        category: "Electronics",
        inStock: true
    },

    {
        id: 3,
        image: "./assets/laptop.png",
        name: "Wireless Headphones",
        description: "Enjoy high quality sound with wireless freedom.",
        rating: "⭐⭐⭐⭐☆",
        price: 2499,
        discount: 25,
        category: "Accessories",
        inStock: true
    },

    {
        id: 4,
        image: "./assets/laptop.png",
        name: "Running Shoes",
        description: "Comfortable and stylish shoes for everyday use.",
        rating: "⭐⭐⭐⭐☆",
        price: 1999,
        discount: 30,
        category: "Footwear",
        inStock: false
    }


    ];
    return (
        <>
          <section id="products" className="products-section">
            <h2>Our Prodcuts</h2>
            <p className="section-description">
                Explore our popular Products
            </p>
            <div className="proudcts">
                {products.map((product)=>{
                    return(
                    <ProductCard 
                    key={product.id}  
                    product = {product}/>
                )
                })

                }

            </div>
          </section>
        </>
    )
}
export default ProductList;