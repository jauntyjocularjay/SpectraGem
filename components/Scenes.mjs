import {
    EasyAccessor,
    Config,
    View,
    Player,
    Position,
    Scene,
    Score,
    Spread,
    Typeface,
    Frame,
    SquareFrame,
    Img,
    SpriteSheet,
} from '../phaserhelpers/index.mjs'
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
} from './Gem.mjs'
import {
    PATH,
    VIEW,
} from './index.mjs'

let background
let platform
let gems = []

const MAIN = {}

MAIN.preload = function() {
    for(const [key, value] of Object.entries(PATH.gem)){
        this.load.spritesheet(key, value, new SquareFrame(64))
    }
    for(const [key, value] of Object.entries(PATH.board)){
        this.load.spritesheet(key, value, new Frame(384, 512))
    }
    this.load.spritesheet('platformx384', PATH.platform.x384, new Frame(384, 32))
    this.load.spritesheet('platformx512', PATH.platform.x512, new Frame(512, 32))
}

MAIN.create = function() {
    let temp = {}
    /** @object background is the background grid */
    background = this.add.sprite(VIEW.width / 2, VIEW.height / 2, '6x8')

    /** @object platforms hold the gems up */
    platform = this.physics.add.staticGroup()
    platform.create(VIEW.width / 2, VIEW.height-30, 'platformx384')

    for(let j = 0; j < 8; j++){
        for(let i = 4; i < 10; i++){
            gems = this.physics.add.group({
                key: Gem.random().color.alias,
                setXY: { x: i * VIEW.width/13, y: 64 * j},
                // customBoundsRectangle: {x:64, y:0, width: 64, height: 64}
            })
            gems.children.iterate(function(child){
                child.setBounceY(Phaser.Math.FloatBetween(0.3, 0.9))
            })
            this.physics.add.collider(gems, platform)
        }
    }
    
}

MAIN.update = function() {

}


export {
    MAIN
}
