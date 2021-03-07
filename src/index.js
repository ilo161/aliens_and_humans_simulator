import {animateSquares,
        canvasEvents,
        drawGrass,
        drawLetterNum,
        drawOnGrid,
        summonAliens,
        grassSquare,
        cursor
        } from "./scripts/canvas_events.js"

import progressBar from "./scripts/progressBar.js"
import {buildAssetPath} from "./scripts/util"
import "./styles/index.scss";


// import cursorPng from "./images/cursor.png"


import {
    drawResourcesText,
    drawPointsText,
    drawAlienCountdown,
    clearAlienText,
    adjustTimer,
    getTime,
    setTimer,
    drawMidline,
    spawnResources} from "./scripts/pointsSystem";

import Leviathan from "./scripts/leviathan";
import leviathanSheet from "./images/aliens/leviathan_strip.png";
const leviathanSprite = buildAssetPath(leviathanSheet);


// This is the cursor icon, preloaded with source path
// const cursor = new Image()
// cursor.src = buildAssetPath(cursorPng)


document.addEventListener("DOMContentLoaded", () =>  {

    const canvasHome = document.getElementById("canvas-home");
    const context = canvasHome.getContext('2d')

    canvasEvents(canvasHome, context)
    drawGrass(context)

    // leviathan(context, filePath, cx, cy, scaleW, scaleH){
    const leviathanArr = [];
    let leviCx = 100;
    let leviCy = 0;
    let leviCount = 0;

    for(let i = 0; i < 9; i++){
        const levi = new Leviathan(context, leviathanSprite, leviCx, leviCy, 131, 131);
        leviathanArr.push(levi);
        leviCx += 167;
    
        leviCount++;
        if(leviCx > 434) leviCx = 100;
        if(leviCount % 3 === 0) leviCy += 167;

    }
    
    //draw Production progress bar
    // y is 375
    // old
    // const blankLeft = new progressBar(context, -34, 125, "blank", "v")
    // pre resize
    // const blankLeft = new progressBar(context, -34, 115, "blank", "v");
    
    
    const blankLeft = new progressBar(context, -31, 115, "blank", "v");
    // const blankRight = new progressBar(context, 590, 115, "blank", "v");
    const blankRight = new progressBar(context, 612, 115, "blank", "v");
    // debugger
    drawMidline(context)
    drawLetterNum(context)
    drawPointsText(context, "community")
    drawPointsText(context, "production")
    
    //stick this into a "Start game button"
    const makeCountdownId = setInterval(() => {
        adjustTimer(-1);
        drawAlienCountdown(context);
        if(getTime() === 0){
            // context.clearRect(44,389,86,86)
            // animateSquares(cursor, context)
            clearAlienText(context)
            clearInterval(makeCountdownId)
            summonAliens(context)

            setTimeout(() =>{
                // animateLeviathans(levi1, levi2, levi3)

                animateLeviathans(...leviathanArr)

            },2500)
        }
    },1000)

    const makeResourcesId = setInterval(() => {
        spawnResources();
        // drawResourcesText(context);
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

const animateLeviathans = (...levis) => {
    let num = 1

    const leviatathanID = setInterval( () => {
      let isStatic = levis.some(levi => levi.drawSpin(leviatathanID))
      
      console.log(`${++num}, ${isStatic}`)
      if(isStatic) clearInterval(leviatathanID)

    },50)
}

   
// const leviatathanID = setInterval( () => {
//       let isStatic = levis.some(levi => {
//           console.log(levi.drawSpin(), "indexjs")
//       })
//       console.log(`${++num}, ${isStatic}`)
//       if(isStatic) clearInterval(leviatathanID)

//     },50)


