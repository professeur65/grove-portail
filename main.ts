basic.showLeds(`
    # # . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.servoWritePin(AnalogPin.P2, 10)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.servoWritePin(AnalogPin.P2, 130)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
