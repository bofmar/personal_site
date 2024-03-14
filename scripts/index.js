// create the navbar
const navbar = document.querySelector('nav > ul');
const navNames = ["Home", "Renders", "FF XIV", "Blog"];
const navLinks = [
    "https://bofmar.github.io/blender_site/",
    "https://bofmar.github.io/blender_site/pages/renders.html",
    "https://bofmar.github.io/blender_site/pages/ff_xiv_pics.html",
    "https://one-ordinary-dev.netlify.app/"]

function createLink(name, link) {
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.textContent = name;
    anchor.href = link;

    li.appendChild(anchor);
    navbar.appendChild(li);
}

for(let i = 0; i < navNames.length; i++) {
    createLink(navNames[i], navLinks[i]);
}