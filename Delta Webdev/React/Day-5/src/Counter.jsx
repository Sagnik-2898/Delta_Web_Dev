import { useState,useEffect } from "react";

const Counter = () => {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  let incCountx =()=>{
    setCountx((currCount)=>currCount+1);
  }
  let incCounty =()=>{
    setCounty((currCount)=>currCount+1);
  }

  useEffect(function printSomething(){
    console.log("This is a side effect")
  },[])

  // [countx]---> means it will trigger only in case of x
  // [county]---> means it will trigger only in case of y
  // []---> means it will trigger only for the first time

  return <div>
    <h3>countx={countx}</h3>
    <button onClick={incCountx}>+1</button>
    <h3>county={county}</h3>
    <button onClick={incCounty}>+1</button>
  </div>;
};

export default Counter;
