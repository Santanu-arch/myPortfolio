// Home: Typing Animation
document.addEventListener('DOMContentLoaded', function() {
    const texts = ["Web Developer", "UX/UI Designer", "SEO Specialist"]; // Array of texts
    let i = 0;  
    let j = 0;  
    
    const typingSpeed = 100;  
    const eraseSpeed = 80;    
    const pauseTime = 1500;   
    
    function typeWriter() {
        if (j < texts[i].length) {
            document.getElementById('auto-type').textContent += texts[i].charAt(j);
            j++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            setTimeout(eraseText, pauseTime);  
        }
    }

    function eraseText() {
        if (j > 0) {
            document.getElementById('auto-type').textContent = document.getElementById('auto-type').textContent.substring(0, j - 1);
            j--;
            setTimeout(eraseText, eraseSpeed);
        } else {
            i = (i + 1) % texts.length; 
            j = 0; 
            setTimeout(typeWriter, typingSpeed);
        }
    }

    typeWriter();  
});

// Resume: Section Navigation
function showSection(sectionId, btn) {
    
    const resumeSections = document.querySelectorAll('.resume-section'); // Modified class selector
    resumeSections.forEach(section => section.classList.remove('active'));

    const buttons = document.querySelectorAll('.resume_btn');
    buttons.forEach(button => button.classList.remove('active'));

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');

    btn.classList.add('active');
}

window.onload = function() {
    
    const firstSection = document.getElementById('about');
    const firstButton = document.getElementById('about-btn');
    firstSection.classList.add('active');
    firstButton.classList.add('active');
    
};