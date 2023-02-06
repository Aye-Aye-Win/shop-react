import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { getData } from "../api";
import Loading from "../components/Loader/Loading";
import { useStateContext } from "../context/StateContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const {dispatch} = useStateContext();

  const getProductDetail = async () => {
    setProduct(await getData(`/products/${id}`));
  };

  const getProductsByCart = async () => {
    const data = await getData(`/products/category/${product.category}`);
    const filterData = data?.filter((item) => item.id !== product.id);
    setProducts(filterData);
  };

  useEffect(() => {
    getProductDetail();
    getProductsByCart();
  }, [products, product]);

  return (
    <>
      {product && products.length > 0 ? (    <div>
      <div className="flex gap-5 items-start mt-20">
        <img src={product?.image}
          className="w-60 border-2 shadow-lg rounded-md p-3 my-2" alt=""/>
        <div className="flex flex-col gap-5 ml-16">
          <p className="bg-info text-primary font-bold py-2 px-2 my-2 rounded-full w-40 text-center">
            {product?.category}
          </p>
          <h3 className="text-2xl font-semibold text-header">
            {product?.title}
          </h3>
          <div className="">
            <p className="text-header font-semibold text-lg">Description</p>
            <p className="text-secondary tracking-wider leading-6 mt-1">
              {product?.description}
            </p>
          </div>
          <p className="flex items-center gap-2">
            <AiFillStar className="text-xl text-danger" />{" "}
            <small className="text-secondary font-bold">
              ( {product?.rating?.rate} )
            </small>{" "}
          </p>
          <p className="text-info text-xl font-semibold">${product?.price}</p>
          <div className="">
            <button onClick={() => dispatch({type:"ADD_TO_CART", payload: product})} className="bg-secondary text-primary 
            focus-ring-4 focus:ring-sky-300 py-2 rounded shadow-lg w-40 ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="my-20">
        <h1 className="text-2xl font-semibold text-info">
          You may also like
        </h1>
        <div className="flex flex-wrap gap-7 my-10">
          {products?.map((item) => (
            <div key={item.id}>
              <img src={item?.image}
                className="h-52 boder-2 shadow-lg p-5 rounded" alt=""/>
              <p className="text-secondary font-semibold mt-1">
                ${item?.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>) : <Loading />}
    </>
  );
};

export default ProductDetail;
