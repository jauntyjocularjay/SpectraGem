import {
    View
} from '../phaserhelpers/index.mjs'



const PATH = {
    board: {
        '8x8': 'assets/png/board8x8.png',
        '6x8': 'assets/png/board6x8.png'
    },
    gem: {
        blue: 'assets/png/blue.png',
        gray: 'assets/png/gray.png',
        green: 'assets/png/green.png',
        violet: 'assets/png/magenta.png',
        orange: 'assets/png/orange.png',
        red: 'assets/png/red.png',
        white: 'assets/png/white.png',
        yellow: 'assets/png/yellow.png'
    },
    platform: {
        x384: 'assets/png/platformx384.png',
        x512: 'assets/png/platformx512.png'
    }
}
const VIEW = new View(832,600)

export {
    PATH,
    VIEW
}