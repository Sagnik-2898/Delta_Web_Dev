import Product from "./Product";
import "./index.css";

const ProductTab = () => {
  let options = ["Hi-tech","Durable","pro"];

  // let options2 = {a:"hi-tech",b:"Durable",c:"pro"}
  return (
    <>
    <div className="container">
    <div className="Box">
      <Product title={"iPhone"} price={70000} features={options} />
    </div>
    <div className="Box">
    <Product title={"Macbook"} price={120000} features={options} />
    </div>
    <div className="Box">
    <Product title={"iPad"} price={60000} features={options} />
    </div>
    </div>
    </>
  );
};

export default ProductTab;
