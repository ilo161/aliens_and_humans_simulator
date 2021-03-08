import {buildAssetPath} from "./util.js";

class AlienShip {
    constructor(context, filePath, xStart, yStart, scaleW, scaleH){
        this.context = context;
        this.xStart = xStart;
        this.yStart = yStart;
        this.sprite = undefined;
        this.scaleW = scaleW;
        this.scaleH = scaleH;

        this.filePath = filePath

        this.movements = [];
        this.moveIdx = 0;

        this.loadAlienShip = this.loadAlienShip.bind(this);
        this.lToRAnimate = this.lToRAnimate.bind(this);
        this.drawShip = this.drawShip.bind(this);
        this.loadAlienShip()
        this.moveSpanX()
    }

    // generate the movements for an alien Ship
     moveSpanX(){
            for(let i = 1; i < 23 ; i++){
                this.movements.push({x: (this.xStart * (i * 40)), y: (this.yStart)})
            }
        }

    loadAlienShip(){
    const alienSrc = this.filePath;

    this.sprite = new Image();
    this.sprite.src = alienSrc;        

    }

    drawShip(){
        this.context.drawImage(this.sprite, this.movements[this.moveIdx].x, this.movements[this.moveIdx].y, this.scaleW, this.scaleH );
    }

    lToRAnimate(){
        let x = 0

        const topLeftX = this.movements[this.moveIdx].x
        const topLeftY = this.movements[this.moveIdx].y
    
        this.context.drawImage(this.sprite, this.movements[this.moveIdx].x, this.movements[this.moveIdx].y, this.scaleW, this.scaleH );
        this.moveIdx++;
        if(this.moveIdx >= this.movements.length) this.moveIdx = 0;
    }
}

export default AlienShip;