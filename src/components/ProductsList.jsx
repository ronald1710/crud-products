const ProductsList = ({list, deletedProduct, editProduct}) => {

  const deleteProduct = (id)=>{
    deletedProduct(id)
}

  return ( 

    <div className="productList">
      <ul className="product">
        {list?.map(product=>(
        <li key ={product.id} className="list">
          <div className="containerProduct">
          <h3><span>Producto: </span>{product.name}</h3>
          <h3><span>Categoria: </span>{product.category}</h3>
          <h3><span>Precio: </span>{product.price}</h3>
          <h3><span>Disponible: </span>{product.isAvailable ? "Si" : "No"}</h3>
          <div className="containerbutton">
          <button onClick={()=>deleteProduct(product.id)}><i className="bi bi-trash3"></i></button>
          <button onClick={()=>editProduct(product)}><i className="bi bi-pencil-square"></i></button>
          </div>
          </div>
        </li>
        ))}
      </ul>
    </div>

   );
}
 
export default ProductsList;