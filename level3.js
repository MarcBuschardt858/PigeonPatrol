//Erst True wenn das Spiel zuende ist (level 3 bestanden);
let gameOver = false;

//Aufgabe zu beginn
const firstTask = new PIXI.Text('Setze dich auf einen frein Platz', {
    fontFamily: 'Press Start 2P',
    fontSize: 20,
    fill: 0x0FF000,
});
firstTask.x = 200
firstTask.y = 20
app.stage.addChild(firstTask)

//Spieler logik
let playerLookingLeft = false;
let playerLookingRight = true;

let barcVersion = 'standing';
let steuerungAktive = true;
let barc = PIXI.Sprite.from(`assets/player_${barcVersion}.png`);
barc.x = 20;
barc.y = 250;
barc.zindex = 1;
barc.scale.set(3);
app.stage.addChild(barc);


const boundaries = { xMin: 0, xMax: 990 - barc.width, yMin: 0, yMax: 750 - barc.height };
const playerSpeed = 3;

let isMoving = false;

// Spieler-Hitbox in alle Richtungen halbieren
const hitboxReduction = 17;
const playerHitbox = {
    width: barc.width * hitboxReduction,
    height: barc.height * hitboxReduction,
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


//Hindernisse
const barriers = [
    { x: 70, y: 70, width: 260, height: 130 },
    { x: 670, y: 70, width: 260, height: 130 },
    { x: 473, y: 110, width: 50, height: 160 },
    { x: 360, y: 40, width: 260, height: 70 },
    { x: 110, y: 580, width: 50, height: 40 },
    { x: 225, y: 580, width: 40, height: 40 },
    { x: 90, y: 640, width: 210, height: 40 },
    { x: 70, y: 700, width: 260, height: 40 },
    { x: 410, y: 580, width: 160, height: 40 },
    { x: 450, y: 640, width: 140, height: 40 },
    { x: 370, y: 700, width: 200, height: 40 },
    { x: 770, y: 580, width: 100, height: 40 },
    { x: 750, y: 640, width: 150, height: 40 },
    { x: 670, y: 700, width: 260, height: 40 },

    { x: 450, y: 420, width: 90, height: 30 },

];

// Zeichne die Hitboxen der Absperrungen
barriers.forEach(barrier => {
    const debugRect = new PIXI.Graphics();
    debugRect.lineStyle(2, 0xff0000, 1);
    debugRect.drawRect(barrier.x, barrier.y, barrier.width, barrier.height);
    //app.stage.addChild(debugRect);
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
        if (!isMoving){
            if (finaleFightActive){
                barc.texture = PIXI.Texture.from(`assets/player_${barcVersion}_aluhut.png`); // Nur Textur ändern!    
            } else{
                barc.texture = PIXI.Texture.from(`assets/player_${barcVersion}.png`); // Nur Textur ändern!
            }
            
            return
        } else {
            if (playerLookingRight){
                if(finaleFightActive){
                    barc.texture = PIXI.Texture.from(`assets/player_moving_aluhut.png`); // Nur Textur ändern!    
                } else {
                    barc.texture = PIXI.Texture.from(`assets/player_moving.png`); // Nur Textur ändern!
                }

            } else if (playerLookingLeft){
                if(finaleFightActive){
                    barc.texture = PIXI.Texture.from(`assets/player_moving_left_aluhut.png`); // Nur Textur ändern!
                } else {
                    barc.texture = PIXI.Texture.from(`assets/player_moving_left.png`); // Nur Textur ändern!
                }
            }
        }
        
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
    
}

function leftKeyPressed() {
    if (steuerungAktive){
        playerLookingLeft = true;
        playerLookingRight = false;
        movePlayer(-playerSpeed, 0);
    }


}

function rightKeyPressed() {
    if (steuerungAktive){
        playerLookingLeft = false;
        playerLookingRight = true;

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

//Sitzplatzwählen
let sitzplatzWählen = true;
sitzplatzHtibox = [
    { x: 170, y: 580, width: 40, height: 40 },
    { x: 400, y: 640, width: 40, height: 40 },
    { x: 700, y: 640, width: 40, height: 40 },
    { x: 580, y: 700, width: 40, height: 40 },
    { x: 720, y: 580, width: 40, height: 40 },
]

function spaceKeyPressed(){
    if(sitzplatzWählen){
        let sitzplatzGewählt = sitzplatzCollision();
        if (sitzplatzGewählt){
            app.stage.removeChild(firstTask)
            olafScholzEinleitungsSzene();
            
        }
    }

    if(shootingAllowed){
        if(waveOneActive && !waveOneOver){
        
            shootBullet()
            shootingAllowed = false;
        }
    
       if(waveTwoActive && !waveTwoOver){
            shootFakeNews();
            shootingAllowed = false;
       }

       if(waveThreeActive && !waveThreeOver){
            shootSpendenquittung();
            shootingAllowed = false;
        }
    }

    if (finaleFightActive && teleportAllowed && !checkingTeleportTimer){
        //funktion für teleport einbauen
        teleportBarcFinalFight();
        teleportAllowedSymbol.texture = PIXI.Texture.from('assets/teleport_verboten.png');
        countdownForTeleport();
    }

    if (schwertActive && chargeAttackActive && !checkingChargeAttackTimer){
        //funktion für teleport einbauen
        app.ticker.remove(schwertPositionTicker);
        barc.y += 5;
        if(playerLookingLeft){
            schwert.x += 30;
            schwert.y -= 15;
            schwert.rotation = 0;
        } else if (playerLookingRight){
            schwert.x -= 30;
            schwert.rotation = 0;
        }
        
        barc.texture = PIXI.Texture.from('assets/player_charging_attack.png');
        steuerungAktive = false;
        chargeAttackActive = false;
        setTimeout(()=>{
            chargeAttack();
            countdownForChargeAttack();
        }, 1000)
    }
}

function teleportBarcFinalFight(){
    if(playerLookingRight){
        console.log('rechts');

        if(auraThreeRunning){
            newBarcLocation = barc.x + 420;
        } else {
            newBarcLocation = barc.x + 370;;
        }
        if(newBarcLocation < (app.screen.width - 100)){
            barc.x = newBarcLocation;
            console.log(newBarcLocation)
            teleportAllowed = false;
        } else {
            console.log('zu weit rechts')
            barc.x = app.screen.width - 100;
            teleportAllowed = false;
        }
        
    }
    if(playerLookingLeft){
        
        if(auraThreeRunning){
            newBarcLocation = barc.x - 340;
        } else {
            newBarcLocation = barc.x - 300;
        }
        if (newBarcLocation > 50){
            console.log('links');
            barc.x = newBarcLocation;
            teleportAllowed = false;
        } else {
            console.log('zu weit links');
            barc.x = 0;
            teleportAllowed = false;
        }
       
    }
}


function chargeAttack() {
    const totalDistance = 150;
    const step = 12;
    let moved = 0;

    steuerungAktive = false;

    let direction = playerLookingRight ? 1 : -1;

    const maxRight = app.screen.width - 150;
    const minLeft = 0;

    function animateDash() {
        if (moved < totalDistance) {
            const nextStep = Math.min(step, totalDistance - moved);
            let newX = barc.x + nextStep * direction;

            // Begrenzung prüfen
            if (newX > maxRight) {
                newX = maxRight;
            } else if (newX < minLeft) {
                newX = minLeft;
            }

            barc.x = newX;
            moved += nextStep;
            
            if(playerLookingLeft){
                barc.texture = PIXI.Texture.from('assets/player_dash_left.png');
                schwert.x = barc.x - 20;
                schwert.y = barc.y + 59;
                schwert.rotation = -1.25;
            } else if (playerLookingRight){
                barc.texture = PIXI.Texture.from('assets/player_dash_right.png');
                schwert.x = barc.x + 95;
                schwert.y = barc.y;
                schwert.rotation = 1.25;
            }
                //Koalision zwischen Spieler und Echsenolaf checken überprüfen

            playerHitbox.x = barc.x + (barc.width - playerHitbox.width) / 2;
            playerHitbox.y = barc.y + (barc.height - playerHitbox.height) / 2;
            if (
                olafScholzErnst.x < playerHitbox.x + playerHitbox.width &&
                olafScholzErnst.x + olafScholzErnst.width > playerHitbox.x &&
                olafScholzErnst.y < playerHitbox.y + playerHitbox.height &&
                olafScholzErnst.y + olafScholzErnst.height > playerHitbox.y
            ) {
                echsenolafTot = true;
                gameOver = true;
                console.log('Echsenolaf wurde getötet');
            }

            requestAnimationFrame(animateDash);
        } else {
            // Nach dem Dash wieder steuern
            barc.texture = PIXI.Texture.from('assets/player_standing.png');
            app.ticker.add(schwertPositionTicker);
            steuerungAktive = true;
            
        }
    }

    // Animation starten
    animateDash();
}

function sitzplatzCollision(){
    const hitboxX = barc.x + (barc.width - playerHitbox.width) / 2;
    const hitboxY = barc.y + (barc.height - playerHitbox.height) / 2;
    
    return sitzplatzHtibox.some(sitzplatz => {
        return (
            hitboxX < sitzplatz.x + sitzplatz.width &&
            hitboxX + playerHitbox.width > sitzplatz.x &&
            hitboxY < sitzplatz.y + sitzplatz.height &&
            hitboxY + playerHitbox.height > sitzplatz.y
        )
    })
}

function olafScholzEinleitungsSzene(){
    //Olaf Scholz CutScene einleiten
    steuerungAktive = false;
    sitzplatzWählen = false;

    const backgroundEinleitung = new PIXI.Graphics();
    backgroundEinleitung.beginFill(0x808080);
    backgroundEinleitung.drawRect(0, 0, app.screen.width, app.screen.height);
    backgroundEinleitung.endFill();
    app.stage.addChild(backgroundEinleitung); 

    const olafScholzSzene = PIXI.Sprite.from('assets/olafscholz_szene.png');
    olafScholzSzene.x = 500;
    olafScholzSzene.y = 320;
    olafScholzSzene.scale.set(8);
    app.stage.addChild(olafScholzSzene);


    const rednerpultSzene = PIXI.Sprite.from('assets/rednerpult_szene.png');
    rednerpultSzene.x = 440;
    rednerpultSzene.y = 430
    rednerpultSzene.scale.set(10);
    app.stage.addChild(rednerpultSzene);


    const sprechblaseOlaf = PIXI.Sprite.from('assets/sprechblase_groß.png');
    sprechblaseOlaf.x = 160;
    sprechblaseOlaf.y = -10;
    sprechblaseOlaf.width += 500;
    sprechblaseOlaf.height += 500;
    app.stage.addChild(sprechblaseOlaf); 

    //Texte 
    const olafText1 = new PIXI.Text('Nun gibt es nichts mehr, was uns aufhalten kann.', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseOlaf.width - 80,
        align: 'center'
    });
    olafText1.x = 210;
    olafText1.y = 160;
    app.stage.addChild(olafText1);

    const olafText2 = new PIXI.Text('Projekt "Pigeon Patrol" wird uns genug Daten über jeden einzelnen Deutschen bringen, um sie zu versklaven!!!', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseOlaf.width - 40,
        align: 'center'
    });

    //Barc text und Sprechlase
    const barcText1 = new PIXI.Text('Tschüsch.. schon bisschen übertrieben...', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseOlaf.width - 80,
        align: 'center'
    });

    const barcSzeneOlaf = PIXI.Sprite.from('assets/player_standing.png')
    barcSzeneOlaf.y = 550;
    barcSzeneOlaf.scale.set(8);

    const barcSprechblase = PIXI.Sprite.from('assets/sprechblase_links.png');
    barcSprechblase.x = 160;
    barcSprechblase.y = 200;
    barcSprechblase.width += 500;
    barcSprechblase.height += 500;


    const olafText3 = new PIXI.Text('Ein Spion!!!!', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseOlaf.width - 40,
        align: 'center'
    });

    const olafText4 = new PIXI.Text('Greift Ihn an meine T.A.U.B.E.N !!!', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseOlaf.width - 50,
        align: 'center'
    });

    const erklärBärText1 = new PIXI.Text('Verteidige dich gegen die Schärgen von Olaf Scholz. Lasse dich dabei nicht von Ihnen erwischen.', {
        fontFamily: 'Press Start 2P',
        fontSize: 30,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: app.screen.width - 50,
        align: 'center'
    });

    //Einleitung in die erste welle
    const erklärBärText2 = new PIXI.Text('Beschieße die Taktischen Abhör Und Beobachtungs Einheiten mit den Aluminiumgeschossen', {
        fontFamily: 'Press Start 2P',
        fontSize: 30,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: app.screen.width - 50,
        align: 'center'
    });

    const m4a4Szene = PIXI.Sprite.from('assets/m4a4_rechts.png');

    const aluBulletSzene = PIXI.Sprite.from('assets/alugeschosse.png')


    setTimeout(()=>{
        app.stage.removeChild(olafText1);
        sprechblaseOlaf.width += 150;
        sprechblaseOlaf.x -= 150;

        olafText2.x = 80;
        olafText2.y = 130;
        app.stage.addChild(olafText2);
    }, 5000);

    setTimeout(()=>{
        app.stage.removeChild(olafText2);
        app.stage.removeChild(sprechblaseOlaf);


        app.stage.addChild(barcSprechblase);

        barcText1.x = 280;
        barcText1.y = 370;
        app.stage.addChild(barcText1);
        app.stage.addChild(barcSzeneOlaf);
    }, 12000);

    setTimeout(()=>{
        app.stage.removeChild(barcText1);
        app.stage.removeChild(barcSprechblase);

        app.stage.addChild(sprechblaseOlaf);

        sprechblaseOlaf.width -= 150;
        sprechblaseOlaf.x = 160;

        olafText3.x = 260;
        olafText3.y = 170;
        app.stage.addChild(olafText3);
    }, 19000);

    setTimeout(()=>{
        app.stage.removeChild(olafText3);

        olafText4.x = 200;
        olafText4.y = 170;
        app.stage.addChild(olafText4);
    }, 22000);

    setTimeout(()=>{
        app.stage.removeChild(olafText4);
        app.stage.removeChild(sprechblaseOlaf);
        app.stage.removeChild(olafScholzSzene);
        app.stage.removeChild(rednerpultSzene);
        app.stage.removeChild(barcSzeneOlaf);

        erklärBärText1.x = 40;
        erklärBärText1.y = 30;
        app.stage.addChild(erklärBärText1);

        aluBulletSzene.scale.set(6);
        aluBulletSzene.x = 500;
        aluBulletSzene.y = 225;
        app.stage.addChild(aluBulletSzene);

        m4a4Szene.scale.set(6);
        m4a4Szene.x = 100;
        m4a4Szene.y = 250;
        app.stage.addChild(m4a4Szene);

        erklärBärText2.x = 40;
        erklärBärText2.y = 550
        app.stage.addChild(erklärBärText2);

    }, 26000);

    setTimeout(()=>{
        app.stage.removeChild(erklärBärText1);
        app.stage.removeChild(backgroundEinleitung);
        app.stage.removeChild(aluBulletSzene);
        app.stage.removeChild(m4a4Szene);
        app.stage.removeChild(erklärBärText2);

        app.stage.addChild(herz6);
        app.stage.addChild(herz5);
        app.stage.addChild(herz4);
        app.stage.addChild(herz3);
        app.stage.addChild(herz2);
        app.stage.addChild(herz1);
        barc.x = 400;
        barc.y = 300;

        barriers.push(
            { x: 710, y: 580, width: 60, height: 40 },
            { x: 160, y: 580, width: 65, height: 40 },
            { x: 390, y: 640, width: 60, height: 40 },
            { x: 570, y: 700, width: 60, height: 40 },
            { x: 690, y: 640, width: 60, height: 40 }
        )

        waveOneActive = true;
        steuerungAktive = true;


    }, 40000);


}

//Olaf Scholz hinzufügen
const olafScholz = PIXI.Sprite.from('assets/olafscholz_szene.png');
olafScholz.x = 430;
olafScholz.y = 107;
olafScholz.scale.set(2.5);
app.stage.addChild(olafScholz);





//Einzelne Attacken hinzufügen
let shootingAllowed = true;
let countTargetsEliminated = 0;
let countOlafScholzAttack = 0;
let olafScholzActiveTwo = false;
let olafScholzActiveThree = false;






//----------------  Erste Welle  -------------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//
let waveOneActive = false;
let waveOneOver = false;

let weaponActive = false;
let weaponAdded = false;

let arrayOfTaube = [];
let arrayOfBullets = [];

const m4a4 = PIXI.Sprite.from('assets/m4a4_rechts.png');

app.ticker.add(()=>{
    if (weaponActive && !weaponAdded){
        m4a4.x = barc.x + 40;
        m4a4.y = barc.y + 5;
        m4a4.scale.set(1.5);
        app.stage.addChild(m4a4);

        weaponActive = false;
        weaponAdded = true;;
    }
})

app.ticker.add(()=>{
    if (waveOneActive){
        weaponActive = true;
    }
})

function updateWeaponDirection() {
    if (playerLookingRight) {
        m4a4.texture = PIXI.Texture.from('assets/m4a4_rechts.png');
    } else if (playerLookingLeft) {
        m4a4.texture = PIXI.Texture.from('assets/m4a4_left.png');
    }
}

function updateM4a4Position() {
    if (playerLookingRight) {
        m4a4.x = barc.x + 40;
        m4a4.y = barc.y + 5;
    } else if (playerLookingLeft) {
        m4a4.x = barc.x - 20;
        m4a4.y = barc.y + 5;
    }
}


// Füge das Update zur Spiel-Loop hinzu
app.ticker.add(() => {
    updateM4a4Position();
    updateWeaponDirection();
});


function spawnTaube(){
    if(waveOneActive && !waveOneOver && countTargetsEliminated < 20){

        const taube = PIXI.Sprite.from('assets/pigeon_front.png');
        taube.x = Math.random() < 0.5 ? 1 : 900;;
        taube.y = random(280, 500);
        taube.scale.set(1.5);
        app.stage.addChild(taube);

        arrayOfTaube.push(taube);

        app.ticker.add(()=>{

            //Richtung von Barc Muschardt
            let dx = (barc.x + 30) - taube.x;
            let dy = (barc.y + 20) - taube.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            //Geschwindigkeit der Tauben
            let speed = 2;

            //Normalisierte Bewegungsrichtung
            let vx = (dx / distance) * speed;
            let vy = (dy / distance) * speed;

            taube.x += vx;
            taube.y += vy;

            //Taube soll nur entfernt werden, wenn Sie Barc Muschardt trifft
            if(checkWaveCollision(arrayOfTaube)){
                aktualisiereLebensanzeige();
                console.log('Taube hat schaden gemacht');
                app.stage.removeChild(taube);
                let index = arrayOfTaube.indexOf(taube);
                if (index !== -1){
                    arrayOfTaube.splice(index, 1);
                }
            }
        })
    } else if (countTargetsEliminated >= 20){
        //Entferne alle Tauben aus der Bühne
        arrayOfTaube.forEach(taube => {
            app.stage.removeChild(taube);
        });
        // Leere das Array, damit keine Referenzen mehr da sind
        arrayOfTaube = [];
    }
};

setInterval(spawnTaube, 700);


function shootBullet() {
    let speed = playerLookingRight ? 7 : -7; // Richtung der Kugel

    // Wähle Textur anhand der Blickrichtung
    const bulletTexture = playerLookingRight 
        ? PIXI.Texture.from('assets/alugeschosse.png') 
        : PIXI.Texture.from('assets/alugeschosse_links.png');

    const bullet = new PIXI.Sprite(bulletTexture);
 
    bullet.x = playerLookingRight ? m4a4.x + 80 : m4a4.x - 20;
    bullet.y = m4a4.y + 12;
    bullet.scale.set(0.8);
    app.stage.addChild(bullet);
    arrayOfBullets.push(bullet);

    function updateBullet() {
        bullet.x += speed;

        if (bullet.x > app.screen.width || bullet.x < 0) {
            removeBullet(bullet);
        }

        let targetEliminated = checkTargetEliminated(bullet, arrayOfTaube);
        
        if (targetEliminated) {
            countTargetsEliminated++;
            removeTarget(targetEliminated);
            removeBullet(bullet);
        }
    }

    app.ticker.add(updateBullet);

    function removeBullet(bullet) {
        let indexBullet = arrayOfBullets.indexOf(bullet);
        if (indexBullet !== -1) {
            arrayOfBullets.splice(indexBullet, 1);
        }
        app.stage.removeChild(bullet);
        app.ticker.remove(updateBullet);
    }

    function removeTarget(target) {
        let indexTaube = arrayOfTaube.indexOf(target);
        if (indexTaube !== -1) {
            arrayOfTaube.splice(indexTaube, 1);
        }
        app.stage.removeChild(target);
    }
}

setInterval(() =>{
    shootingAllowed = true;
}, 300);



function drawTaubeHitbox(taube) {
    const hitboxGraphics = new PIXI.Graphics();
    hitboxGraphics.lineStyle(2, 0x0000ff, 1); // Blaue Umrandung für die Hitbox
    hitboxGraphics.drawRect(taube.x, taube.y, taube.width, taube.height);
    app.stage.addChild(hitboxGraphics);

    // Aktualisiere die Hitbox-Position, wenn sich die Taube bewegt
    app.ticker.add(() => {
        hitboxGraphics.clear();
        hitboxGraphics.lineStyle(2, 0x0000ff, 1);
        hitboxGraphics.drawRect(taube.x, taube.y, taube.width, taube.height);
    });
}


function checkWaveCollision(obsticles){
    const hitboxX = barc.x + (barc.width - playerHitbox.width) / 2;
    const hitboxY = barc.y + (barc.height - playerHitbox.height) / 2;
    

    return obsticles.some(obsticle => {
        return (
            hitboxX < obsticle.x + obsticle.width &&
            hitboxX + playerHitbox.width > obsticle.x &&
            hitboxY < obsticle.y + obsticle.height &&
            hitboxY + playerHitbox.height > obsticle.y
        )
    })
}

function checkTargetEliminated(weapon, arrayOfTarget) {
    return arrayOfTarget.find(target => 
        weapon.x < target.x + target.width &&
        weapon.x + weapon.width > target.x &&
        weapon.y < target.y + target.height &&
        weapon.y + weapon.height > target.y
    ) || null; // Falls kein Treffer erfolgt, wird `null` zurückgegeben
}

app.ticker.add(()=>{
    if(countTargetsEliminated === 20){
        waveOneActive = false;
        waveOneOver = true;
        app.stage.removeChild(m4a4);
    }


})

app.ticker.add(()=>{
    if (countTargetsEliminated >= 20) {
        // Entferne alle Tauben aus der Bühne
        arrayOfTaube.forEach(taube => {
            app.stage.removeChild(taube);
        });
        // Leere das Array, damit keine Referenzen mehr da sind
        arrayOfTaube = [];
    }

});

//Tisch hinter dem man sich verstecken kann hitbox
const hideBehindDesk = { 
    x: 450, 
    y: 420, 
    width: 90, 
    height: 30 
};


let directionRight = true;

function olafScholzAttacke() {
    if (countOlafScholzAttack >= 10 && !waveTwoOver) {
        olafScholzActiveTwo = false;

        return;
    }
    if (countOlafScholzAttack >= 20 && !waveThreeOver) {
        olafScholzActiveTwo = false;

        return;
    }


    if (olafScholzActiveTwo || olafScholzActiveThree) {
        countOlafScholzAttack++;
        let directions = [];

        if (directionRight){

            directions = [
                { dx: -14, dy: 4 },
                { dx: -12, dy: 4 },
                { dx: -10, dy: 4 },
                { dx: -9, dy: 4 },
                { dx: -8, dy: 4 },
                { dx: -7, dy: 4 },
                { dx: -6, dy: 4 },
                { dx: -5, dy: 4 },
                { dx: -4, dy: 4 },
                { dx: -3, dy: 4 },
                { dx: -2, dy: 4 },
                { dx: -1, dy: 4 },
                { dx: 0, dy: 4 },
                { dx: 1, dy: 4 },
                { dx: 2, dy: 4 },
                { dx: 3, dy: 4 },
                { dx: 4, dy: 4 },
                { dx: 5, dy: 4 },
                { dx: 6, dy: 4 },
                { dx: 7, dy: 4 },
                { dx: 8, dy: 4 },
                { dx: 9, dy: 4 },
                { dx: 10, dy: 4 },
                { dx: 12, dy: 4 },
                { dx: 14, dy: 4 }
            ];
        } else {
            directions = [
                { dx: 14, dy: 4 },
                { dx: 12, dy: 4 },
                { dx: 10, dy: 4 },
                { dx: 9, dy: 4 },
                { dx: 8, dy: 4 },
                { dx: 7, dy: 4 },
                { dx: 6, dy: 4 },
                { dx: 5, dy: 4 },
                { dx: 4, dy: 4 },
                { dx: 3, dy: 4 },
                { dx: 2, dy: 4 },
                { dx: 1, dy: 4 },
                { dx: 0, dy: 4 },
                { dx: -1, dy: 4 },
                { dx: -2, dy: 4 },
                { dx: -3, dy: 4 },
                { dx: -4, dy: 4 },
                { dx: -5, dy: 4 },
                { dx: -6, dy: 4 },
                { dx: -7, dy: 4 },
                { dx: -8, dy: 4 },
                { dx: -9, dy: 4 },
                { dx: -10, dy: 4 },
                { dx: -12, dy: 4 },
                { dx: -14, dy: 4 }
            ];
        }
        directions.forEach((direction, i) => {
            setTimeout(() => {
                const bürokratie = PIXI.Sprite.from('assets/bürokratie.png');
                bürokratie.x = olafScholz.x + 25;
                bürokratie.y = olafScholz.y + 25;
                bürokratie.scale.set(1.2);
                app.stage.addChild(bürokratie);

                function moveBürokratie() {
                    bürokratie.x += direction.dx;
                    bürokratie.y += direction.dy;

                    if (
                        bürokratie.y > app.screen.height ||
                        bürokratie.x < 0 ||
                        bürokratie.x > app.screen.width
                    ) {
                        app.stage.removeChild(bürokratie);
                        app.ticker.remove(moveBürokratie);
                    }

                     // Kollision mit Hitbox (Schreibtisch)
                     const b = bürokratie;
                     if (
                         b.x < hideBehindDesk.x + hideBehindDesk.width &&
                         b.x + b.width > hideBehindDesk.x &&
                         b.y < hideBehindDesk.y + hideBehindDesk.height &&
                         b.y + b.height > hideBehindDesk.y
                     ) {
                         app.stage.removeChild(bürokratie);
                         app.ticker.remove(moveBürokratie);
                     }

                    //Koalision mit Spieler überprüfen
                    playerHitbox.x = barc.x + (barc.width - playerHitbox.width) / 2;
                    playerHitbox.y = barc.y + (barc.height - playerHitbox.height) / 2;
                     if (
                        b.x < playerHitbox.x + playerHitbox.width &&
                        b.x + b.width > playerHitbox.x &&
                        b.y < playerHitbox.y + playerHitbox.height &&
                        b.y + b.height > playerHitbox.y
                    ) {
                        app.stage.removeChild(bürokratie);
                        app.ticker.remove(moveBürokratie);
                        aktualisiereLebensanzeige();
                        console.log('Bürokratie hat barc getroffen')
                    }
                }

                app.ticker.add(moveBürokratie);
            }, i * 50); // Zeitverzögerung pro Projektil
        });
        directionRight = !directionRight;
    }
}

setInterval(() => {
    
    // Attacke nur zwischen den Wellen abspielen:
    if (waveOneOver && !waveOneActive && !waveTwoActive && !waveTwoOver) {
        olafScholzActiveTwo = true;
        olafScholzAttacke();
    }
    if(waveTwoOver && !waveTwoActive && !waveThreeActive && !waveThreeOver){
        olafScholzActiveThree = true;
        olafScholzAttacke();
    }

}, 1150);

let cutSceneWave2Activated = false;
app.ticker.add(()=>{

    if(countOlafScholzAttack >= 10 && !cutSceneWave2Activated){
        cutSceneWave2();
    }
})

function cutSceneWave2(){
    cutSceneWave2Activated = true;

    const fakenewsScene = PIXI.Sprite.from('assets/fakenews.png');
    fakenewsScene.scale.set(8);
    fakenewsScene.x = 0;
    fakenewsScene.y = 100;
    app.stage.addChild(fakenewsScene);

    //Überschrift 
    const textWave2 = new PIXI.Text('Olaf Scholz hetzt seine Politiker auf dich. Beschieße sie mit Fake-News um sie aufzuhalten ', {
        fontFamily: 'Press Start 2P',
        fontSize: 30,
        fill: 0x8BFF00,
        wordWrap: true,
        wordWrapWidth: app.stage.width - 500,
        align: 'center'
    });

    textWave2.x = 470;
    textWave2.y = 270;

    app.stage.addChild(textWave2);

    setTimeout(()=>{
        app.stage.removeChild(fakenewsScene);
        app.stage.removeChild(textWave2);
        waveTwoActive = true;
    }, 8000);

}




//----------------  Zweite Welle  -------------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//

//Zweite wave
let waveTwoActive = false;
let waveTwoOver = false;

let arrayOfPolitiker = [];

let chooseOfPolitiker = ['politiker_grau', 'politiker_blau', 'politiker_dunkelgrau'];

function spawnPolitiker(){

    if(countTargetsEliminated < 40 && waveTwoActive){
        let index = Math.floor(Math.random() * chooseOfPolitiker.length);

        const angreifenderPolitiker = PIXI.Sprite.from(`assets/${chooseOfPolitiker[index]}.png`);
        angreifenderPolitiker.x = Math.floor(Math.random() * 971);
        angreifenderPolitiker.y = -75;
        angreifenderPolitiker.scale.set(2)
        app.stage.addChild(angreifenderPolitiker);
        arrayOfPolitiker.push(angreifenderPolitiker);
    
        app.ticker.add(()=>{
    
            //Richtung von Barc Muschardt
            let dx = (barc.x + 30) - angreifenderPolitiker.x;
            let dy = (barc.y + 20) - angreifenderPolitiker.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
    
            //Geschwindigkeit der Politiker
            let speed = 2;
    
            //Normalisierte Bewegungsrichtung
            let vx = (dx / distance) * speed;
            let vy = (dy / distance) * speed;
    
            angreifenderPolitiker.x += vx;
            angreifenderPolitiker.y += vy;
    
            //Politiker soll nur entfernt werden, wenn Er Barc Muschardt trifft
            if(checkWaveCollision(arrayOfPolitiker)){
                aktualisiereLebensanzeige();
                console.log('Politiker hat schaden gemacht');
                app.stage.removeChild(angreifenderPolitiker);
                let index = arrayOfPolitiker.indexOf(angreifenderPolitiker);
                if (index !== -1){
                    arrayOfPolitiker.splice(index, 1);
                }
            }
        })
    } else if (countTargetsEliminated >= 40){
        //Entferne alle Tauben aus der Bühne
        arrayOfPolitiker.forEach(politiker => {
            app.stage.removeChild(politiker);
        });
        // Leere das Array, damit keine Referenzen mehr da sind
        arrayOfPolitiker = [];
    }

}
setInterval(spawnPolitiker, 700);

function shootFakeNews(){
    let speed = -10;

    if(countTargetsEliminated < 40){
        // Wähle Textur anhand der Blickrichtung
        const fakenews = PIXI.Sprite.from('assets/fakenews_hochkant.png');
        
        fakenews.x = barc.x
        fakenews.y = barc.y;
        fakenews.scale.set(1);
        app.stage.addChild(fakenews);
        arrayOfBullets.push(fakenews);

        function updateBullet() {
            fakenews.y += speed;

            if (fakenews.y < 0) {
                removeBullet(fakenews);
            }

            let targetEliminated = checkTargetEliminated(fakenews, arrayOfPolitiker);
            
            if (targetEliminated) {
                countTargetsEliminated++;
                removeTarget(targetEliminated);
                removeBullet(fakenews);
            }
        }

        app.ticker.add(updateBullet);

        function removeBullet(fakenews) {
            let indexFakenews = arrayOfBullets.indexOf(fakenews);
            if (indexFakenews !== -1) {
                arrayOfBullets.splice(indexFakenews, 1);
            }
            app.stage.removeChild(fakenews);
            app.ticker.remove(updateBullet);
        }

        function removeTarget(target) {
            let indexPolitiker = arrayOfPolitiker.indexOf(target);
            if (indexPolitiker !== -1) {
                arrayOfPolitiker.splice(indexPolitiker, 1);
            }
            app.stage.removeChild(target);
        }
    }
}


app.ticker.add(()=>{
    if (countTargetsEliminated >= 40){
        waveTwoActive = false;
        waveTwoOver = true;
    }
})


let cutSceneWave3Activated = false;

function cutSceneWave3(){
    console.log('cutScene 3');
    cutSceneWave3Activated = true;

    const spendenquittungScene = PIXI.Sprite.from('assets/abgelehnte_spendenquittung.png');
    spendenquittungScene.scale.set(8);
    spendenquittungScene.x = 0;
    spendenquittungScene.y = 100;
    app.stage.addChild(spendenquittungScene);

    //Überschrift 
    const textWave3 = new PIXI.Text('Olaf Scholz hetzt seine Lobbyisten auf dich. Beschieße sie mit abgelehnten Spendenquittungen um sie aufzuhalten ', {
        fontFamily: 'Press Start 2P',
        fontSize: 30,
        fill: 0x8BFF00,
        wordWrap: true,
        wordWrapWidth: app.stage.width - 500,
        align: 'center'
    });

    textWave3.x = 470;
    textWave3.y = 270;

    app.stage.addChild(textWave3);

    setTimeout(()=>{
        app.stage.removeChild(spendenquittungScene);
        app.stage.removeChild(textWave3);
        waveThreeActive = true;
    }, 8000);

}

app.ticker.add(()=>{
    //console.log("OlafScholzAttack Count:", countOlafScholzAttack, "cutSceneWave3Activated:", cutSceneWave3Activated);
    if(countOlafScholzAttack >= 20 && !cutSceneWave3Activated){
        cutSceneWave3();
    }
})






//----------------  Dritte Welle  -------------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//

let waveThreeActive = false;
let waveThreeOver = false;

let arrayOfLobbyist = [];

function spawnLobbyist(){

    if(countTargetsEliminated < 60 && waveThreeActive){
        const lobbyist = PIXI.Sprite.from('assets/lobbyist.png');
        lobbyist.x = Math.floor(Math.random() * 971);
        lobbyist.y = -75;
        lobbyist.scale.set(2.5)
        app.stage.addChild(lobbyist);
        arrayOfLobbyist.push(lobbyist);
    
        app.ticker.add(()=>{
    
            //Richtung von Barc Muschardt
            let dx = (barc.x + 30) - lobbyist.x;
            let dy = (barc.y + 20) - lobbyist.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
    
            //Geschwindigkeit der Politiker
            let speed = 2;
    
            //Normalisierte Bewegungsrichtung
            let vx = (dx / distance) * speed;
            let vy = (dy / distance) * speed;
    
            lobbyist.x += vx;
            lobbyist.y += vy;
    
            //Politiker soll nur entfernt werden, wenn Er Barc Muschardt trifft
            if(checkWaveCollision(arrayOfLobbyist)){
                aktualisiereLebensanzeige();
                console.log('Lobbyist hat schaden gemacht');
                app.stage.removeChild(lobbyist);
                let index = arrayOfLobbyist.indexOf(lobbyist);
                if (index !== -1){
                    arrayOfLobbyist.splice(index, 1);
                }
            }
        })
    } else if (countTargetsEliminated >= 40){
        //Entferne alle Tauben aus der Bühne
        arrayOfLobbyist.forEach(lobbyist => {
            app.stage.removeChild(lobbyist);
        });
        // Leere das Array, damit keine Referenzen mehr da sind
        arrayOfLobbyist = [];
    }
}

setInterval(spawnLobbyist, 600);



function shootSpendenquittung(){
    let speed = -10;

    if(countTargetsEliminated < 60){
        // Wähle Textur anhand der Blickrichtung
        const spendenquittung = PIXI.Sprite.from('assets/abgelehnte_spendenquittung.png');
        
        spendenquittung.x = barc.x
        spendenquittung.y = barc.y;
        spendenquittung.scale.set(1);
        app.stage.addChild(spendenquittung);
        arrayOfBullets.push(spendenquittung);

        function updateBullet() {
            spendenquittung.y += speed;

            if (spendenquittung.y < 0) {
                removeBullet(spendenquittung);
            }

            let targetEliminated = checkTargetEliminated(spendenquittung, arrayOfLobbyist);
            
            if (targetEliminated) {
                countTargetsEliminated++;
                removeTarget(targetEliminated);
                removeBullet(spendenquittung);
            }
        }

        app.ticker.add(updateBullet);

        function removeBullet(spendenquittung) {
            let indexSpendenquittung = arrayOfBullets.indexOf(spendenquittung);
            if (indexSpendenquittung !== -1) {
                arrayOfBullets.splice(indexSpendenquittung, 1);
            }
            app.stage.removeChild(spendenquittung);
            app.ticker.remove(updateBullet);
        }

        function removeTarget(target) {
            let indexLobyist = arrayOfLobbyist.indexOf(target);
            if (indexLobyist !== -1) {
                arrayOfLobbyist.splice(indexLobyist, 1);
            }
            app.stage.removeChild(target);
        }
    }
}

app.ticker.add(()=>{
    if (countTargetsEliminated >= 60 && waveThreeActive){
        waveThreeActive = false;
        waveThreeOver = true;
        OlafScholzCutsceneFinalFight()
    }
})








//--------------------------------------------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//
//----------------  Olaf Scholz Finale 1 ------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//

//Hier OlafScholz Cutscene einbauen
function OlafScholzCutsceneFinalFight(){
//Olaf Scholz CutScene einleiten
steuerungAktive = false;

const backgroundEinleitung = new PIXI.Graphics();
backgroundEinleitung.beginFill(0x808080);
backgroundEinleitung.drawRect(0, 0, app.screen.width, app.screen.height);
backgroundEinleitung.endFill();
app.stage.addChild(backgroundEinleitung); 

const olafScholzSzene = PIXI.Sprite.from('assets/olafscholz_szene.png');
olafScholzSzene.x = 500;
olafScholzSzene.y = 320;
olafScholzSzene.scale.set(8);
app.stage.addChild(olafScholzSzene);


const rednerpultSzene = PIXI.Sprite.from('assets/rednerpult_szene.png');
rednerpultSzene.x = 440;
rednerpultSzene.y = 430
rednerpultSzene.scale.set(10);
app.stage.addChild(rednerpultSzene);


const sprechblaseOlaf = PIXI.Sprite.from('assets/sprechblase_groß.png');
sprechblaseOlaf.x = 160;
sprechblaseOlaf.y = -10;
sprechblaseOlaf.width += 500;
sprechblaseOlaf.height += 500;
app.stage.addChild(sprechblaseOlaf); 

//Texte 
const olafFinalText1 = new PIXI.Text('WIE KANN DAS SEIN?!?!?!?', {
    fontFamily: 'Press Start 2P',
    fontSize: 20,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: sprechblaseOlaf.width - 80,
    align: 'center'
});
olafFinalText1.x = 260;
olafFinalText1.y = 170;
app.stage.addChild(olafFinalText1);


const olafFinalText2 = new PIXI.Text('DU HAST ALLE MEINE SCHERGEN BESIEGT!!!!!', {
    fontFamily: 'Press Start 2P',
    fontSize: 20,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: sprechblaseOlaf.width - 80,
    align: 'center'
});

const olafFinalText3 = new PIXI.Text('DANN MUSS ICH MICH EBEN SELBST DARUM KÜMMERN!!', {
    fontFamily: 'Press Start 2P',
    fontSize: 20,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: sprechblaseOlaf.width - 80,
    align: 'center'
});


const erklärBärFinalText1 = new PIXI.Text('Achtung! Olaf Scholz greift an. Zum Glück hast du ein Ass im Ärmel', {
    fontFamily: 'Press Start 2P',
    fontSize: 30,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: app.screen.width - 50,
    align: 'center'
});

//Einleitung in die erste welle
const erklärBärFinalText2 = new PIXI.Text('Ein Hut aus Aluminium erlaubt dir, dich zu teleportieren. Nutze diese Fähigkeit um den geschossen auszuweichen', {
    fontFamily: 'Press Start 2P',
    fontSize: 30,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: app.screen.width - 50,
    align: 'center'
});

const aluhutSzene = PIXI.Sprite.from('assets/aluhut.png');



setTimeout(()=>{
    app.stage.removeChild(olafFinalText1);
    sprechblaseOlaf.width += 150;
    sprechblaseOlaf.x -= 150;

    olafFinalText2.x = 100;
    olafFinalText2.y = 160;
    app.stage.addChild(olafFinalText2);
}, 4000);

setTimeout(()=>{
    app.stage.removeChild(olafFinalText2);

    olafFinalText3.x = 120;
    olafFinalText3.y = 150;
    app.stage.addChild(olafFinalText3);
}, 7000);

setTimeout(()=>{
    app.stage.removeChild(olafFinalText3);
    app.stage.removeChild(rednerpultSzene);
    app.stage.removeChild(olafScholzSzene);
    app.stage.removeChild(sprechblaseOlaf);

    erklärBärFinalText1.x = 40;
    erklärBärFinalText1.y = 30;
    app.stage.addChild(erklärBärFinalText1);

    aluhutSzene.scale.set(6);
    aluhutSzene.x = 300;
    aluhutSzene.y = 180;
    app.stage.addChild(aluhutSzene);

    erklärBärFinalText2.x = 40;
    erklärBärFinalText2.y = 550
    app.stage.addChild(erklärBärFinalText2);

}, 11000);

setTimeout(()=>{
    app.stage.removeChild(erklärBärFinalText2);
    app.stage.removeChild(aluhutSzene);
    app.stage.removeChild(erklärBärFinalText1);
    app.stage.removeChild(backgroundEinleitung);

    app.stage.addChild(teleportAllowedSymbol);

    barc.texture = PIXI.Texture.from('assets/player_standing_aluhut.png')
    finaleFightActive = true;
    teleportAllowed = true;
    steuerungAktive = true;

    startOlafFight();
}, 23000);

}

let finaleFightActive = false;
let mapIsCleared = false;

let auraOneActive = false;
let auraOneOver = false;
let auraOneRunning = false;

let auraTwoActive = false;
let auraTwoOver = false;
let auraTwoRunning = false;

let auraThreeActive = false;
let auraThreeOver = false;
let auraThreeRunning = false;

let teleportAllowed = false;
let checkingTeleportTimer = false;

//Teleportieren erlauben logik und darstellung (funktion unter definierung der spacetaste)
const teleportAllowedSymbol = PIXI.Sprite.from('assets/teleport_erlaubt.png');

teleportAllowedSymbol.x = app.screen.width - 200;
teleportAllowedSymbol.y = 600
teleportAllowedSymbol.scale.set(3);

function countdownForTeleport(){
    if (!checkingTeleportTimer){
        checkingTeleportTimer = true;
        setTimeout(()=>{
            teleportAllowedSymbol.texture = PIXI.Texture.from('assets/teleport_erlaubt.png');
            teleportAllowed = true;
            checkingTeleportTimer = false;
        }, 2000)
    }

}



const aura1 = PIXI.Sprite.from('assets/aura1.png');
const aura2 = PIXI.Sprite.from('assets/aura2.png');
const aura3 = PIXI.Sprite.from('assets/aura3.png');

const olafScholzErnst = PIXI.Sprite.from('assets/olafscholz_ganz.png');


function startOlafFight(){
    app.stage.removeChild(olafScholz);
    olafScholzErnst.x = 422;
    olafScholzErnst.y = 135;
    olafScholzErnst.scale.set(2.5);
    app.stage.addChild(olafScholzErnst);

    const targetY = olafScholzErnst.y - 40; // Ziel: 200 Pixel nach oben
    const speed = 1;

    function moveOlafErnst() {
        if (olafScholzErnst.y > targetY) {
            olafScholzErnst.y -= speed;
        } else {
            app.ticker.remove(moveOlafErnst);
            setTimeout(() => {
                olafScholzErnst.texture = PIXI.Texture.from('assets/olafscholz_aura0.png');
            }, 600);
            setTimeout(() => {
                auraOneActive = true;
                app.stage.addChild(teleportAllowedSymbol);
            }, 1300);
        }
    }

    app.ticker.add(moveOlafErnst);
};

function changeOlafAura(auraStage){

    if (auraStage === 1){
        app.stage.removeChild(olafScholzErnst);

        aura1.x = olafScholzErnst.x - 130;
        aura1.y = olafScholzErnst.y - 180;
        aura1.scale.set(7);

        app.stage.addChild(aura1);
        app.stage.addChild(olafScholzErnst);
        
        //Map clearen
        clearedMap(mapSpriteArray);
    }

    if (auraStage === 2){
   
        olafScholzErnst.texture = PIXI.Texture.from('assets/olafscholz_aura0.png');
        app.stage.addChild(olafScholzErnst);

        setTimeout(()=>{
            app.stage.removeChild(olafScholzErnst);
            app.stage.removeChild(aura1);

            aura2.x = olafScholzErnst.x - 130;
            aura2.y = olafScholzErnst.y - 180;
            aura2.scale.set(7);

            app.stage.addChild(aura2);
            app.stage.addChild(olafScholzErnst);
            
        }, 3000)
    }

    if (auraStage === 3){
        olafScholzErnst.texture = PIXI.Texture.from('assets/olafscholz_aura0.png');
        app.stage.addChild(olafScholzErnst);
        setTimeout(()=>{
            app.stage.removeChild(olafScholzErnst);
            app.stage.removeChild(aura2);

            aura3.x = olafScholzErnst.x - 130;
            aura3.y = olafScholzErnst.y - 180;
            aura3.scale.set(7);

            app.stage.addChild(aura3);
            app.stage.addChild(olafScholzErnst);
            
        }, 3000)
    }

}


//Wann wird welche Aura hinzugefügt
app.ticker.add(()=>{
    if(auraOneActive && !auraOneRunning){
        auraOneRunning = true;
        changeOlafAura(1);
        setTimeout(()=>{
            olafScholzErnst.texture = PIXI.Texture.from('assets/olafscholz_ganz.png');
            shootingActivated = true;
            olafScholzAuraMovement(aura1);
        }, 800)

    }

    if(auraTwoActive && !auraTwoRunning){
        auraTwoRunning = true;
        changeOlafAura(2);
        setTimeout(()=>{
            olafScholzErnst.texture = PIXI.Texture.from('assets/olafscholz_ganz.png');
            shootingActivated = true;
            olafScholzAuraMovement(aura2);
        }, 3000)

    }

    if(auraThreeActive && !auraThreeRunning){
        auraThreeRunning = true;
        changeOlafAura(3);
        setTimeout(()=>{
            olafScholzErnst.texture = PIXI.Texture.from('assets/echsenolaf.png');
            shootingActivated = true;
            olafScholzAuraMovement(aura3);
        }, 3000)

    }

})


let shootingActivated = false;
let shootingSpeed = 100;
let countAuraPower = 0;

function shootAura(){
    function moveAura(auraProjectile, speed){
        
        let targetY = app.screen.height;
        // Zeichne die Hitboxen der Absperrungen

        auraProjectile.y += speed;

        // Kollision mit Hitbox (Schreibtisch)
        if (auraProjectile.y > targetY){
            app.stage.removeChild(auraProjectile);
            app.ticker.remove(moveAura);
        }

       //Koalision mit Spieler überprüfen
       const hitbox = {
            x: auraProjectile.x + auraProjectile.width * 0.4,
            y: auraProjectile.y + auraProjectile.height * 0.25,
            width: auraProjectile.width * 0.2,
            height: auraProjectile.height * 0.5
        };

        const debugRect2 = new PIXI.Graphics();
        debugRect2.lineStyle(2, 0xff0000, 1);
        debugRect2.drawRect(hitbox.x, hitbox.y, hitbox.width, hitbox.height);
        //app.stage.addChild(debugRect2);

        playerHitbox.x = barc.x + (barc.width - playerHitbox.width) / 2;
        playerHitbox.y = barc.y + (barc.height - playerHitbox.height) / 2;
        if (
            hitbox.x < playerHitbox.x + playerHitbox.width &&
            hitbox.x + hitbox.width > playerHitbox.x &&
            hitbox.y < playerHitbox.y + playerHitbox.height &&
            hitbox.y + hitbox.height > playerHitbox.y
        ) {
           app.stage.removeChild(auraProjectile);
           app.ticker.remove(moveAura);
           aktualisiereLebensanzeige();
           console.log('Aura hat barc getroffen')
       }

    }

    if (countAuraPower < 200 && auraOneActive && shootingActivated){
        countAuraPower++;
        const auraProjectile1 = PIXI.Sprite.from('assets/auraball1.png');
        auraProjectile1.x = aura1.x + Math.floor(Math.random() * (200 - 20 + 1)) + 40;
        auraProjectile1.y = aura1.y + 200;
        auraProjectile1.scale.set(3);
        app.stage.addChild(auraProjectile1);

        let speed = 4;
        app.ticker.add(()=>{
            moveAura(auraProjectile1, speed);
        });
    }

    if (countAuraPower < 400 && auraTwoActive && shootingActivated){
        countAuraPower++;
        const auraProjectile2 = PIXI.Sprite.from('assets/auraball2.png');
        auraProjectile2.x = aura2.x + Math.floor(Math.random() * (200 - 20 + 1)) + 40;
        auraProjectile2.y = aura2.y + 200;
        auraProjectile2.scale.set(3);
        app.stage.addChild(auraProjectile2);

        let speed = 4;
        app.ticker.add(()=>{
            moveAura(auraProjectile2, speed);
        });


    }

    if (countAuraPower < 1000 && auraThreeActive && shootingActivated){

        countAuraPower++;
        const auraProjectile3 = PIXI.Sprite.from('assets/auraball3.png');
        auraProjectile3.x = aura3.x + Math.floor(Math.random() * (200 - 20 + 1)) + 40;
        auraProjectile3.y = aura3.y + 200;
        auraProjectile3.scale.set(3);
        app.stage.addChild(auraProjectile3);
        console.log('Schießt');
        let speed = 4;
        app.ticker.add(()=>{
            moveAura(auraProjectile3, speed);
        });


    }

}
let shootingInterval = setInterval(shootAura, shootingSpeed); // Speichern!
function updateShootingSpeed(newSpeed) {
    console.log('upgedatet die geschwindigkeit der bullets aura');
    shootingSpeed = newSpeed;
    clearInterval(shootingInterval); // Vorherigen Interval stoppen
    shootingInterval = setInterval(shootAura, shootingSpeed); // Neu starten
}




function olafScholzAuraMovement(auraStage){
    let movingRight = true;
    let moveSpeed = 3;

    app.ticker.add(function moveOlafAura(){

        //Stoppt nach 200 Schuss weil Aura 1 frtig istt
        if (countAuraPower === 200 && !auraTwoRunning) {
            app.ticker.remove(moveOlafAura);
            shootingActivated = false;

            return; // Stop moving after 200 Schüsse
        }

        //Stoppt nach 400 Schuss weil Aura 2 fertig ist
        if (countAuraPower === 400 && !auraThreeRunning) {
            app.ticker.remove(moveOlafAura);
            shootingActivated = false;

            return; // Stop moving after 400 Schüsse
        }

        //Stoppt nach 400 Schuss weil Aura 2 fertig ist
        if (countAuraPower === 1000) {
            app.ticker.remove(moveOlafAura);
            shootingActivated = false;

            return; // Stop moving after 400 Schüsse
        }

        if (auraOneRunning || auraTwoRunning || auraThreeRunning){
            if(auraThreeRunning){
                if(moveSpeed != 5){
                    moveSpeed = 5; 
                    updateShootingSpeed(50)
                    console.log('hier auch geklappt');
                }
            }

            if (movingRight){
                olafScholzErnst.x += moveSpeed;
                auraStage.x += moveSpeed;
                if( olafScholzErnst.x + olafScholzErnst.width >= app.screen.width - 70){
                    movingRight = false;
                }
            } else {
                olafScholzErnst.x -= moveSpeed;
                auraStage.x -= moveSpeed;
                if(olafScholzErnst.x + olafScholzErnst.width <= 200){
                    movingRight = true;
                }
            }
        }
    })

}


//Wann wechselt die Aura
let echsenSzeneActivated = false;
app.ticker.add(()=>{
    if(countAuraPower === 200){
        auraOneActive = false;
        auraOneOver = true;

        setTimeout(()=>{
            auraTwoActive = true;
        }, 2000)

    }

    if(countAuraPower === 400){
        if(!echsenSzeneActivated){
            echsenSzeneActivated = true;

            auraTwoActive = false;
            auraTwoOver = true;

            setTimeout(()=>{
                echsenOlafCutSzene();
            }, 2000)
        }
        
    }

    if(countAuraPower === 1000 && finaleFightActive){
        auraThreeActive = false;
        auraThreeOver = true;

        finaleFightActive = false;
        console.log('öjebFÜOÄAUNSW');
        cutSzeneLindner();

    }
})

//Verwandlung zur Echse cutscene
function echsenOlafCutSzene(){
    //Olaf Scholz CutScene einleiten
    steuerungAktive = false;

    const backgroundEinleitung = new PIXI.Graphics();
    backgroundEinleitung.beginFill(0x808080);
    backgroundEinleitung.drawRect(0, 0, app.screen.width, app.screen.height);
    backgroundEinleitung.endFill();
    app.stage.addChild(backgroundEinleitung); 


    const auraSzene = PIXI.Sprite.from('assets/aura2.png');
    auraSzene.x = 80;
    auraSzene.y = -100;
    auraSzene.scale.set(18)
    app.stage.addChild(auraSzene);


    const olafScholzSzene = PIXI.Sprite.from('assets/olafscholz_ganz.png');
    olafScholzSzene.x = 400;
    olafScholzSzene.y = 320;
    olafScholzSzene.scale.set(8);
    app.stage.addChild(olafScholzSzene);



    const sprechblaseOlaf = PIXI.Sprite.from('assets/sprechblase_groß.png');
    sprechblaseOlaf.x = 160;
    sprechblaseOlaf.y = -10;
    sprechblaseOlaf.width += 400;
    sprechblaseOlaf.height += 500;
    app.stage.addChild(sprechblaseOlaf); 

    //Texte 
    const olafFinalText1 = new PIXI.Text('AHHHHHHH!!!!', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseOlaf.width - 80,
        align: 'center'
    });
    olafFinalText1.x = 225;
    olafFinalText1.y = 180;
    app.stage.addChild(olafFinalText1);


    const olafFinalText2 = new PIXI.Text('DU HAST ES NICHT ANDERS GEWOLLT!!!', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseOlaf.width - 80,
        align: 'center'
    });

    const olafFinalText3 = new PIXI.Text('ICH WERDE DIR MEIN WAHRES GESICHT ZEIGEN!!!!', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseOlaf.width - 80,
        align: 'center'
    });

    app.stage.removeChild(teleportAllowedSymbol);

    setTimeout(()=>{
        app.stage.removeChild(olafFinalText1);
        sprechblaseOlaf.width += 150;
        sprechblaseOlaf.x -= 150;

        olafFinalText2.x = 110;
        olafFinalText2.y = 170;
        app.stage.addChild(olafFinalText2);
    }, 4000);

    setTimeout(()=>{
        app.stage.removeChild(olafFinalText2);

        olafFinalText3.x = 130;
        olafFinalText3.y = 150;
        app.stage.addChild(olafFinalText3);
    }, 7000);


    setTimeout(()=>{
        app.stage.removeChild(backgroundEinleitung);
        app.stage.removeChild(olafScholzSzene);
        app.stage.removeChild(auraSzene);
        app.stage.removeChild(olafFinalText3);
        app.stage.removeChild(sprechblaseOlaf);

        app.stage.removeChild(backgroundEinleitung);
        app.stage.addChild(teleportAllowedSymbol);

        steuerungAktive = true;
        auraThreeActive = true;
    }, 12000);
}


const mapSpriteArray = [

    //Rednerpult
    rednerpult,

    //Alle Tische
    tisch1, tisch2,tisch3,tisch4,tisch5,tisch6,tisch7,tisch8,tisch9,tisch11,tisch12,tisch13,tisch14,tisch15,tisch16,  

     // Alle Politiker 1 - 59 (ohne 12, 14, 25, 28)
     politiker1, politiker2, politiker3, politiker5, politiker6, politiker7, politiker8, politiker9, politiker10,
     politiker11, 
     politiker13,
     politiker15, politiker16, politiker17, politiker18, politiker19, politiker20,
     politiker21, politiker22, politiker23, politiker24, 
     politiker26, politiker27, 
     politiker29, politiker30,
     politiker31, politiker32, politiker33, politiker34, politiker35, politiker36, politiker37, politiker38, politiker39, politiker40,
     politiker41, politiker42, politiker43, politiker44, politiker45, politiker46, politiker47, politiker48, politiker49, politiker50,
     politiker51, politiker52, politiker53, politiker54, politiker55, politiker56, politiker57, politiker58, politiker59,
 

    // Alle Stühle 1 - 59
    stuhl1, stuhl2, stuhl3, stuhl4, stuhl5, stuhl6, stuhl7, stuhl8, stuhl9, stuhl10,
    stuhl11, stuhl12, stuhl13, stuhl14, stuhl15, stuhl16, stuhl17, stuhl18, stuhl19, stuhl20,
    stuhl21, stuhl22, stuhl23, stuhl24, stuhl25, stuhl26, stuhl27, stuhl28, stuhl29, stuhl30,
    stuhl31, stuhl32, stuhl33, stuhl34, stuhl35, stuhl36, 
]

function clearedMap(spriteArray){
    //Als erstes alle barrieren entfernen
    barriers.length = 0;

    const screenMiddleY = olafScholzErnst.y + 100;
    const screenMiddleX = app.screen.width / 2;

    const flySpeed = 20;
    let rotationSpeed = 0.03;

    spriteArray.forEach(sprite => {
        app.ticker.add(function moveAndRemove(){

            if(sprite.x >= screenMiddleX){
                rotationSpeed = 0.3;
            } else {
                rotationSpeed = -0.3;
            }

            if ( sprite.y >= screenMiddleY){
                sprite.y += flySpeed;
                sprite.rotation += rotationSpeed;
                
            } else {
                sprite.y -= flySpeed;
                sprite.rotation -= rotationSpeed;
            }

            //Entferne, wenn au?erhalb sichtbarem bereich
            if (sprite.y < -sprite.height || sprite.y > app.screen.height + sprite.height){
                app.stage.removeChild(sprite);
                app.ticker.remove(moveAndRemove);
            }
        })
    });
    mapIsCleared = false;
}







//--------------------------------------------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//
//----------------  Olaf Scholz Finale 2 ------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//
//--------------------------------------------------------//

let echsenolafTöten = false;
let echsenolafTot = false;

let schwertActive = false;
let schwertAdded = false;
let chargeAttackActive = false;
let checkingChargeAttackTimer = false;


function countdownForChargeAttack(){
    if (!checkingChargeAttackTimer){
        checkingChargeAttackTimer = true;
        setTimeout(()=>{
            chargeAttackActive = true;
            checkingChargeAttackTimer = false;
        }, 500)
    }

}

function cutSzeneLindner(){
    steuerungAktive = false;
    app.stage.removeChild(teleportAllowedSymbol);

    const backgroundEinleitung = new PIXI.Graphics();
    backgroundEinleitung.beginFill(0x808080);
    backgroundEinleitung.drawRect(0, 0, app.screen.width, app.screen.height);
    backgroundEinleitung.endFill();
    app.stage.addChild(backgroundEinleitung); 

    const echsenOlafSzene = PIXI.Sprite.from('assets/echsenolaf.png');
    echsenOlafSzene.x = 500;
    echsenOlafSzene.y = 320;
    echsenOlafSzene.scale.set(8);
    app.stage.addChild(echsenOlafSzene);

    const sprechblaseOlaf = PIXI.Sprite.from('assets/sprechblase_groß.png');
    sprechblaseOlaf.x = 160;
    sprechblaseOlaf.y = -10;
    sprechblaseOlaf.width += 500;
    sprechblaseOlaf.height += 500;
    app.stage.addChild(sprechblaseOlaf); 

    const lindnerSzene = PIXI.Sprite.from('assets/christian_lindner.png');
    lindnerSzene.x = 0;
    lindnerSzene.y = 320;
    lindnerSzene.scale.set(7);

    const sprechblaseLindner = PIXI.Sprite.from('assets/sprechblase_links.png');
    sprechblaseLindner.x = 280;
    sprechblaseLindner.y = -10;
    sprechblaseLindner.width += 500;
    sprechblaseLindner.height += 500;

    const cumexAkten = PIXI.Sprite.from('assets/cumex.png');
    

    //Texte 
    const olafFinal2Text1 = new PIXI.Text('WEGRENNEN BRINGT NICHTS!!!', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseOlaf.width - 80,
        align: 'center'
    });
    olafFinal2Text1.x = 230;
    olafFinal2Text1.y = 170;
    app.stage.addChild(olafFinal2Text1);


    const olafFinal2Text2 = new PIXI.Text('DU KANNST MIR NICHT ENTKOMMEN!!!', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseOlaf.width - 80,
        align: 'center'
    });

    const lindner2FinaleText1 = new PIXI.Text('So sehen wir uns also wieder...', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseLindner.width - 120,
        align: 'center'
    });

    const olafFinal2Text3 = new PIXI.Text('Ha!', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseOlaf.width - 80,
        align: 'center'
    });

    const olafFinal2Text4 = new PIXI.Text('Den Kampf gegen dich habe ich schon vor langer Zeit gewonnen!', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseOlaf.width - 80,
        align: 'center'
    });

    const lindnerFinale2Text2 = new PIXI.Text('Was du damals nicht bemerkt hast...', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseLindner.width - 80,
        align: 'center'
    });

    const lindnerFinale2Text3 = new PIXI.Text('...ich habe etwas mitgehen lassen als du mich hast feuern lassen.', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseLindner.width - 80,
        align: 'center'
    });

    const lindnerFinale2Text4 = new PIXI.Text('In diese Akten steht alles über deine CumEx Machenschaften.', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseLindner.width - 80,
        align: 'center'
    });

    const lindnerFinale2Text5 = new PIXI.Text('Alles woran du dich "nicht mehr errinnern" kannst.', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseLindner.width - 80,
        align: 'center'
    });

    const olafFinal2Text5 = new PIXI.Text('GIB SIE MIR!!!', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseOlaf.width - 80,
        align: 'center'
    });


    const erklärBärFinal2Text1 = new PIXI.Text('Nutze den Moment um EchsenOlaf von der Seite zu attackieren.', {
        fontFamily: 'Press Start 2P',
        fontSize: 30,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: app.screen.width - 50,
        align: 'center'
    });

    //Einleitung in die erste welle
    const erklärBärFinal2Text2 = new PIXI.Text('Verwende hierfür das Schwert, welches dir Christian Lindner gegeben hat.', {
        fontFamily: 'Press Start 2P',
        fontSize: 30,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: app.screen.width - 50,
        align: 'center'
    });

    const schwertSzene = PIXI.Sprite.from('assets/schwert.png');



    setTimeout(()=>{
        app.stage.removeChild(olafFinal2Text1);
        sprechblaseOlaf.width += 150;
        sprechblaseOlaf.x -= 150;

        olafFinal2Text2.x = 120;
        olafFinal2Text2.y = 170;
        app.stage.addChild(olafFinal2Text2);
    }, 4000);

    setTimeout(()=>{
        app.stage.removeChild(olafFinal2Text2);
        app.stage.removeChild(sprechblaseOlaf);

        app.stage.addChild(lindnerSzene);
        app.stage.addChild(sprechblaseLindner);

        sprechblaseOlaf.width -= 200;
        sprechblaseOlaf.x += 200;

        lindner2FinaleText1.x = 390;
        lindner2FinaleText1.y = 180;
        app.stage.addChild(lindner2FinaleText1);



    }, 7000);

    setTimeout(()=>{
        app.stage.removeChild(lindner2FinaleText1);
        app.stage.removeChild(sprechblaseLindner);

        
        app.stage.addChild(sprechblaseOlaf);

        olafFinal2Text3.x = 380;
        olafFinal2Text3.y = 180;
        app.stage.addChild(olafFinal2Text3);


    }, 11000);

    setTimeout(()=>{
        app.stage.removeChild(olafFinal2Text3);
        
        sprechblaseOlaf.width += 150;
        sprechblaseOlaf.x = 80

        olafFinal2Text4.x = 150;
        olafFinal2Text4.y = 160;
    
        app.stage.addChild(olafFinal2Text4);
        
    }, 13000);

    setTimeout(()=>{
        app.stage.removeChild(olafFinal2Text4);
        app.stage.removeChild(sprechblaseOlaf);

        app.stage.addChild(sprechblaseLindner);



        lindnerFinale2Text2.x = 370;
        lindnerFinale2Text2.y = 170;
        app.stage.addChild(lindnerFinale2Text2);

    }, 17000);

    setTimeout(()=>{
        app.stage.removeChild(lindnerFinale2Text2);

        sprechblaseLindner.width += 50;

        lindnerFinale2Text3.x = 390;
        lindnerFinale2Text3.y = 150;
        app.stage.addChild(lindnerFinale2Text3);

    }, 21000);

    setTimeout(()=>{
        app.stage.removeChild(lindnerFinale2Text3);

        sprechblaseLindner.width += 50;

        cumexAkten.x = 240;
        cumexAkten.y = 520;
        cumexAkten.scale.set(2)
        app.stage.addChild(cumexAkten);

        lindnerFinale2Text4.x = 400;
        lindnerFinale2Text4.y = 160;
        app.stage.addChild(lindnerFinale2Text4);

    }, 26000);

    setTimeout(()=>{
        app.stage.removeChild(lindnerFinale2Text4);


        lindnerFinale2Text5.x = 420;
        lindnerFinale2Text5.y = 160;
        app.stage.addChild(lindnerFinale2Text5);

    }, 33000);

    setTimeout(()=>{
        app.stage.removeChild(lindnerFinale2Text5);
        app.stage.removeChild(sprechblaseLindner);

        
        app.stage.addChild(sprechblaseOlaf);

        olafFinal2Text5.x = 220;
        olafFinal2Text5.y = 180;
        app.stage.addChild(olafFinal2Text5);

    }, 38000);

    setTimeout(()=>{

        app.stage.removeChild(olafFinal2Text5);
        app.stage.removeChild(sprechblaseOlaf);
        app.stage.removeChild(echsenOlafSzene);
        app.stage.removeChild(lindnerSzene);
        app.stage.removeChild(cumexAkten);
    
        erklärBärFinal2Text1.x = 50;
        erklärBärFinal2Text1.y = 30;
        app.stage.addChild(erklärBärFinal2Text1);
    
        schwertSzene.scale.set(6);
        schwertSzene.x = 310;
        schwertSzene.y = 180;
        app.stage.addChild(schwertSzene);
    
        erklärBärFinal2Text2.x = 50;
        erklärBärFinal2Text2.y = 580
        app.stage.addChild(erklärBärFinal2Text2);
    
    }, 41000);

    setTimeout(()=>{
        app.stage.removeChild(erklärBärFinal2Text1);
        app.stage.removeChild(schwertSzene);
        app.stage.removeChild(erklärBärFinal2Text2);
        app.stage.removeChild(backgroundEinleitung);

        schwertActive = true;
        chargeAttackActive = true;
        steuerungAktive = true;
        echsenolafTöten = true;
        app.ticker.add(schwertPositionTicker);
 
    }, 53000);
}

//Schwert hinzufügen und regelmäßig updaten
const schwert = PIXI.Sprite.from('assets/schwert.png');
app.ticker.add(()=>{
    if (schwertActive && !schwertAdded){
        schwertAdded = true;
        app.stage.addChild(schwert);
    }
})

function updateSchwertDirection() {
    if (playerLookingRight) {
        schwert.texture = PIXI.Texture.from('assets/schwert.png');
    } else if (playerLookingLeft) {
        schwert.texture = PIXI.Texture.from('assets/schwert.png');
    }
}

function updateSchwertPosition() {
    if (playerLookingRight) {
        schwert.x = barc.x + 50;
        schwert.y = barc.y;
        schwert.rotation = -6;
    } else if (playerLookingLeft) {
        schwert.x = barc.x - 11;
        schwert.y = barc.y + 16;
        schwert.rotation = 6;
    }
}

// Füge das Update zur Spiel-Loop hinzu
const schwertPositionTicker = ()=>{
    updateSchwertPosition();
    updateSchwertDirection();
}


const lindner = PIXI.Sprite.from('assets/christian_lindner.png');

const cumExOrdner = PIXI.Sprite.from('assets/cumex.png');

let lindnerAdded = false;

app.ticker.add(()=>{
    if(echsenolafTöten && !lindnerAdded){
        lindnerAdded = true;

        olafScholzErnst.x = 440;

        lindner.x = 450;
        lindner.y = 660;
        lindner.scale.set(2);
        app.stage.addChild(lindner);

        cumExOrdner.x = 484;
        cumExOrdner.y = 720;
        app.stage.addChild(cumExOrdner);

        echsenOlafGreiftAn();

    }
})

function echsenOlafGreiftAn(){
    let targetY = 680;
    let speed = 1.5;

    function moveEchsenOlaf() {
        if (olafScholzErnst.y < targetY && !echsenolafTot) {
            olafScholzErnst.y += speed;
        } else {
            app.ticker.remove(moveEchsenOlaf);
            lindnerIstTod();
        }

        if(echsenolafTot){
            app.stage.removeChild(olafScholzErnst);

            const echsenolafTop = PIXI.Sprite.from('assets/echsenolaf_half_top.png');
            echsenolafTop.scale.set(2.5);
            echsenolafTop.x = olafScholzErnst.x + 60;
            echsenolafTop.y = olafScholzErnst.y - 120;
            echsenolafTop.rotation = 0.3;
            app.stage.addChild(echsenolafTop);

            const echsenolafBottom  = PIXI.Sprite.from('assets/echsenolaf_half_bottom.png');
            echsenolafBottom.scale.set(2.5);
            echsenolafBottom.x = olafScholzErnst.x;
            echsenolafBottom.y = olafScholzErnst.y;
            app.stage.addChild(echsenolafBottom);

            app.ticker.remove(moveEchsenOlaf);

        }
    }

    app.ticker.add(moveEchsenOlaf);

}


function lindnerIstTod(){
    const deathBackground = new PIXI.Graphics();
    deathBackground.beginFill(0x8B0000); // Dunkelrot – du kannst auch andere Farben wählen
    deathBackground.drawRect(0, 0, app.screen.width, app.screen.height);
    deathBackground.endFill();
    app.stage.addChild(deathBackground);

    const linderTodText = new PIXI.Text('Du hast Lindner sterben lassen', {
        fontFamily: 'Press Start 2P',
        fontSize: 30,
        fill: 0xFFFFFF,
        align: 'center'
    });

    linderTodText.x = 50;
    linderTodText.y = 300;

    app.stage.addChild(linderTodText);

    //Retry Button mit Logik
    const retry = PIXI.Sprite.from('assets/retry.png');
    retry.x = 300;
    retry.y = 450;
    retry.scale.set(10)

    retry.interactive = true;
    retry.buttonMode = true;
    
    retry.on('pointerdown', () => {
        window.location.reload();
    });
    app.stage.addChild(retry);

    stopGame();
}









//Health-System
let leben = 6;

const herz1 = PIXI.Sprite.from('assets/herz_full.png');
herz1.x = 20;
herz1.y = 710;


const herz2 = PIXI.Sprite.from('assets/herz_full.png');
herz2.x = 65;
herz2.y = 710;


const herz3 = PIXI.Sprite.from('assets/herz_full.png');
herz3.x = 110;
herz3.y = 710;


const herz4 = PIXI.Sprite.from('assets/herz_full.png');
herz4.x = 155;
herz4.y = 710;


const herz5 = PIXI.Sprite.from('assets/herz_full.png');
herz5.x = 200;
herz5.y = 710;


const herz6 = PIXI.Sprite.from('assets/herz_full.png');
herz6.x = 245;
herz6.y = 710;



function aktualisiereLebensanzeige(){
    if(leben === 6){
        leben -= 0.5;
        herz6.texture = PIXI.Texture.from('assets/herz_half.png');
    } else if (leben === 5.5){
        leben -= 0.5;
        herz6.texture = PIXI.Texture.from('assets/herz_leer.png');
    } else if(leben === 5){
        leben -= 0.5;
        herz5.texture = PIXI.Texture.from('assets/herz_half.png');
    } else if (leben === 4.5){
        leben -= 0.5;
        herz5.texture = PIXI.Texture.from('assets/herz_leer.png');
    } else if(leben === 4){
        leben -= 0.5;
        herz4.texture = PIXI.Texture.from('assets/herz_half.png');
    } else if (leben === 3.5){
        leben -= 0.5;
        herz4.texture = PIXI.Texture.from('assets/herz_leer.png');
    } else if(leben === 3){
        leben -= 0.5;
        herz3.texture = PIXI.Texture.from('assets/herz_half.png');
    } else if (leben === 2.5){
        leben -= 0.5;
        herz3.texture = PIXI.Texture.from('assets/herz_leer.png');
    } else if(leben === 2){
        leben -= 0.5;
        herz2.texture = PIXI.Texture.from('assets/herz_half.png');
    } else if (leben === 1.5){
        leben -= 0.5;
        herz2.texture = PIXI.Texture.from('assets/herz_leer.png');
    } else if(leben === 1){
        leben -= 0.5;
        herz1.texture = PIXI.Texture.from('assets/herz_half.png');
    } else if (leben === 0.5){
        leben -= 0.5;
        herz1.texture = PIXI.Texture.from('assets/herz_leer.png');
    }

}

app.ticker.add(()=>{
    if(leben <= 0){
        playerDead();
        
    }
})

function playerDead(){
    
    const deathBackground = new PIXI.Graphics();
    deathBackground.beginFill(0x8B0000); // Dunkelrot – du kannst auch andere Farben wählen
    deathBackground.drawRect(0, 0, app.screen.width, app.screen.height);
    deathBackground.endFill();
    app.stage.addChild(deathBackground);

    const deathText = new PIXI.Text('DU BIST GESTORBEN', {
        fontFamily: 'Press Start 2P',
        fontSize: 30,
        fill: 0xFFFFFF,
        align: 'center'
    });

    deathText.anchor.set(0.5);
    deathText.x = app.screen.width / 2;
    deathText.y = 300;

    app.stage.addChild(deathText);

    //Retry Button mit Logik
    const retry = PIXI.Sprite.from('assets/retry.png');
    retry.x = 300;
    retry.y = 450;
    retry.scale.set(10)

    retry.interactive = true;
    retry.buttonMode = true;
    
    retry.on('pointerdown', () => {
        window.location.reload();
    });
    app.stage.addChild(retry);

    stopGame();
}


//Wenn spiel zu ende ist und gewonnen
function finalScene(){
    const finalBackground = new PIXI.Graphics();
    finalBackground.beginFill(0xD3D3D3); // Dunkelrot – du kannst auch andere Farben wählen
    finalBackground.drawRect(0, 0, app.screen.width, app.screen.height);
    finalBackground.endFill();
    app.stage.addChild(finalBackground);

    const bühne = PIXI.Sprite.from('assets/bühne.png');
    bühne.width = app.screen.width;
    bühne.height = app.screen.height + 120;
    app.stage.addChild(bühne)

    const vorhang1 = PIXI.Sprite.from('assets/vorhang_links.png');
    vorhang1.scale.set(11)
    app.stage.addChild(vorhang1)

    const vorhang2 = PIXI.Sprite.from('assets/vorhang_rechts.png');
    vorhang2.x = 340
    vorhang2.scale.set(11)
    app.stage.addChild(vorhang2)

    const standMikro = PIXI.Sprite.from('assets/standmikrofon.png');
    standMikro.x = 400
    standMikro.y = 450
    standMikro.scale.set(4)
    app.stage.addChild(standMikro)    

    const scenenBarc = PIXI.Sprite.from('assets/player_standing.png');
    scenenBarc.x = 100
    scenenBarc.y = 350
    scenenBarc.scale.set(12)
    app.stage.addChild(scenenBarc)  

    const sceneMerz = PIXI.Sprite.from('assets/merz.png');
    sceneMerz.x = 1000
    sceneMerz.y = 280
    sceneMerz.scale.set(7)
    app.stage.addChild(sceneMerz)  

    const sprechblaseMerz = PIXI.Sprite.from('assets/sprechblase_groß.png');
    sprechblaseMerz.x = 150;
    sprechblaseMerz.y = 0;
    sprechblaseMerz.width = 500;
    sprechblaseMerz.height = 500;

    const sprechblaseBarc = PIXI.Sprite.from('assets/sprechblase_links.png');
    sprechblaseBarc.x = 380;
    sprechblaseBarc.y = 50;
    sprechblaseBarc.width = 500;
    sprechblaseBarc.height = 500;

    const orden = PIXI.Sprite.from('assets/orden.png');
    orden.x = 380;
    orden.y = 50;
    orden.scale.set(2.5)
 




    const text0 = new PIXI.Text('Ich habe kein Problem mit Schwulen...', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseMerz.width - 160,
        align: 'center'
    })
    
    
    const text1 = new PIXI.Text('Solange es im Ramen der Gesetze bleibt und nicht im Kontakt mit Kindern', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseMerz.width - 160,
        align: 'center'
    })

    const text2 = new PIXI.Text('Einer mit Crack, der Andere ist eine Echse und jetzt das...', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseMerz.width - 160,
        align: 'center'
    })

    const text3 = new PIXI.Text('Ich als neuer Bundeskanzler, möchte dir eine Medaille überreichen', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseMerz.width - 160,
        align: 'center'
    })

    const text4 = new PIXI.Text('Vielen Dank!', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseMerz.width - 160,
        align: 'center'
    })

    const dankSagung = new PIXI.Text('Vielen Dank an Lars Buschardt für die kreative Unterstützung, als auch fürs testen des Spieles', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: app.screen.width - 60,
        align: 'center'
    })

    const ende = new PIXI.Text('ENDE', {
        fontFamily: 'Press Start 2P',
        fontSize: 60,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: app.screen.width - 60,
        align: 'center'
    })

    const werbung = new PIXI.Text('Ich würde mich freun, wenn Sie einen weiteren Blick auf meine Homepage werfen würden', {
        fontFamily: 'Press Start 2P',
        fontSize: 20,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: app.screen.width - 60,
        align: 'center'
    })

    const link = new PIXI.Text('Zur Homepage', {
        fontFamily: 'Press Start 2P',
        fontSize: 24,
        fill: 0x0000FF,
        fontWeight: 'bold',
    });

    link.x = 350;
    link.y = 600;
    link.interactive = true;
    link.buttonMode = true;
    link.on('pointerdown', () => {
        window.location.href = 'https://www.marcbuschardt.de/';
    });

    
    
    setTimeout(()=>{
        function moveMerz() {

            const zielX = 500// anpassen
        
            const geschwindigkeit = 2;
        
            const ticker = new PIXI.Ticker();
            ticker.add(() => {
                const dx = zielX - sceneMerz.x;
                const dist = Math.sqrt(dx * dx);
        
                if (dist > geschwindigkeit) {
                    // Normalisieren & bewegen
                    const nx = dx / dist;
        
                    sceneMerz.x += nx * geschwindigkeit;
                } else {
                    // Ziel erreicht
                    sceneMerz.x = zielX;
                    ticker.stop();
                }
            });
        
            ticker.start();
        }
        moveMerz() 
    }, 1000)

    setTimeout(()=>{
        
        app.stage.addChild(sprechblaseMerz);

        text0.x = 250;
        text0.y = 160;
        app.stage.addChild(text0);

    }, 6000)

    setTimeout(()=>{
        app.stage.removeChild(text0);

        text1.x = 210;
        text1.y = 160;
        app.stage.addChild(text1);

    }, 10000)

    setTimeout(()=>{
        app.stage.removeChild(text1);
        app.stage.removeChild(sprechblaseMerz);

        app.stage.addChild(sprechblaseBarc);

        text2.x = 480;
        text2.y = 200;
        app.stage.addChild(text2);
       
    }, 16000)

    setTimeout(()=>{
        app.stage.removeChild(text2);
        app.stage.removeChild(sprechblaseBarc);

        app.stage.addChild(sprechblaseMerz);

        text3.x = 210;
        text3.y = 160;
        app.stage.addChild(text3);

    }, 22000)

    setTimeout(()=>{
        app.stage.removeChild(text2);
        app.stage.removeChild(sprechblaseBarc);

        sceneMerz.texture = PIXI.Texture.from('assets/merz_aktion.png')
        orden.x = 520;
        orden.y = 420;
        app.stage.addChild(orden)

    }, 28000)

    setTimeout(()=>{
        app.stage.removeChild(text3);
        app.stage.removeChild(sprechblaseMerz);

        orden.x = 223;
        orden.y = 420;

        app.stage.addChild(sprechblaseBarc);

        text4.x = 510;
        text4.y = 250;
        app.stage.addChild(text4);

    }, 30000)

    setTimeout(()=>{
        app.stage.addChild(finalBackground)

        dankSagung.x = 20
        dankSagung.y = 50
        app.stage.addChild(dankSagung)

        ende.x = 390
        ende.y = 300
        app.stage.addChild(ende)

        werbung.x = 20
        werbung.y = 500
        app.stage.addChild(werbung)

        app.stage.addChild(link);

    }, 40000)
}
let finalSzeneAdded = false
app.ticker.add(()=>{
    if (gameOver && !finalSzeneAdded){
        finalSzeneAdded = true;
        finalScene();
    }
})
