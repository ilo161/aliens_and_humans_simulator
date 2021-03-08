import {animateSquares,
        canvasEvents,
        drawGrass,
        drawLetterNum,
        summonAliens,
        drawLightning,
        _listener
        } from "./scripts/canvas_events.js";

import progressBar from "./scripts/progressBar.js";
import {buildAssetPath, animateLeviathans} from "./scripts/util";
import "./styles/index.scss";

import {
    drawResourcesText,
    drawPointsText,
    drawAlienCountdown,
    clearAlienText,
    adjustTimer,
    getTime,
    setTimer,
    drawMidline,
    spawnResources,
    getPoints} from "./scripts/pointsSystem";

import Leviathan from "./scripts/leviathan";
import leviathanSheet from "./images/aliens/leviathan_strip.png";
import fullLightningPng from "./images/background/full_lightning.png"
import chickenPng from "./images/animals/chicken.png"

const leviathanSprite = buildAssetPath(leviathanSheet);
const fullLightning = new Image();
const chicken = new Image();
fullLightning.src = buildAssetPath(fullLightningPng)
chicken.src = buildAssetPath(chickenPng)




// This is the cursor icon, preloaded with source path
// const cursor = new Image()
// cursor.src = buildAssetPath(cursorPng)


document.addEventListener("DOMContentLoaded", () =>  {

    const canvasHome = document.getElementById("canvas-home");
    const context = canvasHome.getContext('2d')
    const menuContainer = document.getElementsByClassName("drop-down-container")[0]
    const youWin = document.getElementsByClassName("youwin")[0]
    const youLose = document.getElementsByClassName("youlose")[0]


    

    canvasEvents(canvasHome, context)
    drawGrass(context)


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
    // const blankRight = new progressBar(context, 590, 115, "blank", "v");
    
    
    const blankLeft = new progressBar(context, -31, 115, "blank", "v");
    const blankRight = new progressBar(context, 612, 115, "blank", "v");
    // debugger
    drawMidline(context)
    drawLetterNum(context)
    drawPointsText(context, "community")
    drawPointsText(context, "production")

    // draw the players $$ on bottom middle of canvas
    const drawResourcesTextId = setInterval(() => {
        drawResourcesText(context);
    }, 600)

    // spawn random resources
    const makeResourcesId = setInterval(() => {
        spawnResources();
        // drawResourcesText(context);
    }, 600)
    
    //stick this into a "Start game button"
    const makeCountdownId = setInterval(() => {
        adjustTimer(-1);
        drawAlienCountdown(context);
        if(getTime() === 0){
            // context.clearRect(44,389,86,86)
            // animateSquares(cursor, context)
            clearAlienText(context)
            clearInterval(makeCountdownId)
            clearInterval(drawResourcesTextId)

            // remove mousedown event listener for canvas.
            canvasHome.removeEventListener("mousedown", _listener)


            // hide the buildings menu
            if(!Array.from(menuContainer.classList).includes("hidden")){
                menuContainer.classList.toggle("hidden")

            }

            summonAliens(context)

            setTimeout(() =>{
                // player loses the game
                if(getPoints("community") <= getPoints()){
                    animateSquares(chicken,context)
                    setTimeout(() => {
                        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
                        animateLeviathans(context, ...leviathanArr)
                        setTimeout( () =>{
                             drawLightning(fullLightning, context)
                             setTimeout(()=> {
                                 youLose.classList.toggle("hidden")
                                //  setTimeout(() => window.location.reload(), 10000)
                                }, 1500)
                             
                            }, 3000)
                    },2000)
                } else{
                    //player wins the game
                    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
                    animateLeviathans(context, ...leviathanArr)
                    setTimeout( () =>{
                        youWin.classList.toggle("hidden")
                        // setTimeout(() => window.location.reload(), 10000)
                            }, 4000)
                }
            },2500)
        }
    },1000)

})



