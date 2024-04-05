
 let user=document.getElementById("user-name");
user.addEventListener("click",cliornot)
    function cliornot(){
        let option=document.getElementById("option");
       let userSection=document.getElementById("user-section");
    if(user.checked)
     { 
        option.style.display="inline-block";
        userSection.style.borderRadius="24px 24px 0px 0px";
        console.log("hdbc");
     }
     else
     {
        userSection.style.borderRadius="24px";
        option.style.display="none";
     }
    }