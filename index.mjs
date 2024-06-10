import {
    EasyAccessor,
    Config,
    View,
    PHYSICS,
    Player,
    Position,
    Score,
    Spread,
    Typeface,
    Frame,
    SquareFrame,
    Img,
    SpriteSheet,
} from './phaserhelpers/index.mjs'
import {
    Gem,
    RedGem,
    OrangeGem,
    YellowGem,
    GreenGem,
    BlueGem,
    VioletGem,
    WhiteGem,
    GrayGem
} from './components/Gem.mjs'
import {
    PATH,
    VIEW,
} from './components/index.mjs'
import { SCENES } from './components/Scenes.mjs'



let game
let i = 0

let config = new Config(VIEW, PHYSICS.arcade)
config.scene = SCENES[i]

game = new Phaser.Game(config)

export {
    PATH
}