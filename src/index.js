import {MarsRover} from "./mars-rover.js";

function main() {
    //Other Test Inputs
//		String currentPosition = "1 2 N";
//		String commands = "LMLMLMLMM";

    const currentPosition = '3 3 E';
    const commands = 'MMRMMRMRRM';

    const positions = currentPosition.split(/ /);
    MarsRover.x = Number(positions[0]);
    MarsRover.y = Number(positions[1]);
    MarsRover.dir = `${positions[2]}`;

    const rover = new MarsRover();
    commands.split("").forEach(command => {
        rover.do(command);
    });

    //Output Status and Result
    console.log('currentPosition... ', currentPosition);
    console.log('commands... ', commands);
    console.log('newPosition... ', MarsRover.x, MarsRover.y, MarsRover.dir);
}

if (require.main === module) {
    main();
}

module.exports = {}
