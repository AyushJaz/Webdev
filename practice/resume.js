//apporoach 1
// let achorEl=document.querySelectorAll("a")
// console.log(achorEl)
// for(let i =0;i<achorEl.length;i++)
// {
//     achorEl[i].addEventListener("click",function(event){
//         if(i<7)
//         {
//             let curentposition=0;
//             event.preventDefault();
//             let index=achorEl[i].href.lastIndexOf("#");
//             pathId=achorEl[i].href.slice((index+1))
//             let pathEl=document.getElementById(pathId);
//             let pathElPosition=pathEl.getBoundingClientRect();
//             let scrollInterval=setInterval(jump,12)
//             function jump()
//             {
//                 if(curentposition>=pathElPosition.top)
//                 clearInterval(scrollInterval);
//                 window.scrollBy(0,15);
//                 curentposition+=15;
//             }
//         }
//    if(i===13)
//    {
//    let currentposition= window.pageYOffset;
//    event.preventDefault();
//    let scrollInterval=setInterval(function(){
//     if(window.pageYOffset===0)
//     clearInterval(scrollInterval);
//     window.scrollBy(0,-15);
//     currentposition-=15;
//    },1)
//   }
//     })
// }

// Apporach 2 
let targetId ;
let interval
let ancorElement = document.querySelectorAll("#nav a");
for (let i = 0; i < ancorElement.length; i++) {
    ancorElement[i].addEventListener("click", (e) => {
        e.preventDefault();
         targetId = document.getElementById(ancorElement[i].innerText);
         interval = setInterval(scroll, 5);
    })
}

function scroll() {
   let targetPosition = targetId.getBoundingClientRect();
        if (targetPosition.y<=0)
            clearInterval(interval);
        else
        window.scrollBy(0, 15);
    }