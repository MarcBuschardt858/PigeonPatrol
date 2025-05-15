
//Level Zu ende??
let levelOver = false;
let levelOverOnlyOnce = true; //Damit sich die abschluss frequenz nicht wiederholt

//Darf der spieler sich bewegen?
let steuerungAktive = true;

//Fluchtwagen fürs Ende des levels definieren
const fluchtwagen = PIXI.Sprite.from('assets/fluchtwagen.png');

const fluchtwagenHitbox = {
    x: 680, 
    y: 660, 
    width: 70, 
    height: 110
}
//Krah 
const krah = PIXI.Sprite.from('assets/krah.png');
krah.x = 440;
krah.y = 100;
krah.scale.set(2);
app.stage.addChild(krah)

//Type mit dem krah redet
const type = PIXI.Sprite.from('assets/type.png');
type.x = 400;
type.y = 103;
type.scale.set(2);
app.stage.addChild(type);


//Der Koffer in den die Krawatte soll
const koffer = PIXI.Sprite.from('assets/koffer.png');
koffer.x = 440;
koffer.y = 180;
koffer.scale.set(2);
app.stage.addChild(koffer);

const kofferHitbox = {
    x: 440,
    y: 190,
    width: 70,
    height: 70,
}

//AfD Wache hinzufügen
let movingUp1 = false;
let movingUp2 = false;
let movingUp3 = false;
let movingUp4 = false;
let speed = 1.2;
let direction1 = -1;
let direction2 = 1;
let direction3 = -1;
let direction4 = 1;
let minY1 = 120;
let maxY1 = 420;
let minY2 = 520;
let maxY2 = 320;
let minY3 = 320;
let maxY3 = 520;
let minY4 = 320;
let maxY4 = 520;

const afdWache1 = PIXI.Sprite.from('assets/afd_type.png');
afdWache1.x = 280;
afdWache1.y = 120;
afdWache1.scale.set(2.5)
app.stage.addChild(afdWache1);


const afdWache2 = PIXI.Sprite.from('assets/afd_type.png');
afdWache2.x = 350;
afdWache2.y = 520;
afdWache2.scale.set(2.5)
app.stage.addChild(afdWache2);

const afdWache3 = PIXI.Sprite.from('assets/afd_type.png');
afdWache3.x = 500;
afdWache3.y = 320;
afdWache3.scale.set(2.5)
app.stage.addChild(afdWache3);

const afdWache4 = PIXI.Sprite.from('assets/afd_type.png');
afdWache4.x = 120;
afdWache4.y = 520;
afdWache4.scale.set(2.5)
app.stage.addChild(afdWache4);

//AFD Wachen Hitbox 
// Spieler-Hitbox in alle Richtungen halbieren
const afdHitboxReduction = 17;
const afdHitbox = {
    width: afdWache1.width * afdHitboxReduction,
    height: afdWache1.height * afdHitboxReduction
};

function checkAfdCollision(hitbox1, hitbox2) {
    return (
        hitbox1.x < hitbox2.x + hitbox2.width &&
        hitbox1.x + hitbox1.width > hitbox2.x &&
        hitbox1.y < hitbox2.y + hitbox2.height &&
        hitbox1.y + hitbox1.height > hitbox2.y
    );
}

app.ticker.add(() => {
    // Überprüfe, ob eine der Wachen mit Barc kollidiert
    [afdWache1, afdWache2, afdWache3, afdWache4].forEach((wache) => {
        const afdWacheHitbox = {
            x: wache.x + (wache.width - afdHitbox.width) / 2,
            y: wache.y + (wache.height - afdHitbox.height) / 2,
            width: afdHitbox.width,
            height: afdHitbox.height
        };
        
        const barcHitbox = {
            x: barc.x + (barc.width - playerHitbox.width) / 2,
            y: barc.y + (barc.height - playerHitbox.height) / 2,
            width: playerHitbox.width,
            height: playerHitbox.height
        };

        if (checkAfdCollision(afdWacheHitbox, barcHitbox)) {
            afdErwischt();
        }
    });
});

app.ticker.add(() => {
    afdWache1.y += speed * direction1;


    if (afdWache1.y <= minY1) {
        afdWache1.y = minY1; // Exakt auf minY1 setzen
        direction1 = 1; // Nach unten bewegen
    } else if (afdWache1.y >= maxY1) {
        afdWache1.y = maxY1; // Exakt auf maxY1 setzen
        direction1 = -1; // Nach oben bewegen
    }
});

app.ticker.add(()=>{
    afdWache2.y += speed * direction2;
    
    if (afdWache2.y >= minY2) {
        afdWache2.y = minY2; // Exakt auf minY1 setzen
        direction2 = -1; // Nach unten bewegen
    } else if (afdWache2.y <= maxY2) {
        afdWache2.y = maxY2; // Exakt auf maxY1 setzen
        direction2 = 1; // Nach oben bewegen
    }

})

app.ticker.add(()=>{
    afdWache3.y += speed * direction3;

    if (afdWache3.y <= minY3) {
        afdWache3.y = minY3; // Exakt auf minY1 setzen
        direction3 = 1; // Nach unten bewegen
    } else if (afdWache3.y >= maxY3) {
        afdWache3.y = maxY3; // Exakt auf maxY1 setzen
        direction3 = -1; // Nach oben bewegen
    }
})

app.ticker.add(()=>{
    afdWache4.y += speed * direction4;

    if (afdWache4.y <= minY4) {
        afdWache4.y = minY4; // Exakt auf minY1 setzen
        direction4 = 1; // Nach unten bewegen
    } else if (afdWache4.y >= maxY4) {
        afdWache4.y = maxY4; // Exakt auf maxY1 setzen
        direction4 = -1; // Nach oben bewegen
    }
})


//Spieler und logik hinzufügen
let barcVersion = 'standing';
let barc = PIXI.Sprite.from(`assets/player_${barcVersion}.png`);
barc.x = 20;
barc.y = 20;
barc.scale.set(3);
app.stage.addChild(barc);


const boundaries = { xMin: 0, xMax: 800 - barc.width, yMin: 0, yMax: 800 - barc.height };
const playerSpeed = 3;

let isMoving = false;

// Spieler-Hitbox in alle Richtungen halbieren
const hitboxReduction = 17;
const playerHitbox = {
    width: barc.width * hitboxReduction,
    height: barc.height * hitboxReduction
};

// Zeichne die Hitbox des Spielers
const playerHitboxGraphics = new PIXI.Graphics();
playerHitboxGraphics.lineStyle(2, 0x00ff00, 1);
playerHitboxGraphics.drawRect(
    barc.x + playerHitbox.width,
    barc.y + playerHitbox.height,
    playerHitbox.width,
    playerHitbox.height
);


// Absperrungen
const barriers = [
    { x: 425, y: 60, width: 90, height: 40 },
    { x: 325, y: 60, width: 90, height: 40 },
    { x: 225, y: 60, width: 90, height: 40 },
    { x: 220, y: 105, width: 40, height: 90 },
    { x: 220, y: 205, width: 40, height: 90 },
    { x: 370, y: 105, width: 40, height: 90 },
    { x: 370, y: 205, width: 40, height: 90 },
    { x: 513, y: 260, width: 110, height: 40 },
    { x: 535, y: 620, width: 110, height: 40 },
    { x: 415, y: 620, width: 110, height: 40 },
    { x: 295, y: 620, width: 110, height: 40 },
    { x: 300, y: 505, width: 40, height: 110 },
    { x: 600, y: 505, width: 40, height: 110 },
    { x: 590, y: 305, width: 40, height: 110 },
    { x: 175, y: 620, width: 110, height: 40 },
    { x: 55, y: 620, width: 110, height: 40 },
    { x: 60, y: 500, width: 40, height: 110 },
    { x: 510, y: 100, width: 110, height: 200},
    { x: 440, y: 180, width: 70, height: 70},
];

// Zeichne die Hitboxen der Absperrungen
barriers.forEach(barrier => {
    const debugRect = new PIXI.Graphics();
    debugRect.lineStyle(2, 0xff0000, 1);
    debugRect.drawRect(barrier.x, barrier.y, barrier.width, barrier.height);
});

function checkCollision(newX, newY) {
    let hitboxX = newX + (barc.width - playerHitbox.width) / 2;
    let hitboxY = newY + (barc.height - playerHitbox.height) / 2;
    
    return barriers.some(barrier =>
        hitboxX < barrier.x + barrier.width &&
        hitboxX + playerHitbox.width > barrier.x &&
        hitboxY < barrier.y + barrier.height &&
        hitboxY + playerHitbox.height > barrier.y
    );
}

function updatePlayerSpirit(newVersion){
    if (barcVersion !== newVersion) {
        barcVersion = newVersion;
        
        // Erstelle ein neues Sprite und ersetze das alte
        let newBarc = PIXI.Sprite.from(`assets/player_${barcVersion}.png`);
        newBarc.x = barc.x;  // Position beibehalten
        newBarc.y = barc.y;
        newBarc.scale.set(3);

        // Entferne das alte Sprite und füge das neue hinzu
        app.stage.removeChild(barc);
        app.stage.addChild(newBarc);

        // Aktualisiere die Referenz
        barc = newBarc;
    }
}


function movePlayer(dx, dy) {
    let newX = barc.x + dx;
    let newY = barc.y + dy;
    
    if (!checkCollision(newX, newY) && 
        newX >= boundaries.xMin && newX + playerHitbox.width <= boundaries.xMax &&
        newY >= boundaries.yMin && newY + playerHitbox.height <= boundaries.yMax) {
            barc.x = newX;
            barc.y = newY;
            isMoving = true;
    } else {
        isMoving = false;
    }

    updatePlayerSpirit(isMoving ? "moving" : "standing");


    if(!mussKrawatteAblegen){
        levelOver = checkLevelOver(newX, newY);
    }

    
}

function leftKeyPressed() {
    if (steuerungAktive){
        movePlayer(-playerSpeed, 0);
    }


}

function rightKeyPressed() {
    if (steuerungAktive){
        movePlayer(playerSpeed, 0);
    }

}

function upKeyPressed() {
    if (steuerungAktive){
        movePlayer(0, -playerSpeed);
    }
}

function downKeyPressed() {
    if (steuerungAktive){
        movePlayer(0, playerSpeed);
    }
}

app.ticker.add(() => {
    if (!isMoving) {
        updatePlayerSpirit("standing");
    }

    // Wenn keine Taste gedrückt wird, sicherstellen, dass der Spieler nicht mehr bewegt
    if (upKeyReleased() || downKeyReleased() || leftKeyReleased() || rightKeyReleased()) {
        isMoving = false;
    }
});

let krawatteAblegen = false; //Kann die krawatte abgelegt werden?
let mussKrawatteAblegen = true; //Standard bis sie abgelegt wurde

function checkBarcKofferColision(){
    const spriteX = barc.x + (barc.width - playerHitbox.width) / 2;
    const spriteY = barc.y + (barc.height - playerHitbox.height) / 2;
    

    if (
        spriteX < kofferHitbox.x + kofferHitbox.width &&
        spriteX + playerHitbox.width > kofferHitbox.x &&
        spriteY < kofferHitbox.y + kofferHitbox.height &&
        spriteY + playerHitbox.height > kofferHitbox.y
    ) {
        return true;
    } else {
        return false;
    }
}

function spaceKeyPressed(){
    krawatteAblegen = checkBarcKofferColision();

    if(krawatteAblegen && mussKrawatteAblegen){
        mussKrawatteAblegen = false;
        krawatteScene();
    }
}

function krawatteScene(){
    steuerungAktive = false;
    //Provisiorische background
    const krawatteSceneBackground = PIXI.Sprite.from('assets/krawattenscene_hintergrund.png');
    krawatteSceneBackground.width = app.screen.width;
    krawatteSceneBackground.height = app.screen.height;

    app.stage.addChild(krawatteSceneBackground);

    //Krah hinzufügen
    const krahScene = PIXI.Sprite.from('assets/krah.png');
    krahScene.x = 300;
    krahScene.y = 400;
    krahScene.scale.set(20);
    app.stage.addChild(krahScene);
    const krahHighFive = PIXI.Sprite.from('assets/krah_highfive.png');

    //Koffer hinzufügen
    const kofferScene = PIXI.Sprite.from('assets/koffer.png');

    //Krawatte hinzufügen 
    const krawatteKofferScene = PIXI.Sprite.from('assets/krawatte.png');

    //Type hinzufügem
    const typeScene = PIXI.Sprite.from('assets/type.png');
    typeScene.x = -100;
    typeScene.y = 410;
    typeScene.scale.set(20)
    app.stage.addChild(typeScene);

    //Sprechblase hinzufügen
    const sprechblaseRechts = PIXI.Sprite.from('assets/sprechblase_groß.png');
    sprechblaseRechts.x = 200;
    sprechblaseRechts.y = 260;
    sprechblaseRechts.width = 300;
    sprechblaseRechts.scale.set(7);
    app.stage.addChild(sprechblaseRechts);

    const sprechblaseLinks = PIXI.Sprite.from('assets/sprechblase_links.png');


    //Alle texte definieren
    const text1 = new PIXI.Text('Bist n Deutscher', {
        fontFamily: 'Press Start 2P',
        fontSize: 10,
        fill: 0x000000,
        align: 'center'
    })

    text1.x = 260;
    text1.y = 350;
    app.stage.addChild(text1);

    //Text 2
    const text2 = new PIXI.Text('Ja', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        align: 'center'
    })

    //Text 3
    const text3 = new PIXI.Text('Mach was draus!', {
        fontFamily: 'Press Start 2P',
        fontSize: 10,
        fill: 0x000000,
        align: 'center'
    })

    //text 4
    const text4 = new PIXI.Text('Was für eine schÖne Krawatte', {
        fontFamily: 'Press Start 2P',
        fontSize: 10,
        fill: 0x000000,
        align: 'center'
    })

    //text 4
    const text5 = new PIXI.Text('Braun ist meine Lieblingsfarbe', {
        fontFamily: 'Press Start 2P',
        fontSize: 10,
        fill: 0x000000,
        align: 'center'
    })

    const text6 = new PIXI.Text('DU WURDEST GESEHEN!!! ENTKOMME DEN WACHEN!!!!!', {
        fontFamily: 'Press Start 2P',
        fontSize: 30,
        wordWrap: true,
        wordWrapWidth: app.screen.width - 100,
        fill: 0x997700,
        align: 'center'
    })

    setTimeout(()=>{

        app.stage.removeChild(sprechblaseRechts);
        
        app.stage.removeChild(text1);
        sprechblaseLinks.x = 270;
        sprechblaseLinks.y = 260;
        sprechblaseLinks.scale.set(7);

        app.stage.addChild(sprechblaseLinks)

        text2.x = 370;
        text2.y = 340;
        app.stage.addChild(text2);
    }, 2000)

    setTimeout(()=>{

        app.stage.removeChild(sprechblaseLinks);
        app.stage.removeChild(text2);

        sprechblaseRechts.x = 270;
        sprechblaseRechts.y = 260;
        sprechblaseRechts.width = 400;
        sprechblaseRechts.scale.set(7);

        app.stage.addChild(sprechblaseRechts);

        text3.x = 300;
        text3.y = 350;
        app.stage.addChild(text3);
    }, 4000)

    setTimeout(()=>{
        app.stage.removeChild(sprechblaseRechts);
        app.stage.removeChild(text3);
        app.stage.removeChild(krahScene);

        krahHighFive.x = krahScene.x;
        krahHighFive.y = krahScene.y;
        krahHighFive.scale.set(20);
        app.stage.addChild(krahHighFive); 
    }, 7000)

    setTimeout(()=>{
        flyDown(typeScene, 10, 100);
    }, 10000)

    setTimeout(()=>{
        app.stage.removeChild(krahHighFive);
        app.stage.addChild(krahScene);
        

        kofferScene.x = 50;
        kofferScene.y = krahScene.y + 80;
        kofferScene.scale.set(10);
        app.stage.addChild(kofferScene);

        krawatteKofferScene.x = kofferScene.x + 70; 
        krawatteKofferScene.y = kofferScene.y + 40;
        krawatteKofferScene.scale.set(6)
        app.stage.addChild(krawatteKofferScene);

        sprechblaseRechts.x = 100;
        sprechblaseRechts.y = 300;
        sprechblaseRechts.width = 400;
        app.stage.addChild(sprechblaseRechts);

        text4.x = 140;
        text4.y = 390;
        
        app.stage.addChild(text4);

    },12000)

    setTimeout(()=>{
        app.stage.removeChild(text4);

        sprechblaseRechts.x = 100;
        sprechblaseRechts.width = 400;
        app.stage.addChild(sprechblaseRechts);

        text5.x = 133;
        text5.y = 390;
        
        app.stage.addChild(text5);

    },15000)

    setTimeout(()=>{
        app.stage.removeChild(sprechblaseRechts);
        app.stage.removeChild(krawatteKofferScene);
        app.stage.removeChild(text5);
        app.stage.removeChild(kofferScene);
        app.stage.removeChild(krahScene);
        app.stage.removeChild(krawatteSceneBackground);

        text6.x = 60;
        text6.y = 250;
        app.stage.addChild(text6)
        
    },18000)

    setTimeout(()=>{
        steuerungAktive = true;
        app.stage.removeChild(text6);

        fluchtwagen.x = 600;
        fluchtwagen.y = 600;
        fluchtwagen.scale.set(7);
        app.stage.addChild(fluchtwagen);

        const  pfeil = PIXI.Sprite.from('assets/pfeil_rechts.png');
        pfeil.x = 580;
        pfeil.y = 650;
        pfeil.scale.set(4);
        app.stage.addChild(pfeil);
        afdWacheAttackBarc();
    }, 21000)

    
}

function afdWacheAttackBarc(){
    //Die Maximal und Minimal y werte der Wachen deaktivieren


    
    let spawnX1 = 280;
    let spawnY1 = 120;

    afdWache1.x = spawnX1;
    afdWache1.y = spawnY1;

    let spawnX2 = 350;
    let spawnY2 = 520;
    afdWache2.x = spawnX2;
    afdWache2.y = spawnY2;

    let spawnX3 = 440;
    let spawnY3 = 530;
    afdWache3.x = spawnX3;
    afdWache3.y = spawnY3;

    let spawnX4 = 120;
    let spawnY4 = 520;
    afdWache4.x = spawnX4;
    afdWache4.y = spawnY4;

    let afdSpeed = 1;

    app.ticker.add(()=>{

        let targetX = barc.x + barc.width / 2;
        let targetY = barc.y + barc.height / 2;

       [afdWache1, afdWache2, afdWache3, afdWache4].forEach((wache)=>{
            let dx = targetX - (wache.x + wache.width / 2);
            let dy = targetY - (wache.y + wache.height / 2);
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > 0){
                let moveX = (dx / distance) * afdSpeed;
                let moveY = (dy / distance) * afdSpeed;

                wache.x += moveX;
                wache.y += moveY;
            }
       });
    })
}


//Function die guckt ob Barc das Auto berührt
function checkLevelOver(newX, newY){

    let hitboxX = newX + (barc.width - playerHitbox.width) / 2;
    let hitboxY = newY + (barc.height - playerHitbox.height) / 2;
    
    return (
        hitboxX < fluchtwagenHitbox.x + fluchtwagenHitbox.width &&
        hitboxX + playerHitbox.width > fluchtwagenHitbox.x &&
        hitboxY < fluchtwagenHitbox.y + fluchtwagenHitbox.height &&
        hitboxY + playerHitbox.height > fluchtwagenHitbox.y
    );
}

//Ist die variable levelOver true soll das level beendet werden
app.ticker.add(()=>{
    if(levelOver && levelOverOnlyOnce){
        levelOverOnlyOnce = false;

        const playerHitbox = {
            width: 0,
            height: 0
        };

        stopGame();
        
        flyUp(fluchtwagen, 15, 200);
        console.log('level beendet');

        setTimeout(()=>{
            // Schwarzes Overlay als Sprite erstellen
            const blackOverlay = new PIXI.Graphics();
            blackOverlay.beginFill(0x000000, 1); // Startet mit Transparenz (0)
            blackOverlay.drawRect(0, 0, app.screen.width, app.screen.height);
            blackOverlay.endFill();
            app.stage.addChild(blackOverlay);
    
            //Überschrift 
            const überschrift = new PIXI.Text('ENTKOMMEN!!', {
                fontFamily: 'Press Start 2P',
                fontSize: 50,
                fill: 0xFFFFFF,
            });
    
            überschrift.x = 130;
            überschrift.y = 300;
    
            app.stage.addChild(überschrift);
    
            const link = new PIXI.Text('Zum nächsten Level →', {
                fontFamily: 'Press Start 2P',
                fontSize: 24,
                fill: 0x00ff00,
                fontWeight: 'bold',
            });
    
            link.x = 150;
            link.y = 400;
            link.interactive = true;
            link.buttonMode = true;
            link.on('pointerdown', () => {
                window.location.href = 'scene2.html';
            });
    
            app.stage.addChild(link);
    
        }, 1500);

    }
})

//AfD Hat dich erwischt
function afdErwischt(){
    let text = 'Erwischt!!';
    hindernissgetroffenDisplay(text);
}

