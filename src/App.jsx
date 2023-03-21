import { useEffect, useState } from "react";
import axios from "axios";
import ProductsForm from "./components/ProductsForm";
import ProductsList from "./components/ProductsList";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [updateProducts, setUpdateProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios
      .get("https://products-crud.academlo.tech/products/")
      .then((resp) => setProducts(resp.data))
      .catch((error) => console.error(error));
    close();
  };
  const addProduct = (productData) => {
    axios
      .post(`https://products-crud.academlo.tech/products/`, productData)
      .then(() => {
        getProduct()
        Swal.fire({
          icon: 'success',
          title: 'Agregado',
          text: 'El producto se agrego!',
        })
      })
      .catch((error) => console.error(error));
  };
  const deletedProduct = (id) => {
    axios
      .delete(`https://products-crud.academlo.tech/products/${id}/`)
      .then(() =>{
        getProduct()
        Swal.fire({
          icon: 'error',
          title: 'Eliminado',
          text: 'El producto se elimino!',
        })
      } )
      .catch((error) => console.error(error));
  };

  const selectProduct = (list) => {
    setUpdateProduct(list);
    setIsOpen(true);
  };

  const open = () => {
    selectProduct(null);
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  const updateProduct = (product) => {
    axios
      .put(
        `https://products-crud.academlo.tech/products/${product.id}/`,
        product
      )
      .then(() => {
        getProduct();
        setUpdateProduct(null);
        Swal.fire({
          icon: 'success',
          title: 'Actualizado',
          text: 'El producto se actualizo!',
        })
      })
      .catch((error) => console.error(error));
    close();
  };

  return (
    <div className={`App ${isOpen ? "blur" : ""}`}>
      <div className="header">
        <div className="title">
          <h1>Productos</h1>
        </div>
        <button className="buttonAdd" onClick={open}>
        <i className="bi bi-plus-circle"> Nuevo Producto</i>
        </button>
      </div>

      {isOpen && (
        <ProductsForm
          onClose={close}
          createProduct={(product) => addProduct(product)}
          sendProduct={updateProducts}
          updateProduct={(product) => updateProduct(product)}
        />
      )}

      <ProductsList
        list={products}
        deletedProduct={(id) => deletedProduct(id)}
        editProduct={(product) => selectProduct(product)}
      />
    </div>
  );
}

export default App;
