const menuNavegacion = document.querySelector('#menuNav'),
mainBanner = document.querySelector('#mainBanner');


let scrollMenu = () =>{
    if(window.pageYOffset > 200){
        menuNavegacion.classList.add('positionFixed');
        mainBanner.style.marginTop = '85px';
    }else {
        menuNavegacion.classList.remove('positionFixed');
        mainBanner.style.marginTop = '0px';
    }
}

window.addEventListener('scroll', scrollMenu);
