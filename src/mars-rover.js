/**
 * This class implements mission critical functionality that God alone know its real intent.
 * It feeds me, a sole reason for me to stick to this project. Long live such guess-good-for-what-projects.
 *
 * @author  Chitti Krapper
 * @version 1.0
 * @since   2000-03-31
 */

export class MarsRover {
    constructor() {
        // So we can log useful information
        this._logger = console.log
    }

    /**
     * All logic for movement is in this method
     * @param command char
     */
    do(command) {
//		console.log("Start....." + x + " " + y + " " + direction + " " + command);
        if ('N' === MarsRover.dir) {
            switch (command) {
                case 'L':
                    MarsRover.dir = 'W';
                    break;
                case 'R':
                    MarsRover.dir = 'E';
                    break;
                case 'M':
                    MarsRover.y++;
                    break;
            }
        } else if ('E' === MarsRover.dir) {
            switch (command) {
                case 'L':
                    MarsRover.dir = 'N';
                    break;
                case 'R':
                    MarsRover.dir = 'S';
                    break;
                case 'M':
                    MarsRover.x++;
                    break;
            }
        } else if ('S' === MarsRover.dir) {
            switch (command) {
                case 'L':
                    MarsRover.dir = 'E';
                    break;
                case 'R':
                    MarsRover.dir = 'W';
                    break;
                case 'M':
                    MarsRover.y--;
                    break;
            }
        } else if ('W' === MarsRover.dir) {
            switch (command) {
                case 'L':
                    MarsRover.dir = 'S';
                    break;
                case 'R':
                    MarsRover.dir = 'N';
                    break;
                case 'M':
                    MarsRover.x--;
                    break;
            }
        }
//		console.log("End....." + x + " " + y + " " + direction + " " + command);
    }

    get location() {
        let loc = `${MarsRover.x} ${MarsRover.y} ${MarsRover.dir}`;
        return loc;
    }

    get x() {
        return MarsRover.x;
    }

    set x(x) {
        MarsRover.x = x;
    }

    get y() {
        return MarsRover.y;
    }

    set y(y) {
        MarsRover.y = y;
    }

    get dir() {
        return MarsRover.dir;
    }

    set dir(dir) {
        MarsRover.dir = dir;
    }

    get logger() {
        return this._logger;
    }
}

MarsRover.x = 0; // Position on x-axis
MarsRover.y = 0; // Position on y-axis
MarsRover.dir = ''; // Direction the rover is facing
