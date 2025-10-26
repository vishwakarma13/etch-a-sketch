let containerDiv = document.querySelector("#container");


let numVariable;

let button = document.querySelector("button");
button.addEventListener("click", ()=>{
  numVariable = parseInt(prompt("What should be the grid size?"))
  }
)


function generateRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}


//TAKING INPUT FROM THE USER TO CREATE GRID DIVS



 
for (let i=0; i<256; i++) {
    let createdDiv =document.createElement("div");
    createdDiv.classList.add("gridDiv");



    createdDiv.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = generateRandomRgbColor();});

    // createdDiv.addEventListener('mouseleave', (e) => {
    // e.target.style.backgroundColor = 'red';});


    containerDiv.appendChild(createdDiv);

}




