import {navbar} from "../components/navbar.js";
import { debounce, fetchurl } from "../utils/util.js";

var home=document.getElementById("homenavbar");
home.innerHTML=navbar();


async function fetchdata()
{
    var search=document.getElementById("searchdata").value;
    let url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`

    let data= await fetchurl(url)
  
    display(data);
}





document.getElementById("searchdata").addEventListener("input",()=>
{
   debounce(fetchdata)
})   

var display=(data)=>
{
    document.getElementById("content").innerHTML="";
    data.map((element)=>
    {
        var card=document.createElement("div");
        let title=document.createElement("h3");
        title.innerText=element.strMeal;
        let image=document.createElement("img");
        let instruction=document.createElement("p");
        instruction.innerText=element.strInstructions;
        image.src=element.strMealThumb;
        card.append(title,image,instruction);
        document.getElementById("content").append(card);
    });
}


