import {animateSquares,
     canvasEvents,
      drawGrass,
       drawOnGrid,
    summonAliens} from "./scripts/canvas_events.js"
import progressBar from "./scripts/progressBar.js"
import "./styles/index.scss";




document.addEventListener("DOMContentLoaded", () =>  {

    const canvasHome = document.getElementById("canvas-home");
    const context = canvasHome.getContext('2d')

    canvasEvents(canvasHome, context)
    drawGrass(context)
    //draw Production progress bar
    
    const productionBar = new progressBar(context, 0, 375, "blue", "v")
    const productionBar2 = new progressBar(context, 590, 375, "blue", "v")
    // productionBar.drawBar(context)
    // productionBar.blankSprite.onload = () => {
    //     debugger
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