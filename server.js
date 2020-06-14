let toggle=document.querySelector('.toggle_btn')

let nav_links=document.querySelector('.nav_links')

toggle.addEventListener("click",()=>{
    nav_links.classList.toggle('toggle')
})