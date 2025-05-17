const app = new PIXI.Application({ width: 800, height: 800, background: 'lightgrey'});
mainContainer = document.getElementById('mainContainer');

const kneipe = PIXI.Sprite.from('assets/kneipe.png');
kneipe.width = app.screen.width;
kneipe.height = app.screen.height;

app.stage.addChild(kneipe)


//Alle Whiskeys hintügen
const whiskey1 = PIXI.Sprite.from('assets/whiskey_flasche.png');
whiskey1.x = 650;
whiskey1.y = 220;
whiskey1.scale.set(3)
app.stage.addChild(whiskey1);

const whiskey2 = PIXI.Sprite.from('assets/whiskey_flasche.png');
whiskey2.x = 380;
whiskey2.y = 220;
whiskey2.scale.set(3)
app.stage.addChild(whiskey2);

const whiskey3 = PIXI.Sprite.from('assets/whiskey_flasche.png');
whiskey3.x = 150;
whiskey3.y = 220;
whiskey3.scale.set(3)
app.stage.addChild(whiskey3);


//Alle Vodka hinzufügen
const vodka1 = PIXI.Sprite.from('assets/vodka_flasche.png');
vodka1.x = 480;
vodka1.y = 230;
vodka1.scale.set(3)
app.stage.addChild(vodka1);

const vodka2 = PIXI.Sprite.from('assets/vodka_flasche.png');
vodka2.x = 430;
vodka2.y = 230;
vodka2.scale.set(3)
app.stage.addChild(vodka2);

const vodka3 = PIXI.Sprite.from('assets/vodka_flasche.png');
vodka3.x = 100;
vodka3.y = 230;
vodka3.scale.set(3)
app.stage.addChild(vodka3);


//Lecker Bierchen hinzufügen
const bierchen1 = PIXI.Sprite.from('assets/bier.png');
bierchen1.x = 100;
bierchen1.y = 370;
bierchen1.scale.set(4)
app.stage.addChild(bierchen1);

const bierchen2 = PIXI.Sprite.from('assets/bier.png');
bierchen2.x = 440;
bierchen2.y = 370;
bierchen2.scale.set(4)
app.stage.addChild(bierchen2);

const bierchen3 = PIXI.Sprite.from('assets/bier.png');
bierchen3.x = 50;
bierchen3.y = 370;
bierchen3.scale.set(4)
app.stage.addChild(bierchen3);

//Leck Fässchen
const faesschen = PIXI.Sprite.from('assets/fass.png');
faesschen.x = 500;
faesschen.y = 330;
faesschen.scale.set(5)
app.stage.addChild(faesschen);

//Whiskey glaser und flasche
const whiskey4 = PIXI.Sprite.from('assets/whiskey_flasche.png');
whiskey4.x = 300;
whiskey4.y = 360;
whiskey4.scale.set(3)
app.stage.addChild(whiskey4);

const whiskeyglas1 = PIXI.Sprite.from('assets/whiskey_glas.png');
whiskeyglas1.x = 245;
whiskeyglas1.y = 390;
whiskeyglas1.scale.set(3)
app.stage.addChild(whiskeyglas1);

const whiskeyglas2 = PIXI.Sprite.from('assets/whiskey_glas.png');
whiskeyglas2.x = 275;
whiskeyglas2.y = 390;
whiskeyglas2.scale.set(3)
app.stage.addChild(whiskeyglas2);


//Überschrift "Stammkneipe"
const text = new PIXI.Text('STAMMKNEIPE', {
    fontFamily: 'Press Start 2P',
    fontSize: 28,
    fill: 0x000000,
    align: 'center'
})
text.x = 247;
text.y = 110;
app.stage.addChild(text);

mainContainer.appendChild(app.view);
