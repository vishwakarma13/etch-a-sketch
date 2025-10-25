let containerDiv = document.querySelector("#container");

 
for (let i=0; i<256; i++) {
    let createdDiv =document.createElement("div");
    createdDiv.classList.add("gridDiv");



    createdDiv.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = 'green';});

    // createdDiv.addEventListener('mouseleave', (e) => {
    // e.target.style.backgroundColor = 'red';});


    containerDiv.appendChild(createdDiv);

}


