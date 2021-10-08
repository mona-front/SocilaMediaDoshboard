const toggle=document.querySelector(".toggle")
const active=document.querySelectorAll(".darkMode")
const statusmode=document.querySelector(".statusDarkMode")

toggle.addEventListener("click", ()=>{
    for(let i=0;i<active.length;i++){
        active[i].classList.toggle("active")
        if(statusmode.classList.contains("active")){
            statusmode.innerHTML="Dark Mode";
        }
        else

        {
            statusmode.innerHTML="Light Mode";
        }
       
        
        
    }
   
   

    
})