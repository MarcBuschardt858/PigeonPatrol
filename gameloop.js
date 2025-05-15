let GAMELOOPJS_SPEED = 1000 / 60;
let GAMELOOPJS_SPACE_TIMEOUT = 100;
let GAMELOOPJS_INTERVALS = [];

const GAMELOOPJS_KEY = {};

document.addEventListener('keydown', e => GAMELOOPJS_KEY[e.keyCode] = true);
document.addEventListener('keyup', e => GAMELOOPJS_KEY[e.keyCode] = false);

function leftKeyPressed() {
    console.log('Please implement the function leftKeyPressed()');
}

function rightKeyPressed() {
    console.log('Please implement the function rightKeyPressed()');
}

function upKeyPressed() {
    console.log('Please implement the function upKeyPressed()');
}

function downKeyPressed() {
    console.log('Please implement the function downKeyPressed()');
}

function spaceKeyPressed() {
    console.log('Please implement the function spaceKeyPressed()');
}

//Gucken ob eine taste losgelassen wurde
let isUpKeyPressed = false;
let isDownKeyPressed = false;

const keysPressed = {
    up: false,
    down: false,
    left: false,
    right: false,
};

window.addEventListener('keydown', (e) => {
    if (e.key === "ArrowUp") keysPressed.up = true;
    if (e.key === "ArrowDown") keysPressed.down = true;
    if (e.key === "ArrowLeft") keysPressed.left = true;
    if (e.key === "ArrowRight") keysPressed.right = true;
});

window.addEventListener('keyup', (e) => {
    if (e.key === "ArrowUp") keysPressed.up = false;
    if (e.key === "ArrowDown") keysPressed.down = false;
    if (e.key === "ArrowLeft") keysPressed.left = false;
    if (e.key === "ArrowRight") keysPressed.right = false;
});

function upKeyReleased() {
    return !keysPressed.up;
}
function downKeyReleased() {
    return !keysPressed.down;
}

function leftKeyReleased() {
    return !keysPressed.left;
}

function rightKeyReleased() {
    return !keysPressed.right;
}

function flyUp(gameObject, speed = 10, repeat = 2000) {
    let i = 0;
    let interval = gameInterval(() => {
        console.log('wagen fährt');
        gameObject.y -= speed;
        if (++i >= repeat) {
            clearInterval(interval);
            console.log('wagen fährt nicht mehr');
        }
    }, GAMELOOPJS_SPEED);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function flyDown(gameObject, speed = 10, repeat = 2000) {
    let i = 0;
    let interval = gameInterval(() => {
        gameObject.y += speed;
        if (++i >= repeat) {
            clearInterval(interval);
        }
    }, GAMELOOPJS_SPEED);
}


GAMELOOPJS_START();
function GAMELOOPJS_START() {
    let spaceKeyLocked = false;
    gameInterval(() => {
        if (GAMELOOPJS_KEY[37]) leftKeyPressed();
        if (GAMELOOPJS_KEY[39]) rightKeyPressed();
        if (GAMELOOPJS_KEY[38]) upKeyPressed();
        if (GAMELOOPJS_KEY[40]) downKeyPressed();
        if (GAMELOOPJS_KEY[32]) {
            if (!spaceKeyLocked) {
                spaceKeyPressed();
                spaceKeyLocked = true;
                setTimeout(() => {
                    spaceKeyLocked = false;
                }, GAMELOOPJS_SPACE_TIMEOUT);
            }
        }
    }, GAMELOOPJS_SPEED);
}


function waitForCollision(object1, object2) {
    return new Promise((resolve) => {
        gameInterval(() => {
            if (object2 instanceof Array) {
                object2.forEach((gameObject) => {
                    if (isColliding(object1, gameObject)) {
                        resolve([object1, gameObject]);
                    }
                });
            } else {
                if (isColliding(object1, object2)) {
                    resolve([object1, object2]);
                }
            }
        }, 50);
    });
}


function isColliding(object1, object2) {
    let children = typeof rocket !== 'undefined' ? app.stage.children : [];
    if (children.includes(object1) && children.includes(object2)) {

        const bounds1 = object1.getBounds();
        const bounds2 = object2.getBounds();

        return bounds1.x < bounds2.x + bounds2.width
            && bounds1.x + bounds1.width > bounds2.x
            && bounds1.y < bounds2.y + bounds2.height
            && bounds1.y + bounds1.height > bounds2.y;
    }
    return false;
}


function stopGame() {
    GAMELOOPJS_INTERVALS.forEach(clearInterval);
}

function gameInterval(fun, time) {
    let interval = setInterval(fun, time);
    GAMELOOPJS_INTERVALS.push(interval);
    return interval;
}


//Selbst erstellte funktionen
function slideLeftAndRight(sprite, speed, minX, maxX){
    sprite.x += speed;

    if(sprite.x >= maxX){
        sprite.x = maxX;
        speed = -Math.abs(speed) //Ändert die richtung nach links
    }
    else if (sprite.x <= minX){
        sprite.x = minX;
        speed = Math.abs(speed);
    }

    return speed;
}



function isRectColliding(x1, y1, w1, h1, x2, y2, w2, h2) {
    return (
        x1 < x2 + w2 &&
        x1 + w1 > x2 &&
        y1 < y2 + h2 &&
        y1 + h1 > y2
    );
}

function moveCheckMapBounds(sprite, dx) {
    const newX = sprite.x + dx;

    if (newX < 0 || newX + sprite.width > app.screen.width) {
        return; // Blockiere Bewegung am Rand
    }
    sprite.x = newX;
}



//Funktion um zu erkennen wie die hitbox aussieht
function drawHitbox(hitbox, color = 0xff0000) {
    const box = new PIXI.Graphics();
    box.lineStyle(2, color);
    box.drawRect(0, 0, hitbox.width, hitbox.height);
    box.x = hitbox.x;
    box.y = hitbox.y;
    app.stage.addChild(box);
}


//Verschiedene Displays je anch verlauf des spiels
function abgehörtDisplay(){
    //Logik für wenn man abgehört wurde
    stopGame();

    //Hintergrund
    const overlay = new PIXI.Graphics();
    overlay.beginFill(0x800000, 1);
    overlay.drawRect(0, 0, app.screen.width, app.screen.height);
    overlay.endFill();

    app.stage.addChild(overlay);

    //Überschrift 
    //Text der Taube
    const überschrift = new PIXI.Text('ABGEHÖRT!!', {
        fontFamily: 'Press Start 2P',
        fontSize: 50,
        fill: 0x000000,
    });

    überschrift.x = 150;
    überschrift.y = 100;

    app.stage.addChild(überschrift);

    //Taube
    const taubenAgent = PIXI.Sprite.from('assets/pigeon_front.png');
    taubenAgent.x = 450;
    taubenAgent.y = 450;
    taubenAgent.scale.set(10);
    app.stage.addChild(taubenAgent);

    //Sprechblase der Taube
    const sprechblase = PIXI.Sprite.from('assets/speachbubble.png');
    sprechblase.x = 100;
    sprechblase.y = 150;
    sprechblase.height = 500;
    sprechblase.width = 500;

    app.stage.addChild(sprechblase);

    //Text der Taube
    const text = new PIXI.Text('Ich werde Olaf Scholz von dir Berichten', {
        fontFamily: 'Press Start 2P',
        fontSize: 25,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblase.width - 160,
        align: 'center'
    });

    text.x = sprechblase.x + 90;
    text.y = sprechblase.y + 160;

    app.stage.addChild(text);

    //Retry Button mit Logik
    const retry = PIXI.Sprite.from('assets/retry.png');
    retry.x = 150;
    retry.y = 450;
    retry.scale.set(10)

    retry.interactive = true;
    retry.buttonMode = true;

    retry.on('pointerdown', () => {
        window.location.reload();
    });
    app.stage.addChild(retry);
}

function hindernissgetroffenDisplay(showText){
    //Logik für wenn man abgehört wurde
    stopGame();

    //Hintergrund
    const overlay = new PIXI.Graphics();
    overlay.beginFill(0x800000, 1);
    overlay.drawRect(0, 0, app.screen.width, app.screen.height);
    overlay.endFill();

    app.stage.addChild(overlay);

    //Überschrift 
    const überschrift = new PIXI.Text(`${showText}`, {
        fontFamily: 'Press Start 2P',
        fontSize: 50,
        fill: 0x000000,
    });

    überschrift.x = 200;
    überschrift.y = 100;

    app.stage.addChild(überschrift);

    //Taube
    const taubenAgent = PIXI.Sprite.from('assets/pigeon_front.png');
    taubenAgent.x = 450;
    taubenAgent.y = 450;
    taubenAgent.scale.set(10);
    app.stage.addChild(taubenAgent);

    //Sprechblase der Taube
    const sprechblase = PIXI.Sprite.from('assets/speachbubble.png');
    sprechblase.x = 100;
    sprechblase.y = 150;
    sprechblase.height = 500;
    sprechblase.width = 500;

    app.stage.addChild(sprechblase);

    //Text der Taube
    const text = new PIXI.Text('Ich werde Olaf Scholz von dir Berichten', {
        fontFamily: 'Press Start 2P',
        fontSize: 25,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblase.width - 160,
        align: 'center'
    });

    text.x = sprechblase.x + 90;
    text.y = sprechblase.y + 160;

    app.stage.addChild(text);

    //Retry Button mit Logik
    const retry = PIXI.Sprite.from('assets/retry.png');
    retry.x = 150;
    retry.y = 450;
    retry.scale.set(10)

    retry.interactive = true;
    retry.buttonMode = true;
    
    retry.on('pointerdown', () => {
        window.location.reload();
    });
    app.stage.addChild(retry);

    
}

