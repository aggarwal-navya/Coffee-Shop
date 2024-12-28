let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

document.querySelector('.btn').addEventListener('click', function () {
    alert("Thank you for your interest! Visit our shop to explore more about our special coffee blends and unique offerings.");
});

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

document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    if (name && email && phone && address && city && country) {
        alert(`Order placed successfully!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}, ${city}, ${country}`);
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Validation checks
    if (name === "" || email === "" || phone === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Example action: Log the data (replace this with an AJAX request or API call)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);

    // Display a success message
    alert("Thank you for contacting us, " + name + "! We'll get back to you soon.");

    // Clear the form fields
    document.getElementById("contactForm").reset();
});
document.getElementById('getYoursNowBtn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Smooth scroll to the menu section
    document.querySelector('#menu.html').scrollIntoView({
        behavior: 'smooth'
    });
});
