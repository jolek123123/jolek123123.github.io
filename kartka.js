import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite('kartka','kartka.png')
loadSprite('balwan','balwan.png')
loadSound('muzyka','do_szopy_hej_pasterze.mp3')


add([
    sprite('kartka')
])



const balwan = add([
    sprite('balwan'),
    pos(200,200)
])

let wprawo = true


balwan.onUpdate(()=> {
    if(wprawo && balwan.pos.x < 600)  
    balwan.pos.x += 1
    else if (!wprawo && balwan.pos.x > 50)
    balwan.pos.x -=1
    else wprawo ^= true
})



 onMouseRelease(()=> play("muzyka"))


