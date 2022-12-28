    // Create a container on the left for setting
    const pointer = document.querySelector("#bigContainer");
    const settingContainer = document.createElement("div");
    settingContainer.setAttribute("id", "setting");
    pointer.appendChild(settingContainer);
    
    // Create a container on the right for the sketchpad
    const container = document.createElement("div");
    container.setAttribute("id", "sketchpad");
    pointer.appendChild(container);

    // Create buttons
    let x= 4;
    for (i=0; i<x; i++) {
        const setting = document.getElementById("setting");
        const settingButton = document.createElement("button");
        settingButton.setAttribute("id", `button${i+1}`);
        setting.appendChild(settingButton);
    };

    document.getElementById("button1").textContent = "Normal";
    document.getElementById("button2").textContent = "Rainbow";
    document.getElementById("button3").textContent = "Erase";
    document.getElementById("button4").textContent = "Clear";



    // SETTINGS
    // Create prompt to change the number of grids
    let n;

    do {
        n = parseInt(prompt("How many grids per row do you want?"));
    } while (isNaN(n) || n < 1 || n >100);
    


    // Create rows 
    for (let i=0; i<n; i++)
    {
        const container = document.querySelector("#sketchpad");
        const rows = document.createElement("div");
        rows.setAttribute("id", "row"+(i+1));
        rows.setAttribute("class", "rows");
        container.appendChild(rows);

        // Create columns per row
        for (let j=n*i; j<n*(i+1); j++)
        {
            let id = "#row" + (i+1); 
            const row = document.querySelector(`${id}`);
            const grid = document.createElement("div");
            grid.setAttribute("id", "grid"+(j+1));
            grid.setAttribute("class", "grids");
            row.appendChild(grid);
        }; 

    };

// Create click effect
/* const normal = document.getElementById("button1");
normal.addEventListener("click", () => {
    const gridPointer = document.querySelectorAll(".grids");
    gridPointer.forEach((div) => {
        div.addEventListener('click', () => {
            div.setAttribute("style", "background-color: lightblue");
        });
    });
}); */



const normal = document.querySelector("#button1");
normal.addEventListener("click", () => {
    const gridPointer = document.querySelectorAll(".grids");
    gridPointer.forEach((div) => {
        div.addEventListener('click', () => {
            div.setAttribute("style", "background-color: lightblue");
        });
    });
});



const rainbow = document.querySelector("#button2");
rainbow.addEventListener("click", () => {
    const gridPointer = document.querySelectorAll(".grids");
    gridPointer.forEach((div) => {
        div.addEventListener("click", () => {
            let randomRgb1 = Math.floor(Math.random()*255);
            let randomRgb2 = Math.floor(Math.random()*255);
            let randomRgb3 = Math.floor(Math.random()*255);
            div.setAttribute("style", `background-color: rgb(${randomRgb1},${randomRgb2},${randomRgb3})`);
        });
    });
});

const erase = document.querySelector("#button3");
erase.addEventListener("click", () => {
    const gridPointer = document.querySelectorAll(".grids");
    gridPointer.forEach((div) => {
        div.addEventListener("click", () => {
            div.setAttribute("style", `background-color: grey`);
        });
    });
});

const clear = document.querySelector("#button4");
clear.addEventListener("click", () => {
    const gridPointer = document.querySelectorAll(".grids");
    gridPointer.forEach( (div) => {
        div.setAttribute("style", "background-color: grey");
    });
});

