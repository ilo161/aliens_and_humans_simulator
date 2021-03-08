export const buildAssetPath = (imgSrc) => {
    return `./dist/${imgSrc}`;
}

export const animateLeviathans = (context, ...levis) => {
    const leviatathanID = setInterval( () => {
      let isStatic = levis.some(levi => {

        while (isStatic === undefined){
            return levi.drawSpin(leviatathanID)
        }
      })   

       if (isStatic === true){
            context.fillStyle = "#000";
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
            levis.forEach(levi => levi.drawFacing())
        }
      
    }, 50)
}


