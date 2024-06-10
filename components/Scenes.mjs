import {
    Scene,
    Collider
} from 'phaser'

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

// let grid
let platform
// let gemSprites

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

const btns = {}
for(const [key, value] of Object.entries(PATH.btn)){
    btns[key] = new SpriteSheet(key, value, new Frame(120, 40))
}
const panels = {}
for(const [key, value] of Object.entries(PATH.panel)){
    panels[key] = new SpriteSheet(key, value, new Frame(128, 64))
}
const gems = {}
for(const [key, value] of Object.entries(PATH.gem)){
    gems[key] = new SpriteSheet(key, value, new SquareFrame(60)) // reduced 64 to 60
}
const cards = {}
for(const [key, value] of Object.entries(PATH.card.lrg)){
    cards[key] = new SpriteSheet(key, value, new Frame(384, 768))
}
for(const [key, value] of Object.entries(PATH.card.med)){
    cards[key] = new SpriteSheet(key, value, new Frame(416, 384))
}
for(const [key, value] of Object.entries(PATH.card.sml)){
    cards[key] = new SpriteSheet(key, value, new Frame(640, 384))
}
const boards = {
    '3x3': new SpriteSheet('3x3', PATH.board['3x3'], new Frame(193, 193)),
    platformx384: new SpriteSheet('platformx384', PATH.platform.x384, new Frame(384, 32)),
    platformx512: new SpriteSheet('platformx512', PATH.platform.x512, new Frame(512, 32))
}
const icons = {}
for(const [key, value] of Object.entries(PATH.icon.social)){
    icons[key] = new SpriteSheet(key, value, iconFrame)
}
for(const [key, value] of Object.entries(PATH.icon.direction)){
    icons[key] = new SpriteSheet(key, value, iconFrame)
}
for(const [key, value] of Object.entries(PATH.icon.action)){
    icons[key] = new SpriteSheet(key, value, iconFrame)
}
for(const [key, value] of Object.entries(PATH.icon.msg)){
    icons[key] = new SpriteSheet(key, value, iconFrame)
}
for(const [key, value] of Object.entries(PATH.icon['in-game'])){
    icons[key] = new SpriteSheet(key, value, iconFrame)
}
for(const [key, value] of Object.entries(PATH.icon.action)){
    icons[key] = new SpriteSheet(key, value, iconFrame)
}
for(const [key, value] of Object.entries(PATH.icon.sound)){
    icons[key] = new SpriteSheet(key, value, iconFrame)
}
for(const [key, value] of Object.entries(PATH.icon.other)){
    icons[key] = new SpriteSheet(key, value, iconFrame)
}

MENU.preload = function() {
    this.load.image('aurora', PATH.background.aurora)
    Object.values(btns).forEach(btn => btn.preload(this))
    Object.values(panels).forEach(panel => panel.preload(this))
    Object.values(gems).forEach(gem => gem.preload(this))
    Object.values(cards).forEach(card => card.preload(this))
    Object.values(boards).forEach(board => board.preload(this))
    Object.values(icons).forEach(icon => icon.preload(this))
}

MENU.create = function() {
    
    this.add.image(VIEW.width/2, VIEW.height/2, 'aurora')
    
    /** @object grid is the gem grid */
    boards['3x3'].create(this, 2*(VIEW.width/12), 7*(VIEW.height/9), '3x3')

    /** @object platforms hold the gems up */
    const platform = this.physics.add.staticGroup()
    platform.create(2*(VIEW.width/12), (35/4)*(VIEW.height / 9), 'platformx384').setScale(98.0/192.0, 1.0).refreshBody()

    const ui = {
        background: cards.lrga.create(this, 9*(VIEW.width/12), 6*(VIEW.height / 9), 'lrga')
    }
    
}

MENU.update = function() {

}

MAIN.preload = function() {
    this.load.image('aurora', PATH.background.aurora)

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
    /** @object bg is the background image */
    this.load.image('aurora', PATH.background.aurora)

    /** @object grid is the gem grid */
    this.add.sprite(3*(VIEW.width/12), 4.5*(VIEW.height / 9), '6x8')

    /** @object platforms hold the gems up */
    platform = this.physics.add.staticGroup()
    platform.create(3*(VIEW.width/12), (35/4)*(VIEW.height / 9), 'platformx384')

    /** @object Gems group */
    let gems = []
    const gemBuffer = 2
    const gemXOffset = 30
    const gemYOffset = 0

    for(let i = 0; i < 6; i++){ // i indicates the row
        for(let j = 0; j < 8; j++){ // j inducates the column
            gems.push(this.physics.add.group({
                key: Gem.random().color.alias,
                setXY: { 
                    x: (i * VIEW.width/12) + gemXOffset, // spaces between the gems horizontally
                    y: ((64 + gemBuffer) * j) - gemYOffset // space between gems vertically on creation
                }
            }))
        }
    }

    const overlapper = Collider(
        this.world, 
        true, 
        gems, 
        gems, 
        () => {
            this.world.collideObjects(
                this.object1,
                this.object2,
                this.collideCallback,
                this.processCallback,
                this.callbackContext,
                false
            ) 

        })
    this.physics.add.collider(gems, gems)
    this.physics.add.collider(gems, platform)
}

MAIN.update = function() {

}

MAIN.match = function(gem1, gem2) {
    if(gem1.matches(gem2)){

    }
}

const SCENES = [MENU, MAIN, GAMEOVER]

export {
    SCENES
}
