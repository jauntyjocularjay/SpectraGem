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
    PATH,
    VIEW,
} from './components/index.mjs'
import {
    MENU,
    MAIN,
    GAMEOVER
} from './components/Scenes.mjs'

const arcade = PHYSICS.arcade

let i = 0
let config = new Config(VIEW, arcade)
config.scene = MENU
// config.scene.preload = MENU.preload
// config.scene.create = MENU.create
// config.scene.update = MENU.update
let game = 
    new Phaser.Game(
        config)

