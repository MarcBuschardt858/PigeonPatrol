const app = new PIXI.Application({ width: 800, height: 800, background: 'lightgrey'});
const mainContainer = document.getElementById('mainContainer');

//Hintergrund hinzufügen
const background = PIXI.Sprite.from('assets/background.png');
background.width = app.screen.width;
background.height = app.screen.height;
app.stage.addChild(background);

//Listen

let spawnListeOfHindernisse = ['straßenkleber']; //Listet alle möglichen Hindernisse auf (Standard am anfang nur straßenkleber)
let hindernisseGeändert = false; //wichtig damit die Hindernisse ab a1 nur einmal in der liste ergänzt werden
let bmwSpawned = false;
let arrayOfHinderniss = []; //Listet die aktuellen hindernisse auf die aktiv sind
let arrayOfBmwHinderniss = [];
let arrayOfBullets = []; //Listet die aktuellen mikrofone auf die aktiv sind


//Geschwindigkeit der hindernisse und bullets anhand dieser passt sich die x geschwindigkeit des autos an
let speedOfHinderniss = 2;
let speedOfBullets = 10;
let movingSpeed = 4;

//Geschwindigkeitsanzeige
const showSpeed = document.getElementById('showSpeed');
let shownDrivingSpeed = 60;

//Gucken wann der User gewinnt
let distanceTraveled = 0;
let lastUpdateTime = performance.now();
const TARGET_DISTANCE = 600;


gameInterval(()=>{
    let now = performance.now();
    let deltaTime = (now - lastUpdateTime) / 1000;
    lastUpdateTime = now;

    distanceTraveled += speedOfHinderniss * deltaTime;
    console.log(distanceTraveled)
    if(distanceTraveled >= TARGET_DISTANCE){
        console.log('GEWONNEN!!!!!')
        gameFinished();
    }
}, 1000)

//Fluchtwage und seine Hitbox
const fluchtwagen = PIXI.Sprite.from('assets/fluchtwagen.png');
fluchtwagen.x = 300;
fluchtwagen.y = 300;
fluchtwagen.scale.x = 5;
fluchtwagen.scale.y = 5;

function calculateHitbox(sprite, dx, dy){
    const newX = sprite.x + dx;
    const newY = sprite.y + dy;

    return {
        x: newX + sprite.width * 0.35,
        y: newY + sprite.height * 0.2,
        width: sprite.width * 0.32,
        height: sprite.height * 0.6
    };
}
let fluchtwagenHitbox = calculateHitbox(fluchtwagen, 0, 0);

app.stage.addChild(fluchtwagen);


//Bewegung fürs Fluchtauto
function leftKeyPressed(){
    
    moveCheckMapBounds(fluchtwagen, -movingSpeed)
    
}
function rightKeyPressed(){

    moveCheckMapBounds(fluchtwagen, movingSpeed)

}
function upKeyPressed(){
    if(speedOfBullets >= 5){
        //das auto soll stehenbleibem, nur die hindernisse sollen schneller werden
        speedOfBullets -= 0.05;
    }
    if(speedOfHinderniss <= 12){
        //das auto soll stehenbleibem, nur die hindernisse sollen schneller werden
        speedOfHinderniss += 0.025;

    }

    if (movingSpeed <= 8){
        movingSpeed += 0.05;
    }

    increaseSpeedDisplay();
}

function downKeyPressed(){
    if(speedOfHinderniss >= 2){
        //das auto soll stehenbleibem, nur die hindernisse sollen schneller werden
        speedOfHinderniss -= 0.07;
    }
    if(speedOfBullets <= 10){
        //das auto soll stehenbleibem, nur die hindernisse sollen schneller werden
        speedOfBullets += 0.07;
    }
    if (movingSpeed >= 4){
        movingSpeed -= 0.05;
    }
    decreaseSpeedDisplay();
}

function checkColisionObsticle(){
    for (let hinderniss of arrayOfHinderniss) {
        let hindernissHitbox = {
            x: hinderniss.x + hinderniss.width * 0.1,
            y: hinderniss.y, 
            width: hinderniss.width * 0.8,
            height: hinderniss.height * 0.8
        };

        if (isRectColliding(
            fluchtwagenHitbox.x, fluchtwagenHitbox.y, fluchtwagenHitbox.width, fluchtwagenHitbox.height,
            hindernissHitbox.x, hindernissHitbox.y, hindernissHitbox.width, hindernissHitbox.height
        )) {
            let text = 'Unfall!!'
            hindernissgetroffenDisplay(text);
        }
    }
}

// Kollisionsprüfung wird in jedem Frame aufgerufen
app.ticker.add(() => {
    fluchtwagenHitbox = calculateHitbox(fluchtwagen, 0, 0);
    checkColisionObsticle();
});

//Straßenkleber sollen sich langsam als Hinderniss herunterbewegen
gameInterval(()=>{

    let hindernisseIndex = random(0, spawnListeOfHindernisse.length - 1) //Random einstellen

    const hinderniss = PIXI.Sprite.from(`assets/${spawnListeOfHindernisse[hindernisseIndex]}.png`);
    
    if(spawnListeOfHindernisse[hindernisseIndex] === 'straßenkleber'){

        hinderniss.x = random(1, 750);
        hinderniss.y = -10;
        flyDown(hinderniss, speedOfHinderniss);
        hinderniss.scale.set(2.5);

    }

    if (spawnListeOfHindernisse[hindernisseIndex] === 'bagger' || spawnListeOfHindernisse[hindernisseIndex] === 'absperrung'){

        hinderniss.x = random(1, 750);
        hinderniss.y = -10;
    
        flyDown(hinderniss, speedOfHinderniss);
        hinderniss.scale.set(4);
    }
    if (spawnListeOfHindernisse[hindernisseIndex] === 'gegenfahrbahn1' || spawnListeOfHindernisse[hindernisseIndex] === 'gegenfahrbahn2' || spawnListeOfHindernisse[hindernisseIndex] === 'gegenfahrbahn3'){

        hinderniss.x = random(1, 750);
        hinderniss.y = -10;
    
        flyDown(hinderniss, speedOfHinderniss);
        hinderniss.scale.set(3);
    }

    arrayOfHinderniss.push(hinderniss);
    app.stage.addChild(hinderniss)

}, 1750)


//Tauben einstellungen
const taube = PIXI.Sprite.from('assets/pigeon_attack.png');
taube.x = 300;
taube.y = 700;
taube.scale.set(3)
taube.anchor.set(0.25)

app.stage.addChild(taube);

//Taube soll von links nach rechts immer sliden
let speed = 4;
const padding = 30; // Kleiner Abstand zum Bildschirmrand
const minX = padding + taube.width / 2;
const maxX = app.screen.width - (taube.width / 2) - 80;

app.ticker.add(()=> {
    speed = slideLeftAndRight(taube, speed, minX, maxX);
});


//Die Taube soll das Mikrofon schießen
gameInterval(()=>{

    const mikrofon = PIXI.Sprite.from('assets/mikrofon.png');
    arrayOfBullets.push(mikrofon)
    mikrofon.x = taube.x;
    mikrofon.y = taube.y;
    app.stage.addChild(mikrofon);
    flyUp(mikrofon, speedOfBullets);
    fahrzeugAbgehört();
}, 1000)

function fahrzeugAbgehört(){
    for (let bullet of arrayOfBullets){
        let newBullet = {
            x: bullet.x + bullet.width * 0.1,
            y: bullet.y, 
            width: bullet.width * 0.8,
            height: bullet.height * 0.8
        }

        //Hitbox des Autos neu bestimmen
        if (isRectColliding(fluchtwagenHitbox.x, fluchtwagenHitbox.y, fluchtwagenHitbox.width, fluchtwagenHitbox.height, newBullet.x, newBullet.y, newBullet.width, newBullet.height)) {
            abgehörtDisplay()
        }
    }
}

// Funktionen die immer aufgerufen werden des Autos in jedem Frame aktualisieren
app.ticker.add(() => {
    fluchtwagenHitbox = calculateHitbox(fluchtwagen, 0, 0); 
    fahrzeugAbgehört();
});

app.ticker.add(()=>{
    if (distanceTraveled > 250 && !hindernisseGeändert){

        const a1überschrift = new PIXI.Text('Du fährst jetzt auf der A1', {
            fontFamily: 'Press Start 2P',
            fontSize: 25,
            fill: 0x000000,
            align: 'center'
        })
        a1überschrift.x = 70;
        a1überschrift.y = 50;

        app.stage.addChild(a1überschrift);

        setTimeout(()=>{
            app.stage.removeChild(a1überschrift);
        }, 5000)
        let indexOfSplice = spawnListeOfHindernisse.indexOf('straßenkleber');

        // Wenn der "Straßenkleber" in der Liste ist, entfernen wir ihn
        if (indexOfSplice !== -1) {
            spawnListeOfHindernisse.splice(indexOfSplice, 1); // Entferne 1 Element ab dem Index
        }

        spawnListeOfHindernisse.push('bagger');
        spawnListeOfHindernisse.push('absperrung');
        spawnListeOfHindernisse.push('gegenfahrbahn1');
        spawnListeOfHindernisse.push('gegenfahrbahn2');
        spawnListeOfHindernisse.push('gegenfahrbahn3');

        hindernisseGeändert = true; //sorgt dafür das der code block nur einmal ausgeführt wird
    }
});

app.ticker.add(()=>{
    if(distanceTraveled > 350 && !bmwSpawned){
        bmwSpawned = true;
        gameInterval(()=>{
            const bmw = PIXI.Sprite.from('assets/bmw.png');
            arrayOfHinderniss.push(bmw);
            bmw.x = fluchtwagen.x;
            bmw.y = 800;
            bmw.scale.set(2.5);
            app.stage.addChild(bmw);

            const lichtLinks = PIXI.Sprite.from('assets/scheinwerfer.png');
            const lichtRechts = PIXI.Sprite.from('assets/scheinwerfer.png');

            lichtLinks.scale.set(2);
            lichtRechts.scale.set(2);

            function updateScheinwerferPosition(){
                lichtLinks.x = bmw.x - 15;
                lichtRechts.x = bmw.x + 30;
                lichtLinks.y = bmw.y - 30;
                lichtRechts.y = bmw.y -30;
            }

            updateScheinwerferPosition();

            let bmwSpeed = 6;
            let stopY = fluchtwagen.y + 150;
            let waiting = false;

            app.ticker.add(()=>{
                if (!waiting){
                    
                    if(bmw.y > stopY){
                        bmw.y -= bmwSpeed;
                        updateScheinwerferPosition();
                    } else {
                        waiting = true;

                        function blinkScheinwerfer(count){
                            if (count === 0){
                                app.stage.addChild(lichtLinks);
                                app.stage.addChild(lichtRechts);

                                setTimeout(() => {
                                    flyUp(bmw, 15);
                                    flyUp(lichtLinks, 15);
                                    flyUp(lichtRechts, 15);
                                    waiting = false;
                                }, 1000);
                                return;
                            }

                            app.stage.addChild(lichtLinks);
                            app.stage.addChild(lichtRechts);

                            setTimeout(()=>{
                                app.stage.removeChild(lichtLinks);
                                app.stage.removeChild(lichtRechts);
                                setTimeout(()=>{
                                    blinkScheinwerfer(count - 1);
                                }, 500)
                            }, 500)
                        }

                        blinkScheinwerfer(3);
                    }
                }
            });
        }, 8000);
    }
});

function increaseSpeedDisplay() {
    if (shownDrivingSpeed <= 260){
        shownDrivingSpeed += 0.5;
        showSpeed.textContent = `Geschwindigkeit: ${shownDrivingSpeed.toFixed(0)}kmh`;
    } 
}
function decreaseSpeedDisplay() {
    
    if (shownDrivingSpeed >= 60){
        shownDrivingSpeed -= 0.5
        showSpeed.textContent = `Geschwindigkeit: ${shownDrivingSpeed.toFixed(0)}kmh`;
    }
}

setInterval(()=> {
    const distanceDisplay = document.getElementById('showDistance');
    distanceDisplay.textContent = `Distanz: ${(distanceTraveled.toFixed(0) * 4)}m von 2,4km`;
}, 1000)

function gameFinished(){
    stopGame();

    flyUp(fluchtwagen, 15);

    arrayOfBullets = [];
    arrayOfHinderniss = [];

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
            window.location.href = 'scene1.html';
        });

        app.stage.addChild(link);

    }, 1500);

}

mainContainer.appendChild(app.view);


