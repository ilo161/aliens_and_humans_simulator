import progressBar from "./progressBar.js"

// contains money, and current build points for player throughout the game
export const playerPoints = {
    community: 0,
    production: 0,
    resources: 0
}

// cORp stands for community or production
export const adjustPoints = (points, context, style = "community") => {

    let fillPercentage; 
    switch(true){
        case (points <= 142):
            fillPercentage = 10;
            break;
        case (points > 142 && points <= 184):
            fillPercentage = 20;
            break;
        case (points > 184 && points <= 226):
            fillPercentage = 30;
            break;
        case (points > 226 && points <= 268):
            fillPercentage = 40;
            break;
        case (points > 268 && points <= 310):
            fillPercentage = 50;
            break;
        case (points > 310 && points <= 352):
            fillPercentage = 60;
            break;
        case (points > 352 && points <= 394):
            fillPercentage = 70;
            break;
        case (points > 394 && points <= 436):
            fillPercentage = 80;
            break;
        case (points > 436 && points <= 478):
            fillPercentage = 90;
            break;
        case (points > 700):
            // debugger
            fillPercentage = 100;
            break
        default:
            break
    }

    if (style === "community"){
        //save to variable because garbage collection
        // debugger
        const greenBar = new progressBar(context, -34, 105, "green", "v", fillPercentage);
    } else {
        // debugger
        const blueBar = new progressBar(context, 590, 105, "blue", "v", fillPercentage);
    }
}

export const spawnResources = () => {
    playerPoints.resources += 5;
}

export const adjustResources = (num) => {
    // debugger
    playerPoints.resources += num;
}

export const drawResourcesText = (context) => {
    const startX = ((context.canvas.width / 2) - 102);
    context.clearRect(startX, 478, (startX + 350), 30)

    context.font = 'bold 30px Sans-Serif';
    context.fillStyle = "#66A1E7"
    // context.strokeStyle = "#C5E0CF";
    context.strokeStyle = "#55906F";
    context.fillText("Resources: " + playerPoints.resources, startX, 500);
    context.strokeText("Resources: " + playerPoints.resources, startX, 500);
    // requestAnimationFrame(drawResourcesText(context))

  }