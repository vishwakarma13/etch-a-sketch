let containerDiv = document.querySelector("#container");//is selected because the divs would be creted inside this element

// let numVariable;//declared globally to get input for further processing outside the button eventlistener

let button = document.querySelector("button");//button is selected for adding eventlistener

button.addEventListener("click", ()=>
  {
    let numVariable = parseInt(prompt("Enter a number between 1 to 100 :"))//parseint to convert user input to number
  
    if (numVariable>=1 && numVariable<=100){ //to check if the entered num is between 1 and 100

      for (let i=0; i<(numVariable*numVariable); i++) {//to create the required number of grid divs
        let createdDiv =document.createElement("div");
        createdDiv.classList.add("gridDiv");

        //to add the same number of grid divs vertically and horizontally
        createdDiv.style.width = (((500/numVariable)/500)*100)+"%";
        createdDiv.style.paddingBottom = (((500/numVariable)/500*100)+"%");

        //to change bgcolor of grid divs on mouse hover
        createdDiv.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = generateRandomRgbColor();
          }
        );

        containerDiv.appendChild(createdDiv);//to add the grid divs to container div after applying the above conditions and properties to grid divs
      }
    }
    
    else { //for warning if the number exceeds the accepted range
      let warningLine = document.createElement("h1");
      warningLine.textContent = "INVALID NUMBER : Number must be between 1 and 100";
      warningLine.style.color = "red";
      containerDiv.appendChild(warningLine);
    }
    
  } //arrow function ends here
); //addeventlistener method ends here

//function to generate random colors
function generateRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}







