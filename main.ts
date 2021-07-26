basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("A")
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
