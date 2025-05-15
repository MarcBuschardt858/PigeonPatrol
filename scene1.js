
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
const text0 = new PIXI.Text('Was war das denn?!?!?', {
    fontFamily: 'Press Start 2P',
    fontSize: 25,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: sprechblaseGroß.width - 160,
    align: 'center'
})
text0.x = 140;
text0.y = 300;
app.stage.addChild(text0);

//Text 1
const text1 = new PIXI.Text('Ich wollte doch nur auf süß einen Jibbit am Brüh rauchen', {
    fontFamily: 'Press Start 2P',
    fontSize: 25,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: sprechblaseGroß.width - 160,
    align: 'center'
})


//Text 2;
const text2 = new PIXI.Text('Und auf einmal probiert diese Taube mich zu erwischen, nur weil ich die Regierung kritisiert habe...', {
    fontFamily: 'Press Start 2P',
    fontSize: 25,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: sprechblaseGroß.width - 160,
    align: 'center'
})

//Text 3
const text3 = new PIXI.Text('Moment mal.... TAUBE... T.A.U.B.E.???', {
    fontFamily: 'Press Start 2P',
    fontSize: 25,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: sprechblaseGroß.width - 160,
    align: 'center'
})

//Text 4
const text4 = new PIXI.Text('Taktische Abhör Und Beobachtungs Einheit. Oder kurzgesagt TAUBE!!!', {
    fontFamily: 'Press Start 2P',
    fontSize: 25,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: sprechblaseGroß.width - 160,
    align: 'center'
})

//Text 5
const text5 = new PIXI.Text('Es war die ganze Zeit vor meiner Nase', {
    fontFamily: 'Press Start 2P',
    fontSize: 25,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: sprechblaseGroß.width - 160,
    align: 'center'
})

//Text 6
const text6 = new PIXI.Text('Ich muss einen Weg finden, um den Bundestag auszuspionieren', {
    fontFamily: 'Press Start 2P',
    fontSize: 25,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: sprechblaseGroß.width - 160,
    align: 'center'
})

//Text 7
const text7 = new PIXI.Text('Aber welcher Politiker könnte sich hierfür am besten eignen?', {
    fontFamily: 'Press Start 2P',
    fontSize: 25,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: sprechblaseGroß.width - 160,
    align: 'center'
})

//Text 8
const text8 = new PIXI.Text('Am besten jemand, der in der Vergangenheit schon mit Spionagevorwürfen zu tun hatte...', {
    fontFamily: 'Press Start 2P',
    fontSize: 25,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: sprechblaseGroß.width - 160,
    align: 'center'
})

//Text 9
const text9 = new PIXI.Text('Lege die Spionage-Krawatte in den Koffer von Maximilia Krah. Lasse dich dabei von keiner der AfD-Wachen erwischen!', {
    fontFamily: 'Press Start 2P',
    fontSize: 25,
    fill: 0x000000,
    wordWrap: true,
    wordWrapWidth: sprechblaseGroß.width - 160,
    align: 'center'
})

setTimeout(()=>{
    //Vorherigen text entfernen
    app.stage.removeChild(text0)

    //Sprechblase für den Text anpassen
    sprechblaseGroß.y = 100;
    sprechblaseGroß.height = 600;

    //Text anpassen
    text1.x = 70;
    text1.y = 300;
    app.stage.addChild(text1);
}, 4000)

setTimeout(()=>{
    //Vorherigen text entfernen
    app.stage.removeChild(text1)

    //Sprechblase für den Text anpassen
    sprechblaseGroß.height = 750;
    sprechblaseGroß.y = 0;

    //Textanpassen
    text2.x = 110;
    text2.y = 200;
    app.stage.addChild(text2);
}, 12000)

setTimeout(()=>{
    //Vorherigen text entfernen
    app.stage.removeChild(text2)

    //Sprechblase für den Text anpassen
    sprechblaseGroß.height = 400;
    sprechblaseGroß.y = 250;

    //Text anpassen
    text3.x = 110;
    text3.y = 370;
    app.stage.addChild(text3);
}, 19000)

setTimeout(()=>{
    //Vorherigen text entfernen
    app.stage.removeChild(text3)

    //Sprechblase für den Text anpassen
    sprechblaseGroß.height = 600;
    sprechblaseGroß.y = 100;

    //text anpassen
    text4.x = 90;
    text4.y = 280;
    app.stage.addChild(text4);
}, 24000)

setTimeout(()=>{
    //Vorherigen text entfernen
    app.stage.removeChild(text4)

    //Sprechblase für den Text anpassen
    sprechblaseGroß.height = 600;
    sprechblaseGroß.y = 100;

    //text anpassen
    text5.x = 90;
    text5.y = 300;
    app.stage.addChild(text5);
}, 32000)

setTimeout(()=>{
    //Vorherigen text entfernen
    app.stage.removeChild(text5)

    //Sprechblase für den Text anpassen
    sprechblaseGroß.height = 600;
    sprechblaseGroß.y = 100;

    //text anpassen
    text6.x = 80;
    text6.y = 280;
    app.stage.addChild(text6);
}, 36000)

setTimeout(()=>{
    //Vorherigen text entfernen
    app.stage.removeChild(text6)

    //Sprechblase für den Text anpassen
    sprechblaseGroß.height = 600;
    sprechblaseGroß.y = 100;

    //text anpassen
    text7.x = 80;
    text7.y = 280;
    app.stage.addChild(text7);
}, 41000)

setTimeout(()=>{
    //Vorherigen text entfernen
    app.stage.removeChild(text7)

    //Sprechblase für den Text anpassen
    sprechblaseGroß.height = 620;
    sprechblaseGroß.y = 80;

    //text anpassen
    text8.x = 80;
    text8.y = 260;
    app.stage.addChild(text8);
}, 48000)

setTimeout(()=>{

    //Vorherigen text entfernen
    app.stage.removeChild(text8);
    app.stage.removeChild(sprechblaseGroß);
    app.stage.removeChild(barcMuschardt);
    //text anpassen
    text9.x = 80;
    text9.y = 500;
    app.stage.addChild(text9);

    const krawatte = PIXI.Sprite.from('assets/krawatte.png');
    krawatte.x = 500;
    krawatte.y = 500;
    krawatte.scale.set(7);
    app.stage.addChild(krawatte);
}, 60000)

setTimeout(()=>{
    //Überschrift 

    const link = new PIXI.Text('Zum nächsten Level →', {
        fontFamily: 'Press Start 2P',
        fontSize: 24,
        fill: 0x006400,
        fontWeight: 'bold',
    });

    link.x = 150;
    link.y = 50;
    link.interactive = true;
    link.buttonMode = true;
    link.on('pointerdown', () => {
        window.location.href = 'level2.html';
    });

    app.stage.addChild(link);
}, 65000)


