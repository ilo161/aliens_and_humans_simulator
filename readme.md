# README

## Aliens & Humans Simulator [Live Link](https://ilo161.github.io/aliens_and_humans_simulator/)

The Aliens are coming! Can you build a civilization in 2 minutes 
that will impress the aliens? Impress them or all of humanity will 
become chickens!


![Main Gameplay](https://github.com/ilo161/aliens_and_humans_simulator/blob/master/src/images/main_gameplay.png "Main Gameplay")
![Full Screen View](https://github.com/ilo161/aliens_and_humans_simulator/blob/master/src/images/full_screen.png "Full Screen View")



### Technologies Used

This game is built with javascript and html canvas.

### Sprite and images credits

All sprites and images provided by [OpenGameArt](https://opengameart.org/)

## Technical Challenges

## Animate Leviathans

Animate Leviathans is a function that spawns 9 alien leviathans, makes them spin 
9 times, then erases the previous drawn canvas and replaces the background with the
color black and re-draws 9 leviathans with them all facing the player.

This function had two particular challenges since it ran on a setInterval Timer

* Capturing 'when' the first leviathan of 9 spun 9 times, then sending a kill signal
to remove the interval time and stop the spinning for all 9 leviathans.

* Continuing with the next animation sequence of having the leviathans face the player
at exactly the correct time.

![Animate Leviathans Function](https://github.com/ilo161/aliens_and_humans_simulator/blob/master/src/images/animate_leviathans.png "Animate Leviathans Function")

## Saving Player State

As the player builds, the cpu parses and loads images for drawing, but what happens if the player builds
elsewhere and then decides to continue upgrading on the previous grid? I designed 
a system to save 'state'. As the player built buildings, I would capture necessary 
meta data behind the scenes versus, having the cpu figure out what is where based on 
file/color/binary file data. The benefit is the game runs faster as it is easy to do a 
checkup on 'string' comparision and 'integer' comparison. For example, a pyramid
build looks like this 'community,pyramids,0' then the upgrade looks like this 
'community,pyramids,1'. If the incoming integer of 'community,pyramids,1' is not greater
than what is stored in state by plus one then we know the player made an incorrect choice.

![Player State Function](https://github.com/ilo161/aliens_and_humans_simulator/blob/master/src/images/player_state.png "Player State Function")

This function would then later display appropriate data to the player on the
paper scroll on the left.

![Current Selection Attack Missle](https://github.com/ilo161/aliens_and_humans_simulator/blob/master/src/images/selection_missle.png "Current Selection Attack Missle")





#### Pre Production ReadMe Below

In this mouse based event click game, Aliens will come every 2 minutes to check
on the humans. If the aliens are pleased they leave gifts. If the aliens are 
displeased with the balance of the human Production and Community, they turn
the humans into chickens and take all the resources. 



##Gameplay
 * This is a onClick even driven mouse game. The player will click cooresponding
 grids to install buildings.

 * In this simulator, the player gets free resources every second. They can 
 choose to build houses, energy plants, business, meditation circles, trees etc.
 facilities and fill up the cooresponding production or community meter.

 * When the aliens come they will check the balance of production
 and community. If there is too much production and little community the aliens
 will turn the humans into chickens.

 * Cheat codes:

 # SPOILER AHEAD - HOW TO WIN & Cheat Codes
 .
 .
 .
 .
 .
 .
 .
 .
 .
 .

* In order to win, your community points must be greater than your production
points when the timer runs out.

* This game has two cheat codes, one for free resources and one for extra time. 
Open the javascript console in your browser to find out how to activate them.
