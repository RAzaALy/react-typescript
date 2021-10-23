 type ProductProps = {
    products: {
        name:string,
        price: number
    }[]
}
const ProductList = (props: ProductProps) => {
    return (
        <div>
            {props.products.map( product => {
                return (
                    <div key={product.price}>
                    <h1>{product.name}</h1>
                    <h1>{product.price}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList
