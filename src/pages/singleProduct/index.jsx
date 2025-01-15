import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductTile from "../../components/productTile";

export default function SingleProduct() {
  const { id } = useParams();
  const location = useLocation();
  const data = location.state;
  

  return (
    <div>
      <div className="bg-blue-900 py-3">
        
        <h1 className="">{data.title}</h1>
        <h2 className="py-3 w-1/2 mx-auto">{data.description}</h2>
      <ProductTile id={id} data={data} />
      </div>

    </div>
  );
}
