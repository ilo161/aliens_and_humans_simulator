import {buildAssetPath} from "./util.js"
import AlienShip from "./alien_ship"

import neptune from "../images/aliens/ships/08-Netuno.png";
import saturn from "../images/aliens/ships/06-Saturno.png";
import pluto from "../images/aliens/ships/09-Pluto.png";

class MotherShip {
    constructor(context){
        this.context = context;
        this.army = []

    }

    makeShips(){
        let shipNum = this.army.length;

        const shipFiles = [
            buildAssetPath(neptune),
            buildAssetPath(saturn),
            buildAssetPath(pluto)
        ]
        // constructor(context, filePath, xStart, yStart, scaleW, scaleH){
        while(this.army.length < 3){
            shipNum = this.army.length;
            const yPos = undefined;

            if (shipNum === 0){
                yPos = shipNum;
            } else {
                yPos = shipNum * 40;
            }

            const alienSrc = shipFiles[shipNum]
            const alienShip = new AlienShip(this.context, alienSrc, 1, yPos, 40, 40)
            this.army.push(alienShip)

        }
    }

}

export default MotherShip