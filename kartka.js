import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite('kartka','kartka.png')

add([
    sprite('kartka')
])

loadSprite('balwan','balwan.png')

add([
    sprite('balwan'),
    pos(200,200)
])
