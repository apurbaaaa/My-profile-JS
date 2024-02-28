// Prevent default form submission and provide feedback
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    document.getElementById('formResponse').textContent = 'Namaste! Thank you for your message!';
});

// Function to open a PDF in a new tab
function openPDF() {
    window.open('bookchaptfinal.pdf');
}

// Add event listener to the "View Bookchapter" button
document.getElementById('openPdfBtn').addEventListener('click', openPDF);

// Initialize navOpen as false to track the side navigation state
let navOpen = false; // Tracks the state of the side nav

function toggleNav() {
    navOpen = !navOpen;
    const sideNavWidth = navOpen ? "250px" : "0px";
    
    document.getElementById("mySidenav").style.width = sideNavWidth;
    document.getElementById("main").style.marginLeft = sideNavWidth;
    document.getElementById("projects").style.marginLeft = sideNavWidth;
    document.getElementById("hobbies").style.marginLeft = sideNavWidth;
    document.getElementById("contact").style.marginLeft = sideNavWidth;
}

// Assuming you have a button with id="navToggle" for toggling the nav
document.getElementById("navToggle").addEventListener('click', toggleNav);



document.addEventListener("DOMContentLoaded", function() {
    const river = document.querySelector('.image-river');
    const images = river.querySelectorAll('img');
    river.style.animation = `slide 30s linear infinite`;
  
    // Duplicate images for a continuous loop
    images.forEach(img => {
      const clone = img.cloneNode();
      river.appendChild(clone);
    });
  });


function openwelcome() {
    window.open('welcome.pdf');
}

// Add event listener to the "View Bookchapter" button
document.getElementById('welcome').addEventListener('click', openwelcome);

function opencourse() {
    window.open('course.pdf');
}

// Add event listener to the "View Bookchapter" button
document.getElementById('course').addEventListener('click', opencourse);

function opencode() {
    window.open('https://github.com/apurbaaaa/mini-projects');
}

// Add event listener to the "View Bookchapter" button
document.getElementById('tictac').addEventListener('click', opencode    );

function opengame() {
    window.open('./TicTacToe/index.html');
}

// Add event listener to the "View Bookchapter" button
document.getElementById('game').addEventListener('click', opengame);




  
  