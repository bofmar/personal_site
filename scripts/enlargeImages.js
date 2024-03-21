const images = document.querySelectorAll('.image-preview');
const popup = document.createElement('dialog');
popup.className = 'popup';
document.body.appendChild(popup);

const closeButton = document.createElement("button");
closeButton.innerText = "X";
closeButton.classList = "close-button";

for(let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", e => {
        const image = document.createElement("img");
        image.src = e.target.src;
        while(popup.firstChild) {
            popup.removeChild(popup.firstChild);
        }
        popup.appendChild(image);
        popup.appendChild(closeButton);
        popup.showModal();
    });
}