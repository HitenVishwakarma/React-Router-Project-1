import { useParams } from "react-router-dom";

const ProductDetail = () => {

    const params = useParams();

  return (
    <section>
      <h1>Product Detail</h1>
      <h3>{params.productid}</h3>
    </section>
  );
};
export default ProductDetail;
