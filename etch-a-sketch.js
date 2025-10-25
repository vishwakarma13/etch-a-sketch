let containerDiv = document.querySelector("#container");

 
for (let i=0; i<256; i++) {
    let createdDiv =document.createElement("div");
    createdDiv.classList.add("gridDiv")
    containerDiv.appendChild(createdDiv);
}
