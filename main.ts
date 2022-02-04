// adds one score to player  2
input.onButtonPressed(Button.A, function () {
    a = a + 1
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . #
        `)
    basic.clearScreen()
})
// adds one score to tie
input.onButtonPressed(Button.AB, function () {
    t = t + 1
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
})
// adds 1 score to player one
input.onButtonPressed(Button.B, function () {
    b = b + 1
    basic.showLeds(`
        . . . . .
        . # . . .
        . # # . .
        . # . # .
        . # # . .
        `)
    basic.clearScreen()
})
// shows wins
input.onGesture(Gesture.Shake, function () {
    basic.showString("Wins")
    basic.pause(500)
    basic.showString("A")
    basic.pause(500)
    basic.showNumber(a)
    basic.pause(500)
    basic.showString("B")
    basic.pause(500)
    basic.showNumber(b)
    basic.pause(500)
    basic.showString("T")
    basic.pause(500)
    basic.showNumber(t)
    basic.pause(500)
    basic.clearScreen()
})
// shows that the score is 0 and 0 to show that a new game has begun
let b = 0
let t = 0
let a = 0
if (a == 0) {
    basic.showLeds(`
        . # . . .
        # . # . .
        # . # . .
        # . # . .
        . # . . .
        `)
    basic.clearScreen()
    basic.pause(300)
    basic.showLeds(`
        . . . # .
        . . # . #
        . . # . #
        . . # . #
        . . . # .
        `)
    basic.clearScreen()
}
// shows which player reaches 5 first
basic.forever(function () {
    // shows that play 1 wins
    if (a == 5) {
        basic.showString("p A wins")
    }
    // shows that player 2 wins
    if (b == 5) {
        basic.showString("p B wins")
    }
    // shows that it is a tie game
    if (t == 5) {
        basic.showString("TIE")
    }
})
