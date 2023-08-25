// https://api.openweathermap.org/data/2.5/weather?q=amritsar&appid=cb78f79a4e356d4e9a7a84c08f965411

// api key ='cb78f79a4e356d4e9a7a84c08f965411'
import axios from "axios";

export default function useFetch({city,data,setData,setImage}){

axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cb78f79a4e356d4e9a7a84c08f965411`)
.then(async(res)=>{
await setData(res.data);
await setImage(res.data.weather[0].main);
console.log(res.data);


}).catch((err)=>
console.log(err)
)
}