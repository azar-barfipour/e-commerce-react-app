import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDetailItem from "../components/products/ProductDetailItem";

const ProductDetail = () => {
  const [detailData, setDetailData] = useState([]);
  const params = useParams();
  console.log(params.productId);
  const fetchDetailHandler = async () => {
    try {
      const res = await fetch(
        `https://jsonblob.com/api/943634345093251072/?myparam1=${params.productId}`
      );
      const data = await res.json();
      setDetailData(data);
      // findIndex by id then pass to state
      if (!res.ok) {
        throw new Error("something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchDetailHandler();
  }, []);

  return (
    <ul>
      {detailData.map((item) => {
        return (
          <ProductDetailItem
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            category={item.category}
          />
        );
      })}
    </ul>
  );
};
export default ProductDetail;
