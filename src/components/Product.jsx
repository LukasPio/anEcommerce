export default function Product (props) {
    return (
        <section className="product">
            <img src={props.src} alt="product-image" className="productImage"/>
            <h2 className="productName">{props.text}</h2>
            <h3 className="productPrice">R$ {props.numeric.toFixed(2)}</h3>
        </section>
    )
}