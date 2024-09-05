import Product from "./Product";
import "./index.css";

const ProductTab = () => {
  // let options = ["Hi-tech","Durable","pro"];

  // let options2 = {a:"hi-tech",b:"Durable",c:"pro"}
  return (
    <>
    <div className="container">
    <div className="Box">  <Product title="Apple Macbook Pro" idx={0}/>  </div>
    <div className="Box">  <Product title="Apple ipad Pro" idx={1}/>  </div>
    <div className="Box">  <Product title="Apple iphone Pro" idx={2}/>  </div>
    <div className="Box">  <Product title="Apple Airpods Pro" idx={3}/>  </div>
    </div>
    </>
  );
};

export default ProductTab;
