async function fetchurl(url)
{
    let respone= await fetch(url)
    let data =await respone.json();
    return data;
}
let id;
function debounce(fun)
{
    if(id)
    {
        clearTimeout(id)
    }
  
    id=setTimeout(()=>
    {
        fun();
    },2000) 

}


export {fetchurl,debounce}
