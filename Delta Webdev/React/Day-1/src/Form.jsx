
const Form = () => {

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form was Submitted")
    }

  return (
    <div>
      <form>
        <input placeholder="Type Something"/>
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Form
