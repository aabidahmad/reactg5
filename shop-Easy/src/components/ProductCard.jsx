function ProductCard({ product }) {

    return (
        <article className="product-card">

            <div className="product-image">

                <span>
                    {product.discount}% OFF
                </span>
                <img src={product.image} alt={product.name}
                />
            </div>

            <div className="product-info">

                <h3>{product.name}</h3>

                <p className="product-description">
                    {product.description}
                </p>

            </div>

        </article>
    );
}
export default ProductCard;
