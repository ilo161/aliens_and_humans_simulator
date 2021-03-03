import hBlank from "../images/h_progress_bars/H_BarBackground.png"
import hBlue from "../images/h_progress_bars/H_BlueBar.png"
import hGreen from "../images/h_progress_bars/H_GreenBar.png"
import hRed from "../images/h_progress_bars/H_RedBar.png"
import hYellow from "../images/h_progress_bars/H_YellowBar.png"


import vBlank from "../images/v_progress_bars/V_BarBackground.png"
import vBlue10 from "../images/v_progress_bars/V_BlueBar10.png"
import vBlue20 from "../images/v_progress_bars/V_BlueBar20.png"
import vBlue30 from "../images/v_progress_bars/V_BlueBar30.png"
import vBlue40 from "../images/v_progress_bars/V_BlueBar40.png"
import vBlue50 from "../images/v_progress_bars/V_BlueBar50.png"
import vBlue60 from "../images/v_progress_bars/V_BlueBar60.png"
import vBlue70 from "../images/v_progress_bars/V_BlueBar70.png"
import vBlue80 from "../images/v_progress_bars/V_BlueBar80.png"
import vBlue90 from "../images/v_progress_bars/V_BlueBar90.png"
import vBlue100 from "../images/v_progress_bars/V_BlueBar100.png"

import vGreen10 from "../images/v_progress_bars/V_GreenBar10.png"
import vGreen20 from "../images/v_progress_bars/V_GreenBar20.png"
import vGreen30 from "../images/v_progress_bars/V_GreenBar30.png"
import vGreen40 from "../images/v_progress_bars/V_GreenBar40.png"
import vGreen50 from "../images/v_progress_bars/V_GreenBar50.png"
import vGreen60 from "../images/v_progress_bars/V_GreenBar60.png"
import vGreen70 from "../images/v_progress_bars/V_GreenBar70.png"
import vGreen80 from "../images/v_progress_bars/V_GreenBar80.png"
import vGreen90 from "../images/v_progress_bars/V_GreenBar90.png"
import vGreen100 from "../images/v_progress_bars/V_GreenBar100.png"


import vGreen from "../images/v_progress_bars/V_GreenBar100.png"
// import vRed from "../images/v_progress_bars/V_RedBar.png"
// import vYellow from "../images/v_progress_bars/V_YellowBar.png"
import {buildAssetPath} from "./util.js"


class progressBar {
    constructor(context, startX, startY, color, orientation, value){
        this.context = context;
        this.startX = startX;
        this.startY = startY;
        this.points = 30;
        this.color = color;
        this.value = value;
        this.orientation = orientation

        this.blankSprite = undefined;
        this.colorSprite = undefined;

        this.loadSrc(orientation)
        
        }

    loadSrc(orientation){
        if(this.color === "blank"){
            const backgroundSrc = this.orientationAndCreate(orientation);
            this.blankSprite = new Image();
            this.blankSprite.src = backgroundSrc; 
            
            const that = this;
            this.blankSprite.onload = (e) => {
            // debugger
            // that.context.drawImage(that.blankSprite, that.startX, that.startY, 100, 364);
            that.context.drawImage(that.blankSprite, that.startX, that.startY, 100, 378);
            }
        } else {
            const colorBarSrc = this.selectColor(this.color, orientation, this.value)
            this.colorSprite = new Image();
            this.colorSprite.src = colorBarSrc; 
            // debugger
            const that = this;
            this.colorSprite.onload = (e) => {

                // that.context.drawImage(that.colorSprite, that.startX, that.startY, 100, 278);
                // 30 is good start
                // that.context.drawImage(that.colorSprite, that.startX, that.startY, 100, 30);
                // debugger
                that.context.drawImage(that.colorSprite, that.startX, that.startY, 100, 400);
            }

        }
        
        
        

        
       


    }



    // loadSrc(orientation){
        
    //     const backgroundSrc = this.orientationAndCreate(orientation);
    //     const colorBarSrc = this.selectColor(this.color, orientation)
        
    //     this.blankSprite = new Image();
    //     this.colorSprite = new Image();

    //     this.blankSprite.src = backgroundSrc; 
    //     this.colorSprite.src = colorBarSrc; 
    //     const that = this;
    //     this.blankSprite.onload = (e) => {
    //         debugger
    //         that.context.drawImage(that.blankSprite, that.startX, that.startY, 100, 100);
    //         that.context.drawImage(that.colorSprite, that.startX, that.startY, 100, 100);
    //     }


    // }

        
        // select initial orientation of progress bar. Vertical or Horizontal.
    orientationAndCreate(ori){
        if(ori === "h" || ori === "H"){
            // debugger
            return buildAssetPath(hBlank)
        } else if(ori ==="v" || ori === "V") {
            // debugger
            return buildAssetPath(vBlank)
        }

    }

         // select color of progress bar vertical or horizontal
    selectColor(color, ori, value){
        let selected = undefined;

        const hColors = {
            "blank": buildAssetPath(hBlank),
            "blue": buildAssetPath(hBlue),
            "green": buildAssetPath(hGreen),
            "red": buildAssetPath(hRed),
            "yellow": buildAssetPath(hYellow)
        }

        const vColors = {
            "blank": buildAssetPath(vBlank),
            "blue": {10: buildAssetPath(vBlue10),
                     20: buildAssetPath(vBlue20),
                     30: buildAssetPath(vBlue30),
                     40: buildAssetPath(vBlue40),
                     50: buildAssetPath(vBlue50),
                     60: buildAssetPath(vBlue60),
                     70: buildAssetPath(vBlue70),
                     80: buildAssetPath(vBlue80),
                     90: buildAssetPath(vBlue90),
                     100: buildAssetPath(vBlue100)
            },
            "green": {10: buildAssetPath(vGreen10),
                     20: buildAssetPath(vGreen20),
                     30: buildAssetPath(vGreen30),
                     40: buildAssetPath(vGreen40),
                     50: buildAssetPath(vGreen50),
                     60: buildAssetPath(vGreen60),
                     70: buildAssetPath(vGreen70),
                     80: buildAssetPath(vGreen80),
                     90: buildAssetPath(vGreen90),
                     100: buildAssetPath(vGreen100)
             }
            }

        if (ori === "h" || ori === "H"){
            selected = hColors[color];

            return selected;
        }else if(ori ==="v" || ori === "V"){
            selected = vColors[color][value];

            return selected;
        }

    }
    

    increaseFill(value){
        // this.context.drawImage(this.colorSprite, this.startX, this.startY, 22, 200)
        // this.context.drawImage(this.colorSprite, this.startX, this.startY, 22, 200)
        // else {
            this.value = value
            const colorBarSrc = this.selectColor(this.color, this.orientation, this.value)
            // this.colorSprite = new Image();
            this.colorSprite.src = colorBarSrc; 
            // debugger
            const that = this;
            this.colorSprite.onload = (e) => {

                // that.context.drawImage(that.colorSprite, that.startX, that.startY, 100, 278);
                // 30 is good start
                // that.context.drawImage(that.colorSprite, that.startX, that.startY, 100, 30);
                that.context.drawImage(that.colorSprite, that.startX, that.startY, 100, 400);
            }

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

