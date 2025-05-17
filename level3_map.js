const app = new PIXI.Application({ width: 1000, height: 800, background: '0x808080'});
mainContainer = document.getElementById('mainContainer');

//Adler auf dem Boden
const adler1 = PIXI.Sprite.from('assets/bundestag_deutscher_adler.png');
adler1.x = 100;
adler1.y = 250;
adler1.scale.set(8);
app.stage.addChild(adler1);

const adler2 = PIXI.Sprite.from('assets/bundestag_deutscher_adler.png');
adler2.x = 640;
adler2.y = 250;
adler2.scale.set(8);
app.stage.addChild(adler2);


//Rednerpult
const rednerpult = PIXI.Sprite.from('assets/rednerpult.png');
rednerpult.x = 375;
rednerpult.y = 100;
rednerpult.scale.set(7)
app.stage.addChild(rednerpult);





//Einzelne Fraktionen

//Fraktion mitte
//Erster Tisch Stühl und Politiker
const tisch1 = PIXI.Sprite.from('assets/bundestag_tisch.png');
tisch1.x = 405;
tisch1.y = 510;
tisch1.scale.set(6)
app.stage.addChild(tisch1);

const politiker1 = PIXI.Sprite.from('assets/politiker_half_grey.png');
politiker1.x = 410;
politiker1.y = 580;
politiker1.scale.set(2);
app.stage.addChild(politiker1);

const politiker2 = PIXI.Sprite.from('assets/politiker_half_darkgrey.png');
politiker2.x = 462;
politiker2.y = 580;
politiker2.scale.set(2);
app.stage.addChild(politiker2);

const politiker3 = PIXI.Sprite.from('assets/politiker_half_blue.png');
politiker3.x = 512;
politiker3.y = 580;
politiker3.scale.set(2);
app.stage.addChild(politiker3);

const stuhl1 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl1.x = 410;
stuhl1.y = 580;
stuhl1.scale.set(2)
app.stage.addChild(stuhl1)

const stuhl2 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl2.x = 462;
stuhl2.y = 580;
stuhl2.scale.set(2)
app.stage.addChild(stuhl2)

const stuhl3 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl3.x = 512;
stuhl3.y = 580;
stuhl3.scale.set(2)
app.stage.addChild(stuhl3)




//Zweiter Tisch Stühl und Politiker
const tisch2 = PIXI.Sprite.from('assets/bundestag_tisch.png');
tisch2.x = 382;
tisch2.y = 570;
tisch2.scale.set(6)
tisch2.width = 250;;
app.stage.addChild(tisch2);



const politiker5 = PIXI.Sprite.from('assets/politiker_half_darkgrey.png');
politiker5.x = 442;
politiker5.y = 640;
politiker5.scale.set(2);
app.stage.addChild(politiker5);

const politiker6 = PIXI.Sprite.from('assets/politiker_half_blue.png');
politiker6.x = 492;
politiker6.y = 640;
politiker6.scale.set(2);
app.stage.addChild(politiker6);

const politiker7 = PIXI.Sprite.from('assets/politiker_half_blue.png');
politiker7.x = 542;
politiker7.y = 640;
politiker7.scale.set(2);
app.stage.addChild(politiker7);

const stuhl4 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl4.x = 390;
stuhl4.y = 640;
stuhl4.scale.set(2)
app.stage.addChild(stuhl4)

const stuhl5 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl5.x = 442;
stuhl5.y = 640;
stuhl5.scale.set(2)
app.stage.addChild(stuhl5)

const stuhl6 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl6.x = 492;
stuhl6.y = 640;
stuhl6.scale.set(2)
app.stage.addChild(stuhl6)

const stuhl7 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl7.x = 542;
stuhl7.y = 640;
stuhl7.scale.set(2)
app.stage.addChild(stuhl7)




//Dritter Tisch Stühl und Politiker
const tisch3 = PIXI.Sprite.from('assets/bundestag_tisch.png');
tisch3.x = 362;
tisch3.y = 630;
tisch3.scale.set(6)
tisch3.width = 300;;
app.stage.addChild(tisch3);

const politiker8 = PIXI.Sprite.from('assets/politiker_half_grey.png');
politiker8.x = 370;
politiker8.y = 700;
politiker8.scale.set(2);
app.stage.addChild(politiker8);

const politiker9 = PIXI.Sprite.from('assets/politiker_half_darkgrey.png');
politiker9.x = 422;
politiker9.y = 700;
politiker9.scale.set(2);
app.stage.addChild(politiker9);

const politiker10 = PIXI.Sprite.from('assets/politiker_half_blue.png');
politiker10.x = 472;
politiker10.y = 700;
politiker10.scale.set(2);
app.stage.addChild(politiker10);

const politiker11 = PIXI.Sprite.from('assets/politiker_half_blue.png');
politiker11.x = 522;
politiker11.y = 700;
politiker11.scale.set(2);
app.stage.addChild(politiker11);



const stuhl8 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl8.x = 370;
stuhl8.y = 700;
stuhl8.scale.set(2)
app.stage.addChild(stuhl8)

const stuhl9 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl9.x = 422;
stuhl9.y = 700;
stuhl9.scale.set(2)
app.stage.addChild(stuhl9)

const stuhl10 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl10.x = 472;
stuhl10.y = 700;
stuhl10.scale.set(2)
app.stage.addChild(stuhl10)

const stuhl11 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl11.x = 522;
stuhl11.y = 700;
stuhl11.scale.set(2)
app.stage.addChild(stuhl11)


const stuhl12 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl12.x = 572;
stuhl12.y = 700;
stuhl12.scale.set(2)
app.stage.addChild(stuhl12)




//Zweite Fraktion links
//Erster Tisch Stühl und Politiker
const tisch4 = PIXI.Sprite.from('assets/bundestag_tisch.png');
tisch4.x = 100;
tisch4.y = 510;
tisch4.scale.set(6)
app.stage.addChild(tisch4);

const politiker13 = PIXI.Sprite.from('assets/politiker_half_grey.png');
politiker13.x = 110;
politiker13.y = 580;
politiker13.scale.set(2);
app.stage.addChild(politiker13);


const politiker15 = PIXI.Sprite.from('assets/politiker_half_blue.png');
politiker15.x = 212;
politiker15.y = 580;
politiker15.scale.set(2);
app.stage.addChild(politiker15);

const stuhl13 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl13.x = 110;
stuhl13.y = 580;
stuhl13.scale.set(2)
app.stage.addChild(stuhl13)

const stuhl14 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl14.x = 162;
stuhl14.y = 580;
stuhl14.scale.set(2)
app.stage.addChild(stuhl14)

const stuhl15 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl15.x = 212;
stuhl15.y = 580;
stuhl15.scale.set(2)
app.stage.addChild(stuhl15)




//Zweiter Tisch Stühl und Politiker
const tisch5 = PIXI.Sprite.from('assets/bundestag_tisch.png');
tisch5.x = 82;
tisch5.y = 570;
tisch5.scale.set(6)
tisch5.width = 250;;
app.stage.addChild(tisch5);

const politiker16 = PIXI.Sprite.from('assets/politiker_half_grey.png');
politiker16.x = 90;
politiker16.y = 640;
politiker16.scale.set(2);
app.stage.addChild(politiker16);

const politiker17 = PIXI.Sprite.from('assets/politiker_half_darkgrey.png');
politiker17.x = 142;
politiker17.y = 640;
politiker17.scale.set(2);
app.stage.addChild(politiker17);

const politiker18 = PIXI.Sprite.from('assets/politiker_half_blue.png');
politiker18.x = 192;
politiker18.y = 640;
politiker18.scale.set(2);
app.stage.addChild(politiker18);

const politiker19 = PIXI.Sprite.from('assets/politiker_half_blue.png');
politiker19.x = 242;
politiker19.y = 640;
politiker19.scale.set(2);
app.stage.addChild(politiker19);

const stuhl16 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl16.x = 90;
stuhl16.y = 640;
stuhl16.scale.set(2)
app.stage.addChild(stuhl16)

const stuhl17 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl17.x = 142;
stuhl17.y = 640;
stuhl17.scale.set(2)
app.stage.addChild(stuhl17)

const stuhl18 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl18.x = 192;
stuhl18.y = 640;
stuhl18.scale.set(2)
app.stage.addChild(stuhl18)

const stuhl19 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl19.x = 242;
stuhl19.y = 640;
stuhl19.scale.set(2)
app.stage.addChild(stuhl19)




//Dritter Tisch Stühl und Politiker
const tisch6 = PIXI.Sprite.from('assets/bundestag_tisch.png');
tisch6.x = 62;
tisch6.y = 630;
tisch6.scale.set(6)
tisch6.width = 300;;
app.stage.addChild(tisch6);

const politiker20 = PIXI.Sprite.from('assets/politiker_half_grey.png');
politiker20.x = 70;
politiker20.y = 700;
politiker20.scale.set(2);
app.stage.addChild(politiker20);

const politiker21 = PIXI.Sprite.from('assets/politiker_half_darkgrey.png');
politiker21.x = 122;
politiker21.y = 700;
politiker21.scale.set(2);
app.stage.addChild(politiker21);

const politiker22 = PIXI.Sprite.from('assets/politiker_half_blue.png');
politiker22.x = 172;
politiker22.y = 700;
politiker22.scale.set(2);
app.stage.addChild(politiker22);

const politiker23 = PIXI.Sprite.from('assets/politiker_half_blue.png');
politiker23.x = 222;
politiker23.y = 700;
politiker23.scale.set(2);
app.stage.addChild(politiker23);

const politiker24 = PIXI.Sprite.from('assets/politiker_half_blue.png');
politiker24.x = 272;
politiker24.y = 700;
politiker24.scale.set(2);
app.stage.addChild(politiker24);

const stuhl20 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl20.x = 70;
stuhl20.y = 700;
stuhl20.scale.set(2)
app.stage.addChild(stuhl20)

const stuhl21 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl21.x = 122;
stuhl21.y = 700;
stuhl21.scale.set(2)
app.stage.addChild(stuhl21)

const stuhl22 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl22.x = 172;
stuhl22.y = 700;
stuhl22.scale.set(2)
app.stage.addChild(stuhl22)

const stuhl23 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl23.x = 222;
stuhl23.y = 700;
stuhl23.scale.set(2)
app.stage.addChild(stuhl23)


const stuhl24 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl24.x = 272;
stuhl24.y = 700;
stuhl24.scale.set(2)
app.stage.addChild(stuhl24)






//Dritte Fraktion rechts
//Erster Tisch Stühl und Politiker
const tisch7 = PIXI.Sprite.from('assets/bundestag_tisch.png');
tisch7.x = 700;
tisch7.y = 510;
tisch7.scale.set(6)
app.stage.addChild(tisch7);


const politiker26 = PIXI.Sprite.from('assets/politiker_half_darkgrey.png');
politiker26.x = 762;
politiker26.y = 580;
politiker26.scale.set(2);
app.stage.addChild(politiker26);

const politiker27 = PIXI.Sprite.from('assets/politiker_half_blue.png');
politiker27.x = 812;
politiker27.y = 580;
politiker27.scale.set(2);
app.stage.addChild(politiker27);

const stuhl25 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl25.x = 710;
stuhl25.y = 580;
stuhl25.scale.set(2)
app.stage.addChild(stuhl25)

const stuhl26 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl26.x = 762;
stuhl26.y = 580;
stuhl26.scale.set(2)
app.stage.addChild(stuhl26)

const stuhl27 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl27.x = 812;
stuhl27.y = 580;
stuhl27.scale.set(2)
app.stage.addChild(stuhl27)




//Zweiter Tisch Stühl und Politiker
const tisch8 = PIXI.Sprite.from('assets/bundestag_tisch.png');
tisch8.x = 682;
tisch8.y = 570;
tisch8.scale.set(6)
tisch8.width = 250;;
app.stage.addChild(tisch8);


const politiker29 = PIXI.Sprite.from('assets/politiker_half_darkgrey.png');
politiker29.x = 742;
politiker29.y = 640;
politiker29.scale.set(2);
app.stage.addChild(politiker29);

const politiker30 = PIXI.Sprite.from('assets/politiker_half_blue.png');
politiker30.x = 792;
politiker30.y = 640;
politiker30.scale.set(2);
app.stage.addChild(politiker30);

const politiker31 = PIXI.Sprite.from('assets/politiker_half_blue.png');
politiker31.x = 842;
politiker31.y = 640;
politiker31.scale.set(2);
app.stage.addChild(politiker31);

const stuhl28 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl28.x = 690;
stuhl28.y = 640;
stuhl28.scale.set(2)
app.stage.addChild(stuhl28)

const stuhl29 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl29.x = 742;
stuhl29.y = 640;
stuhl29.scale.set(2)
app.stage.addChild(stuhl29)

const stuhl30 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl30.x = 792;
stuhl30.y = 640;
stuhl30.scale.set(2)
app.stage.addChild(stuhl30)

const stuhl31 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl31.x = 842;
stuhl31.y = 640;
stuhl31.scale.set(2)
app.stage.addChild(stuhl31)




//Dritter Tisch Stühl und Politiker
const tisch9 = PIXI.Sprite.from('assets/bundestag_tisch.png');
tisch9.x = 662;
tisch9.y = 630;
tisch9.scale.set(6)
tisch9.width = 300;;
app.stage.addChild(tisch9);

const politiker32 = PIXI.Sprite.from('assets/politiker_half_grey.png');
politiker32.x = 670;
politiker32.y = 700;
politiker32.scale.set(2);
app.stage.addChild(politiker32);

const politiker33 = PIXI.Sprite.from('assets/politiker_half_darkgrey.png');
politiker33.x = 722;
politiker33.y = 700;
politiker33.scale.set(2);
app.stage.addChild(politiker33);

const politiker34 = PIXI.Sprite.from('assets/politiker_half_blue.png');
politiker34.x = 772;
politiker34.y = 700;
politiker34.scale.set(2);
app.stage.addChild(politiker34);

const politiker35 = PIXI.Sprite.from('assets/politiker_half_blue.png');
politiker35.x = 822;
politiker35.y = 700;
politiker35.scale.set(2);
app.stage.addChild(politiker35);

const politiker36 = PIXI.Sprite.from('assets/politiker_half_blue.png');
politiker36.x = 872;
politiker36.y = 700;
politiker36.scale.set(2);
app.stage.addChild(politiker36);

const stuhl32 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl32.x = 670;
stuhl32.y = 700;
stuhl32.scale.set(2)
app.stage.addChild(stuhl32)

const stuhl33 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl33.x = 722;
stuhl33.y = 700;
stuhl33.scale.set(2)
app.stage.addChild(stuhl33)

const stuhl34 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl34.x = 772;
stuhl34.y = 700;
stuhl34.scale.set(2)
app.stage.addChild(stuhl34)

const stuhl35 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl35.x = 822;
stuhl35.y = 700;
stuhl35.scale.set(2)
app.stage.addChild(stuhl35)


const stuhl36 = PIXI.Sprite.from('assets/bundestag_stuhl.png');
stuhl36.x = 872;
stuhl36.y = 700;
stuhl36.scale.set(2)
app.stage.addChild(stuhl36)





//Regierung rechts

//Die beiden Tische der Rechten regierung
const tisch11 = PIXI.Sprite.from('assets/bundestag_tisch.png');
tisch11.x = 665;
tisch11.y = 100;
tisch11.scale.set(6)
tisch11.width = 300;;
app.stage.addChild(tisch11);

const tisch12 = PIXI.Sprite.from('assets/bundestag_tisch.png');
tisch12.x = 665;
tisch12.y = 40;
tisch12.scale.set(6)
tisch12.width = 300;;
app.stage.addChild(tisch12);


//Alle Politiker angefangen hinten
const politiker37 = PIXI.Sprite.from('assets/politiker_half_front_grey.png');
politiker37.x = 670;
politiker37.y = 75;
politiker37.scale.set(2);
app.stage.addChild(politiker37);

const politiker38 = PIXI.Sprite.from('assets/politiker_half_front_darkgrey.png');
politiker38.x = 722;
politiker38.y = 75;
politiker38.scale.set(2);
app.stage.addChild(politiker38);

const politiker39 = PIXI.Sprite.from('assets/politiker_half_front_blue.png');
politiker39.x = 772;
politiker39.y = 75;
politiker39.scale.set(2);
app.stage.addChild(politiker39);

const politiker40 = PIXI.Sprite.from('assets/politiker_half_front_darkgrey.png');
politiker40.x = 822;
politiker40.y = 75;
politiker40.scale.set(2);
app.stage.addChild(politiker40);

const politiker41 = PIXI.Sprite.from('assets/politiker_half_front_blue.png');
politiker41.x = 872;
politiker41.y = 75;
politiker41.scale.set(2);
app.stage.addChild(politiker41);

const politiker42 = PIXI.Sprite.from('assets/politiker_half_front_grey.png');
politiker42.x = 670;
politiker42.y = 135;
politiker42.scale.set(2);
app.stage.addChild(politiker42);

const politiker43 = PIXI.Sprite.from('assets/politiker_half_front_darkgrey.png');
politiker43.x = 722;
politiker43.y = 135;
politiker43.scale.set(2);
app.stage.addChild(politiker43);

const politiker44 = PIXI.Sprite.from('assets/politiker_half_front_blue.png');
politiker44.x = 772;
politiker44.y = 135;
politiker44.scale.set(2);
app.stage.addChild(politiker44);

const politiker45 = PIXI.Sprite.from('assets/politiker_half_front_darkgrey.png');
politiker45.x = 822;
politiker45.y = 135;
politiker45.scale.set(2);
app.stage.addChild(politiker45);

const politiker46 = PIXI.Sprite.from('assets/politiker_half_front_blue.png');
politiker46.x = 872;
politiker46.y = 135;
politiker46.scale.set(2);
app.stage.addChild(politiker46);





//Regierung links

//Die beiden Tische der Rechten regierung
const tisch13 = PIXI.Sprite.from('assets/bundestag_tisch.png');
tisch13.x = 65;
tisch13.y = 100;
tisch13.scale.set(6)
tisch13.width = 300;;
app.stage.addChild(tisch13);

const tisch14 = PIXI.Sprite.from('assets/bundestag_tisch.png');
tisch14.x = 65;
tisch14.y = 40;
tisch14.scale.set(6)
tisch14.width = 300;;
app.stage.addChild(tisch14);

//Alle Politiker angefangen hinten
const politiker47 = PIXI.Sprite.from('assets/politiker_half_front_grey.png');
politiker47.x = 70;
politiker47.y = 75;
politiker47.scale.set(2);
app.stage.addChild(politiker47);

const politiker48 = PIXI.Sprite.from('assets/politiker_half_front_darkgrey.png');
politiker48.x = 122;
politiker48.y = 75;
politiker48.scale.set(2);
app.stage.addChild(politiker48);

const politiker49 = PIXI.Sprite.from('assets/politiker_half_front_blue.png');
politiker49.x = 172;
politiker49.y = 75;
politiker49.scale.set(2);
app.stage.addChild(politiker49);

const politiker50 = PIXI.Sprite.from('assets/politiker_half_front_darkgrey.png');
politiker50.x = 222;
politiker50.y = 75;
politiker50.scale.set(2);
app.stage.addChild(politiker50);

const politiker51 = PIXI.Sprite.from('assets/politiker_half_front_blue.png');
politiker51.x = 272;
politiker51.y = 75;
politiker51.scale.set(2);
app.stage.addChild(politiker51);

const politiker52 = PIXI.Sprite.from('assets/politiker_half_front_grey.png');
politiker52.x = 70;
politiker52.y = 135;
politiker52.scale.set(2);
app.stage.addChild(politiker52);

const politiker53 = PIXI.Sprite.from('assets/politiker_half_front_darkgrey.png');
politiker53.x = 122;
politiker53.y = 135;
politiker53.scale.set(2);
app.stage.addChild(politiker53);

const politiker54 = PIXI.Sprite.from('assets/politiker_half_front_blue.png');
politiker54.x = 172;
politiker54.y = 135;
politiker54.scale.set(2);
app.stage.addChild(politiker54);

const politiker55 = PIXI.Sprite.from('assets/politiker_half_front_darkgrey.png');
politiker55.x = 222;
politiker55.y = 135;
politiker55.scale.set(2);
app.stage.addChild(politiker55);

const politiker56 = PIXI.Sprite.from('assets/politiker_half_front_blue.png');
politiker56.x = 272;
politiker56.y = 135;
politiker56.scale.set(2);
app.stage.addChild(politiker56);


//Präsidium hinter dem Pult
const tisch15 = PIXI.Sprite.from('assets/bundestag_tisch.png');
tisch15.x = 357;
tisch15.y = 10;
tisch15.scale.set(6)
tisch15.width = 300;;
app.stage.addChild(tisch15);

//Alle Politiker angefangen hinten
const politiker57 = PIXI.Sprite.from('assets/politiker_half_front_blue.png');
politiker57.x = 460;
politiker57.y = 45;
politiker57.scale.set(2);
app.stage.addChild(politiker57);

const politiker58 = PIXI.Sprite.from('assets/politiker_half_front_darkgrey.png');
politiker58.x = 410;
politiker58.y = 45;
politiker58.scale.set(2);
app.stage.addChild(politiker58);

const politiker59 = PIXI.Sprite.from('assets/politiker_half_front_darkgrey.png');
politiker59.x = 510;
politiker59.y = 45;
politiker59.scale.set(2);
app.stage.addChild(politiker59);


//Stenographen Tische
const tisch16 = PIXI.Sprite.from('assets/bundestag_tisch.png');
tisch16.x = 450;
tisch16.y = 350;
tisch16.scale.set(6)
tisch16.width = 100;;
app.stage.addChild(tisch16);

mainContainer.appendChild(app.view);

