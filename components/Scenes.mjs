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
let gemSprites

const MENU = {}
const MAIN = {}
const GAMEOVER = {}

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
    gemSprites = []
    class GemSprite {
        constructor(scene, i, j, gem){
            this.gem = Gem.random()
            this.sprite = new Sprite(scene, i*(VIEW.width/10), j*(VIEW.height/9), this.gem.color.alias)
        }
    }

    for(let j = 0; j < 8; j++){
        for(let i = 0; i < 6; i++){
            console.log('create a gem')
            const gem = new GemSprite(this, i*(VIEW.width/10), j*(VIEW.height/9), 'red')
        }
    }

    console.log('gems array', gemSprites)
    this.physics.add.collider(gemSprites, platform)
    this.physics.add.collider(gemSprites, gemSprites)

}

MAIN.update = function() {

}

MAIN.match = function(gem1, gem2) {
    if(gem1.matches(gem2)){

    }
}


export {
    MENU,
    MAIN,
    GAMEOVER
}
