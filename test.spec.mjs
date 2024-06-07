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
    objectsAreEquivalent,
    expectObjectsAreEqual,
    expectToBeNull,
    throwsError,
    expectConstructorToThrowError,
    nullCheck,
} from './Chai.mjs'
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

describe('', () => {
        const redGem = new RedGem()
        console.log('gem.RED', Gem.RED, 'redGem.color:', redGem.color)
        expectObjectsAreEqual('gem.RED', Gem.RED, 'redGem.color:', redGem.color)
})




