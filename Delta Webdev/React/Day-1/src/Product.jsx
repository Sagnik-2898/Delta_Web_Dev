import Price from "./Price";
// eslint-disable-next-line react/prop-types
const Product = ({ title, idx }) => {
  let oldPrices = ["12,999", "11,900", "1,599", "599"];
  let newPrices = ["8,999", "9,199", "899", "278"];
  let description = [
    ["Super Retina XDR","M3 Pro Chip"],
    ["Pro-Motion XDR","Dolby Vison + Atmos"],
    ["A18 Bionic chip","120hz Smooth Display"],
    ["The Best Earphones","60db Active Noise Cancellation"],
  ];
  return (
    <>
      <div className="box">
        <h3>{title}</h3>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
      </div>
    </>
  );
};

export default Product;
