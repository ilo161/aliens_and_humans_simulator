
class progressBar {
    constructor(context, startX, startY, color, orientation){
        this.context = context;
        this.startX = startX;
        this.startY = startY;
        this.color = color;
        this.blankSprite = undefined;
        // this.blankSprite.src = this.orientationAndCreate(orientation);
        this.colorSprite = undefined;
        // this.colorSprite.src = this.selectColor(this.color, orientation);

        // this.orientation = 0; 
        this.value = 0;


       
        this.loadSrc(orientation)

        // this.blankSprite.onload = this.blankSprite.onload.bind(this);
        // this.colorSprite.onload = this.colorSprite.onload.bind(this);

        }

    loadSrc(orientation){
        const backgroundSrc = this.orientationAndCreate(orientation);
        const colorBarSrc = this.selectColor(this.color, orientation)
        
        this.blankSprite = new Image();
        this.colorSprite = new Image();

        this.blankSprite.src = backgroundSrc; 
        this.colorSprite.src = colorBarSrc; 
        const that = this;
        this.blankSprite.onload = (e) => {
            debugger
            that.context.drawImage(that.blankSprite, that.startX, that.startY, 100, 100);
            that.context.drawImage(that.colorSprite, that.startX, that.startY, 100, 100);
        }


    }

        
        // select initial orientation of progress bar. Vertical or Horizontal.
    orientationAndCreate(ori){
        if(ori === "h" || ori === "H"){
            // debugger
            return "/src/images/h_progress_bars/H_BarBackground.png"
        } else if(ori ==="v" || ori === "V") {
            // debugger
            return "/src/images/v_progress_bars/V_BarBackground.png"
        }

        }

         // select color of progress bar vertical or horizontal
    selectColor(color, ori){
        let selected = undefined;
        const hColors = {
            "blue": "/src/images/h_progress_bars/H_BlueBar.png",
            // "blue": "/src/images/aliens/ships/08-Netuno.png",
            "green": "/src/images/h_progress_bars/H_GreenBar.png",
            "red": "/src/images/h_progress_bars/H_RedBar.png",
            "yellow": "/src/images/h_progress_bars/H_YellowBar.png"
        }

        const vColors = {
            "blue": "/src/images/v_progress_bars/V_BlueBar.png",
            "green": "/src/images/v_progress_bars/V_GreenBar.png",
            "red": "/src/images/v_progress_bars/V_RedBar.png",
            "yellow": "/src/images/v_progress_bars/V_YellowBar.png"
        }

        if (ori === "h" || ori === "H"){
            selected = hColors[color];

            return selected;
        }else if(ori ==="v" || ori === "V"){
            selected = vColors[color];

            return selected;
        }

    }
    

    increaseFill(value){
        // this.context.drawImage(this.colorSprite, this.startX, this.startY, 22, 200)
    }

    decreaseFill(value){

    }

    resetFill(){

    }

    drawBar(context){
        // context.drawImage()
        context.drawImage(this.blankSprite, this.startX, this.startY, 100, 100);
    }

}

export default progressBar;

