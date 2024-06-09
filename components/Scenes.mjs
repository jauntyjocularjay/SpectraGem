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

let grid
let platform
let gems

const menu = {}
const MAIN = {}
const gameover = {}

MAIN.preload = function() {
    for(const [key, value] of Object.entries(PATH.gem)){
        this.load.spritesheet(key, value, new SquareFrame(60)) // reduced 64 to 60
    }
    for(const [key, value] of Object.entries(PATH.board)){
        this.load.spritesheet(key, value, new Frame(384, 512))
    }
    this.load.spritesheet('platformx384', PATH.platform.x384, new Frame(384, 32))
    this.load.spritesheet('platformx512', PATH.platform.x512, new Frame(512, 32))
}

MAIN.create = function() {

    
    /** @object background is the background grid */
    grid = this.add.sprite(3*(VIEW.width/10), 4.5*(VIEW.height / 9), '6x8')

    /** @object platforms hold the gems up */
    platform = this.physics.add.staticGroup()
    platform.create(3*(VIEW.width/10), (35/4)*(VIEW.height / 9), 'platformx384')

    /** @object Gems group */
    gems = this.physics.add.group()

    for(let j = 0; j < 8; j++){
        for(let i = 0; i < 6; i++){
            console.log('create a gem')
            gems.create({
                    key: Gem.random().color.alias,
                    setXY: { 
                        x: (i * VIEW.width/10) + 30, 
                        y: 64 * j
                    }
                })
        }
    }

    this.physics.add.collider(gems, platform)
    this.physics.add.collider(gems, gems)

}

MAIN.update = function() {

}


export {
    MAIN
}
