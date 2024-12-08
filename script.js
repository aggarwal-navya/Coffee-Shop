let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm= document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

// Toggle cart item visibility
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};

// Close cart item when the 'X' button is clicked
document.querySelectorAll('.fa-times').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.closest('.cart-item').remove(); // Fix: remove parent cart-item element
    });
});

window.onscroll=()=>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
let menuBtn = document.querySelector('#menu-btn');

