//Barc Muschardt
const barcMuschardt = PIXI.Sprite.from('assets/player_standing.png');
barcMuschardt.x = 400;
barcMuschardt.y = 450;
barcMuschardt.scale.set(15);
app.stage.addChild(barcMuschardt);

const sprechblaseGroß = PIXI.Sprite.from('assets/sprechblase_groß.png');
sprechblaseGroß.x = 10;
sprechblaseGroß.y = 100;
sprechblaseGroß.width = 600;
sprechblaseGroß.height = 600;
app.stage.addChild(sprechblaseGroß);

//alle texte müssen vordefiniert werden
//Text 0
const text0 = new PIXI.Text('Das war knapp!!', {
    fontFamily: 'Press Start 2P',
    fontSize: 25,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: sprechblaseGroß.width - 160,
    align: 'center'
})
text0.x = 100;
text0.y = 330;
app.stage.addChild(text0);

//Text 1
const text1 = new PIXI.Text('Zum Glück bin ich rechtzeitig entkommen.', {
    fontFamily: 'Press Start 2P',
    fontSize: 25,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: sprechblaseGroß.width - 160,
    align: 'center'
})

//Text 2
const text2 = new PIXI.Text('Die Krawatte wird mir dabei helfen...', {
    fontFamily: 'Press Start 2P',
    fontSize: 25,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: sprechblaseGroß.width - 160,
    align: 'center'
})

//Text 3
const text3 = new PIXI.Text('...an das Passwort für den Bundestag zu kommen.', {
    fontFamily: 'Press Start 2P',
    fontSize: 25,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: sprechblaseGroß.width - 160,
    align: 'center'
})

//Text 4
const text4 = new PIXI.Text('mal sehen...', {
    fontFamily: 'Press Start 2P',
    fontSize: 25,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: sprechblaseGroß.width - 160,
    align: 'center'
})

setTimeout(()=>{
    app.stage.removeChild(text0);

    text1.x = 75;
    text1.y = 300;
    app.stage.addChild(text1);
}, 3000)

setTimeout(()=>{
    app.stage.removeChild(text1);

    text2.x = 75;
    text2.y = 300;
    app.stage.addChild(text2);
}, 6000)

setTimeout(()=>{
    app.stage.removeChild(text2);

    text3.x = 85;
    text3.y = 300;
    app.stage.addChild(text3);
}, 9000)

setTimeout(()=>{
    app.stage.removeChild(text3);

    text4.x = 130;
    text4.y = 330;
    app.stage.addChild(text4);
}, 12000)

setTimeout(()=>{
    // Erstelle eine Hintergrundgrafik
    const backgroundSceneTop = new PIXI.Graphics();
    backgroundSceneTop.beginFill(0xD5C6B0);
    backgroundSceneTop.drawRect(0, 0, app.screen.width, (app.screen.height / 2));
    backgroundSceneTop.endFill();

    const backgroundSceneBottom = new PIXI.Graphics();
    backgroundSceneBottom.beginFill(0x4A4A4A);
    backgroundSceneBottom.drawRect(0, 400, app.screen.width, (app.screen.height / 2));
    backgroundSceneBottom.endFill();

    app.stage.addChild(backgroundSceneTop);
    app.stage.addChild(backgroundSceneBottom);

    //Bundesadler links und rechts an die wand
    const adler1 = PIXI.Sprite.from('assets/bundestag_deutscher_adler.png');
    adler1.x = 100;
    adler1.y = 150;
    adler1.scale.set(4);

    //Bundesadler links und rechts an die wand
    const adler2 = PIXI.Sprite.from('assets/bundestag_deutscher_adler.png');
    adler2.x = 580;
    adler2.y = 150;
    adler2.scale.set(4);

    app.stage.addChild(adler1)
    app.stage.addChild(adler2)

    //Schriftzug "Bundestag"
    const bundestagUeberschrift = new PIXI.Text('BUNDESTAG', {
        fontFamily: 'Press Start 2P',
        fontSize: 25,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseGroß.width - 160,
        align: 'center'
    })
    bundestagUeberschrift.x = 300;
    bundestagUeberschrift.y = 70;
    app.stage.addChild(bundestagUeberschrift);

    //Roter Teppich hinzufügen
    const roterTeppich = PIXI.Sprite.from('assets/roter_teppich.png');
    roterTeppich.x = 200;
    roterTeppich.y = 400;
    roterTeppich.scale.set(13);
    app.stage.addChild(roterTeppich);

    //Tür hinzufügen
    const tuer = PIXI.Sprite.from('assets/bundestag_eingangstür.png');
    tuer.x = 280;
    tuer.y = 145;
    tuer.scale.set(8);
    app.stage.addChild(tuer);
    
    const tuerOffen = PIXI.Sprite.from('assets/bundestags_einganstür_offen.png');
    tuerOffen.x = 285;
    tuerOffen.y = 172;
    tuerOffen.scale.set(8);

    //Türsteher hinzufügen
    const tuersteher = PIXI.Sprite.from('assets/bundestag_türsteher.png');
    tuersteher.x = 200;
    tuersteher.y = 300;
    tuersteher.scale.set(5);
    app.stage.addChild(tuersteher);

    //Türsteher sprechblase
    const tuersteherSprechblase = PIXI.Sprite.from('assets/sprechblase_links.png');
    tuersteherSprechblase.x = 300;
    tuersteherSprechblase.y = 80;
    tuersteherSprechblase.scale.set(10)


    //Logik Krah und Höcke
    //Krah
    const krah = PIXI.Sprite.from('assets/krah_mit_krawatte.png');
    krah.x = 300;
    krah.y = 700;
    krah.scale.set(5)
    app.stage.addChild(krah);

    //Krahsprechblase
    const krahSprechblase = PIXI.Sprite.from('assets/sprechblase_groß.png');
    krahSprechblase.x = 0;
    krahSprechblase.y = 400;
    krahSprechblase.height = 400;
    krahSprechblase.width = 350;
    app.stage.addChild(krahSprechblase);

    //Krah text
    const krahText0 = new PIXI.Text('Es war ja nicht alles schlecht was er gemacht hat', {
        fontFamily: 'Press Start 2P',
        fontSize: 15,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: krahSprechblase.width - 160,
        align: 'center'
    })
    krahText0.x = 70;
    krahText0.y = 530;
    app.stage.addChild(krahText0);

    //Höcke
    const hoecke = PIXI.Sprite.from('assets/hoecke.png');
    hoecke.x = 400;
    hoecke.y = 720;
    hoecke.scale.set(4.5)
    app.stage.addChild(hoecke);

    //Krahsprechblase
    const hoeckeSprechblase = PIXI.Sprite.from('assets/sprechblase_links.png');
    hoeckeSprechblase.x = 500;
    hoeckeSprechblase.y = 430;
    hoeckeSprechblase.height = 400;
    hoeckeSprechblase.width = 300;

    //Krah text
    const hoeckeText0 = new PIXI.Text('Er hat zum Beispiel die Straßen breiter gebaut', {
        fontFamily: 'Press Start 2P',
        fontSize: 15,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: hoeckeSprechblase.width - 100,
        align: 'center'
    })

    //Türsteher text
    const tuersteherText0 = new PIXI.Text('Passwort?', {
        fontFamily: 'Press Start 2P',
        fontSize: 15,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: hoeckeSprechblase.width - 100,
        align: 'center'
    })

    const krahText1 = new PIXI.Text('Gegen Meerkeeel', {
        fontFamily: 'Press Start 2P',
        fontSize: 15,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: krahSprechblase.width - 160,
        align: 'center'
    })

    //Barc Muschardt einstellungen

    //Barc Muschardt Sprechblase
    const barcMuschardtSprechblase = PIXI.Sprite.from('assets/sprechblase_links.png');
    barcMuschardtSprechblase.height = 400;
    barcMuschardtSprechblase.width = 350;
    // Text für barcMuschardt
    const barcMuschardtText = new PIXI.Text('Das Passwort ist: Gegen Meerkeeel', {
        fontFamily: 'Press Start 2P',
        fontSize: 15,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: barcMuschardtSprechblase.width - 160,
        align: 'center'
    });

    const sprechblaseLinks = PIXI.Sprite.from('assets/sprechblase_links.png');
    sprechblaseLinks.x = 220;
    sprechblaseLinks.y = 0;
    sprechblaseLinks.width = 600;
    sprechblaseLinks.height = 600;

    const schwert = PIXI.Sprite.from('assets/schwert.png');

    //alle texte müssen vordefiniert werden
    const text033 = new PIXI.Text('Fuck!!!!!!', {
        fontFamily: 'Press Start 2P',
        fontSize: 25,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseGroß.width - 160,
        align: 'center'
    })

    const text133 = new PIXI.Text('Ich muss jemanden finden, der mir helfen kann...', {
        fontFamily: 'Press Start 2P',
        fontSize: 25,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseGroß.width - 160,
        align: 'center'
    })

    const text233 = new PIXI.Text('Am besten Jemand, der Olaf Scholz und die Grünen noch mehr hasst als jeder Andere...', {
        fontFamily: 'Press Start 2P',
        fontSize: 25,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseGroß.width - 160,
        align: 'center'
    })

    //Scene Mit Lindner
    const lindnerCrack = PIXI.Sprite.from('assets/lindner_crack.png');
    lindnerCrack.y = 400
    lindnerCrack.scale.set(6)

    const crack = PIXI.Sprite.from('assets/crack.png');
    crack.x = 40
    crack.y = 530
    crack.scale.set(2)

    const crackPfeife = PIXI.Sprite.from('assets/crack_pfeife.png');
    crackPfeife.x = 180;
    crackPfeife.y = 415;
    crackPfeife.rotation = 0.3
    crackPfeife.scale.set(2)

    const text333 = new PIXI.Text('Herr Lindner..', {
        fontFamily: 'Press Start 2P',
        fontSize: 25,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseGroß.width - 160,
        align: 'center'
    })

    const text433 = new PIXI.Text('Oh.....', {
        fontFamily: 'Press Start 2P',
        fontSize: 25,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseGroß.width - 160,
        align: 'center'
    })

    const text533 = new PIXI.Text('Rauchst du Crack?', {
        fontFamily: 'Press Start 2P',
        fontSize: 25,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseGroß.width - 160,
        align: 'center'
    })

    const text633 = new PIXI.Text('Es ist nicht das wonach es aussiehst', {
        fontFamily: 'Press Start 2P',
        fontSize: 25,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseGroß.width - 160,
        align: 'center'
    })

    const text733 = new PIXI.Text('Es erklärt eine Menge.....', {
        fontFamily: 'Press Start 2P',
        fontSize: 25,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseGroß.width - 160,
        align: 'center'
    })

    const text833 = new PIXI.Text('Was willst du von mir? Wer bist du überhaupt?', {
        fontFamily: 'Press Start 2P',
        fontSize: 25,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseGroß.width - 160,
        align: 'center'
    })

    const text933 = new PIXI.Text('Ich brauche einen Weg um Olaf Scholz und die Grünen aufzuhalten', {
        fontFamily: 'Press Start 2P',
        fontSize: 25,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseGroß.width - 160,
        align: 'center'
    })

    const text1033 = new PIXI.Text('WAS!!!!', {
        fontFamily: 'Press Start 2P',
        fontSize: 25,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseGroß.width - 160,
        align: 'center'
    })

    const text1133 = new PIXI.Text('SAG SEINEN NAMEN NICHT!!!', {
        fontFamily: 'Press Start 2P',
        fontSize: 25,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseGroß.width - 160,
        align: 'center'
    })

    const text1233 = new PIXI.Text('Ich bitte dich. Nur du kannst mir helfen', {
        fontFamily: 'Press Start 2P',
        fontSize: 25,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseGroß.width - 160,
        align: 'center'
    })

    const text1333 = new PIXI.Text('Also gut... Nimm dieses Schwert', {
        fontFamily: 'Press Start 2P',
        fontSize: 25,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseGroß.width - 160,
        align: 'center'
    })

    const text1433 = new PIXI.Text('Töte ihn damit, während ich Ihn ablenke', {
        fontFamily: 'Press Start 2P',
        fontSize: 25,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseGroß.width - 160,
        align: 'center'
    })


    const text1533 = new PIXI.Text('Also gut.', {
        fontFamily: 'Press Start 2P',
        fontSize: 25,
        fill: 0x000000,
        wordWrap: true,
        wordWrapWidth: sprechblaseGroß.width - 160,
        align: 'center'
    })

    function animateConversation() {

        const duration = 5000; //Dauer der Animation in Millisekunden
        const startTime = performance.now();
    
        // Start- und Endpositionen für die Charaktere, Sprechblasen und Texte
        const startY = { krah: 700, hoecke: 720 };
        const endY = { krah: 500, hoecke: 520 };
    
        const startYBubble = { krah: 430, hoecke: 430 };
        const endYBubble = { krah: 200, hoecke: 230 };
    
        const textOffset = { krah: 120, hoecke: 120 }; // Text bleibt relativ zur Blase
    
        function updatePositions(time) {

            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1); // Fortschritt von 0 bis 1
    
            //Bewegung der Charaktere
            krah.y = startY.krah - progress * (startY.krah - endY.krah);
            hoecke.y = startY.hoecke - progress * (startY.hoecke - endY.hoecke);
    
            //Bewegung der Sprechblasen
            krahSprechblase.y = startYBubble.krah - progress * (startYBubble.krah - endYBubble.krah);
            hoeckeSprechblase.y = startYBubble.hoecke - progress * (startYBubble.hoecke - endYBubble.hoecke);
    
            //Textpositionen bleiben relativ zur Blase
            krahText0.y = krahSprechblase.y + textOffset.krah;
            hoeckeText0.y = hoeckeSprechblase.y + textOffset.hoecke;
    
            if (progress < 1) {

                requestAnimationFrame(updatePositions);

            }
        }
    
        requestAnimationFrame(updatePositions);
    }

    animateConversation();

    setTimeout(()=>{
        app.stage.removeChild(krahSprechblase);
        app.stage.removeChild(krahText0)
        app.stage.removeChild(text4);

        app.stage.addChild(hoeckeSprechblase);

        hoeckeText0.x = 580;
        hoeckeText0.y = 550;
        app.stage.addChild(hoeckeText0);
    }, 3000)

    setTimeout(()=>{
        app.stage.removeChild(hoeckeSprechblase);
        app.stage.removeChild(hoeckeText0)
    }, 6000)

    setTimeout(()=>{
        app.stage.addChild(tuersteherSprechblase);
        tuersteherText0.x = 410;
        tuersteherText0.y = 200;

        app.stage.addChild(tuersteherText0)
    }, 6000)

    setTimeout(()=>{
        app.stage.removeChild(tuersteherText0);
        app.stage.removeChild(tuersteherSprechblase);

        app.stage.addChild(krahSprechblase);
        krahText1.x = 95;
        krahText1.y = 340; 

        app.stage.addChild(krahText1);

    }, 10000)

    setTimeout(()=>{
        app.stage.removeChild(krahText1);
        app.stage.removeChild(krahSprechblase);
        app.stage.removeChild(tuer);
        app.stage.removeChild(krah);
        app.stage.removeChild(hoecke);

        app.stage.addChild(tuerOffen);
        app.stage.addChild(krah);
        app.stage.addChild(hoecke);


        function moveCharactersToDoor() {
            const targetX = 310; // Position der offenen Tür
            const targetY = { krah: krah.y - 200, hoecke: hoecke.y - 200 }; // 200 nach oben
            const speed = 2; // Geschwindigkeit
        
            let movingUp = true; // Erst nach oben, dann nach links
        
            function update() {
                let krahArrived = false;
                let hoeckeArrived = false;
        
                if (movingUp) {
                    // Zuerst nach oben bewegen
                    if (krah.y > targetY.krah) {
                        krah.y -= speed;
                    }
                    if (hoecke.y > targetY.hoecke) {
                        hoecke.y -= speed;
                    }
        
                    // Wenn beide die Zielhöhe erreicht haben, wechseln wir zur Seitwärtsbewegung
                    if (krah.y <= targetY.krah && hoecke.y <= targetY.hoecke) {
                        movingUp = false;
                    }
                } else {
                    // Dann zur Tür bewegen
                    if (krah.x > targetX) {
                        krah.x -= speed;
                    } else {
                        krahArrived = true;
                    }
        
                    if (hoecke.x > targetX + 50) {
                        hoecke.x -= speed;
                    } else {
                        hoeckeArrived = true;
                    }
        
                    // Wenn beide angekommen sind, verschwinden sie
                    if (krahArrived && hoeckeArrived) {
                        app.stage.removeChild(krah);
                        app.stage.removeChild(hoecke);
                        return;
                    }
                }
        
                requestAnimationFrame(update);
            }
        
            requestAnimationFrame(update);
        }

        moveCharactersToDoor();
    }, 13000)
    
    //Einfügen der Lindner Szene
    //------------------------------------------------//
    //------------------------------------------------//
    //------------------------------------------------//
    //------------------------------------------------//
    //------------------------------------------------//
    //------------------------------------------------//
    //------------------------------------------------//
    //------------------------------------------------//
    //------------------------------------------------//

    setTimeout(()=>{
        app.stage.removeChild(tuerOffen);
        app.stage.removeChild(tuersteher)
        app.stage.removeChild(backgroundSceneTop);
        app.stage.removeChild(backgroundSceneBottom);
        app.stage.removeChild(roterTeppich);
        app.stage.removeChild(adler1);
        app.stage.removeChild(adler2);
        app.stage.removeChild(bundestagUeberschrift);

        text033.x = 130;
        text033.y = 330;
        app.stage.addChild(text033);
    }, 16000)

    setTimeout(()=>{
        

        app.stage.removeChild(text033)

        text133.x = 80;
        text133.y = 300;
        app.stage.addChild(text133)
    }, 20000)

    setTimeout(()=>{
        app.stage.removeChild(text133)

        text233.x = 80;
        text233.y = 270;
        app.stage.addChild(text233)
    }, 25000)


    setTimeout(()=>{
        app.stage.removeChild(sprechblaseGroß)
        app.stage.removeChild(text233)

        // Erstelle eine Hintergrundgrafik
        const backgroundLindner = new PIXI.Graphics();
        backgroundLindner.beginFill(0xA2A29E);
        backgroundLindner.drawRect(0, 0, app.screen.width, app.screen.height);
        backgroundLindner.endFill();
        app.stage.addChild(backgroundLindner)
    
        const lindnerHaus = PIXI.Sprite.from('assets/lindner_haus.png')
        lindnerHaus.y = - 200;
        lindnerHaus.scale.set(12);
        app.stage.addChild(lindnerHaus);

        app.stage.addChild(lindnerCrack)

        app.stage.addChild(crack);
        app.stage.addChild(crackPfeife);

        barcMuschardt.y -= 100;
        app.stage.addChild(barcMuschardt);


        sprechblaseGroß.y -= 100 
        app.stage.addChild(sprechblaseGroß)

        text333.x = 120
        text333.y = 240
        app.stage.addChild(text333)
        

        
    }, 30000)

    setTimeout(()=>{
        app.stage.removeChild(sprechblaseGroß)
        app.stage.removeChild(text333)



        app.stage.addChild(sprechblaseLinks)

        text433.x = 470
        text433.y = 230
        app.stage.addChild(text433)
        

        
    }, 33000)

    setTimeout(()=>{
        app.stage.removeChild(sprechblaseLinks)
        app.stage.removeChild(text433)



        app.stage.addChild(sprechblaseGroß)

        text533.x = 80
        text533.y = 230
        app.stage.addChild(text533)
        

        
    }, 36000)

    setTimeout(()=>{
        app.stage.removeChild(sprechblaseGroß)
        app.stage.removeChild(text533)
        app.stage.removeChild(crack)
        app.stage.removeChild(crackPfeife)


        app.stage.addChild(sprechblaseLinks)

        lindnerCrack.texture = PIXI.Texture.from('assets/christian_lindner.png');

        text633.x = 350
        text633.y = 190
        app.stage.addChild(text633)
        

        
    }, 40000)


    setTimeout(()=>{
        app.stage.removeChild(sprechblaseLinks)
        app.stage.removeChild(text633)



        app.stage.addChild(sprechblaseGroß)

        text733.x = 80
        text733.y = 230
        app.stage.addChild(text733)
        

        
    }, 45000)


    setTimeout(()=>{
        app.stage.removeChild(sprechblaseGroß)
        app.stage.removeChild(text733)



        app.stage.addChild(sprechblaseLinks)

        text833.x = 340
        text833.y = 190
        app.stage.addChild(text833)
        

        
    }, 51000)

    setTimeout(()=>{
        app.stage.removeChild(sprechblaseLinks)
        app.stage.removeChild(text833)



        app.stage.addChild(sprechblaseGroß)

        text933.x = 55
        text933.y = 190
        app.stage.addChild(text933)
        

        
    }, 56000)

    setTimeout(()=>{
        app.stage.removeChild(sprechblaseGroß)
        app.stage.removeChild(text933)



        app.stage.addChild(sprechblaseLinks)

        text1033.x = 480
        text1033.y = 230
        app.stage.addChild(text1033)
        

        
    }, 62000)

    setTimeout(()=>{
        app.stage.removeChild(text1033)


        text1133.x = 340
        text1133.y = 230
        app.stage.addChild(text1133)
        

        
    }, 65000)

    setTimeout(()=>{
        app.stage.removeChild(sprechblaseLinks)
        app.stage.removeChild(text1133)



        app.stage.addChild(sprechblaseGroß)

        text1233.x = 70
        text1233.y = 190
        app.stage.addChild(text1233)
        

        
    }, 69000)

    setTimeout(()=>{
        app.stage.removeChild(sprechblaseGroß)
        app.stage.removeChild(text1233)



        app.stage.addChild(sprechblaseLinks)

        text1333.x = 340
        text1333.y = 230
        app.stage.addChild(text1333)
        
        //Übergibt schwert logik einbauen nur vielleicht wenn zeit ist
        
    }, 74000)

    setTimeout(()=>{

        app.stage.removeChild(text1333)



        app.stage.addChild(sprechblaseLinks)

        text1433.x = 360
        text1433.y = 210
        app.stage.addChild(text1433)
        
        //Übergibt schwert logik einbauen nur vielleicht wenn zeit ist
        function gibSchwert() {
            // Setze Start- und Zielposition
            schwert.x = lindnerCrack.x + 50; // ggf. feinjustieren
            schwert.y = lindnerCrack.y + 50;
            schwert.scale.set(3)
        
            app.stage.addChild(schwert);
        
            const zielX = barcMuschardt.x + 100; // anpassen
            const zielY = barcMuschardt.y + 50;
        
            const geschwindigkeit = 6;
        
            const ticker = new PIXI.Ticker();
            ticker.add(() => {
                const dx = zielX - schwert.x;
                const dy = zielY - schwert.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
        
                if (dist > geschwindigkeit) {
                    // Normalisieren & bewegen
                    const nx = dx / dist;
                    const ny = dy / dist;
        
                    schwert.x += nx * geschwindigkeit;
                    schwert.y += ny * geschwindigkeit;
                } else {
                    // Ziel erreicht
                    schwert.x = zielX;
                    schwert.y = zielY;
                    ticker.stop();
                    app.stage.removeChild(schwert)
                }
            });
        
            ticker.start();
        }
        gibSchwert()
    }, 80000)

    //51000
    setTimeout(()=>{
        app.stage.removeChild(sprechblaseLinks)
        app.stage.removeChild(text1433)



        app.stage.addChild(sprechblaseGroß)

        text1533.x = 170
        text1533.y = 230
        app.stage.addChild(text1533) 

        
    }, 86000)

    //------------------------------------------------//
    //------------------------------------------------//
    //------------------------------------------------//
    //------------------------------------------------//
    //------------------------------------------------//
    //------------------------------------------------//
    //------------------------------------------------//
    //------------------------------------------------//

    //Barc betritt den Bundestag
    setTimeout(()=>{
        app.stage.removeChild(tuerOffen);
        app.stage.removeChild(tuersteher)

        app.stage.addChild(backgroundSceneTop);
        app.stage.addChild(backgroundSceneBottom);
        app.stage.addChild(roterTeppich);
        app.stage.addChild(adler1);
        app.stage.addChild(adler2);
        app.stage.addChild(bundestagUeberschrift);

        app.stage.addChild(tuer);
        app.stage.addChild(tuersteher);
        
        
        barcMuschardt.scale.set(6);
        barcMuschardt.x = 300;
        barcMuschardt.y = 600;
        app.stage.addChild(barcMuschardt);

        // Bewegung von barcMuschardt zum Türsteher
        function moveBarcMuschardtToDoor() {
            const targetX = 310; // Position der offenen Tür
            const targetY = barcMuschardt.y - 200; // Zielhöhe, 200 nach oben
            const speed = 2; // Geschwindigkeit
            
            let movingUp = true;

            function update() {
                let barcMuschardtArrived = false;

                if (movingUp) {
                    // Bewege barcMuschardt nach oben
                    if (barcMuschardt.y > targetY) {
                        barcMuschardt.y -= speed;
                    } else {
                        movingUp = false; // Wechsel zu horizontaler Bewegung
                    }
                } else {
                    // Bewege barcMuschardt zur Tür
                    if (barcMuschardt.x > targetX) {
                        barcMuschardt.x -= speed;
                    } else {
                        barcMuschardtArrived = true;
                    }
                }

                requestAnimationFrame(update);
            }

            requestAnimationFrame(update);
        }

        moveBarcMuschardtToDoor(); 

     }, 90000)

     setTimeout(()=>{
        barcMuschardtSprechblase.x = 430;
        barcMuschardtSprechblase.y = 120;
        app.stage.addChild(barcMuschardtSprechblase);

        barcMuschardtText.x = 530;
        barcMuschardtText.y = 250;
        app.stage.addChild(barcMuschardtText);
     }, 94000)
     
     setTimeout(()=>{
        app.stage.removeChild(tuer);
        app.stage.removeChild(barcMuschardt);
        app.stage.removeChild(barcMuschardtSprechblase);
        app.stage.removeChild(barcMuschardtText);

        app.stage.addChild(tuerOffen);
        app.stage.addChild(barcMuschardt);

        function moveCharactersToDoor() {
            const targetX = 310; // Position der offenen Tür
            const targetY = { barcMuschardt: barcMuschardt.y - 200}; // 200 nach oben
            const speed = 2; // Geschwindigkeit
        
            let movingUp = true; // Erst nach oben, dann nach links
        
            function update() {
                let barcArrived = false;
        
                if (movingUp) {
                    // Zuerst nach oben bewegen
                    if (barcMuschardt.y > targetY.barcMuschardt) {
                        barcMuschardt.y -= speed;
                    }
        
                    // Wenn beide die Zielhöhe erreicht haben, wechseln wir zur Seitwärtsbewegung
                    if (barcMuschardt.y <= targetY.barcMuschardt) {
                        movingUp = false;
                    }
                } else {
                    // Dann zur Tür bewegen
                    if (barcMuschardt.x > targetX) {
                        barcMuschardt.x -= speed;
                    } else {
                        barcArrived = true;
                    }
        
        
                    // Wenn beide angekommen sind, verschwinden sie
                    if (barcArrived) {
                        app.stage.removeChild(barcMuschardt);
                        return;
                    }
                }
        
                requestAnimationFrame(update);
            }
        
            requestAnimationFrame(update);
        }

        moveCharactersToDoor();
     }, 98000)
     
     setTimeout(()=>{
        app.stage.removeChild(tuerOffen);

        app.stage.addChild(tuer);
        app.stage.addChild(tuersteher);
       

        //Überschrift 
    
        const link = new PIXI.Text('Zum nächsten Level →', {
            fontFamily: 'Press Start 2P',
            fontSize: 24,
            fill: 0x006400,
            fontWeight: 'bold',
        });
    
        link.x = 150;
        link.y = 20;
        link.interactive = true;
        link.buttonMode = true;
        link.on('pointerdown', () => {
            window.location.href = 'level3.html';
        });
    
        app.stage.addChild(link);
    }, 102000)

}, 14000)


