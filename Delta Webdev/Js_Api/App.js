
let btn = document.querySelector("button")

let url ="https://catfact.ninja/fact"

let h1 = document.querySelector("h1")
fetch(url)
 .then((res)=> {
    console.log("Data Found ",res)
    res.json().then((data)=>{
        h1.innerText = data.fact
    })
 })
 .catch((err)=>{
    console.log("ERROR ",err)
 })

 let url2 = "https://dog.ceo/api/breeds/image/random"



 btn.addEventListener("click", async ()=>{
   let link = await getapi();
   let img = document.querySelector("#image")
   
   img.setAttribute("src", link)
 })

 async function getapi (){
   try{
      let api = await axios.get(url2);
      return api.data.message;
   }catch(e){
      console.log("ERROR ->",e)
      return "/"
   }
 }




// console.log("Hey I am Connected")