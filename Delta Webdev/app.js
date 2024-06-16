const arr = [40,70,80,60]

let ans = arr.every((el)=>el%10==0)

console.log(ans)

let min = arr.reduce((min,el)=>{
    if(min<el){
        return min;
    }else{
        return el
    }
})

console.log(min)

