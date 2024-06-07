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



const playfield = new Frame(384, 576)
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
            gems.create(col, row,)
        })
    })
}

gameplay.preload = () => {
    for(const [key, value] of Object.entries(PATH.GEM)){
        this.image.add(key, value)
    }
}


gameplay.create = () => {
    this.stackGems()
}

gameplay.update = () => {
    
}


let config = new Config(new View(800, 600), PHYSICS, gameplay)
let game = new Phaser.Game(config)

