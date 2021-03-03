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
        case (points <= 42):
            fillPercentage = 10;
            break;
        case (points > 42 && points <= 84):
            fillPercentage = 20;
            break;
        case (points > 84 && points <= 126):
            fillPercentage = 30;
            break;
        case (points > 126 && points <= 168):
            fillPercentage = 40;
            break;
        case (points > 168 && points <= 210):
            fillPercentage = 50;
            break;
        case (points > 210 && points <= 252):
            fillPercentage = 60;
            break;
        case (points > 252 && points <= 294):
            fillPercentage = 70;
            break;
        case (points > 294 && points <= 336):
            fillPercentage = 80;
            break;
        case (points > 336 && points <= 378):
            fillPercentage = 90;
            break;
        case (points > 378):
            // debugger
            fillPercentage = 100;
            break
        default:
            break
    }

    if (style === "community"){
        //save to variable because garbage collection
        debugger
        const greenBar = new progressBar(context, -34, 105, "green", "v", fillPercentage);
    } else {
        debugger
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