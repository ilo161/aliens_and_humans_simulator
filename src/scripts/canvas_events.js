// import grass1 from "../images/terrain_grass/grass_mix_d.jpg"
console.log("hello from canvas events")
import AlienShip from "./alien_ship";
import MotherShip from "./mothership";
// import Alien from "./alien_ship"

// //ex: [3,4]
let currentGrid = undefined;

const gameOptions = {
    0:  {0: [false, {}],
         1: "clicked 0,1",
         2: "clicked 0,2",
         3: "clicked 0,3",
         4: "clicked 0,4",
         5: "clicked 0,5",
         6: "clicked 0,6"}
    
}

const community1={pyramids:
                        {0:"you did it!",
                         1: "/src/images/community/pyramids/golden_pyramid.png"}
                    }

// skeleton
// {isPresent: false, klass: "", level:0}


const onPlayerGrid = buildPlayerState()


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
                parks: [],
                pyramids: [{file: "/src/images/community/pyramids/golden_pyramid.png", name:"goldenPyramid", cBoost: 10, pBoost: 0, cORp: "community", klass:"pyramids", index:0 }],
                ruins: [{}],
                meditationCircles: [],
                trees:[]
                },
        production: {
                farms: [],
                buildings: [],
                houses: [],
                energy: {
                        wind:[],
                        solar:[],
                        hydro:[]
                }
        }
}


export const canvasEvents = (canvasHome, context) => {
    //dropdown on right side
    let menuContainer = document.getElementsByClassName("drop-down-container")[0]
    let menu = document.getElementsByClassName("civilization-menu")[0]
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
    menu.addEventListener('change', ()=>{
        const choiceStr = menu.options[menu.selectedIndex].value
        const chosenBuilding = civilizationMenuSelect(choiceStr)
        const filePathBuild = chosenBuilding.file
        debugger
        //place sprite if not occupied
        if(!isGridOccupied()){
            parseImage(context, filePathBuild, currentGrid)
            occupyGrid(chosenBuilding)
            debugger

            if (playerAlert.childElementCount > 0){
                playerAlert.removeChild(playerAlert.childNodes[0]); 
            }
        }
        // Already a building on a grid
         else if(isGridOccupied()){
             const x = currentGrid[0]
             const y = currentGrid[1]
             const objAtGridPos = onPlayerGrid[x][y]

             // Player tries to add the same building to the occupied grid
             if (chosenBuilding.klass === objAtGridPos.klass && chosenBuilding.index === objAtGridPos.level){
                
                // Add Error message to the DOM -> "That building is already there. Try upgrading!"
                const ele = document.createElement('p');

                var text = document.createTextNode("That building is already there. Try upgrading!"); 
                ele.appendChild(text)
                ele.setAttribute('class', 'playerAlert');
                playerAlert.appendChild(ele)

             } else {
                 //Remove error message
                 playerAlert.removeChild(playerAlert.childNodes[0]); 
             }

         }


        // reset default of dropdown
        if (menu.selectedIndex != null){
            menu.selectedIndex = null
        }



    })

    // menuContainer.classList.toggle("shrink")
    // debugger
    // menuContainer.classList.toggle("hidden")


    let canvasRect = canvasHome.getBoundingClientRect();
    console.log(canvasRect)
    let cx;
    let cy;

    // function onDown(e){
    //         cx = e.pageX;
    //         cy = e.pageY;
    //     // console.log(`X: ${cx}, Y: ${cy}`)
    // }
    
    function getCoords(e){
        let px = e.pageX;
        let py = e.pageY;

        cx = px - canvasRect.left
        cy = py - canvasRect.top
        console.log(canvasRect)
        // console.log(cx)
        // console.log(cy)
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

const civilizationMenuSelect = (selected) => {
        let optionsArr = selected.split(",")
        let cORp = null
        let klass = null;
        let index = null;
        [cORp, klass, index] = optionsArr;
        console.log(civilization[cORp][klass][index])
        debugger
        return civilization[cORp][klass][index]
        // return community1[first][second]
    }

//function will draw grass
export const drawGrass = (context) => {
    let img1 = new Image()
    if (!img1.src){   
        img1.src = "/src/images/terrain_grass/grass_mix_d.jpg"

            img1.onload = () => {
            // debugger
                drawRow(context, img1, 22, 131)
                drawRow(context, img1, 22, 217)
                drawRow(context, img1, 22, 303)
                drawRow(context, img1, 22, 389)

        }
    }

    const drawRow = (context, image, rowX, rowY) => {
        for(let i = 0; i < 7; i++){

            context.drawImage(image, rowX, rowY, image.width /11.9, image.height / 11.9 )
            // debugger
            rowX += 86
        }
    }
}

const isGridOccupied = () => {
    const x = currentGrid[0]
    const y = currentGrid[1]

    return onPlayerGrid[x][y].isPresent
}

const occupyGrid = (chosenBuilding) => {
    const x = currentGrid[0]
    const y = currentGrid[1]

    onPlayerGrid[x][y].isPresent = true
    onPlayerGrid[x][y].cORp = chosenBuilding.cORp
    onPlayerGrid[x][y].klass = chosenBuilding.klass
    onPlayerGrid[x][y].level = chosenBuilding.index
    return onPlayerGrid[x][y]
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

    const x = currentGrid[0]
    const y = currentGrid[1]


    image.onload = () => {        
        drawOnGrid(image, context, x, y)
    }

}

const drawOnGrid = (image, context, gridX, gridY) => {
    console.log("draw on grid")
        const offsetX = 22;
        const offsetY = 131;
        const topLeftX = 86;
        const topLeftY = 86;    

        if (gridX === 0 && gridY === 0) {
            // context.drawImage(this.sprite, this.movements[this.moveIdx].x, this.movements[this.moveIdx].y, this.scaleW, this.scaleH )
            //works and original func
            // context.drawImage(image, offsetX, offsetY, image.width /11.9, image.height / 11.9 )
            context.drawImage(image, offsetX, offsetY, 86, 86 )
        } else if (gridX === 0 && gridY > 0){
            //original
            // context.drawImage(image, ((topLeftX * gridY) + offsetX), offsetY, image.width /11.9, image.height / 11.9 )
            context.drawImage(image, ((topLeftX * gridY) + offsetX), offsetY, 86, 86 )
        } else {
            // debugger
             //original
            // context.drawImage(image, ((topLeftX * gridY) + offsetX), offsetY, image.width /11.9, image.height / 11.9 )
            context.drawImage(image, ((topLeftX * gridY) + offsetX), ((topLeftY * gridX) + offsetY), 86, 86 )
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



