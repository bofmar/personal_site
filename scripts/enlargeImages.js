const images = document.querySelectorAll('.image-preview');
const popup = document.createElement('dialog');
popup.className = 'popup';
document.body.appendChild(popup);

console.log(images.length);

for(let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", e => {
        const image = document.createElement("img");
        image.src = e.target.src;
        while(popup.firstChild) {
            popup.removeChild(popup.firstChild);
        }
        popup.appendChild(image);
        popup.showModal();
    });
}