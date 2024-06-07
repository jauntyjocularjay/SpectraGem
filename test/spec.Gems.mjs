import {
    throwsAnError,
    did,
    does,
    have,
    has,
    is,
    matches,
    getCounter,
    expectToBeTrue,
    expectValuesToMatch,
    expectArraysToBeEqual,
    expectArrayToInclude,
    expectArraytoIncludeArrayContents,
    objectsAreEquivalent,
    expectObjectsAreEqual,
    expectToBeNull,
    throwsError,
    expectConstructorToThrowError,
    nullCheck,
} from '../chaitests/Chai.mjs'
import { expect } from 'chai'
import {
    Gem,
    RedGem,
    OrangeGem,
    YellowGem,
    GreenGem,
    BlueGem,
    VioletGem,
    WhiteGem,
    GrayGem,
    
    // for testing only
    PrimaryGem,
    SecondaryGem,
} from '../components/Gem.mjs'

describe('Gem.mjs', () => {
    const redGem = new RedGem()
    const orangeGem = new OrangeGem()
    const yellowGem = new YellowGem()
    const greenGem = new GreenGem()
    const blueGem = new BlueGem()
    const violetGem = new VioletGem()
    const whiteGem = new WhiteGem()
    const grayGem = new GrayGem()

    describe('Static Fields', () => {
        expectObjectsAreEqual('RedGem.RED', RedGem.RED, 'redGem.color:', redGem.color)
        expectObjectsAreEqual('OrangeGem.ORANGE', OrangeGem.ORANGE, 'orangeGem.color:', orangeGem.color)
        expectObjectsAreEqual('YellowGem.YELLOW', YellowGem.YELLOW, 'yellowGem.color:', yellowGem.color)
        expectObjectsAreEqual('GreenGem.GREEN', GreenGem.GREEN, 'greenGem.color:', greenGem.color)
        expectObjectsAreEqual('BlueGem.BLUE', BlueGem.BLUE, 'blueGem.color:', blueGem.color)
        expectObjectsAreEqual('VioletGem.VIOLET', VioletGem.VIOLET, 'violetGem.color:', violetGem.color)
        expectObjectsAreEqual('WhiteGem.WHITE', WhiteGem.WHITE, 'whiteGem.color:', whiteGem.color)
        expectObjectsAreEqual('GrayGem.GRAY', GrayGem.GRAY, 'grayGem.color:', grayGem.color)
        expectArraytoIncludeArrayContents('Gem.RED.composes', Gem.RED.composes, '[Gem.ORANGE, Gem.VIOLET]', [Gem.ORANGE, Gem.VIOLET])
        expectArraytoIncludeArrayContents('Gem.RED.composes', Gem.RED.composes, '[Gem.BLUE, Gem.VIOLET]', [Gem.BLUE, Gem.VIOLET], false)
    })

    describe('', () => {
        
    })
})




