
import { useEffect, useState } from "react"

const Joker = () => {


    let [joke,setJoke] = useState({})
    const url = "https://official-joke-api.appspot.com/random_joke"
    const getrandomjoke = async()=>{
        let response = await fetch(url)
        let jsonresponse = await response.json();
        console.log(jsonresponse)
        setJoke({setup:jsonresponse.setup,punchline:jsonresponse.punchline})
    }
    useEffect(()=>{async function getfirstjoke() {
        let response = await fetch(url)
        let jsonresponse = await response.json();
        console.log(jsonresponse);
        setJoke({setup:jsonresponse.setup,punchline:jsonresponse.punchline})

    }
    getfirstjoke()
    },[])

  return (
    <div>
      <h3>Joker!</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getrandomjoke}>New Joke</button>
    </div>
  )
}

export default Joker
