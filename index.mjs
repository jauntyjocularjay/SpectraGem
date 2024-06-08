import {
    EasyAccessor,
    Config,
    View,
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
    PHYSICS
} from './phaserhelpers/Platformer/index.mjs'
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
import { MAIN } from './components/Scenes.mjs'



let platform
let gems = []
let background
let game

let config = new Config(VIEW, PHYSICS)
config.scene = MAIN

game = new Phaser.Game(config)

export {
    PATH
}