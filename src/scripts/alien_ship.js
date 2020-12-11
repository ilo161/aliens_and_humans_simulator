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
       
        //works with set pixel
        // this.context.drawImage(this.sprite, 0, 0, 100, 100);

        // using animation
        // this.context.drawImage(this.sprite, this.movements[this.moveIdx].x, this.movements[this.moveIdx].y, 100, 100);

        //works with fraction
        // this.context.drawImage(this.sprite, 0, 0, (this.sprite.width / this.scaleW), (this.sprite.height / this.scaleH));
        this.context.drawImage(this.sprite, this.movements[this.moveIdx].x, this.movements[this.moveIdx].y, this.scaleW, this.scaleH );

    }

    lToRAnimate(){
        let x = 0
        // console.log("ship moving")

            // console.log(this.movements[this.moveIdx])
            // this.context.clearRect(0,0,646,131)
            const topLeftX = this.movements[this.moveIdx].x
            const topLeftY = this.movements[this.moveIdx].y

            // console.log(topLeftX)
            // console.log(topLeftY)

            //this function removes previous drawing of alien ship.
            if (this.moveIdx > 0){
                // this.context.clearRect((this.scaleW * this.moveIdx ) , topLeftY,(this.scaleW * (-1)), (this.scaleW * 1 ))

                //old but works
                // this.context.clearRect((topLeftX ) , topLeftY,(this.scaleW * (-1)), (this.scaleW * 1 ))

            }

            // this.context.clearRect(topLeftX, topLeftY,(this.scaleW * - 1), (this.scaleW * -1 ))

            // this.context.clearRect(300 , 300,(this.scaleW * (1)), (this.scaleW * -1 ))
           this.context.drawImage(this.sprite, this.movements[this.moveIdx].x, this.movements[this.moveIdx].y, this.scaleW, this.scaleH );
            this.moveIdx++;
            if(this.moveIdx >= this.movements.length) this.moveIdx = 0;
            // if(x === 15){
            //     window.clearInterval()
            // }
        // }
    }
}

export default AlienShip;