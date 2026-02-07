let imgs = [
    {"path" : "../resources/ff14/titania-real.png", "alt" : "Titania wants to throw hands"},
    {"path" : "../resources/ff14/ira new sch glam 2026.jpg", "alt" : "New glam for my SCH - 2026"},
    {"path" : "../resources/ff14/heavensward.webp", "alt" : "Reached Heavensward! 10/04/25"},
    {"path" : "../resources/ff14/new_drip.webp", "alt" : "Sporting a new outfit - First glam ever"},
    {"path" : "../resources/ff14/high_score.webp", "alt" : "Great performance in PVP"},
    {"path" : "../resources/ff14/ff0000003.jpg", "alt" : "Ready to deliver the presents"},
    {"path" : "../resources/ff14/ff0000002.jpg", "alt" : "Ira Poponira says Merry Christmash!"},
    {"path" : "../resources/ff14/ff0000001.jpg", "alt" : "Raking the floor"},
    {"path" : "../resources/ff14/ffxiv_09062024_124733_823.png", "alt" : "Lalahorny"},
    {"path" : "../resources/ff14/ffxiv_25052024_091619_450.png", "alt" : "First place in the Fallguys event"},
    {"path" : "../resources/ff14/ffxiv_05052024_204344_078.png", "alt" : "Avalin's birthday 2024, looking dapper"},
    {"path" : "../resources/ff14/ffxiv_06052024_165929_545.png", "alt" : "Reached Heavensward! 6/5/2024"},
    {"path" : "../resources/ff14/ffxiv_06052024_122833_071.png", "alt" : "ARR credits goodness"},
    {"path" : "../resources/ff14/ffxiv_06052024_121600_856.png", "alt" : "ARR credits goodness"},
    {"path" : "../resources/ff14/ffxiv_06052024_121819_544.png", "alt" : "ARR credits goodness"},
    {"path" : "../resources/ff14/ffxiv_23042024_150632_727.png", "alt" : "Hildibrand will be back!" },
    {"path" : "../resources/ff14/ffxiv_22042024_152510_450.png", "alt" : "Hildibrand shenanigans"},
    {"path" : "../resources/ff14/ffxiv_22042024_154849_858.png", "alt" : "Hildibrand shenanigans"},
    {"path" : "../resources/ff14/ffxiv_23042024_093639_284.png", "alt" : "Hildibrand shenanigans"},
    {"path" : "../resources/ff14/ffxiv_23042024_094002_524.png", "alt" : "Hildibrand shenanigans"},
    {"path" : "../resources/ff14/ffxiv_23042024_094011_090.png", "alt" : "Hildibrand shenanigans"},
    {"path" : "../resources/ff14/ffxiv_15042024_152456_609.png", "alt" : "Zodiac weapon #1 acquired!"},
    {"path" : "../resources/ff14/garuda.webp", "alt" : "12/04/2024 Beat Gardua EX MINE"},
    {"path" : "../resources/ff14/ffxiv_21032024_123759_135.png", "alt" : "With Tataru at the Rising Stones"},
    {"path" : "../resources/ff14/ffxiv_20032024_143843_636.png", "alt" : "Hildibrand will be back"},
    {"path" : "../resources/ff14/ffxiv_20032024_121745_431.png", "alt" : "A true gent's smile"},
    {"path" : "../resources/ff14/ffxiv_20032024_121708_179.png", "alt" : "The actual warrior of light"},
    {"path" : "../resources/ff14/ffxiv_20032024_111504_394.png", "alt" : "Wait... bombs!?"},
    {"path" : "../resources/ff14/ffxiv_07022024_121358_792.png", "alt" : "At the Valentione's day celebrations 2024"},
    {"path" : "../resources/ff14/ffxiv_24022024_144357_497.png", "alt" : "Odin defeated"},
    {"path" : "../resources/ff14/ffxiv_28012024_205003_274.png", "alt" : "First picture, with Minfilia" },
];

const imageArea = document.querySelector(".image-section");

imgs.map(
    image => {
        const newImageElement = document.createElement("img");
        console.log(image.path);
        newImageElement.src = image.path;
        console.log(newImageElement.src);
        newImageElement.alt = image.alt;
        newImageElement.title = image.tile ? image.tile : image.alt;
        newImageElement.classList.add("image-preview");
        console.log(newImageElement);
        imageArea.appendChild(newImageElement);
    }
)