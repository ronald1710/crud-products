import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductsForm from './components/ProductsForm'
import ProductsList from './components/ProductsList'
import './App.css'

function App() {
  const[products, setProducts]=useState([])
  const [updateProducts, setUpdateProduct] = useState(null)

  useEffect( ()=>{
    getProduct()
  },[] )

  const getProduct=()=>{
    axios
      .get("https://products-crud.academlo.tech/products/")
      .then(resp=>setProducts(resp.data))
      .catch(error=>console.error(error))
  }
  const addProduct=(productData)=>{
    axios 
      .post(`https://products-crud.academlo.tech/products/`, productData)
      .then (()=> getProduct())
      .catch (error=>console.error(error))
  }
  const deletedProduct=(id)=>{
    axios
      .delete(`https://products-crud.academlo.tech/products/${id}/`)
      .then(()=>getProduct())
      .catch (error=>console.error(error))
  }

  const selectProduct = (list) => {
    setUpdateProduct(list)
  }

  const  updateProduct=(product) => {
    axios
        .put(`https://products-crud.academlo.tech/products/${product.id}/`, product)
        .then(()=> {
          getProduct()
          setUpdateProduct(null)
        })
        .catch(error => console.error(error))      
  }

  return (
    <div className="App">
      <ProductsForm
      createProduct={(product)=>addProduct(product)}
      sendProduct={updateProducts}
      updateProduct={(product)=>updateProduct(product)}
      />
      <hr />
      <ProductsList
      list={products}
      deletedProduct={(id)=>deletedProduct(id)}
      editProduct={(product)=>selectProduct(product)}
      />
    </div>
  )
}

export default App
