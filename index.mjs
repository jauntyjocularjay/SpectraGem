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
// import {
//     MAIN
// } from './components/Scenes.mjs'



let platform
let gems = []
let background
let game

const playfield = new Frame(832, 640)
const title = new Scene()
const gameover = new Scene()
let config = new Config(VIEW, PHYSICS)
config.scene = MAIN
// config.scene.preload = mainPreload
// config.scene.create = mainCreate
// config.scene.update = mainUpdate

// function mainPreload() {
// config.scene.preload = function() {
//     console.log('I entered the MAIN.preload')
//     for(const [key, value] of Object.entries(PATH.gem)){
//         this.load.spritesheet(key, value, new SquareFrame(64))
//     }
//     for(const [key, value] of Object.entries(PATH.board)){
//         this.load.spritesheet(key, value, new Frame(384, 512))
//     }
//     this.load.spritesheet('platformx384', PATH.platform.x384, new Frame(384, 32))
//     this.load.spritesheet('platformx512', PATH.platform.x512, new Frame(512, 32))
// }

function mainCreate() {
    /** @object background is the background grid */
    background = this.add.sprite(VIEW.width / 2, VIEW.height / 2, '6x8')

    for(let j = 0; j < 8; j++){
        for(let i = 4; i < 10; i++){
            this.physics.add.group({
                key: Gem.random().color.alias,
                repeat: 0,
                setXY: { x: i * VIEW.width/13, y: 0, stepX: 64}
            })
        }
    }

    gems.forEach(gem => {
        gem.setCollideWorldBounds(true)
        gem.setBounce(0.2)

    })

    /** @object platforms hold the gems up */
    platform = this.physics.add.staticGroup()
    platform.create(VIEW.width / 2, VIEW.height-30, 'platformx384')
    this.physics.add.collider(gems, platform)
}
function mainUpdate() {}


// const gameplay = {}
// gameplay.stackGems = () => {
//     playfield.column.forEach(col => {
//         playfield.row.forEach(row => {
//             gem.create(col, row)
//         })
//     })
// }

// gameplay.preload = gameplayPreload
// gameplay.create = gameplayCreate
// gameplay.update = gamemplayupdate

// function gameplayPreload() {
//     for(const [key, value] of Object.entries(PATH.gem)){
//         this.load.spritesheet(key, value, new SquareFrame(64))
//     }
//     for(const [key, value] of Object.entries(PATH.board)){
//         this.load.spritesheet(key, value, new Frame(384, 512))
//     }
//     this.load.spritesheet('platformx384', PATH.platform.x384, new Frame(384, 32))
//     this.load.spritesheet('platformx512', PATH.platform.x512, new Frame(512, 32))
// }

// function gameplayCreate() {
//     /** @object background is the background grid */
//     background = this.add.sprite(VIEW.width / 2, VIEW.height / 2, '6x8')

//     for(let j = 0; j < 8; j++){
//         for(let i = 4; i < 10; i++){
//             this.physics.add.group({
//                 key: Gem.random().color.alias,
//                 repeat: 0,
//                 setXY: { x: i * VIEW.width/13, y: 0, stepX: 64}
//             })
//         }
//     }

//     gems.forEach(gem => {
//         gem.setCollideWorldBounds(true)
//         gem.setBounce(0.2)

//     })

//     /** @object platforms hold the gems up */
//     platform = this.physics.add.staticGroup()
//     platform.create(VIEW.width / 2, VIEW.height-30, 'platformx384')
//     this.physics.add.collider(gems, platform)
// }

// function gamemplayupdate() {
    
// }


game = new Phaser.Game(config)
config.scene = MAIN






export {
    PATH
}