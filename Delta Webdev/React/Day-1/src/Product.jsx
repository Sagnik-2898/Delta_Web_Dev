

// eslint-disable-next-line react/prop-types
const Product = ({title,price}) => {
  let isDiscount = price>70000
   let styles = {backgroundColor:isDiscount ? "red":""}
    // const list = features.map((feature)=><li>{feature}</li>)
  return (
    <>
    <div className="box" style={styles}>
        <h3>{title}</h3>
        <h3>Price:{price}</h3>
        <h4>{isDiscount && <p>Discount of 5%</p>}</h4>
        {/* <p>{features.map((feature)=><li>{feature}</li>)}</p> */}
        
    </div>
    </>
  )
}

export default Product;
