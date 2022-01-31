//creating constant variable
const list = document.querySelectorAll('.navLink')
//creating active animation
function activeLink(){
    list.forEach(item =>
        item.classList.remove('active'));
        this.classList.add('active');
}
list.forEach(item =>
    item.addEventListener('click',activeLink))
window.addEventListener("scroll", ()=> {
        let navContainer = document.querySelector(".navigation");
        navContainer.classList.toggle("scrolling-active", window.scrollY > 1);
    });
    