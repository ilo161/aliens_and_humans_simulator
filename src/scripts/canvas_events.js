import AlienShip from "./alien_ship";
import MotherShip from "./mothership";
import {buildAssetPath} from "./util"
import {playerPoints, adjustPoints, adjustResources} from "./pointsSystem"

import {allSprites} from "./allSprites"

import grassD from "../images/terrain_grass/grass_mix_d.jpg"
// import grassD from "../images/terrain_grass/midgrass.jpg"

// //ex: [3,4]
let currentGrid = undefined;

//This is a generic grass square preloaded with source path
const grassSquare = new Image()
grassSquare.src = buildAssetPath(grassD)

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

            buildPlayerGrid[i][j] = {isPresent: false, cORp: "", klass: "", level: null}
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
                farms: [],
                buildings: [],
                  energy: [
                    {file: buildAssetPath(allSprites["energy0"]), name:"Water Wheel", boost: 15, cORp: "production", klass:"energy", index:0 },
                    {file: buildAssetPath(allSprites["energy1"]), name:"Wind Mill", boost: 25, cORp: "production", klass:"energy", index:1 },
                    {file: buildAssetPath(allSprites["energy2"]), name:"Tesla Tower", boost: 35, cORp: "production", klass:"energy", index:2 },
                    {file: buildAssetPath(allSprites["energy3"]), name:"Nuclear", boost: 45, cORp: "production", klass:"energy", index:3 },
                    {file: buildAssetPath(allSprites["energy4"]), name:"Efficient Nuclear", boost: 55, cORp: "production", klass:"energy", index:4 }

                  ],
                houses: [
                     {file: buildAssetPath(allSprites["house0"]), name:"Cold House", boost: 15, cORp: "production", klass:"houses", index:0 },
                     {file: buildAssetPath(allSprites["house1"]), name:"Farm House", boost: 25, cORp: "production", klass:"houses", index:1 },
                     {file: buildAssetPath(allSprites["house2"]), name:"Warm House", boost: 35, cORp: "production", klass:"houses", index:2 }
                    ],
                  
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
    
    //When user clicks on grid it sets currentGrid. If they click outside, it returns
    // undefined
    canvasHome.addEventListener('mousedown', (e) => {
        currentGrid = getCoords(e);

        if(currentGrid && Array.from(menuContainer.classList).includes("hidden")){
            //show dropdown if user clicks in playgrid
            menuContainer.classList.toggle("hidden")

            const len = menu.options.length;
            menu.setAttribute('size', len);

        } else if (currentGrid === undefined && !Array.from(menuContainer.classList).includes("hidden")) {
            //hide dropdown if user clicks outside play grid            
            menuContainer.classList.toggle("hidden")
        } 
        console.log(`currentGrid: ${currentGrid}`)
    
    })

    // When user selects from the drop down menu to place a sprite
    menu.addEventListener('click', (e) => {
        console.log(e.target)
        // debugger
        if (allDropDownCategories.includes(e.target) ){
            playerAlert.appendChild(generateErrorAlert("That is not a building"))
            return false;
        }

        console.log("resources",playerPoints.resources)
        // Remove error message if there is one
        removePlayerAlert()

        if (playerPoints.resources < 20){
            playerAlert.appendChild(generateErrorAlert("Every building costs 20 resources ... !"))
            // menu.selectedIndex = null; 
            return false
        } 
        
        //choiceStr is "production,houses,0"
        const choiceStr = menu.options[menu.selectedIndex].value
        console.log("choicStr",choiceStr)
        if (!choiceStr.includes(",")){
            playerAlert.appendChild(generateErrorAlert("That is not a building"))
            return false;
        } 
        console.log(onPlayerGrid[currentGrid[0]][currentGrid[1]])
        const okToRender = verifyBuildingMatch(choiceStr, menu)
        if (!okToRender){
            console.log("can't draw")
            menu.disabled = false;
            // menu.selectedIndex = null
            return false;
        } 
        
        //chosenBuilding is \
        //{isPresent: false, cORp: "", klass: "", level: null}
        const chosenBuilding = civilizationMenuSelect(choiceStr)
        const filePathBuild = chosenBuilding.file
        
        

        //place sprite if not occupied
        if(!isGridOccupied()){
            
            if (isInitialBuilding(chosenBuilding) === true){
                parseImage(context, filePathBuild, currentGrid)
                occupyGrid(chosenBuilding)
                console.log("PAY UP")
                adjustResources(-20)

                playerPoints[chosenBuilding.cORp] += chosenBuilding.boost
                // debugger
                adjustPoints(playerPoints[chosenBuilding.cORp], context, chosenBuilding.cORp)
                // adjustPoints(playerPoints.community, context)
                // adjustPoints(playerPoints.production, context, "production")
                // menu.disabled = false
            } else {
                playerAlert.appendChild(generateErrorAlert("That building is not the first of it's kind!"))
                // menu.disabled = false
            }
        } else if (isGridOccupied()){
             // Already a building on grid pos
             const x = currentGrid[0];
             const y = currentGrid[1];

             const objAtGridPos = onPlayerGrid[x][y];
            //  const maxIndexOfType = civilization[chosenBuilding.cORp][chosenBuilding.klass].length - 1

            //  // Player tries to add the same building to the occupied grid
            //  if (chosenBuilding.klass === objAtGridPos.klass && chosenBuilding.index === objAtGridPos.level
            //     && maxIndexOfType != chosenBuilding.index){

            //     playerAlert.appendChild(generateErrorAlert("That building is already there. Try upgrading!"));

            //  } else if (chosenBuilding.klass !== objAtGridPos.klass){
            //     // Player tries to upgrade to a building of a different klass

            //      playerAlert.appendChild(generateErrorAlert("Try upgrading that structure to a higher level!"));
            //  } else if (chosenBuilding.klass === objAtGridPos.klass) {
            //     // building klass is a match
                
            //     // player has maxed out upgrade
            //      if (maxIndexOfType === objAtGridPos.level){
            //          playerAlert.appendChild(generateErrorAlert("Max upgrade achieved!"));
                //  } 
                //  else 
                 if (chosenBuilding.index === (objAtGridPos.level + 1)){
                     // player upgrades appropriately by 1 level
                     //re-render grass first && remove previous building
                     console.log("DRAW!!!")
                     drawOnGrid(grassSquare, context, x, y, true)
                     
                     parseImage(context, filePathBuild, currentGrid)
                     occupyGrid(chosenBuilding)
                     console.log("PAY UP")
                    adjustResources(-20)
                     playerPoints[chosenBuilding.cORp] += chosenBuilding.boost
                    //  menu.disabled = false
                 }
                //   else if (chosenBuilding.index < objAtGridPos.level){
                //      playerAlert.appendChild(generateErrorAlert("Try upgrading, we must not regret our past decisions"));
                //  }
                 

            //  }
            

         }


        // reset default of dropdown
            console.log("GO FALSE!")
            menu.disabled = false
            // menu.selectedIndex = null
            console.log("playerpoints", playerPoints)




    })

    const verifyBuildingMatch = (choiceStr, menu) => {
        const x = currentGrid[0]
        const y = currentGrid[1]
        menu.disabled = true
        // debugger

        if(onPlayerGrid[x][y].isPresent === true){
            debugger
            let optionsArr = choiceStr.split(",")
            let nextcORp = null
            let nextKlass = null;
            let nextIndex = null;
            [nextcORp, nextKlass, nextIndex] = optionsArr;
            nextIndex = parseInt(optionsArr[2])
            
            const objAtGridPos = onPlayerGrid[x][y]
            const maxIndexOfType = civilization[nextcORp][nextKlass].length - 1
            debugger
            console.log(maxIndexOfType)
            
            debugger
            if(objAtGridPos.cORp !== nextcORp || objAtGridPos.klass !== nextKlass){
                playerAlert.appendChild(generateErrorAlert("Building types must match!"))
                return false;
            } else if (nextKlass === objAtGridPos.klass && nextIndex === objAtGridPos.level
                && maxIndexOfType != nextIndex){
                // debugger
                playerAlert.appendChild(generateErrorAlert("That building is already there. Try upgrading!"));
                return false
             } else if (nextKlass === objAtGridPos.klass) {
                // building klass is a match
                
                // player has maxed out upgrade
                 if (maxIndexOfType === objAtGridPos.level){
                     playerAlert.appendChild(generateErrorAlert("Max upgrade achieved!"));
                     return false;
                 } else if (nextIndex < objAtGridPos.level){
                     playerAlert.appendChild(generateErrorAlert("Try upgrading, we must not regret our past decisions"));
                     return false;
                 }
            }
            // else if ()
        }
        return true
    }

    //Alert System
    const removePlayerAlert = () => {
         if (playerAlert.childElementCount > 0){
            playerAlert.removeChild(playerAlert.childNodes[0]); 
        }
    }

    const generateErrorAlert = (errorMsg) => {
        // Add Error message to the DOM -> "That building is already there. Try upgrading!"
        const ele = document.createElement('p');

        const text = document.createTextNode(errorMsg); 
        ele.appendChild(text)
        ele.setAttribute('class', 'playerAlert');
        return ele
    }

    // menuContainer.classList.toggle("shrink")
    // 
    // menuContainer.classList.toggle("hidden")


    
    // console.log(canvasRect)
   

    // function onDown(e){
    //         cx = e.pageX;
    //         cy = e.pageY;
    //     // console.log(`X: ${cx}, Y: ${cy}`)
    // }
    
    const getCoords = (e) => {
        let canvasRect = canvasHome.getBoundingClientRect();
        let cx;
        let cy;
        let px = e.pageX;
        let py = e.pageY;

        cx = px - canvasRect.left
        cy = py - canvasRect.top
        console.log(canvasRect)

        console.log("-------")
        console.log(cx)
        console.log(cy)
        const col = Math.floor((cx - 22) / 86) ;
        const row = Math.floor((cy - 131) / 86) ;

        // current location console.log
        console.log(`X: [${row}, Y: ${col}]`)

        //did click on game grid
        if (row >= 0 && row <= 3 && col >= 0 && col <= 6){
            return [row,col]
        }
        //did NOT click on game grid
        else {
            return undefined
        }
            
    }

    function seeGridOptions(row, col){
        console.log(gameOptions[row][col])
    }

    function gridClick(row, col){


    }

}
// selected argument is "production,houses,0"
const civilizationMenuSelect = (selected) => {
        let optionsArr = selected.split(",")
        let cORp = null
        let klass = null;
        let index = null;
        [cORp, klass, index] = optionsArr;
        console.log("--")
        // console.log(optionsArr);
        // console.log(civilization[cORp][klass][index]);

        return civilization[cORp][klass][index]
    }

//function will draw grass
export const drawGrass = (context) => {
    let img1 = new Image()

        img1.src = buildAssetPath(grassD)

        img1.onload = () => {

            drawRow(context, img1, 22, 131)
            drawRow(context, img1, 22, 217)
            drawRow(context, img1, 22, 303)
            drawRow(context, img1, 22, 389)

        }
    

    const drawRow = (context, image, rowX, rowY) => {
        for(let i = 0; i < 7; i++){

            // context.drawImage(image, rowX, rowY, image.width /11.9, image.height / 11.9 )
            context.drawImage(image, rowX, rowY, 86, 86 )
            // 
            rowX += 86
        }
    }
}

const isGridOccupied = () => {
    const x = currentGrid[0]
    const y = currentGrid[1]

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

    return onPlayerGrid[x][y]
}

const isInitialBuilding = (chosenBuilding) => {
    if (chosenBuilding.index === 0) return true;
    return false
}

// to be MOVED LATER *!*!*!*!*!*!!*!*!*!*!*!*!*!*
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

    const x = currentGrid[0]
    const y = currentGrid[1]


    image.onload = () => {        
        drawOnGrid(image, context, x, y)
    }

}

// FN will draw an image at the appropriate spot on the grid
const drawOnGrid = (image, context, gridX, gridY, clearRectBoolean) => {
    console.log("draw on grid", gridX, gridY)
        const offsetX = 22;
        const offsetY = 131;
        const topLeftX = 86;
        const topLeftY = 86;    

        if (gridX === 0 && gridY === 0) {
            // context.drawImage(this.sprite, this.movements[this.moveIdx].x, this.movements[this.moveIdx].y, this.scaleW, this.scaleH )
            //works and original func
            // context.drawImage(image, offsetX, offsetY, image.width /11.9, image.height / 11.9 )
            if (clearRectBoolean){
                
                context.clearRect(offsetX, offsetY, 86, 86)
                context.drawImage(image, offsetX, offsetY, 86, 86)
            } else {
                context.drawImage(image, offsetX, offsetY, 86, 86 )
            }
        } else if (gridX === 0 && gridY > 0){
            //original
            // context.drawImage(image, ((topLeftX * gridY) + offsetX), offsetY, image.width /11.9, image.height / 11.9 )
            if (clearRectBoolean){
                
                // context.clearRect(offsetX, offsetY, 86, 86)
                // context.drawImage(image, offsetX, offsetY, 86, 86)
                context.clearRect(((topLeftX * gridY) + offsetX), ((topLeftY * gridX) + offsetY), 86, 86)
                context.drawImage(image, ((topLeftX * gridY) + offsetX), ((topLeftY * gridX) + offsetY), 86, 86 )
            } else {
                context.drawImage(image, ((topLeftX * gridY) + offsetX), offsetY, 86, 86 )
            }
        } else {
            // 
             //original
            // context.drawImage(image, ((topLeftX * gridY) + offsetX), offsetY, image.width /11.9, image.height / 11.9 )
            if (clearRectBoolean){
                
                //original
                // context.clearRect(offsetX, offsetY, 86, 86)
                // context.drawImage(image, offsetX, offsetY, 86, 86)

                context.clearRect(((topLeftX * gridY) + offsetX), ((topLeftY * gridX) + offsetY), 86, 86)
                context.drawImage(image, ((topLeftX * gridY) + offsetX), ((topLeftY * gridX) + offsetY), 86, 86 )
            } else {
                context.drawImage(image, ((topLeftX * gridY) + offsetX), ((topLeftY * gridX) + offsetY), 86, 86 )
            }
        }

    
    }

    // export const animateSquares = (image, cb) => {
    //     context.clearRect(0, 0, 646, 505)
    //     for(let i = 0; i < 4; i++){
    //         for(let j = 0; j < 7; j++){
    //             drawOnGrid(image, i, j)
                
    //         }
    //     }

    // }

    // export const loadAlienShip = () => {
    //     // const alienSrc = "/src/images/aliens/ships/08-Netuno.png";
    //     // const alienShip = new Image();
    //     // alienShip.src = alienSrc;

    //     // alienShip.onload( () => {
    //     //     return true
    //     // })

    // }



// export default canvasEvents;



