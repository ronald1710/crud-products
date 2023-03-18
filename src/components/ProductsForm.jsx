import { useEffect } from "react";
import { useForm } from "react-hook-form";

const ProductsForm = ({createProduct, sendProduct, updateProduct}) => {

  const {handleSubmit, register, reset} = useForm()

  useEffect( ()=>{
    if (sendProduct) {
      reset(sendProduct)
    }else{
      empyForm()
    }
  },[sendProduct] ) 

  const submit=product=>{
    if (sendProduct) {
      updateProduct(product)
    }else{
      createProduct(product)
      empyForm()
    }
  }

  const empyForm=()=>{
    reset(
      {
        "name": "",
        "category": "",
        "price": "",
        "isAvailable": false
      }
    )
  }
  return (
    <form 
    className="from"
    onSubmit={handleSubmit(submit)} >
      <h1>Agregar o Modificar Productos</h1>
      <label htmlFor="name">Producto</label>
      <input
        type="text"
        name="name"
        id="name"
        {...register("name", { required: true })}
      />
      <label htmlFor="category">Categoria</label>
      <input
        type="text"
        name="category"
        id="category"
        {...register("category", { required: true })}
      />
      <label htmlFor="price">Precio</label>
      <input
        type="text"
        name="price"
        id="price"
        {...register("price", { required: true })}
      />
      <label htmlFor="isAvailable">Disponible</label>
      <input
        type="checkbox"
        name="isAvailablee"
        id="isAvailable"
        {...register("isAvailable", { required: true })}
      />
      <button type="submit">Añadir</button>
    </form>
  );
};

export default ProductsForm;
