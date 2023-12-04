import Product from "./Product.jsx";
import products from "../productsDB.json"

export default function Container() {
    return (
        <div className="main-container">
            <h1>Nossos produtos:</h1>
            <div className="productList">
                {products.map(product => (
                    <Product src={product.image} text={product.name} numeric={product.price}/>
                ))}
            </div>
        </div>
    )
}