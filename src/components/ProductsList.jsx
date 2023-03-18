

const ProductsList = ({list, deletedProduct, editProduct}) => {

  const deleteProduct = (id)=>{
    deletedProduct(id)
}

  return ( 

    <div>
      <ul>
        {list?.map(product=>(
        <li key ={product.id}>
          <h3><span>Producto:</span>{product.name}</h3>
          <h3><span>Categoria:</span>{product.category}</h3>
          <h3><span>Precio:</span>{product.price}</h3>
          <h3><span>Disponible:</span>{product.isAvailable ? "Disponible" : "Agotado"}</h3>
          <button onClick={()=>deleteProduct(product.id)}>Eliminar</button>
          <button onClick={()=>editProduct(product)}>Editar</button>
        </li>
        ))}
      </ul>
    </div>

   );
}
 
export default ProductsList;