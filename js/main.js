var btn1 = document.querySelector('#free');
var btn2 = document.querySelector('#all')
var btn3 = document.querySelector('#rate')
var btn4 = document.querySelector('#test')

window.onload = () => {
    btn1.classList.add("active");
    btn2.classList.add("active");
}
btn3.onclick = () => {
    btn1.classList.remove("active");
}
btn4.onclick = () => {
    btn2.classList.remove("active");
}

document.querySelector('.hamburger').addEventListener('click', function(e){
    e.preventDefault();
    if (this.classList.contains('is-active')){
        this.classList.remove('is-active');
        document.querySelector('.menu').classList.remove('menu-active');
    }
    else {
        this.classList.add('is-active');
        document.querySelector('.menu').classList.add('menu-active');
    }
});