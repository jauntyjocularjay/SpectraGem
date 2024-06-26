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
const iconFrame = new SquareFrame(32)

MENU.text = {
    title: 'Spectragem',
    instructions: [
        'Spectragem is a match-3 puzzle game you have seen before. The difference is' + 
        'that you have many more options than other match-3 games.',

        'Red, Blue, and Yellow are primary colors and gems of these colors are ' +
        'combined to create secondary color gem: orange, green, violet. ' +
        'Secondary color gems are matched in a sequence of primary color gems leave their ' +
        'remaining component behind.'
    ]
}

MENU.preload = function() {
    for(const [key, value] of Object.entries(PATH.btn)){
        this.load.spritesheet(key, value, new Frame(120, 40))
    }
    for(const [key, value] of Object.entries(PATH.panel)){
        this.load.spritesheet(key, value, new Frame(128, 64))
    }
    for(const [key, value] of Object.entries(PATH.icon.social)){
        this.load.spritesheet(key, value, iconFrame)
    }
    for(const [key, value] of Object.entries(PATH.icon.direction)){
        this.load.spritesheet(key, value, iconFrame)
    }
    for(const [key, value] of Object.entries(PATH.icon.action)){
        this.load.spritesheet(key, value, iconFrame)
    }
    for(const [key, value] of Object.entries(PATH.icon.msg)){
        this.load.spritesheet(key, value, iconFrame)
    }
    for(const [key, value] of Object.entries(PATH.icon['in-game'])){
        this.load.spritesheet(key, value, iconFrame)
    }
    for(const [key, value] of Object.entries(PATH.icon.action)){
        this.load.spritesheet(key, value, iconFrame)
    }
    for(const [key, value] of Object.entries(PATH.icon.sound)){
        this.load.spritesheet(key, value, iconFrame)
    }
    for(const [key, value] of Object.entries(PATH.icon.other)){
        this.load.spritesheet(key, value, iconFrame)
    }
    for(const [key, value] of Object.entries(PATH.card.lrg)){
        this.load.spritesheet(key, value, new Frame(384, 768))
    }
    for(const [key, value] of Object.entries(PATH.card.med)){
        this.load.spritesheet(key, value, new Frame(416, 384))
    }
    for(const [key, value] of Object.entries(PATH.card.sml)){
        this.load.spritesheet(key, value, new Frame(640, 384))
    }
    for(const [key, value] of Object.entries(PATH.gem)){
        this.load.spritesheet(key, value, new SquareFrame(60)) // reduced 64 to 60
    }
    this.load.spritesheet('3x3', PATH.board['3x3'], new Frame(193, 193))
    this.load.spritesheet('platformx384', PATH.platform.x384, new Frame(384, 32))
    this.load.spritesheet('platformx512', PATH.platform.x512, new Frame(512, 32))
}

MENU.create = function() {
        /** @object grid is the gem grid */
    const grid = this.add.sprite(2*(VIEW.width/12), 7*(VIEW.height/9), '3x3')
        /** @object platforms hold the gems up */
    const platform = this.physics.add.staticGroup()
    const gems = []
    platform.create(2*(VIEW.width/12), (35/4)*(VIEW.height / 9), 'platformx384').setScale(0.5, 1.0).refreshBody()
    gems.push()
}

MENU.update = function() {

}



MAIN.preload = function() {
    for(const [key, value] of Object.entries(PATH.gem)){
        this.load.spritesheet(key, value, new SquareFrame(64)) // reduced 64 to 60
    }
    this.load.spritesheet('3x3', PATH.board['3x3'], new Frame(193, 193))
    this.load.spritesheet('platformx384', PATH.platform.x384, new Frame(384, 32))
    this.load.spritesheet('platformx512', PATH.platform.x512, new Frame(512, 32))
}

MENU.create = function() {
        /** @object grid is the gem grid */
    const grid = this.add.sprite(2*(VIEW.width/12), 7*(VIEW.height/9), '3x3')
        /** @object platforms hold the gems up */
    const platform = this.physics.add.staticGroup()
    const gems = []
    platform.create(2*(VIEW.width/12), (35/4)*(VIEW.height / 9), 'platformx384').setScale(0.5, 1.0).refreshBody()
    gems.push()
}

MENU.update = function() {

}



MAIN.preload = function() {
    for(const [key, value] of Object.entries(PATH.gem)){
        this.load.spritesheet(key, value, new SquareFrame(64)) // reduced 64 to 60
    }
    for(const [key, value] of Object.entries(PATH.board)){
        this.load.spritesheet(key, value, new Frame(384, 512))
    }
    this.load.spritesheet('platformx384', PATH.platform.x384, new Frame(384, 32))
    this.load.spritesheet('platformx512', PATH.platform.x512, new Frame(512, 32))
}

MAIN.create = function() {
    /** @object grid is the gem grid */
    grid = this.add.sprite(3*(VIEW.width/12), 4.5*(VIEW.height / 9), '6x8')

    /** @object platforms hold the gems up */
    platform = this.physics.add.staticGroup()
    platform.create(3*(VIEW.width/12), (35/4)*(VIEW.height / 9), 'platformx384')

    /** @object Gems group */
    let gems = []
    let temp = {}
    const gemBuffer = 2
    const gemXOffset = 30
    const gemYOffset = 0

    for(let i = 0; i < 6; i++){ // i indicates the row
        for(let j = 0; j < 8; j++){ // j inducates the column
            temp = this.physics.add.group({
                key: Gem.random().color.alias,
                setXY: { 
                    x: (i * VIEW.width/12) + gemXOffset, // spaces between the gems horizontally
                    y: ((64 + gemBuffer) * j) - gemYOffset // space between gems vertically on creation
                }
            })

            gems.push(temp)
            this.physics.add.collider(gems, gems)
            this.physics.add.collider(temp, platform)
        }
    }
}

MAIN.update = function() {

}

MAIN.match = function(gem1, gem2) {
    if(gem1.matches(gem2)){

    }
}

const SCENES = [MENU, MAIN, GAMEOVER]
function preloadUI(){
    
}


export {
    SCENES,
    MENU,
    MAIN,
    GAMEOVER
}
