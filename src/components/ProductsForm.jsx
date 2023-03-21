import { useEffect } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import ReactDOM from "react-dom";

const modalContainer = document.querySelector("#modal");

const ProductsForm = ({
  createProduct,
  sendProduct,
  updateProduct,
  onClose,
}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (sendProduct) {
      reset(sendProduct);
    } else {
      empyForm();
    }
  }, [sendProduct]);

  const submit = (product) => {
    if (sendProduct) {
      updateProduct(product);
    } else {
      createProduct(product);
      empyForm();
    }
  };

  const empyForm = () => {
    reset({
      name: "",
      category: "",
      price: "",
      isAvailable: false,
    });
  };
  return ReactDOM.createPortal(
    <div className="containerForm">
      <form className="from" onSubmit={handleSubmit(submit)}>
        <div>
          <h1>Agregar o Modificar Productos</h1>
          <button className="btnCloseForm" onClick={onClose}>
            <i className="bi bi-x-circle"></i>
          </button>
        </div>
        <label htmlFor="name">Producto</label>
        <input
          type="text"
          name="name"
          id="name"
          {...register("name", { required: true })}
        />
        <br />
        <label htmlFor="category">Categoria</label>
        <input
          type="text"
          name="category"
          id="category"
          {...register("category", { required: true })}
        />
        <br />
        <label htmlFor="price">Precio</label>
        <input
          type="text"
          name="price"
          id="price"
          {...register("price", { required: true })}
        />
        <br />
        <label htmlFor="isAvailable">Disponible</label>
        <input
          type="checkbox"
          name="isAvailablee"
          id="isAvailable"
          {...register("isAvailable", { required: true })}
        />
        <br />
        <button className="buttonClose" type="submit">Añadir y/o Editar</button>
      </form>
    </div>,
    modalContainer
  );
};

export default ProductsForm;
