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
    GEMPath
} from './components/Gem.mjs'
import {
    // Constants
    display,
    flex,
    event,
    unit,
    tag,

    // Base Classes
    OptionSelection,
    StyleSheet,
    Listener,
    ListenerOnLoad,
    // FlexBoxClass,

    // Classables
    // // Containers
    Img as PhaserImg,
    Div,
    DivBtn,
    FlexBox,
    Figure,
    Form,
    Label,
    // // Input
    Button,
    Input,
    TextArea,
    Select,
    Option,
    // // Format elements
    Br,
    //  // External Resource Links
    Link,
    Style,

    // Text Elements
    // // Headers
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    // // Body Text
    P,
    PSpan,
    Figcaption,
    A,
    Strong,
    Abbr,
    Blockquote,
    Sub,
    Sup,
    Span,
    Text,
    Code,
    Pre,

    // Functions
    getStylesheetByFileName,
    addAdoptedStyleSheet,

    // JSONCSS
    JSONCSS,
    UnsupportedJSONCSSError,
    PercentageOutOfRangeError
} from './vjsc/vanilla.mjs'


const VIEW = new View(832,600)
const BOARDPath = {
    '8x8': 'assets/png/board8x8.png',
    '6x8': 'assets/png/board6x8.png'
}
let platforms = {}
let gem = {}

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
        this.load.image(key, value)
    }
}


function gameplayCreate() {
    this.add.image(VIEW.width / 2, VIEW.height / 2, '6x8')

    platforms = this.physics.add.staticGroup()
    platforms.create(VIEW.width / 2, VIEW.height-24, 'gray').setScale(7,0.25).refreshBody()

    gem = this.physics.add.sprite(4 * VIEW.width / 13, 0, 'blue')
    gem.setColliderWorldBounds(true)
    gem.setBounce(0.2)
}

function gamemplayupdate() {
    
}

let config = new Config(VIEW, PHYSICS, null)
// config.type = Phaser.AUTO
config.scene = gameplay
let game = new Phaser.Game(config)
console.log(config)
console.log(game)
console.log()

