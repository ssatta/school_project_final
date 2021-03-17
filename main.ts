let timer = 0
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    if (60 > input.compassHeading()) {
        basic.pause(1000)
        timer += 1
        if (2 < timer) {
            while (60 > input.compassHeading()) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                music.playTone(392, music.beat(BeatFraction.Whole))
                music.playTone(415, music.beat(BeatFraction.Whole))
            }
            timer = 0
        }
    } else {
        timer = 0
    }
})
