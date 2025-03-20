enum RadioMessage {
    message1 = 49434,
    Salut = 9424
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    if (Actif == 1) {
        display += 1
        if (display >= 27) {
            display = 1
        }
        basic.showString("" + (display))
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Actif == 1) {
        basic.showString("" + (display))
        if (display < 10) {
            display = parseFloat("0" + display)
        }
        Msg = "" + Msg + display
    }
})
input.onButtonPressed(Button.B, function () {
    if (Actif == 1) {
        display += 5
        if (display >= 27) {
            display = 1
        }
        basic.showString("" + (display))
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.showString(Msg)
    radio.sendNumber(parseFloat(Msg))
})
let Msg = ""
let display = 0
let Actif = 0
Actif = 0
display = 0
let Radio = 1
while (!(input.logoIsPressed())) {
    if (input.buttonIsPressed(Button.A)) {
        Radio += 1
    }
    if (input.buttonIsPressed(Button.B)) {
        Radio += -1
    }
    basic.showString("" + (Radio))
    if (Radio == 84) {
        Radio = 1
    }
    if (Radio == 0) {
        Radio = 1
    }
}
basic.clearScreen()
basic.showString("Connection")
radio.setGroup(Radio)
