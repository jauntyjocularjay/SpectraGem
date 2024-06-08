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
    GEMPath,
    Gem,
} from './components/Gem.mjs'


const VIEW = new View(832,600)
const BOARDPath = {
    '8x8': 'assets/png/board8x8.png',
    '6x8': 'assets/png/board6x8.png'}
const PLATFORMPath = {
    x384: 'assets/png/platformx384.png',
    x512: 'assets/png/platformx512.png'
}
let platform
let gems = []
let background

const playfield = new Frame(832, 640)
playfield.column = [
    0,
    64,
    128,
    192,
    256,
    320
]
playfield.row = [
    0,
    64,
    128,
    192,
    256,
    320,
    384,
    448,
    512
]

const gameplay = {}
gameplay.stackGems = () => {
    playfield.column.forEach(col => {
        playfield.row.forEach(row => {
            gem.create(col, row)
        })
    })
}

gameplay.preload = gameplayPreload
gameplay.create = gameplayCreate
gameplay.update = gamemplayupdate

function gameplayPreload() {
    for(const [key, value] of Object.entries(GEMPath)){
        this.load.spritesheet(key, value, new SquareFrame(64))
    }
    for(const [key, value] of Object.entries(BOARDPath)){
        this.load.spritesheet(key, value, new Frame(384, 512))
    }
    this.load.spritesheet('platformx384', PLATFORMPath.x384, new Frame(384, 32))
    this.load.spritesheet('platformx512', PLATFORMPath.x512, new Frame(512, 32))
}


function gameplayCreate() {
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

    // for(let i = 0; i < 8; i++){
        // gems.push(this.physics.add.sprite(4 * VIEW.width / 13, 0, 'blue'))
    // }

    // gems.forEach(gem => {
    //     gem.setCollideWorldBounds(true)
    //     gem.setBounce(0.2)
    // })

    

    /** @object platforms hold the gems up */
    platform = this.physics.add.staticGroup()
    platform.create(VIEW.width / 2, VIEW.height-30, 'platformx384')
    this.physics.add.collider(gems, platform)
    // gems.forEach(gem => {
    //     
    //     setTimeout(() => { null }, 1000)
    // })
}

function gamemplayupdate() {
    
}

let config = new Config(VIEW, PHYSICS)
config.type = Phaser.AUTO
config.scene = gameplay
let game = new Phaser.Game(config)






