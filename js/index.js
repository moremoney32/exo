import {fetchData} from "../module/fetchData.mjs"

document.addEventListener("DOMContentLoaded",()=>{
    console.log("test")
    


   fetchData("https://api.thecatapi.com/v1/images/search").then((response)=>{
   //console.log(response)

    const photographersArray =response
    console.log(photographersArray)
    

    let photographerHTML = "";

    photographersArray.forEach((photographer)=>{

           
            photographerHTML += `
            
                <article>
                <img src="${photographer.url}" />
                    
                    
                    
                    
                </article>

            `;

    });

    document.querySelector("#display").innerHTML = photographerHTML;
})


})

