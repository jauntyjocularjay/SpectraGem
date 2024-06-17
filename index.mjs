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
    Img as PhaserImg,
    SpriteSheet
} from './phaserhelpers/index.mjs'
import {
    VIEW,
} from './components/index.mjs'
import {
    SCENES
} from './components/Scenes.mjs'
import {
    // Constants
    DISPLAY,
    FLEX,
    EVENT,
    UNIT,
    TAG,

    // Base Classes
    OptionSelection,
    StyleSheet,
    Listener,
    ListenerOnLoad,

    // Classables
    // // Containers
    // Img,
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


let config = new Config(VIEW)
config.scene = SCENES[1]

const game = new Phaser.Game(config)

const canvas = document.querySelector('canvas')
const wrapper = document.querySelector('#wrapper')
wrapper.appendChild(canvas)


