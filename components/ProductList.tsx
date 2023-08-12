import ProductCard from "../components/ProductCard";
import products from "../product/mock.json";

const ProductList = () => {
  return (
    <div className="justify-between m-4 sm:gap-5 sm:flex">
      {products.map((prod) => (
        <ProductCard
          key={prod._id}
          _id={prod._id}
          description={prod.description}
          img={prod.img}
          name={prod.name}
          price={prod.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
