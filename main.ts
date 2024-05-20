namespace SpriteKind {
    export const Tower = SpriteKind.create()
}
let sweeper: Sprite = null
let list: number[] = []
tiles.setCurrentTilemap(tilemap`level2`)
scene.setBackgroundColor(6)
let Cursor = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 8 8 8 8 8 . . . . . . . 
    . . . . 8 8 8 8 8 8 8 8 8 8 8 8 
    . . . . 8 . . . 8 . . . . . . 8 
    . . . . 8 . . . 8 . . . . . . 8 
    . . . . 8 8 8 8 8 . . . . . . 8 
    . . . . 8 . . . . . . . . . . 8 
    . . . . 8 . . . . . . . . . . 8 
    . . . . 8 8 8 8 8 8 8 8 8 8 8 8 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Cursor)
Cursor.setFlag(SpriteFlag.Ghost, true)
scene.cameraFollowSprite(Cursor)
let Spawnerlocation = list[0]
let BaseLocation = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
game.onUpdate(function () {
	
})
game.onUpdateInterval(1000, function () {
    sweeper = sprites.create(assets.image`Sweeper`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(sweeper, assets.tile`myTile0`)
    sweeper.setVelocity(-10, 50)
})
