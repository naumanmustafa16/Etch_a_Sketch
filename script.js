const btn =document.querySelector("button");
let squares  = 0;
btn.addEventListener("click", () =>{
    const container = document.querySelector("#container");
    container.innerText = "";
    squares = prompt("Please enter No. of squares you want to have on either side? ");
    squares = parseInt(squares);
    if (squares >100) {squares = 100}
    
    container.setAttribute("class","highlight")
    for (i = 1; i <= squares; i++){
        const grid_row = document.createElement("div");
        grid_row.setAttribute("class","grid_row");
        container.appendChild(grid_row);
    
        for (j=1; j <= squares; j++){
            const grid = document.createElement("div");
            grid.setAttribute("class","grid");
            let ht = 1080/squares;
            grid.style.height = ht.toString()+"px";
            grid.style.width = ht.toString()+"px";
            grid_row.appendChild(grid);
            // grid.textContent = j
            }
        }
    const new_grid = document.querySelectorAll(".grid");
    new_grid.forEach(function(grid){
        grid.addEventListener("mouseover", () =>{
            grid.style.backgroundColor = chooseRandomcolors();
        })
    })
    
}

)


// for (i = 0 ; i <= new_grid.length; i++)
// {new_grid[i].textContent = i}

function chooseRandomcolors(){
  let hexNumbers = '0123456789ABCDEF';
  let color = '#';
  for (i = 0; i<6; i++){
    color += hexNumbers[Math.floor(Math.random()*16)];
    
}
    return color;
}
