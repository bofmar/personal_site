const images = document.querySelectorAll('.image-preview');
const popup = document.createElement('dialog');
popup.className = 'popup';
document.body.appendChild(popup);

const closeIcon = new Image();
closeIcon.src = "../resources/icons/close.svg"
console.log(closeIcon);

const closeButton = document.createElement("button");
closeButton.classList = "close-button";
closeButton.appendChild(closeIcon);

closeButton.addEventListener("click", e=> {
    popup.close();
});

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