const toggleMenu = document.querySelector(".toggle-menu");
const header = document.querySelector("header");
toggleMenu.addEventListener("click", function() {
    if(this.classList.contains("clicked")) {
        this.classList.remove("clicked");
        header.style.left= "-300px";
    } else {
        this.classList.add("clicked");
        header.style.left= "0";
    }
});

// skills
span = document.querySelector(".skill-container");
const skills = ["designer", "developer", "freelancer", "photographer"];
let i = 0;
let len = skills.length;
function generateSkills() {
    span.textContent = skills[i];
    i++;
    if(i >= len) {
        i = 0;
    }

}
setInterval(generateSkills, 2000);


// testimonials
const bullets = Array.from(document.querySelectorAll(".bullet"));
const comments = Array.from(document.querySelectorAll(".review"));
bullets.forEach(bullet => {
    bullet.addEventListener("click", function() {
        for(let i = 0; i < bullets.length; i++) {
            bullets[i].classList.remove("active");
        }
        comments.forEach(c => {
            if(this.id == c.dataset.id) {
                c.classList.remove("hide");
            } else {
                c.classList.add("hide");
            }
        });
        this.classList.add("active");
    });
});

// go up
const goUp = document.querySelector(".go-up");
window.addEventListener("scroll", function() {
    if(this.scrollY < 200){
        goUp.style.opacity = "0";
    } else if(this.scrollY >= 200) {
        goUp.style.opacity = "1";
    }
});

// portfolio
const categories = Array.from(document.querySelectorAll(".nails span"));
const projects = Array.from(document.querySelectorAll(".portfolio .images .image"));
categories.forEach(nail => {
    nail.addEventListener("click", function() {
        for(let i = 0; i < categories.length; i++) {
            categories[i].classList.remove("active");
        }
        projects.forEach(p => {
            if(this.id == p.dataset.id && this.id != "all") {
                p.classList.remove("hide");
            } else if (this.id == "all") {
                p.classList.remove("hide");
            } else {
                p.classList.add("hide");
            }
        });
        this.classList.add("active");
    });
});