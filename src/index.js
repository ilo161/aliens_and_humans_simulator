import {animateSquares,
     canvasEvents,
      drawGrass,
       drawOnGrid,
    summonAliens} from "./scripts/canvas_events.js"
import progressBar from "./scripts/progressBar.js"
import "./styles/index.scss";

import {
    drawResourcesText,
    drawMidline,
    spawnResources} from "./scripts/pointsSystem";




document.addEventListener("DOMContentLoaded", () =>  {

    const canvasHome = document.getElementById("canvas-home");
    const context = canvasHome.getContext('2d')

    canvasEvents(canvasHome, context)
    drawGrass(context)
    //draw Production progress bar
    // y is 375
    // const blankLeft = new progressBar(context, -34, 125, "blank", "v")
    const blankLeft = new progressBar(context, -34, 115, "blank", "v");
    const blankRight = new progressBar(context, 590, 115, "blank", "v");
    // debugger
    drawMidline(context)
    const makeResourcesId = setInterval(() => {
        spawnResources();
        drawResourcesText(context);
    }, 600)

    setInterval(() => {
        drawResourcesText(context);
    }, 250)
    // spawnResources();
    // drawResourcesText(context);




    // const greenBar = new progressBar(context, -34, 105, "green", "v", 10);
    // const blueBar = new progressBar(context, 590, 105, "blue", "v", 20);
    // const redBar = new progressBar(context, -34, 375, "blue", "v")

    // const greenBar = new progressBar(context, -34, 105, "green", "v", 90);

    // greenBar.increaseFill(100)

    // const yellowBar = new progressBar(context, 590, 375, "yellow", "v")

    //start points
    // const yellowBar = new progressBar(context, 590, 445, "yellow", "v")
    // const blueBar = new progressBar(context, 590, 105, "blue", "v", 20);
    // productionBar.drawBar(context)
    // productionBar.blankSprite.onload = () => {
    //     
    //     context.drawImage(productionBar.blankSprite, productionBar.startX, productionBar.startY);
    //     context.drawImage(productionBar.colorSprite, productionBar.startX, productionBar.startY);
    // }
    // productionBar.increaseFill()
    // progressBar(context, 626, 476, "blue")

    // summonAliens(context)
    

    
    // let choice = menu.options[menu.selectedIndex].value

    // let imgTest = new Image();
    
    // imgTest.src = "/src/images/terrain_grass/grass_mix_n.jpg"

    // imgTest.onload = () => {

        // for(let i = 0; i < 7; i++){
        //     for(let j = 0; j < 7; j++){
                // drawOnGrid(imgTest, i, j)
                // animateSquares(imgTest)


        //     }
        // }
        // drawOnGrid(imgTest, 6)
    // }

    


})

    // let imgTest = new Image();
    
    // imgTest.src = "/src/images/terrain_grass/grass_mix_n.jpg"

    // imgTest.onload = () => {

    //     drawOnGrid(imgTest, 0, 5)
    //     // drawOnGrid(imgTest, 6)
    // }
//  backgrounds()





// const backgrounds = require("./scripts/backgrounds.js")