// create the navbar
const navbar = document.querySelector('nav > ul');
const rootURI = "https://bofmar.github.io/blender_site/"
const navNames = ["Home", "Renders", "FF XIV", "Blog"];
const navLinks = [
    `${rootURI}`,
    `${rootURI}pages/renders.html`,
    `${rootURI}pages/ff_xiv_pics.html`,
    `https://one-ordinary-dev.netlify.app/`]

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
