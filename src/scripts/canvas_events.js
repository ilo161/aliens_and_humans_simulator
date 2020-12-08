// import grass1 from "../images/terrain_grass/grass_mix_d.jpg"
console.log("hello from canvas events")
import AlienShip from "./alien_ship";
import MotherShip from "./mothership";
// import Alien from "./alien_ship"



const canvasHome = document.getElementById("canvas-home");
const context = canvasHome.getContext('2d')

export const canvasEvents = () => {

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
    let img1 = new Image()

    if (!img1.src){   
        img1.src = "/src/images/terrain_grass/grass_mix_d.jpg"
        // const alienShip1 = new AlienShip(context, 20, 50, 100, 100);
        // const alienShip1 = new AlienShip(context, "/src/images/aliens/ships/08-Netuno.png", 1, 1, 50, 50);
        const motherShip = new MotherShip(context)
        motherShip.makeShips()
        setInterval(motherShip.army[0].lToRAnimate, 1000)
        setInterval(motherShip.army[1].lToRAnimate, 1300)
        setInterval(motherShip.army[2].lToRAnimate, 800)

        // const alienShip2 = new AlienShip(context, 1, 1, 100, 100);

        // alienShip1.lToRAnimate() 
        // setInterval(alienShip1.lToRAnimate, 1000)
        // setInterval(alienShip2.lToRAnimate, 100)
        // alienShip1.lToRAnimate()
    }
    // debugger
    img1.onload = () => {
        // debugger
        drawRow(img1, 22, 131)
        drawRow(img1, 22, 217)
        drawRow(img1, 22, 303)
        drawRow(img1, 22, 389)

    }

    // const animate

    
    const drawRow = (image, rowX, rowY) => {
        for(let i = 0; i < 7; i++){

            context.drawImage(image, rowX, rowY, image.width /11.9, image.height / 11.9 )
            // debugger
            rowX += 86
        }
    }
    
    


    
    
    function getCoords(e){
        let px = e.pageX;
        let py = e.pageY;

        cx = px - canvasRect.left
        cy = py - canvasRect.top
        
        //grid 1 - Top Left
        console.log(`X: ${cx}, Y: ${cy}`)
        if (cx >= 22 && cx <= 108 && cy >= 131 && cy <= 217){
            console.log("grid 1")
            console.log(`X: ${cx}, Y: ${cy}`)
        }
    }

    function gridClick(e){

    }

}

export const drawOnGrid = (image, gridX, gridY) => {
    console.log("draw on grid")
        const offsetX = 22;
        const offsetY = 131;
        const topLeftX = 86;
        const topLeftY = 86;    

        if (gridX === 0 && gridY === 0) {
            context.drawImage(image, offsetX, offsetY, image.width /11.9, image.height / 11.9 )
        } else if (gridX === 0 && gridY > 0){
            context.drawImage(image, ((topLeftX * gridY) + offsetX), offsetY, image.width /11.9, image.height / 11.9 )
        } else {
            // debugger
            context.drawImage(image, ((topLeftX * gridY) + offsetX), ((topLeftY * gridX) + offsetY), image.width /11.9, image.height / 11.9 )
        }

    
    }

    export const animateSquares = (image, cb) => {
        context.clearRect(0, 0, 646, 505)
        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 7; j++){
                drawOnGrid(image, i, j)
                
            }
        }

    }

    // export const loadAlienShip = () => {
    //     // const alienSrc = "/src/images/aliens/ships/08-Netuno.png";
    //     // const alienShip = new Image();
    //     // alienShip.src = alienSrc;

    //     // alienShip.onload( () => {
    //     //     return true
    //     // })

    // }



// export default canvasEvents;



