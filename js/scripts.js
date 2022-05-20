const openModalAll = document.querySelectorAll(".open-modal");
const overlay = document.getElementById("overlay");
const pics = [
    {
        src:"images/evan-krause-BU6lABNbTpA-unsplash-modal.jpg", info:"Island view. Photo by Evan Krause - Unsplash"
    },
    {
        src:"images/dynamic-wang-Oyycm5TAJBI-unsplash.jpg", 
        info:"Abstract Design. Photo by Dynamic Wang - Unsplash"
    },
    {
        src:"images/florian-wehde-WBGjg0DsO_g-unsplash.jpg", 
        info:"City view. Photo by Florian Wehde - Unsplash"
    }
];

//click to insert in a modal

openModalAll.forEach(btn => btn.addEventListener("click", function (){
    let insert = `
    <div id="modal">
        <img class="modal-img shadow" src="${pics[btn.value].src}" alt="photo">
        <p>${pics[btn.value].info}</p>
        <button id="close-modal" class="shadow">Close</button>
    </div>`;

    overlay.innerHTML = insert;
    overlay.style.display = "block";
    //get id after creating, insert and 
    document.getElementById("close-modal")
    .addEventListener("click", function (){
        overlay.style.display = "none";
    });
}));
