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
import {
    MENU, 
    MAIN,
    GAMEOVER
} from './components/Scenes.mjs'


PHYSICS.arcade.arcade.gravity.y = 256
let config = new Config(VIEW, PHYSICS.arcade)
config.scene = MAIN

const game = new Phaser.Game(config)

export {
    PATH
}