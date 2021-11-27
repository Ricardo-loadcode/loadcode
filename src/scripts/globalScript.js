window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    //console.log(scroll);
    if(scroll > 200){
        document.querySelector('header').style.background = '#8b8585f0'; // #8b8585f0 
        document.querySelector('header').style.boxShadow = '5px 5px 2px -2px #5E5E5E';
        document.querySelector('.logo #hide').style.display = 'block';
        document.querySelector('.logo #show').style.display = 'none';
    
    }
    if(scroll < 200){
        document.querySelector('header').style.background = 'transparent';
        document.querySelector('header').style.boxShadow = 'none';
        document.querySelector('.logo #hide').style.display = 'none';
        document.querySelector('.logo #show').style.display = 'block';
    }
});

const viewMenu = () => {
    const menuSection = document.querySelector('.menu-section');
    menuSection.classList.toggle('on');    
}

const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4; //pegar a distancia do scroll até o topo (y = eixo vertical) *3/4 pega o numero correto de qualquer tela
    target.forEach(function (element) {
        if (windowTop > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    });
}

animeScroll();
// verifica se tem algum item com a variavel target, para que apenas dispare o a função addEventListener se houver document.querySelectorAll("[data-anime]");
if (target.length) {
    window.addEventListener("scroll",debounce(function () {
        animeScroll();
    }, 100));
}