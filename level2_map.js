const app = new PIXI.Application({ width: 800, height: 800, background: 'lightgrey'});


const mapBackground = PIXI.Sprite.from('assets/afd_stand_hintergrund.png');
mapBackground.width = app.screen.width;
mapBackground.height = app.screen.height;
app.stage.addChild(mapBackground);

//AFD Stand
const afdstand = PIXI.Sprite.from('assets/afd_stand.png');
afdstand.x = 490;
afdstand.y = 100;
afdstand.scale.set(5)
app.stage.addChild(afdstand);

//Alle absperrungen
const absperrung1 = PIXI.Sprite.from('assets/absperrung_normal.png');
absperrung1.x = 420;
absperrung1.y = 40;
absperrung1.width = 100
absperrung1.scale.set(2.5);

const absperrung2 = PIXI.Sprite.from('assets/absperrung_normal.png');
absperrung2.x = 320;
absperrung2.y = 40;
absperrung2.width = 100
absperrung2.scale.set(2.5);

const absperrung3 = PIXI.Sprite.from('assets/absperrung_normal.png');
absperrung3.x = 220;
absperrung3.y = 40;
absperrung3.width = 100
absperrung3.scale.set(2.5);

const absperrung4 = PIXI.Sprite.from('assets/absperrung_links.png');
absperrung4.x = 200;
absperrung4.y = 100;
absperrung4.height = 100
absperrung4.scale.set(2.5);

const absperrung5 = PIXI.Sprite.from('assets/absperrung_links.png');
absperrung5.x = 200;
absperrung5.y = 200;
absperrung5.height = 100
absperrung5.scale.set(2.5);

const absperrung6 = PIXI.Sprite.from('assets/absperrung_rechts.png');
absperrung6.x = 350;
absperrung6.y = 100;
absperrung6.height = 100
absperrung6.scale.set(2.5);

const absperrung7 = PIXI.Sprite.from('assets/absperrung_rechts.png');
absperrung7.x = 350;
absperrung7.y = 200;
absperrung7.height = 100
absperrung7.scale.set(2.5);

const absperrung8 = PIXI.Sprite.from('assets/absperrung_normal.png');
absperrung8.x = 508;
absperrung8.y = 240;
absperrung8.width = 120
absperrung8.scale.set(2.5);

const absperrung9 = PIXI.Sprite.from('assets/absperrung_normal.png');
absperrung9.x = 530;
absperrung9.y = 600;
absperrung9.width = 120
absperrung9.scale.set(2.5);

const absperrung10 = PIXI.Sprite.from('assets/absperrung_normal.png');
absperrung10.x = 410;
absperrung10.y = 600;
absperrung10.width = 120
absperrung10.scale.set(2.5);

const absperrung11 = PIXI.Sprite.from('assets/absperrung_normal.png');
absperrung11.x = 290;
absperrung11.y = 600;
absperrung11.width = 120
absperrung11.scale.set(2.5);

const absperrung12 = PIXI.Sprite.from('assets/absperrung_links.png');
absperrung12.x = 280;
absperrung12.y = 500;
absperrung12.height = 120
absperrung12.scale.set(2.5);

const absperrung13 = PIXI.Sprite.from('assets/absperrung_rechts.png');
absperrung13.x = 580;
absperrung13.y = 500;
absperrung13.height = 120
absperrung13.scale.set(2.5);

const absperrung14 = PIXI.Sprite.from('assets/absperrung_rechts.png');
absperrung14.x = 570;
absperrung14.y = 300;
absperrung14.height = 120
absperrung14.scale.set(2.5);

const absperrung15 = PIXI.Sprite.from('assets/absperrung_normal.png');
absperrung15.x = 290;
absperrung15.y = 600;
absperrung15.width = 120
absperrung15.scale.set(2.5);

const absperrung16 = PIXI.Sprite.from('assets/absperrung_normal.png');
absperrung16.x = 170;
absperrung16.y = 600;
absperrung16.width = 120
absperrung16.scale.set(2.5);

const absperrung17 = PIXI.Sprite.from('assets/absperrung_normal.png');
absperrung17.x = 50;
absperrung17.y = 600;
absperrung17.width = 120
absperrung17.scale.set(2.5);

const absperrung18 = PIXI.Sprite.from('assets/absperrung_links.png');
absperrung18.x = 40;
absperrung18.y = 500;
absperrung18.height = 120
absperrung18.scale.set(2.5);

app.stage.addChild(absperrung1);
app.stage.addChild(absperrung2);
app.stage.addChild(absperrung3);
app.stage.addChild(absperrung4);
app.stage.addChild(absperrung5);
app.stage.addChild(absperrung6);
app.stage.addChild(absperrung7);
app.stage.addChild(absperrung8);
app.stage.addChild(absperrung9);
app.stage.addChild(absperrung10);
app.stage.addChild(absperrung11);
app.stage.addChild(absperrung12);
app.stage.addChild(absperrung13);
app.stage.addChild(absperrung14);
app.stage.addChild(absperrung15);
app.stage.addChild(absperrung16);
app.stage.addChild(absperrung17);
app.stage.addChild(absperrung18);


document.body.appendChild(app.view);