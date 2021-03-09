import AlienShip from "./alien_ship";
import MotherShip from "./mothership";
import {buildAssetPath} from "./util"
import {
    playerPoints,
    drawPointsText,
    adjustPoints,
    adjustResources,
    adjustTimer
} from "./pointsSystem"

import {allSprites} from "./allSprites"

import grassD from "../images/terrain_grass/grass_mix_d.jpg"
import cursorPng from "../images/cursor.png"


export let _listener = undefined;
// //ex: [3,4]
let currentGrid = undefined;
let previousGrid = undefined;
let onMobile = false;

//This is a generic grass square preloaded with source path
export const grassSquare = new Image()
grassSquare.src = buildAssetPath(grassD)

// This is the cursor icon, preloaded with source path
export const cursor = new Image()
cursor.src = buildAssetPath(cursorPng)



// skeleton for onPlayerGrid
//{isPresent: false, cORp: "", klass: "", level: null}
const onPlayerGrid = buildPlayerState()

// This function builds an object containing all the coordinates of the play grid and 
// stores state of what the player has played
function buildPlayerState(){
    let buildPlayerGrid = {}
    for(let i = 0 ; i < 4; i++){
        buildPlayerGrid[i] = {}
        for(let j = 0; j < 7; j++){

            buildPlayerGrid[i][j] = {isPresent: false, cORp: "", klass: "", level: null, name: ""}
        }
    }
    return buildPlayerGrid
}


//skeleton
//{file: """, name:"", cBoost: 10, pBoost: 0, community:"", klass:"", index:#}
const civilization = {
        community: {
                fountains: [
                    {file: buildAssetPath(allSprites["fountain0"]), name:"Dual Fountain", boost: 10, cORp: "community", klass:"fountains", index:0 }
                ],
                meditations: [
                    {file: buildAssetPath(allSprites["meditate0"]), name:"Ruins Meditate", boost: 10, cORp: "community", klass:"meditations", index:0 },
                    {file: buildAssetPath(allSprites["meditate1"]), name:"Enlightened Meditate", boost: 20, cORp: "community", klass:"meditations", index:1 },
                    {file: buildAssetPath(allSprites["meditate2"]), name:"Activated Meditate", boost: 30, cORp: "community", klass:"meditations", index:2 },

                ],
                pyramids: [
                    {file: buildAssetPath(allSprites["pyramid0"]), name:"Red Pyramid", boost: 10, cORp: "community", klass:"pyramids", index:0 },
                    {file: buildAssetPath(allSprites["pyramid1"]), name:"Golden Pyramid", boost: 20, cORp: "community", klass:"pyramids", index:1 },
                    {file: buildAssetPath(allSprites["pyramid2"]), name:"Pyramid of Light", boost: 30, cORp: "community", klass:"pyramids", index:2 }
                
                ],
                ruins: [
                    {file: buildAssetPath(allSprites["ruin0"]), name:"Yellow Slab", boost: 10, cORp: "community", klass:"ruins", index:0 },
                    {file: buildAssetPath(allSprites["ruin1"]), name:"Rainbow Rock", boost: 20, cORp: "community", klass:"ruins", index:1 },
                    {file: buildAssetPath(allSprites["ruin2"]), name:"Stone of Light", boost: 30, cORp: "community", klass:"ruins", index:2 }

                ],
                trees:[
                    {file: buildAssetPath(allSprites["tree0"]), name:"Small Tree", boost: 10, cORp: "community", klass:"trees", index:0 },
                    {file: buildAssetPath(allSprites["tree1"]), name:"Mighty Tree", boost: 20, cORp: "community", klass:"trees", index:1 },
                    {file: buildAssetPath(allSprites["tree2"]), name:"Tree of Light", boost: 30, cORp: "community", klass:"trees", index:2 }
                ]
                },
        production: {
                business: [
                    {file: buildAssetPath(allSprites["biz0"]), name:"Fruit Stand", boost: 15, cORp: "production", klass:"business", index:0 },
                    {file: buildAssetPath(allSprites["biz1"]), name:"Mall", boost: 25, cORp: "production", klass:"business", index:1 },
                    {file: buildAssetPath(allSprites["biz2"]), name:"Skyscraper", boost: 90, cORp: "production", klass:"business", index:2 }
                ],
                  energy: [
                    {file: buildAssetPath(allSprites["energy0"]), name:"Water Wheel", boost: 15, cORp: "production", klass:"energy", index:0 },
                    {file: buildAssetPath(allSprites["energy1"]), name:"Wind Mill", boost: 25, cORp: "production", klass:"energy", index:1 },
                    {file: buildAssetPath(allSprites["energy2"]), name:"Tesla Tower", boost: 35, cORp: "production", klass:"energy", index:2 },
                    {file: buildAssetPath(allSprites["energy3"]), name:"Nuclear", boost: 45, cORp: "production", klass:"energy", index:3 },
                    {file: buildAssetPath(allSprites["energy4"]), name:"Efficient Nuclear", boost: 55, cORp: "production", klass:"energy", index:4 }
                  ],
                  flight:[
                    {file: buildAssetPath(allSprites["flight0"]), name:"Hot Air Balloon", boost: 15, cORp: "production", klass:"flight", index:0},
                    {file: buildAssetPath(allSprites["flight1"]), name:"Helicopter", boost: 25, cORp: "production", klass:"flight", index:1},
                    {file: buildAssetPath(allSprites["flight2"]), name:"Airplane", boost: 35, cORp: "production", klass:"flight", index:2},
                    {file: buildAssetPath(allSprites["flight3"]), name:"Jet", boost: 45, cORp: "production", klass:"flight", index:3},
                  ],
                houses: [
                     {file: buildAssetPath(allSprites["house0"]), name:"Cold House", boost: 15, cORp: "production", klass:"houses", index:0 },
                     {file: buildAssetPath(allSprites["house1"]), name:"Farm House", boost: 25, cORp: "production", klass:"houses", index:1 },
                     {file: buildAssetPath(allSprites["house2"]), name:"Warm House", boost: 35, cORp: "production", klass:"houses", index:2 }
                    ],
                weapons: [
                     {file: buildAssetPath(allSprites["weapon0"]), name:"Defense Missle", boost: 15, cORp: "production", klass:"weapons", index:0 },
                     {file: buildAssetPath(allSprites["weapon1"]), name:"Attack Missle", boost: 25, cORp: "production", klass:"weapons", index:1 },
                     {file: buildAssetPath(allSprites["weapon2"]), name:"Mind Control", boost: 35, cORp: "production", klass:"weapons", index:2 }
                ]
                  
        }
}


export const canvasEvents = (canvasHome, context) => {
    //dropdown on right side
    let menuContainer = document.getElementsByClassName("drop-down-container")[0]
    let menu = document.getElementsByClassName("civilization-menu")[0]
    const allDropDownCategories = Array.from(document.getElementsByClassName("cat"));
    const mainDropDown = Array.from(menu);
    // let menu = document.getElementsByClassName("nocat")[0]
    const playerAlert = document.getElementsByClassName("playerAlert")[0]
    const playerAlert2 = document.getElementsByClassName("playerAlert2")[0]
    
    // this is the "anonymous function" given to canvasHome as an event listener 
    // variable is made to allow it to be removed later
     _listener = function(e) {
        handleMouseDown(e, canvasHome, context, 
        menuContainer, menu, playerAlert, playerAlert2)
    }
    
    canvasHome.addEventListener('mousedown', _listener)
   
    if ( /Android|webOS|iPhone|iPod|iPad|Blackberry|Windows Phone/i.test(navigator.userAgent)){
       onMobile = true;
    }
    
    
    // When user selects from the drop down menu to place a sprite
    menu.addEventListener(onMobile === false ? "click" : "change", (e) => {
        // Remove error message if there is one
        removePlayerAlert(playerAlert)
        removePlayerAlert(playerAlert2)
        
        // show what sprite is currently there
        if (previousGrid !== undefined){
            if(previousGrid[0] === currentGrid[0] 
                && previousGrid[1] === currentGrid[1]
                && isGridOccupied()){

            const currBuild = onPlayerGrid[currentGrid[0]][currentGrid[1]]
            playerAlert2.appendChild(generateAlert(generateCurrSelText(currBuild), false))

            } 
        }

        if(playerAlert2.childElementCount === 0 && isGridOccupied()){
                const currBuild = onPlayerGrid[currentGrid[0]][currentGrid[1]]
                playerAlert2.appendChild(generateAlert(generateCurrSelText(currBuild), false))
        }
        

        // player clicks on an option that isn't a play sprite
        if (allDropDownCategories.includes(e.target) ){
            playerAlert.appendChild(generateAlert("That is not a building"))
            return false;
        }

        // console.log("resources",playerPoints.resources)
        
        
        // minimum purchase price required
        if (playerPoints.resources < 20){
            playerAlert.appendChild(generateAlert("Every building costs 20 resources ... !"))
            return false
        } 
        
        //choiceStr is "production,houses,0"
        const choiceStr = menu.options[menu.selectedIndex].value

        // prevent incorrect choice on dropdown from being playable as a sprite
        if (!choiceStr.includes(",")){
            playerAlert.appendChild(generateAlert("That is not a building"))
            return false;
        } 


        // handle all the error cases with verifyBuildingMatch FN
        const okToRender = verifyBuildingMatch(choiceStr, menu)
        if (!okToRender){
            // console.log("choiceStr", choiceStr)
            // console.log("can't draw")
            menu.disabled = false;
            if(onMobile){
                // playerAlert.appendChild(generateAlert("On Mobile"))
                menu.selectedIndex = null
            }
            return false;
        } 
        
        // chosenBuilding is syntax is....
        // {isPresent: false, cORp: "", klass: "", level: null}
        const chosenBuilding = civilizationMenuSelect(choiceStr)
        const filePathBuild = chosenBuilding.file
        
        // If we made it this far, we know the option selected IS a valid building
        // Image file has been parsed

        //place sprite if not occupied
        if(!isGridOccupied()){

            // Is the first building to be places
            if (isInitialBuilding(chosenBuilding) === true){
                parseImage(context, filePathBuild, currentGrid)
                
                const currBuild = occupyGrid(chosenBuilding)

                playerAlert2.appendChild(generateAlert(generateCurrSelText(currBuild), false))
                
                // console.log("PAY UP")
                adjustResources(-20)

                playerPoints[chosenBuilding.cORp] += chosenBuilding.boost
                drawPointsText(context, chosenBuilding.cORp)
                adjustPoints(playerPoints[chosenBuilding.cORp], context, chosenBuilding.cORp)
            } else {
                playerAlert.appendChild(generateAlert("That building is not the first of it's kind!"))
            }
        } else if (isGridOccupied()){
            
             // Already a building on grid pos
             const x = currentGrid[0];
             const y = currentGrid[1];

             const objAtGridPos = onPlayerGrid[x][y];
            
             if (chosenBuilding.index === (objAtGridPos.level + 1)){
                // player upgrades appropriately by 1 level
                //re-render grass first && remove previous building
                // console.log("DRAW!!!")
                drawOnGrid(grassSquare, context, x, y, true)
                
                parseImage(context, filePathBuild, currentGrid)

                //prepare playerAlert2 iff the cursor is at a new spot
                const currBuild = occupyGrid(chosenBuilding)
            
                if (playerAlert2.childElementCount === 0){
                   playerAlert2.appendChild(generateAlert(generateCurrSelText(currBuild), false))
                } else {

                  removePlayerAlert(playerAlert2)
                  playerAlert2.appendChild(generateAlert(generateCurrSelText(currBuild), false))
                }

                // console.log("PAY UP")
                adjustResources(-20)
                playerPoints[chosenBuilding.cORp] += chosenBuilding.boost
                drawPointsText(context, chosenBuilding.cORp)
                //  menu.disabled = false
            }


        }


        // reset default of dropdown
            // console.log("GO FALSE!")
            menu.disabled = false
            if(onMobile){
                // playerAlert.appendChild(generateAlert("On Mobile"))
                menu.selectedIndex = null
            }
            // console.log("playerpoints", playerPoints)




    })

    const verifyBuildingMatch = (choiceStr, menu) => {
        const x = currentGrid[0]
        const y = currentGrid[1]
        menu.disabled = true

        if(onPlayerGrid[x][y].isPresent === true){

            let optionsArr = choiceStr.split(",")
            let nextcORp = null
            let nextKlass = null;
            let nextIndex = null;
            [nextcORp, nextKlass, nextIndex] = optionsArr;
            nextIndex = parseInt(optionsArr[2])
            
            const objAtGridPos = onPlayerGrid[x][y]
            const maxIndexOfType = civilization[nextcORp][nextKlass].length - 1

            if(objAtGridPos.cORp !== nextcORp || objAtGridPos.klass !== nextKlass){
                playerAlert.appendChild(generateAlert("Building types must match!"))
                return false;
            } else if (nextKlass === objAtGridPos.klass && nextIndex === objAtGridPos.level
                && maxIndexOfType != nextIndex){

                playerAlert.appendChild(generateAlert("That building is already there. Try upgrading!"));
                return false
             } else if (nextKlass === objAtGridPos.klass) {
                // building klass is a match
                
                // player has maxed out upgrade
                 if (maxIndexOfType === objAtGridPos.level){
                     // players attempts to downgrade a max upgrade unit
                     if (nextIndex < maxIndexOfType){
                         playerAlert.appendChild(generateAlert("Go forth & build! The aliens are coming!"));
                         return false;
                     } else {
                         // players pick max upgrade again
                         playerAlert.appendChild(generateAlert("Max upgrade achieved!"));
                         return false;
                     }
                 } else if (nextIndex < objAtGridPos.level){
                     playerAlert.appendChild(generateAlert("Try upgrading, we must not regret our past decisions"));
                     return false;
                 } else if((objAtGridPos.level + 1) !== nextIndex){
                     playerAlert.appendChild(generateAlert("Upgrade one level at a time!"));
                     return false;
                } 
            }

        }
        return true
    }

}

export const handleMouseDown = (e, canvasHome, context, menuContainer, menu, playerAlert, playerAlert2) => {
    currentGrid = getCoords(e, canvasHome);

        // Menu is hidden . Therefore show the dropdown menu
        if(currentGrid && Array.from(menuContainer.classList).includes("hidden")){
            const x = currentGrid[0];
            const y = currentGrid[1];

            //show dropdown if user clicks in playgrid
            menuContainer.classList.toggle("hidden")

            //expand the dropdown
            const len = menu.options.length;
            menu.setAttribute('size', len);

            if(!isGridOccupied()){
                removePlayerAlert(playerAlert)
                previousGrid = currentGrid
                // console.log("previous grid", previousGrid)
                //draw crosshair
                drawOnGrid(cursor, context, x, y)
            } else {
                removePlayerAlert(playerAlert)
                const currBuild = onPlayerGrid[x][y]
                playerAlert2.appendChild(generateAlert(generateCurrSelText(currBuild), false))
            }

        } else if(currentGrid && !Array.from(menuContainer.classList).includes("hidden")){
            // Menu is not hidden, Game is Playable
            // Draw cursor options below
            if(!isGridOccupied()){
                removePlayerAlert(playerAlert)
                removePlayerAlert(playerAlert2)
                const x = currentGrid[0];
                const y = currentGrid[1];

                if(previousGrid !== undefined){
                    const prevX = previousGrid[0];
                    const prevY = previousGrid[1];
                    
                    //remove crosshair cursor iff the previous grid wasn't built on.
                    // if(!isGridOccupied(prevX, prevY)){
                    if (onPlayerGrid[prevX][prevY].isPresent === false){
                        drawOnGrid(grassSquare, context, prevX, prevY, true)
                    }
                }

                //remove crosshair cursor iff the previous grid wasn't built on.
                // draw new crosshair
                previousGrid = currentGrid
                drawOnGrid(cursor, context, x, y)
            } else {
                removePlayerAlert(playerAlert)
                removePlayerAlert(playerAlert2)
                const x = currentGrid[0];
                const y = currentGrid[1];

                if(previousGrid !== undefined){
                    const prevX = previousGrid[0];
                    const prevY = previousGrid[1];
                
                    //remove crosshair cursor iff the previous grid wasn't built on.
                    // if(!isGridOccupied(prevX, prevY)){
                    if(onPlayerGrid[prevX][prevY].isPresent === false){
                        drawOnGrid(grassSquare, context, prevX, prevY, true)
                    }
                }
                const currBuild = onPlayerGrid[x][y]
                playerAlert2.appendChild(generateAlert(generateCurrSelText(currBuild), false))
            }
        } else if (currentGrid === undefined && !Array.from(menuContainer.classList).includes("hidden")) {
            removePlayerAlert(playerAlert)
            removePlayerAlert(playerAlert2)

            if(previousGrid !== undefined){
                const prevX = previousGrid[0];
                const prevY = previousGrid[1];
            
                //remove crosshair cursor
                if(onPlayerGrid[prevX][prevY].isPresent === false){
                    drawOnGrid(grassSquare, context, prevX, prevY, true)
                }
            }
            
            previousGrid = undefined;

            //hide dropdown if user clicks outside play grid            
            menuContainer.classList.toggle("hidden")

        } 
        // console.log(`currentGrid: ${currentGrid}`)
        // console.log(`previousGrid: ${previousGrid}`)
}

const getCoords = (e, canvasHome) => {
        let canvasRect = canvasHome.getBoundingClientRect();
        let cx;
        let cy;
        let px = e.pageX;
        let py = e.pageY;

        // console.log("-------")
        // console.log("px", px)
        // console.log("py", py)

        cx = px - canvasRect.left
        cy = py - canvasRect.top
        // console.log(canvasRect)

        // console.log("-------")
        // console.log("cx", cx)
        // console.log("cy",cy)
        // const col = Math.floor((cx - 22) / 86) ;
        // const row = Math.floor((cy - 131) / 86) ;

        const col = Math.floor((cx - 49) / 86) ;
        const row = Math.floor((cy - 138) / 86) ;

        // current location console.log
        // console.log(`X: [${row}, Y: ${col}]`)

        //did click on game grid
        if (row >= 0 && row <= 3 && col >= 0 && col <= 6){
            return [row,col]
        }
        //did NOT click on game grid
        else {
            return undefined
        }
            
}

// x is a row and goes top -> down
    const gridDecoderX = {
        0: "A",
        1: "B",
        2: "C",
        3: "D"
    }

    const gridDecoderY = {
        0: "1",
        1: "2",
        2: "3",
        3: "4",
        4: "5",
        5: "6",
        6: "7",
    }

const generateAlert = (msg, isErrorMsg = true) => {
        // Add message to the DOM -> "That building is already there. Try upgrading!"
        const ele = document.createElement('span');
        
        if(isErrorMsg){
            const text = document.createTextNode(msg); 
            ele.appendChild(text);

            ele.setAttribute('class', 'playerAlert');
            return ele
        } else {
            const $p = document.createElement('p');
            const parts = msg.split(";");

            const text = document.createTextNode(parts[0]);
            const posText = document.createTextNode(parts[1]);
            ele.appendChild(text)
            $p.appendChild(posText)
            ele.setAttribute('class', 'playerAlert2');
            $p.setAttribute('class', 'red');

            ele.appendChild($p)
            return ele
        }

        
}

const generateCurrSelText = (justBuilt) => {
        const x = gridDecoderX[currentGrid[0]]
        const y = gridDecoderY[currentGrid[1]]

        let str = `Current Selection: ${justBuilt.name} ; @ [${x},${y}]`

        return str
}

const removePlayerAlert = (alertType) => {
    const thisMany = alertType.childElementCount

    if (thisMany > 0){
        alertType.removeChild(alertType.childNodes[0]); 
    }
         
}

// selected argument is "production,houses,0"
const civilizationMenuSelect = (selected) => {
        let optionsArr = selected.split(",")
        let cORp = null
        let klass = null;
        let index = null;
        [cORp, klass, index] = optionsArr;
        // console.log("--")
        // console.log(optionsArr);
        // console.log(civilization[cORp][klass][index]);

        return civilization[cORp][klass][index]
    }

//function will draw grass
export const drawGrass = (context) => {
    let img1 = new Image()

        img1.src = buildAssetPath(grassD)

        img1.onload = () => {
            
            drawRow(context, img1, 44, 131)
            drawRow(context, img1, 44, 217)
            drawRow(context, img1, 44, 303)
            drawRow(context, img1, 44, 389)

        }
    

    const drawRow = (context, image, rowX, rowY) => {
        for(let i = 0; i < 7; i++){
            context.drawImage(image, rowX, rowY, 86, 86 )
            rowX += 86
        }
    }
}

export const drawLetterNum = (context) => {
    const alpha = ["A", "B", "C", "D"]
    const numeric = [1, 2, 3, 4, 5, 6, 7]
    // coordinates for Letters on left side
    const startAlphaX = 32;
    let startAlphaY = 177;
    // coordinates for numbers on bottom of board
    let startNumX = 83;
    const startNumY = 489;

    context.font = 'bold 13px Sans-Serif';
    context.fillStyle = "#FFF"
    context.strokeStyle = "#FFF";
    for(let i = 0; i < alpha.length; i++){
        context.fillText(alpha[i], startAlphaX, startAlphaY);
        startAlphaY += 86;

    }

    for (let i = 0; i < numeric.length; i++) {
        context.fillText(numeric[i], startNumX, startNumY);
        startNumX += 86;

        
    }

}

const isGridOccupied = (x = currentGrid[0], y = currentGrid[1]) => {
    return onPlayerGrid[x][y].isPresent
}

//update gameState with chosen Building
const occupyGrid = (chosenBuilding) => {
    const x = currentGrid[0]
    const y = currentGrid[1]

    onPlayerGrid[x][y].isPresent = true
    onPlayerGrid[x][y].cORp = chosenBuilding.cORp
    onPlayerGrid[x][y].klass = chosenBuilding.klass
    onPlayerGrid[x][y].level = chosenBuilding.index
    onPlayerGrid[x][y].name = chosenBuilding.name


    return onPlayerGrid[x][y]
}



const isInitialBuilding = (chosenBuilding) => {
    if (chosenBuilding.index === 0) return true;
    return false
}


export const summonAliens = (context) => {
    const motherShip = new MotherShip(context)
        motherShip.makeShips()
        const intId1 = setInterval(motherShip.army[0].lToRAnimate, 150)
        const intId2 = setInterval(motherShip.army[1].lToRAnimate, 150)
        const intId3 = setInterval(motherShip.army[2].lToRAnimate, 150)


        setTimeout(()=>clearInterval(intId1),2100)
        setTimeout(()=>clearInterval(intId2),2100)
        setTimeout(()=>clearInterval(intId3),2100)
} 

const parseImage = (context, filePath, currentGrid) =>{
    let image = new Image();
    image.src = filePath;

    const x = currentGrid[0];
    const y = currentGrid[1];

    // remove crosshair before placing new sprite
    drawOnGrid(grassSquare, context, x, y, true);

    image.onload = () => {        
        drawOnGrid(image, context, x, y)
    }

}

// FN will draw an image at the appropriate spot on the grid
const drawOnGrid = (image, context, gridX, gridY, clearRectBoolean) => {
    // console.log("draw on grid", gridX, gridY)
        // const offsetX = 22;
        const offsetY = 131;
        const offsetX = 44;

        // const offsetY = 136;
        const topLeftX = 86;
        const topLeftY = 86;    

        if (gridX === 0 && gridY === 0) {
    
            if (clearRectBoolean){
                context.clearRect(offsetX, offsetY, 86, 86)
                context.drawImage(image, offsetX, offsetY, 86, 86)
            } else {
                context.drawImage(image, offsetX, offsetY, 86, 86 )
            }
        } else if (gridX === 0 && gridY > 0){

            if (clearRectBoolean){
                context.clearRect(((topLeftX * gridY) + offsetX), ((topLeftY * gridX) + offsetY), 86, 86)
                context.drawImage(image, ((topLeftX * gridY) + offsetX), ((topLeftY * gridX) + offsetY), 86, 86 )
            } else {
                context.drawImage(image, ((topLeftX * gridY) + offsetX), offsetY, 86, 86 )
            }
        } else {

            if (clearRectBoolean){
                context.clearRect(((topLeftX * gridY) + offsetX), ((topLeftY * gridX) + offsetY), 86, 86)
                context.drawImage(image, ((topLeftX * gridY) + offsetX), ((topLeftY * gridX) + offsetY), 86, 86 )
            } else {
                context.drawImage(image, ((topLeftX * gridY) + offsetX), ((topLeftY * gridX) + offsetY), 86, 86 )
            }
        }

    
}

export const animateSquares = (image, context) => {
    context.clearRect(44, 131, 602, 344)
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 7; j++){
            drawOnGrid(grassSquare, context, i, j)
            drawOnGrid(image, context, i, j)
            
        }
    }

}

export const drawLightning = (image, context) => {
    context.drawImage(image, 0, 0, context.canvas.width, context.canvas.height)
}








