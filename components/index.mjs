import {
    View
} from '../phaserhelpers/index.mjs'



const PATH = {
    board: {
        '8x8': 'assets/png/board8x8.png',
        '6x8': 'assets/png/board6x8.png'
    },
    gem: {
        blue: 'assets/png/blue.png',
        gray: 'assets/png/gray.png',
        green: 'assets/png/green.png',
        violet: 'assets/png/magenta.png',
        orange: 'assets/png/orange.png',
        red: 'assets/png/red.png',
        white: 'assets/png/white.png',
        yellow: 'assets/png/yellow.png'
    },
    platform: {
        x384: 'assets/png/platformx384.png',
        x512: 'assets/png/platformx512.png'
    },
    btn: {
        active: 'assets/ui/btn/active.png',
        disabled: 'assets/ui/btn/disabled.png',
        hover: 'assets/ui/btn/hover.png',
        normal: 'assets/ui/btn/normal.png'
    },
    card: {
        x1: 'assets/ui/card/cardx1.png',
        x2: 'assets/ui/card/cardx2.png',
        x3: 'assets/ui/card/cardx3.png',
        x4: 'assets/ui/card/cardx4.png',
        x5: 'assets/ui/card/cardx5.png',
        x6: 'assets/ui/card/cardx6.png'
    },
    panel: {
        empty: 'assets/ui/panel/empty.png',
        green: 'assets/ui/panel/green.png',
        red: 'assets/ui/panel/red.png'
    },
    icon: {
        social: {
            discord: 'assets/ui/icon/social_discord.png',
            twitter: 'assets/ui/icon/social_twitter.png',
            youtube: 'assets/ui/icon/social_youtube.png'
        },
        direction: {
            down: 'assets/ui/icon/dir_down.png',
            left: 'assets/ui/icon/dir_left.png',
            right: 'assets/ui/icon/dir_right.png',
            up: 'assets/ui/icon/dir_up.png'
        },
        action: {
            buy: 'assets/ui/icon/buy.png',
            cart: 'assets/ui/icon/cart.png',
        },
        msg: {
            error: 'assets/ui/icon/msg_warning.png',
            info: 'assets/ui/icon/msg_info.png',
            warn: 'assets/ui/icon/msg_warning.png',
        },
        'in-game': {
            help: 'assets/ui/icon/question.png',
        },
        check: 'assets/ui/icon/check.png',
        cross: 'assets/ui/icon/cross.png',
        crosshair1: 'assets/ui/icon/crosshair1.png',
        crosshair2: 'assets/ui/icon/crosshair2.png',
        goto: 'assets/ui/icon/goto.png',
        heart: 'assets/ui/icon/heart.png',
        home: 'assets/ui/icon/home.png',
        inventory_lock: 'assets/ui/icon/inventory_lock.png',
        inventory: 'assets/ui/icon/inventory.png',
        lightning: 'assets/ui/icon/lightning.png',
        location: 'assets/ui/icon/location.png',
        menu: 'assets/ui/icon/menu.png',
        minus: 'assets/ui/icon/minus.png',
        msuic: 'assets/ui/icon/music.png',
        mute: 'assets/ui/icon/mute.png',
        plus: 'assets/ui/icon/plus.png',
        refresh: 'assets/ui/icon/refresh.png',
        settings: 'assets/ui/icon/settings.png',
        share: 'assets/ui/icon/share.png',
        shield: 'assets/ui/icon/shield.png',
        snd: 'assets/ui/icon/snd_up.png',
        star: 'assets/ui/icon/star.png',
        trash: 'assets/ui/icon/trash.png',
        xp: 'assets/ui/icon/xp.png',
    }
}
const VIEW = new View((10 * 64), (9 * 64))

export {
    PATH,
    VIEW
}