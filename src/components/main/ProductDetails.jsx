import { useParams } from "react-router-dom";
import { useProducts } from "./useProducts";
import Spinner from "./Spinner";

function ProductDetails() {
  const { id } = useParams();
  const { products, isLoading, error } = useProducts();

  const product = products.filter((p) => p.id == id).at(0);
  console.log("PRODUCT: ", product);

  return (
    <div>
      {isLoading && <Spinner />}
      {product ? (
        <div>
          <img src={product.image} />
          <h1>Name: {product.name}</h1>
          <p>Description: {product.description}</p>
        </div>
      ) : (
        <p>No such product!</p>
      )}
    </div>
  );
}

export default ProductDetails;
