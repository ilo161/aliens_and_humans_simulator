class Leviathan {
    constructor(context, filePath, cx, cy, scaleW, scaleH){
        this.context = context;
        this.cx = cx;
        this.cy = cy;
        this.scaleW = scaleW;
        this.scaleH = scaleH;
        this.sprite = undefined;
        this.index = 0;
        this.spinCount = 0;
        this.cWidth = this.context.canvas.width;
        this.cHeight = this.context.canvas.height;
        
        this.filePath = filePath;
        this.okToSpin = true;

        this.movements = [
            {sx: 0, sy: 0, px: 96, py: 96},
            {sx: 0, sy: 96, px: 96, py: 96},
            {sx: 0, sy: 192, px: 96, py: 96},
            {sx: 0, sy: 288, px: 96, py: 96}
        ]

        this.properties = {width: scaleW, height: scaleH,
                           position: {x: this.cx, y: this.cy}}

        this.loadSrc();
        this.drawSpin = this.drawSpin.bind(this);
        this.drawFacing = this.drawFacing.bind(this);
    }

    loadSrc(){
        this.sprite = new Image();
        this.sprite.src = this.filePath;
    }

    drawSpin(id, okToClearCanvas){

        if(this.okToSpin){
            
            this.context.clearRect(this.cx, this.cy, this.scaleW, this.scaleH);
            this.context.drawImage(this.sprite, 
                this.movements[this.index].sx, this.movements[this.index].sy,
                this.movements[this.index].px, this.movements[this.index].py,
                this.properties.position.x, this.properties.position.y,
                this.properties.width, this.properties.height
                )
            this.index++;

            if(this.spinCount === 8) {
                this.okToSpin = false;
                clearInterval(id)
                return true
                // new Promise solution

                // return this.drawFacing().then((res) =>{
                //     console.log("SUCCESSFUL PROMISE", res)
                //     return true
                // });
                


            }
            if(this.index >= this.movements.length) {
                this.index = 0;
                this.spinCount++;
            }
        }
    }



    drawFacing(id){
        this.context.drawImage(this.sprite, 
                this.movements[0].sx, this.movements[0].sy,
                this.movements[0].px, this.movements[0].py,
                this.properties.position.x, this.properties.position.y,
                this.properties.width, this.properties.height
                )

            //with new Promise Solution
        // const promise = new Promise(function(resolve, reject) {
        //     setTimeout(() => {
        //     resolve(true);
        //     }, 1000);
        // });
        // return promise;  
        
        // clearInterval(id)

    }

}

export default Leviathan;