import {navbar} from "../components/navbar.js";


var home=document.getElementById("homenavbar");
home.innerHTML=navbar();


import {fetchurl} from "../utils/util.js";

var home=document.getElementById("homenavbar");

home.innerHTML=navbar();

// document.getElementById("recbutton").addEventListener("click",fetchdata);

async function fetchdata()
{
   
    let url= `https://www.themealdb.com/api/json/v1/1/random.php`
    let data= await fetchurl(url)
    data=data.meals;
    console.log(data);
    display(data);
}
fetchdata();
var display=(data)=>
{
    data.map((data)=>
    {
        var card=document.createElement("div");
        let title=document.createElement("h3");
        title.innerText=data.strMeal;
        console.log(title);
        let image=document.createElement("img");
        let instruction=document.createElement("p");
        instruction.innerText=data.strInstructions;
        image.src=data.strMealThumb;
        card.append(title,image,instruction);
        document.getElementById("onereceipe").append(card);
    })

    
}

