const PATH = {
    GEM : {
        blue: 'assets/png/blue.png',
        gray: 'assets/png/gray.png',
        green: 'assets/png/green.png',
        violet: 'assets/png/magenta.png',
        orange: 'assets/png/orange.png',
        red: 'assets/png/red.png',
        white: 'assets/png/white.png',
        yellow: 'assets/png/yellow.png'
    }
}

class Gem {
    static RED = {
        alias: 'red',
        type: 'primary',
        path: PATH.GEM.red,
        composes: null
    }
    static ORANGE = {
        alias: 'orange',
        type: 'secondary',
        path: PATH.GEM.orange,
        composes: null
    }
    static YELLOW = {
        alias: 'yellow',
        type: 'primary',
        path: PATH.GEM.yellow,
        composes: null
    }
    static GREEN = {
        alias: 'green',
        type: 'secondary',
        path: PATH.GEM.green,
        composes: null
    }
    static BLUE = {
        alias: 'blue',
        type: 'primary',
        path: PATH.GEM.blue,
        composes: null
    }
    static VIOLET = {
        alias: 'violet',
        type: 'secondary',
        path: PATH.GEM.violet,
        composes: null
    }
    static WHITE = {
        alias: 'white',
        type: 'wild',
        path: PATH.GEM.white,
        composes: null
    }
    static GRAY = {
        alias: 'gray',
        type: 'dud',
        path: PATH.GEM.gray,
        composes: []
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
        this.color = Gem.RED
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
        this.color = Gem.ORANGE
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