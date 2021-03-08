export const buildAssetPath = (imgSrc) => {
    return `./dist/${imgSrc}`;
}

export const animateLeviathans = (context, ...levis) => {
    const leviatathanID = setInterval( () => {
      let isStatic = levis.some((levi,idx) => {

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



//  const leviatathanID = setInterval( () => {
//       let isStatic = levis.forEach((levi,idx) => {
//         //   console.log("levi", idx)
//           console.log(`${++num}, ${isStatic}`)
//           if(num === 289){
//         //       debugger
//               okToClearCanvas = true
//               levi.drawSpin(leviatathanID, okToClearCanvas)
//         //       levi.drawSpin(leviatathanID, okToClearCanvas)
//         //       okToClearCanvas = false
//           }
//           if(num < 289){
//               levi.drawSpin(leviatathanID, false)
//           }else {
//               okToClearCanvas = true
//               levi.drawSpin(leviatathanID, okToClearCanvas)
//           }
//       })