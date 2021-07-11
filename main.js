const show=(togglerid,menuid)=>{
    const btn= document.getElementById(togglerid);
    const menu= document.getElementById(menuid);
    if(btn && menu){
        btn.addEventListener('click',()=>{
            menu.classList.toggle('show')
                    console.log("button is clisk")
        
        })
    }

}
show('toggler','nav-menu');
// tthis is fina
// const showMenu = (toggleId, navId) =>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId)
    
//     // Validate that variables exist
//     if(toggle && nav){
//         toggle.addEventListener('click', ()=>{
//             // We add the show-menu class to the div tag with the nav__menu class
//             nav.classList.toggle('show-menu')
//         })
//     }
// }
// showMenu('toggler','nav-menu')