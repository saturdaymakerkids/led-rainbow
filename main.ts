input.onButtonPressed(Button.A, function () {
    speed += -1
    basic.showNumber(speed)
})
input.onButtonPressed(Button.B, function () {
    speed += 1
    basic.showNumber(speed)
})
let speed = 0
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
let x = 0
speed = 2
basic.forever(function () {
    x += speed
    strip.showRainbow((x + 1) % 360, (x + 360) % 360)
})
