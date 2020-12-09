import {animateSquares, canvasEvents, drawGrass, drawOnGrid} from "./scripts/canvas_events.js"
import "./styles/index.scss";


console.log("from index.js")



document.addEventListener("DOMContentLoaded", () =>  {

    const canvasHome = document.getElementById("canvas-home");
    const context = canvasHome.getContext('2d')

    canvasEvents(canvasHome, context)
    drawGrass(context)

    let menu = document.getElementById("civilization-menu")


    const community1={pyramids:
                        {0:"you did it!"}
                    }

    const select = (selected) => {
        let optionsArr = selected.split(",")
        let first = null;
        let second = null;
        [first, second] = optionsArr;
        debugger
        console.log(community1[first][second])
        return community1[first][second]
    }
    menu.addEventListener('change', ()=>{
        let choice = menu.options[menu.selectedIndex].value
        // let choice = menu.options[menu.selectedIndex].name
        let buildThis = select(choice)
        console.log(buildThis)



    })
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