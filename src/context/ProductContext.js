import axios from "axios";
import React, { createContext, useReducer } from "react";
//!create and export hook UseContext
export const productContext = createContext();
//obj - переменная, которая хранит в себе объект
const obj = {
  products: [],
  productToEdit: null,
};

// reducer -  это функция, которая принимает состояние
const reducer = (state = obj, action) => {
  //если объект action под ключом type в функции getProduct возвратит true,получим объект с данными data,a иначе объект с наполненными данными obj
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    case "EDIT_PRODUCT":
      return { ...state, productToEdit: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const API = "http://localhost:8000/products";
  const [state, dispatch] = useReducer(reducer, obj);
  // Функция для стягивания данных с db.json
  const getProduct = async () => {
    const { data } = await axios(API);

    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  //Функция добавления в db.json
  const addProductFunc = async (newProduct) => {
    await axios.post(API, newProduct);
  };

  // Функция удаления
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProduct();
  };

  // Функция редактирования
  const editProduct = async (id) => {
    // В data хранится один объект,которую хотим отредактировать
    let { data } = await axios(`${API}/${id}`);

    dispatch({
      type: "EDIT_PRODUCT",
      payload: data,
    });
  };
  //
  const saveTask = async (newTask) => {
    await axios.patch(`${API}/${newTask.id}`, newTask);
    getProduct();
  };
  return (
    <productContext.Provider
      value={{
        addProductFunc,
        getProduct,
        deleteProduct,
        editProduct,
        saveTask,
        products: state.products,
        productToEdit: state.productToEdit,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
