import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
    const navigate = useNavigate();
  return (
    <div className="flex justify-center text-center">
      <div className="bg-info p-16 rounded shadow-lg mt-60 animate__animated animate__backInDown">
        <h1 className="text-3xl font-semibold tracking-wider my-5 text-primary">
          Thanks For Purchasing
        </h1>
        <button onClick={() => navigate('/')} className="text-primary bg-danger hover:bg-red-500 px-5 py-2 mt-2 shadow-lg uppercase rounded">
          go shopping
        </button>
      </div>
    </div>
  );
};

export default Success;
