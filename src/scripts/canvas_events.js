// import grass1 from "../images/terrain_grass/grass_mix_d.jpg"
console.log("hello from canvas events")
import AlienShip from "./alien_ship";
import MotherShip from "./mothership";
// import Alien from "./alien_ship"



const gameOptions = {
    0:  {0: [false, {}],
         1: "clicked 0,1",
         2: "clicked 0,2",
         3: "clicked 0,3",
         4: "clicked 0,4",
         5: "clicked 0,5",
         6: "clicked 0,6"}
    
}

const civilization = {
        community: {
                parks: [],
                pyramids: [],
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

    canvasHome.addEventListener('mousedown', getCoords)

    let canvasRect = canvasHome.getBoundingClientRect();
    console.log(canvasRect)
    let cx;
    let cy;

    // function onDown(e){
    //         cx = e.pageX;
    //         cy = e.pageY;
    //     // console.log(`X: ${cx}, Y: ${cy}`)
    // }
    

    // if (!img1.src){   
    //     img1.src = "/src/images/terrain_grass/grass_mix_d.jpg"
    //     // const alienShip1 = new AlienShip(context, 20, 50, 100, 100);
    //     // const alienShip1 = new AlienShip(context, "/src/images/aliens/ships/08-Netuno.png", 1, 1, 50, 50);
    //     const motherShip = new MotherShip(context)
    //     motherShip.makeShips()
    //     const intId1 = setInterval(motherShip.army[0].lToRAnimate, 150)
    //     const intId2 = setInterval(motherShip.army[1].lToRAnimate, 150)
    //     const intId3 = setInterval(motherShip.army[2].lToRAnimate, 150)


    //     setTimeout(()=>clearInterval(intId1),2100)
    //     setTimeout(()=>clearInterval(intId2),2100)
    //     setTimeout(()=>clearInterval(intId3),2100)
    //     // setTimeout(clearInterval(intId2),5250)
    //     // setTimeout(clearInterval(intId3),5250)

    // }
    // debugger
    

    // const animate

    
    
    
    


    
    
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

        seeGridOptions(row, col)
        
        
       
       
       
       
       
        // if (cx >= 22 && cx <= 108 && cy >= 131 && cy <= 217){
        //     // grid 0
        //     console.log("grid 0")
        //     console.log(`X: ${cx}, Y: ${cy}`)
        // } 
        
    }

    function seeGridOptions(row, col){
        console.log(gameOptions[row][col])
    }

    function gridClick(row, col){


    }

}

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

// export const drawOnGrid = (image, gridX, gridY) => {
//     console.log("draw on grid")
//         const offsetX = 22;
//         const offsetY = 131;
//         const topLeftX = 86;
//         const topLeftY = 86;    

//         if (gridX === 0 && gridY === 0) {
//             context.drawImage(image, offsetX, offsetY, image.width /11.9, image.height / 11.9 )
//         } else if (gridX === 0 && gridY > 0){
//             context.drawImage(image, ((topLeftX * gridY) + offsetX), offsetY, image.width /11.9, image.height / 11.9 )
//         } else {
//             // debugger
//             context.drawImage(image, ((topLeftX * gridY) + offsetX), ((topLeftY * gridX) + offsetY), image.width /11.9, image.height / 11.9 )
//         }

    
//     }

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



