import {
    PATH
} from './index.mjs'



class Gem {
    static RED = {
        alias: 'red',
        type: 'primary',
        path: PATH.gem.red,
        composes: null
    }
    static ORANGE = {
        alias: 'orange',
        type: 'secondary',
        path: PATH.gem.orange,
        composes: null
    }
    static YELLOW = {
        alias: 'yellow',
        type: 'primary',
        path: PATH.gem.yellow,
        composes: null
    }
    static GREEN = {
        alias: 'green',
        type: 'secondary',
        path: PATH.gem.green,
        composes: null
    }
    static BLUE = {
        alias: 'blue',
        type: 'primary',
        path: PATH.gem.blue,
        composes: null
    }
    static VIOLET = {
        alias: 'violet',
        type: 'secondary',
        path: PATH.gem.violet,
        composes: null
    }
    static WHITE = {
        alias: 'white',
        type: 'wild',
        path: PATH.gem.white,
        composes: null
    }
    static GRAY = {
        alias: 'gray',
        type: 'dud',
        path: PATH.gem.gray,
        composes: []
    }

    static random(){
        const random = Math.floor(Math.random() * 60)
        if(random <= 8){
            return new RedGem()
        } else if(random <= 16){
            return new OrangeGem()
        } else if(random <= 24){
            return new YellowGem()
        } else if(random <= 32){
            return new GreenGem()
        } else if(random <= 40){
            return new BlueGem()
        } else if(random <= 48){
            return new VioletGem()
        } else if(random <= 56){
            return new GrayGem()
        } else if(random <= 60){
            return new WhiteGem()
        }
        
    }

    constructor(){}

    matchesType(gem){
        if(this.type === gem.type){ return true }
    }

    matchesComposes(gem){
        this.color.composes.forEach(color => {
            if(!gem.composes.includes(color)){
                return false
            }
        })

        return true
    }

    matches(color){
        if((this.matchesType(color) && this.matchesComposes(color)) || this.type === 'wild' || color.type === 'wild'){
            return true
        } else {
            return false
        }
    }
}

Gem.RED.composes = [Gem.ORANGE, Gem.VIOLET]
Gem.ORANGE.composes = [Gem.RED, Gem.YELLOW]
Gem.YELLOW.composes = [Gem.ORANGE, Gem.GREEN]
Gem.GREEN.composes = [Gem.YELLOW, Gem.BLUE]
Gem.BLUE.composes = [Gem.GREEN, Gem.VIOLET]
Gem.VIOLET.composes = [Gem.RED, Gem.BLUE]
Gem.WHITE.composes = [Gem.RED, Gem.ORANGE, Gem.YELLOW, Gem.GREEN, Gem.BLUE, Gem.VIOLET]

class PrimaryGem extends Gem {
    constructor(){
        super()
        this.color = {
            alias: 'primary',
            type: 'primary'
        }
    }

    combinesInto(gem){
        return this.type.composes.includes(gem.type)
    }

    combinesWith(gem){
        return this.color.type === gem.color.type
    }

    intersectionWith(gem){
        this.color.composes.forEach(thisColor => {
            this.color.composes.forEach(thatColor => {
                if(thisColor === thatColor){
                    return thisColor
                }
            })
        })
    }
}

class RedGem extends PrimaryGem {
    constructor(){
        super()
        this.color = Gem.RED
    }

    combine(gem){
        const intersection = this.intersectionWith(gem)
        if(intersection === Gem.RED){
            return new RedGem()
        } else if(intersection === Gem.BLUE){
            return new BlueGem()
        } else if(intersection === Gem.YELLOW){
            return new YellowGem()
        }
    }
}

class YellowGem extends PrimaryGem { 
    constructor(){
        super()
        this.color = Gem.YELLOW
    }
}

class BlueGem extends PrimaryGem { 
    constructor(){
        super()
        this.color = Gem.BLUE
    }
}

class SecondaryGem extends Gem {
    constructor(){
        super()
        this.color = {
            alias: 'secondary',
            type: 'secondary'  
        }
    }

    splitsFrom(gem){
        return this.type.composes.includes(gem.type)
    }
}

class OrangeGem extends SecondaryGem {
    constructor(){
        super()
        this.color = Gem.ORANGE
    }
}

class GreenGem extends SecondaryGem {
    constructor(){
        super()
        this.color = Gem.GREEN
    }
}

class VioletGem extends SecondaryGem { // violet <- red, blue
    constructor(){
        super()
        this.color = Gem.VIOLET
    }
}

class WhiteGem extends Gem {
    constructor(){
        super()
        this.color = Gem.WHITE
    }
}

class GrayGem extends Gem {
    constructor(){
        super()
        this.color = Gem.GRAY
    }
}

export {
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
}
