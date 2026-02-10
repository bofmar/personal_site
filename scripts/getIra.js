(async function getData() {
    const url = "https://ffxivcollect.com/api/characters/55779667";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        createContent(result);
    }
    catch (error){
        console.error(error.message);
    }
})();

function createContent(data) {
    const container = document.getElementById("char-container");

    const title = document.createElement("h1");
    title.innerText = `${data.name} - ${data.data_center} ${data.server}`;
    container.appendChild(title);

    const img = document.createElement("img");
    img.classList.add("hero");
    img.src = data.portrait;
    container.appendChild(img);
}
