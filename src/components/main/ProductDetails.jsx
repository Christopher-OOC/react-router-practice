import { useParams } from "react-router-dom";
import { useProducts } from "./useProducts";

function ProductDetails() {
  const { id } = useParams();
  const { products, isLoading, error } = useProducts();

  console.log(products, isLoading);

  return <div></div>;
}

export default ProductDetails;
