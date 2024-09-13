document.addEventListener('DOMContentLoaded', function() {
    const text = "I'm swathi a Java Developer, Python Developer";
    let index = 0;
    const headingElement = document.querySelector('.animated-heading');

    function typeWriter() {
        if (index < text.length) {
            headingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
});

// Smooth scrolling
const links = document.querySelectorAll('nav a');
for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
    });
}

