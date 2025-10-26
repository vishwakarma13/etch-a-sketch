let containerDiv = document.querySelector("#container");//is selected because the divs would be creted inside this element

// let numVariable;//declared globally to get input for further processing outside the button eventlistener

let button = document.querySelector("button");//button is selected for adding eventlistener

button.addEventListener("click", ()=>{
  let numVariable = parseInt(prompt("What should be the grid size?"))//parseint to convert user input to number


  for (let i=0; i<(numVariable*numVariable); i++) {
    let createdDiv =document.createElement("div");
    createdDiv.classList.add("gridDiv");

    //ADDING LENGTH AND BREADTH TO createdDiv
    createdDiv.style.width = (((500/numVariable)/500)*100)+"%";
    createdDiv.style.paddingBottom = (((500/numVariable)/500*100)+"%");


    //TO CHANGE BGCOLOR OF GRID DIVS ON MOUSE HOVER
    createdDiv.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = generateRandomRgbColor();});

    containerDiv.appendChild(createdDiv);
  }


  } //arrow function ends here
) //addeventlistener method ends here

//function to generate random colors
function generateRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}







