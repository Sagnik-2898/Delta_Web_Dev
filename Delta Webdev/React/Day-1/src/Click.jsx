const Click = () => {
  function onClick() {
    console.log("Hello World");
  }
  function onHover() {
    console.log("Boku No hero Akademia");
  }
  return (
    <>
      <div className="btn">
        <button onClick={onClick}>Click Me</button>
      </div>
      <div>
        <p onMouseOver={onHover}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          perspiciatis quisquam soluta tempore commodi inventore. Explicabo
          dolore totam ex asperiores voluptate vero expedita ipsa!
          Reprehenderit, quis. Quas impedit nam laboriosam! Quibusdam inventore
          facere vitae, itaque, perspiciatis, ullam quo similique cum maiores
          officia dignissimos quae. Natus iste beatae numquam unde! Fugit vitae
          est, veritatis quibusdam qui quisquam repellendus quo in quis.
        </p>
      </div>
    </>
  );
};

export default Click;
