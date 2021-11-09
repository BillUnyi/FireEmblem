/*

Credit

I coded most of the project, but my partner wrote the map list and the this.switchItem() function.

Game Links

Embed
<iframe src="https://editor.p5js.org/Flaming87/embed/Z09hYx5my"></iframe>

Present
https://editor.p5js.org/Flaming87/present/Z09hYx5my

Fullscreen
https://editor.p5js.org/Flaming87/full/Z09hYx5my

Sources

Font
https://www.dafont.com/majoris.font

Sprite Maker
https://www.piskelapp.com/

Gif Editor
https://ezgif.com/maker

Image Editor
https://www.bazaart.me/

Unit Stats and Images
https://fireemblem.fandom.com/wiki/List_of_Classes_in_Fire_Emblem:_Shadow_Dragon_and_the_Blade_of_Light

Weapon Stats
https://fireemblem.fandom.com/wiki/List_of_weapons_in_Fire_Emblem:_Shadow_Dragon_and_the_Blade_of_Light

Terrain Stats
https://fireemblem.fandom.com/wiki/Terrain

Names
https://fireemblem.fandom.com/wiki/Category:Characters

Images
https://images.app.goo.gl/H3Z5gY1Bg7Vvgje18
https://i.stack.imgur.com/83Zeq.png

*/

// All global variables
let phase = "Player";
let gameState = "Main Menu";
let tempState = "";
let result = "";
let size = 48;
let fullSpeed = size/4;
let speed = 0;
let zoomNum = 0;
let zoomSize = 16;
let zoomSpeed = 1;
let zoomOut = false;
let x = 0;
let y = 0;
let newX = 0;
let newY = 0;
let menuY = 0;
let pageLength = 4150;
let center = false;
let attackSkip = false;
let skip = false;
let auto = false;
let keyCounter = 0;
let phaseCounter = -500;
let resultCounter = -500;
let turn = 1;
let currentKey;
let currentPlayer;
let currentTarget;
let f;
let position;
let mapText;
let playerUnitText;
let enemyUnitText;
let map = [];
let playerUnits = [];
let enemyUnits = [];
let terrainImages = [];
let playerUnitImages = [];
let enemyUnitImages = [];
let staticUnitImages = [];
let otherImages = [];
let selectedEnemies = [];
let selectedRangeTiles = [];
let enemyRangeTiles = [];
let enemyRange = false;

// Loads all files
function preload() {
  f = loadFont("Majoris_Italic.ttf");
  mapText = loadStrings("Map.txt");
  playerUnitText = loadStrings("PlayerUnits.txt");
  enemyUnitText = loadStrings("EnemyUnits.txt");
  terrainImages[0] = loadImage("TerrainImages/Grass.png");
  terrainImages[1] = loadImage("TerrainImages/Bush.png");
  terrainImages[2] = loadImage("TerrainImages/Forest.png");
  terrainImages[3] = loadImage("TerrainImages/Sand.png");
  terrainImages[4] = loadImage("TerrainImages/Water.png");
  terrainImages[5] = loadImage("TerrainImages/Floor.png");
  terrainImages[6] = loadImage("TerrainImages/Stronghold1.png");
  terrainImages[7] = loadImage("TerrainImages/Stronghold2.png");
  terrainImages[8] = loadImage("TerrainImages/Wall.png");
  terrainImages[9] = loadImage("TerrainImages/Ceiling1.png");
  terrainImages[10] = loadImage("TerrainImages/Ceiling2.png");
  terrainImages[11] = loadImage("TerrainImages/MountainG.png");
  terrainImages[12] = loadImage("TerrainImages/MountainE.png");
  playerUnitImages[0] = loadImage("PlayerUnitImages/Lord.gif");
  playerUnitImages[1] = loadImage("PlayerUnitImages/Mercenary.gif");
  playerUnitImages[2] = loadImage("PlayerUnitImages/Hero.gif");
  playerUnitImages[3] = loadImage("PlayerUnitImages/Thief.gif");
  playerUnitImages[4] = loadImage("PlayerUnitImages/Fighter.gif");
  playerUnitImages[5] = loadImage("PlayerUnitImages/Pirate.gif");
  playerUnitImages[6] = loadImage("PlayerUnitImages/Archer.gif");
  playerUnitImages[7] = loadImage("PlayerUnitImages/Sniper.gif");
  playerUnitImages[8] = loadImage("PlayerUnitImages/Hunter.gif");
  playerUnitImages[9] = loadImage("PlayerUnitImages/Horseman.gif");
  playerUnitImages[10] = loadImage("PlayerUnitImages/Cavalier.gif");
  playerUnitImages[11] = loadImage("PlayerUnitImages/Paladin.gif");
  playerUnitImages[12] = loadImage("PlayerUnitImages/Knight.gif");
  playerUnitImages[13] = loadImage("PlayerUnitImages/General.gif");
  playerUnitImages[14] = loadImage("PlayerUnitImages/PegasusKnight.gif");
  playerUnitImages[15] = loadImage("PlayerUnitImages/Dracoknight.gif");
  playerUnitImages[16] = loadImage("PlayerUnitImages/Ballistician.gif");
  playerUnitImages[17] = loadImage("PlayerUnitImages/Mage.gif");
  playerUnitImages[18] = loadImage("PlayerUnitImages/Priest.gif");
  playerUnitImages[19] = loadImage("PlayerUnitImages/Bishop.gif");
  playerUnitImages[20] = loadImage("PlayerUnitImages/Manakete.gif");
  enemyUnitImages[0] = loadImage("EnemyUnitImages/Lord.gif");
  enemyUnitImages[1] = loadImage("EnemyUnitImages/Mercenary.gif");
  enemyUnitImages[2] = loadImage("EnemyUnitImages/Hero.gif");
  enemyUnitImages[3] = loadImage("EnemyUnitImages/Thief.gif");
  enemyUnitImages[4] = loadImage("EnemyUnitImages/Fighter.gif");
  enemyUnitImages[5] = loadImage("EnemyUnitImages/Pirate.gif");
  enemyUnitImages[6] = loadImage("EnemyUnitImages/Archer.gif");
  enemyUnitImages[7] = loadImage("EnemyUnitImages/Sniper.gif");
  enemyUnitImages[8] = loadImage("EnemyUnitImages/Hunter.gif");
  enemyUnitImages[9] = loadImage("EnemyUnitImages/Horseman.gif");
  enemyUnitImages[10] = loadImage("EnemyUnitImages/Cavalier.gif");
  enemyUnitImages[11] = loadImage("EnemyUnitImages/Paladin.gif");
  enemyUnitImages[12] = loadImage("EnemyUnitImages/Knight.gif");
  enemyUnitImages[13] = loadImage("EnemyUnitImages/General.gif");
  enemyUnitImages[14] = loadImage("EnemyUnitImages/PegasusKnight.gif");
  enemyUnitImages[15] = loadImage("EnemyUnitImages/Dracoknight.gif");
  enemyUnitImages[16] = loadImage("EnemyUnitImages/Ballistician.gif");
  enemyUnitImages[17] = loadImage("EnemyUnitImages/Mage.gif");
  enemyUnitImages[18] = loadImage("EnemyUnitImages/Priest.gif");
  enemyUnitImages[19] = loadImage("EnemyUnitImages/Bishop.gif");
  enemyUnitImages[20] = loadImage("EnemyUnitImages/Manakete.gif");
  staticUnitImages[0] = loadImage("StaticUnitImages/Lord.gif");
  staticUnitImages[1] = loadImage("StaticUnitImages/Mercenary.gif");
  staticUnitImages[2] = loadImage("StaticUnitImages/Hero.gif");
  staticUnitImages[3] = loadImage("StaticUnitImages/Thief.gif");
  staticUnitImages[4] = loadImage("StaticUnitImages/Fighter.gif");
  staticUnitImages[5] = loadImage("StaticUnitImages/Pirate.gif");
  staticUnitImages[6] = loadImage("StaticUnitImages/Archer.gif");
  staticUnitImages[7] = loadImage("StaticUnitImages/Sniper.gif");
  staticUnitImages[8] = loadImage("StaticUnitImages/Hunter.gif");
  staticUnitImages[9] = loadImage("StaticUnitImages/Horseman.gif");
  staticUnitImages[10] = loadImage("StaticUnitImages/Cavalier.gif");
  staticUnitImages[11] = loadImage("StaticUnitImages/Paladin.gif");
  staticUnitImages[12] = loadImage("StaticUnitImages/Knight.gif");
  staticUnitImages[13] = loadImage("StaticUnitImages/General.gif");
  staticUnitImages[14] = loadImage("StaticUnitImages/PegasusKnight.gif");
  staticUnitImages[15] = loadImage("StaticUnitImages/Dracoknight.gif");
  staticUnitImages[16] = loadImage("StaticUnitImages/Ballistician.gif");
  staticUnitImages[17] = loadImage("StaticUnitImages/Mage.gif");
  staticUnitImages[18] = loadImage("StaticUnitImages/Priest.gif");
  staticUnitImages[19] = loadImage("StaticUnitImages/Bishop.gif");
  staticUnitImages[20] = loadImage("StaticUnitImages/Manakete.gif");
  otherImages[0] = loadImage("OtherImages/FireBackground.jpg");
  otherImages[1] = loadImage("OtherImages/FireHowToPlay.jpg");
  otherImages[2] = loadImage("OtherImages/FirePause.jpg");
  otherImages[3] = loadImage("OtherImages/Battle.png");
}

// Runs before the draw function to set up the program
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  textFont(f);
  let tempMap;
  let tempMapText;
  for(let i = 0; i < mapText.length; i++) {
    tempMapText = mapText[i].split(", ");
    tempMap = [];
    for(let j = 0; j < tempMapText.length; j++) {
      tempMap.push(new Terrain(j, i, size, tempMapText[j]));
    }
    map.push(tempMap);
  }
  fixSize();
  let tempUnit;
  let tempInventory;
  for(let i = 0; i < playerUnitText.length; i++) {
    tempUnit = playerUnitText[i].split(", ");
    tempInventory = tempUnit.slice(4);
    for(let j = 0; j < tempInventory.length; j++) {
      tempInventory[j] = new Item(tempInventory[j]);
    }
    playerUnits.push(new Unit(tempUnit[0], tempUnit[1], size, tempUnit[2], tempUnit[3], "Ally", "None", tempInventory));
  }
  for(let i = 0; i < enemyUnitText.length; i++) {
    tempUnit = enemyUnitText[i].split(", ");
    tempInventory = tempUnit.slice(5);
    for(let j = 0; j < tempInventory.length; j++) {
      tempInventory[j] = new Item(tempInventory[j]);
    }
    enemyUnits.push(new Unit(tempUnit[0], tempUnit[1], size, tempUnit[2], tempUnit[3], "Enemy", tempUnit[4], tempInventory));
  }
  updateUnits();
}

// The main function called every frame
function draw() {
  cursor(CROSS);
  if(gameState == "Main Menu") {
    colorMode(HSB, 255);
    if(button(width/2 - 100, height/2 + 30, 200, 40)) {
      fill(150, colorShift(0, 256, 1.5, -16), 255, 100);
    }
    else {
      fill(150, colorShift(0, 256, 1.5, -16), 200, 100);
    }
    colorMode(RGB, 255);
    stroke(0);
    strokeWeight(2);
    image(otherImages[0], 0, 0, width, height);
    rect(width/2 - 100, height/2 + 30, 200, 40, 5);
    fill(0);
    colorMode(HSB, 255);
    stroke(150, colorShift(0, 256, 1.5, 0), 255, 255);
    strokeWeight(5);
    textSize(108);
    textAlign(CENTER, BASELINE);
    text("Fire Emblem", width/2, height/2);
    strokeWeight(0);
    textSize(30);
    text("Start", width/2, height/2 + 60);
    textAlign(CENTER, CENTER);
    stroke(150, colorShift(0, 256, 1.5, -32), 255, 255);
    if(button(width/2 - 75, height/2 + 75, 150, 30)) {
      strokeWeight(4);
      textSize(21);
    }
    else {
      strokeWeight(3);
      textSize(20);
    }
    text("How To Play", width/2, height/2 + 85);
    textAlign(RIGHT, BASELINE);
    textSize(12);
    stroke(150, colorShift(0, 256, 1.5, -80), 255, 255);
    strokeWeight(2);
    text("Based off games of the Fire Emblem franchise", width - 20, height - 10);
    colorMode(RGB, 255);
  }
  else if(gameState == "How To Play") {
    colorMode(HSB, 255);
    background(0);
    translate(0, menuY);
    image(otherImages[3], 0, -menuY, width, height);
    let leftText = ["UP", "LEFT", "DOWN", "RIGHT", "ZOOM IN", "ZOOM OUT", "PAUSE", "FULL SCREEN", "ENEMY RANGE", "SELECT RANGE"];
    let rightText = ["UP ARROW/W", "LEFT ARROW/A", "DOWN ARROW/S", "RIGHT ARROW/D","SCROLL UP/E", "SCROLL DOWN/Q", "BACKSPACE", "F4", "SPACE", "DOUBLE CLICK"];
    controlsInfo(275, 50, "Controls", leftText, rightText, 0);
    let tempText = ["Fire Emblem is a tactical role-playing game (RPG)", "where the player controls a team of blue units to", "defeat an enemy team of red units. The goal is to", "keep as many of your units alive and defeat Grima,", "the boss of the stage. You will game over", "if all your units fall in battle or if Marth,", "the main character, dies."];
    menuInfo(275, 400, "How To Play", tempText, 0);
    tempText = ["-Use WASD or the arrow keys to move", "     around the map", "-Clicking on a unit will center the map around", "     the unit", "-Zoom in and out with the scroll wheel"];
    menuInfo(275, 675, "Map Movement", tempText, 0);
    tempText = ["-Hover the mouse over a unit to see their", "     name and class", "-Click on a unit to see their stats", "-Blue tiles are spaces a unit can move to during", "     their turn", "-Red tiles are spaces a unit can attack. Enemy units", "     in red spaces can be attacked."];
    menuInfo(275, 900, "Unit Info", tempText, 0);
    tempText = ["-Hit Points (HP) – The health a unit has", "-Strength (STR) – The attack power of a unit", "-Skill (SKL) – This affects the hit rate and critical", "     hit rate of an attack", "-Speed (SPD) – Units with more speed than an", "     enemy hit twice", "-Luck (LCK) – This affects the critical hit rate of", "     an attack", "-Defense (DEF) – The defense power against", "     normal attacks", "-Resistance (RES) – The defense power against", "     magic attacks", "-Movement (MOV) – The number of spaces a unit", "     can move per turn"];
    menuInfo(275, 1175, "Unit Stats", tempText, 0);
    tempText = ["-Click on a unit to see the available blue", "     movement tiles", "-Click on any blue movement tile to move the unit", "     to that space", "-Once a unit has moved it will bring up a menu", "-When all the units on your team have done an", "     action, the phase will change to the Enemy Phase", "     where the enemies will have a chance to attack your", "     units first", "-Press backspace to deselect the unit"];
    menuInfo(275, 1625, "Unit Movement", tempText, 0);
    tempText = ["-Once in the menu there are three options to", "     click on", "-Attack – The red tiles are the possible spaces a", "     unit can attack from. Select an enemy unit on a", "     red tile to attack them.", "-Item – This brings up the item menu where you", "     can equip a weapon", "-Wait – This will end the turn for the unit. Use this", "     if you are unable to attack or if you choose", "     not to attack.", "-Press backspace to move the unit back to its", "     previous location"];
    menuInfo(275, 1975, "Unit Menu", tempText, 0);
    tempText = ["-Before a unit attacks, they have a chance to look", "     at the possible outcome of a battle if every", "     attack lands", "-The arrows near the item name allow you to", "     change weapons if needed", "-Press enter or click to begin the attack", "-Press backspace to go back to selecting an enemy.", "     Press backspace again to return to the menu.", "-The battle will play out in a sequence. First, the", "     unit that initiated the battle will attack. Next,", "     the other unit will counterattack if the unit is in", "     their range. If the speed of the units is not tied,", "     the one with more speed will get a follow", "     up attack."];
    menuInfo(275, 2375, "Attacking", tempText, 0);
    tempText = ["-Click on an item to equip it", "-The equipped item is highlighted in yellow", "-Press backspace when you have the item you", "     want equipped to return to the menu"];
    menuInfo(275, 2825, "Item Menu", tempText, 0);
    tempText = ["-Type – Each weapon has a type. Examples are", "     swords, lances, and axes.", "-Weight (WT) – The total speed of a unit is", "     (Speed – Weight) of a unit", "-Might (MT) – The total attack power of a unit is", "     (Strength + Might) of a unit", "-Hit Rate (HIT) – The total hit rate is", "     (Skill + Hit Rate) of a unit", "-Critical Hit Rate (CRIT) – The total critical hit rate", "     is ((Skill + Luck)/2 + Critical Hit Rate) of a unit", "-Range (RNG) – The range of an item is the number", "     of spaces away the unit can attack from. Units", "     that attack from a range further that of the", "     other unit’s item range will not be", "     counterattacked."];
    menuInfo(275, 3025, "Item Stats", tempText, 0);
    tempText = ["-Weapon Triangle – The weapon triangle is like", "     rock, paper, scissors. Swords are effective", "     against axes, lances are effective against", "     swords, and axes are effective against lances.", "     Effective weapons receive a 1.5x attack", "     multiplier.", "-Effectiveness – Some weapons are effective", "     against certain units. A common example is that", "     all bows are effective against Pegasus Knights", "     and Dracoknights. Effective weapons receive a", "     1.5x attack multiplier that stacks with the", "     multiplier from the weapon triangle."];
    menuInfo(275, 3500, "Item Info", tempText, 0);
    tempText = ["-Certain tiles give terrain bonuses that are added", "     to the stats of a unit on that tile", "-Avoid (AVD) – Allows the unit to evade attacks", "     more easily from enemies", "-Defense (DEF) – Adds to the defense power of", "     a unit", "-Movement (MOV) – The number of movement", "     points required to cross the terrain"];
    menuInfo(275, 3900, "Terrain Stats", tempText, 0);
    tempText = ["-The damage an attack deals is (Strength + Might)", "     of a unit – (Defense + Defense Bonus) of the", "     other unit", "-The hit rate of an attack is (Skill + Hit Rate)", "     of a unit – (Speed + Avoid) of the other unit", "-The critical hit rate of an attack is", "     ((Skill + Luck)/2 + Critical Hit Rate) of a unit", "-A critical hit receives a 3x damage multiplier"];
    menuInfo(275, 4200, "General Stats", tempText, 0)
    textAlign(CENTER, CENTER);
    if(button(15, height - 30, 70, 25)) {
      textSize(25);
    }
    else {
      textSize(24);
    }
    stroke(191, colorShift(0, 256, 1, 0), 255, 255);
    text("Back", 50, height - 25 - menuY);
    let h = height - 40;
    let tempHeight = height*h/(pageLength+height);
    colorMode(RGB, 255);
    fill(255, 50);
    strokeWeight(0);
    rect(width - 40, 20 - menuY, 10, h, 5);
    fill(255);
    rect(width - 40, 20 - menuY - (menuY/pageLength)*(h-tempHeight), 10, tempHeight, 5);
  }
  else if(gameState == "Battle") {
    if(phase == "Enemy" || frameCount - phaseCounter < 300) {
      noCursor();
    }
    if(zoomNum > 0) {
      zoom();
    }
    if(center) {
      centerMap();
    }
    let attack = false;
    if(currentPlayer != null) {
      if(currentPlayer.state == "Attack") {
        attack = true;
      }
    }
    if(attack) {
      colorMode(HSB, 255);
      background(227, 255, colorShift(16, 48, 0.125, 0));
      colorMode(RGB, 255);
      image(otherImages[3], 0, 0, width, height);
      fill(255);
      stroke(0);
      strokeWeight(2);
      textSize(32);
      textAlign(RIGHT, BASELINE);
      text("Turn " + turn, width-20, 40);
      currentPlayer.attack();
      if(currentPlayer.state == "Wait") {
        currentPlayer.attackReset();
        removeUnits();
        updateUnits();
        attackSkip = false;
        currentPlayer = null;
      }
    }
    else {
      colorMode(RGB, 255);
      textAlign(LEFT, BASELINE)
      moveCamera(speed);
      translate(x, y);
      position = tilePos(mouseX, mouseY);
      // Layer 1
      drawMap();
      // Layer 2
      if(phase == "Player" && frameCount - phaseCounter >= 300) {
        if(enemyRange) {
          drawEnemyRange();
        }
        drawSelectedEnemyRange();
        if(currentPlayer != null) {
          currentPlayer.drawMovTiles(size);
          currentPlayer.drawRangeTiles(size);
        }
        else if(frameCount - phaseCounter >= 300){
          for(let i = 0; i < playerUnits.length; i++) {
            if(playerUnits[i].x == position[0] && playerUnits[i].y == position[1]) {
              playerUnits[i].drawMovTiles(size);
              playerUnits[i].drawRangeTiles(size);
            }
          }
          for(let i = 0; i < enemyUnits.length; i++) {
            if(enemyUnits[i].x == position[0] && enemyUnits[i].y == position[1]) {
              enemyUnits[i].drawMovTiles(size);
              enemyUnits[i].drawRangeTiles(size);
            }
          }
        }
      }
      // Layer 3
      drawUnits();
      // Layer 4
      let outline = true;
      if(currentPlayer != null) {
        if(currentPlayer.state == "Preattack") {
          outline = false;
        }
      }
      if(phase == "Enemy" || frameCount - phaseCounter <= 300 || center) {
        outline = false;
      }
      if(outline) {
        drawOutline(100, 100, 255);
      }
      // Layer 5
      if(currentPlayer != null) {
        if(phase == "Player") {
          currentPlayer.details(x, y);
        }
        else {
          currentPlayer.display(x, y, 255);
        }
      }
      else if(frameCount - phaseCounter >= 300){
        for(let i = 0; i < playerUnits.length; i++) {
          if(playerUnits[i].x == position[0] && playerUnits[i].y == position[1]) {
            playerUnits[i].display(x, y, 255);
          }
        }
        for(let i = 0; i < enemyUnits.length; i++) {
          if(enemyUnits[i].x == position[0] && enemyUnits[i].y == position[1]) {
            enemyUnits[i].display(x, y, 255);
          }
        }
      }
      if(position[1] < map.length && position[0] < map[0].length && outline) {
        map[position[1]][position[0]].details(x, y);
      }
      // Layer 6
      fill(255);
      stroke(0);
      strokeWeight(2);
      textSize(32);
      textAlign(RIGHT, BASELINE);
      text("Turn " + turn, width-20-x, 40-y);
      
      if((phase == "Enemy" || auto) && result == "") {
        autoAttack();
      }
      let title = "";
      if(frameCount - resultCounter <= 300) {
        title = "Result";
      }
      else if(frameCount - phaseCounter <= 300) {
        title = "Phase";
      }
      if(title != "") {
        fill(0);
        stroke(255);
        strokeWeight(5);
        let w = 800;
        let h = 100;
        rect(width/2-x-w/2, height/2-y-h/2-20, w, h, 50);
        colorMode(HSB, 255);
        if(phase == "Player" || result == "Stage Complete") {
          fill(171, colorShift(0, 256, 10, 0), 255, 255);
          stroke(171, colorShift(0, 256, 10, 0), 255, 255);
        }
        else {
          fill(0, colorShift(0, 256, 10, 0), 255, 255);
          stroke(0, colorShift(0, 256, 10, 0), 255, 255);
        }
        textSize(72);
        textAlign(CENTER, BASELINE);
        strokeWeight(0);
        if(title == "Result") {
          text(result, width/2-x, height/2-y);
        }
        else {
          text(phase + " Phase", width/2-x, height/2-y);
        }
        colorMode(RGB, 255);
      }
      else if(result != "") {
        reset();
      }
      checkPhase();
      if(result == "") {
        endGame();
      }
    }
  }
  else if(gameState == "Pause") {
    let tempText = "";
    background(255);
    fill(0);
    stroke(200, colorShift(0, 256, 1, 0), 255, 255);
    strokeWeight(2);
    textSize(40);
    textAlign(CENTER, CENTER);
    image(otherImages[2], 0, 0, width, height);
    text("Pause Menu", width/2, 40);
    if(button(width/2 - 80, height/2 - 35, 160, 30)) {
      textSize(21);
    }
    else {
      textSize(20);
    }
    stroke(200, colorShift(0, 256, 1, -16), 255, 255);
    text("End Turn", width/2, height/2 - 20);
    if(button(width/2 - 80, height/2 + 5, 160, 30)) {
      textSize(21);
    }
    else {
      textSize(20);
    }
    stroke(200, colorShift(0, 256, 1, -32), 255, 255);
    if(skip) {
      tempText = "Battle Animation: OFF";
    }
    else {
      tempText = "Battle Animation: ON";
    }
    text(tempText, width/2, height/2 + 20);
    if(button(width/2 - 80, height/2 + 45, 160, 30)) {
      textSize(21);
    }
    else {
      textSize(20);
    }
    stroke(200, colorShift(0, 256, 1, -48), 255, 255);
    text("How To Play", width/2, height/2 + 60);
    if(button(width/2 - 70, height/2 + 85, 140, 30)) {
      textSize(21);
    }
    else {
      textSize(20);
    }
    stroke(200, colorShift(0, 256, 1, -64), 255, 255);
    text("Quit Game", width/2, height/2 + 100);
    if(button(15, height - 30, 70, 25)) {
      textSize(25);
    }
    else {
      textSize(24);
    }
    stroke(200, colorShift(0, 256, 1, -80), 255, 255);
    text("Back", 50, height - 25);
  }
}

// Changes the window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Keyboard input
function keyReleased() {
  if(gameState == "Main Menu") {
    if(keyCode == ENTER) {
      intro();
      gameState = "Battle";
    }
  }
  else if(gameState == "How To Play") {
    if(keyCode == BACKSPACE) {
      gameState = tempState;
    }
  }
  else if(gameState == "Battle") {
    if(keyCode == BACKSPACE) {
      if(currentPlayer != null) {
        if(currentPlayer.team == "Ally") {
          if(currentPlayer.state == "Ready" || currentPlayer.state == "Wait") {
            currentPlayer = null;
          }
          else if(currentPlayer.state == "Options") {
            currentPlayer.unMove();
          }
          else if(currentPlayer.state == "Select") {
            currentPlayer.backToOptions();
            currentTarget = null;
          }
          else if(currentPlayer.state == "Preattack") {
            currentPlayer.backToSelect();
          }
          else if(currentPlayer.state == "Item") {
            currentPlayer.backToOptions();
          }
          else if(currentPlayer.state == "Attack") {
            attackSkip = true;
          }
        }
      }
      else {
        gameState = "Pause";
      }
    }
    if(keyCode == ENTER) {
      if(currentPlayer != null) {
        if(currentPlayer.team == "Ally") {
          if(currentPlayer.state == "Ready") {
            currentPlayer.move(currentPlayer.x, currentPlayer.y)
          }
          else if(currentPlayer.state == "Options") {
            currentPlayer.menuAttack();
          }
          else if(currentPlayer.state == "Select") {
            currentPlayer.backToOptions();
            currentTarget = null;
          }
          else if(currentPlayer.state == "Preattack") {
            currentPlayer.enterAttack();
          }
          else if(currentPlayer.state == "Item") {
            currentPlayer.backToOptions();
          }
          else if(currentPlayer.state == "Attack") {
            attackSkip = true;
          }
        }
      }
      else {
        keyCounter += 1;
        if(keyCounter >= 2) {
          keyCounter = 0;
          switchPhase();
        }
      }
    }
    else {
      keyCounter = 0;
    }
    if(key == " ") {
      enemyRange = !enemyRange;
    }
  }
  else if(gameState == "Pause") {
    if(keyCode == BACKSPACE) {
      gameState = "Battle";
    }
    if(keyCode == ENTER) {
      switchPhase();
      gameState = "Battle";
    }
  }
  if(keyCode == 115) {
    let fs = fullscreen();
    fullscreen(!fs);
    resizeCanvas(windowWidth, windowHeight);
  }
  return false;
}

// Mouse input
function mouseReleased() {
  if(gameState == "Main Menu") {
    if(button(width/2 - 100, height/2 + 30, 200, 40)) {
      intro();
      gameState = "Battle";
    }
    if(button(width/2 - 75, height/2 + 75, 150, 30)) {
      tempState = gameState;
      gameState = "How To Play";
    }
  }
  else if(gameState == "Battle" && phase == "Player") {
    let tempPlayer = currentPlayer;
    if(currentPlayer != null) {
      if(currentPlayer.team == "Ally") {
        if(currentPlayer.state == "Ready") {
          currentPlayer = findPlayer();
          if(tempPlayer === currentPlayer && !currentPlayer.move(position[0], position[1])) {
            currentPlayer = null;
          }
        }
        else if(currentPlayer.state == "Options") {
          if(!currentPlayer.menu()) {
            currentPlayer.unMove();
          }
          if(currentPlayer.state == "Wait") {
            updateUnits();
            currentPlayer = null;
          }
        }
        else if(currentPlayer.state == "Select") {
          currentTarget = findPlayer();
          if(!currentPlayer.select(position[0], position[1])) {
            currentPlayer.backToOptions();
            currentTarget = null;
          }
        }
        else if(currentPlayer.state == "Preattack") {
          if(button(255, height-240, 30, 30)) {
            currentPlayer.switchItem(1);
          }
          else if(button(65, height-240, 30, 30)) {
            currentPlayer.switchItem(-1);
          }
          else {
            currentPlayer.enterAttack();
          }
        }
        else if(currentPlayer.state == "Item") {
          if(!currentPlayer.itemMenu()) {
            currentPlayer.backToOptions();
          }
        }
        else if(currentPlayer.state == "Wait") {
          currentPlayer = findPlayer();
          if(tempPlayer === currentPlayer) {
            currentPlayer = null;
          }
        }
      }
      else {
        currentPlayer = findPlayer();
        if(tempPlayer === currentPlayer) {
          currentPlayer = null;
        }
      }
    }
    else {
      currentPlayer = findPlayer();
    }
    if(currentPlayer != null) {
      centerUnit(currentPlayer);
    }
  }
  else if(gameState == "How To Play") {
    if(button(15, height - 30, 70, 25)) {
      gameState = tempState;
    }
  }
  else if(gameState == "Pause") {
    if(button(width/2 - 80, height/2 - 35, 160, 30)) {
      switchPhase();
      gameState = "Battle";
    }
    if(button(width/2 - 80, height/2 + 5, 160, 30)) {
      skip = !skip;
    }
    if(button(width/2 - 80, height/2 + 45, 160, 30)) {
      tempState = gameState;
      gameState = "How To Play";
    }
    if(button(width/2 - 70, height/2 + 85, 140, 30)) {
      reset();
    }
    if(button(15, height - 30, 70, 25)) {
      gameState = "Battle";
    }
  }
}

// Mouse input
function doubleClicked() {
  if(gameState == "Battle") {
    let tempEnemy = doubleClickEnemy();
    if(tempEnemy != null) {
      let addEnemy = true;
      for(let i = 0; i < selectedEnemies.length; i++) {
        if(tempEnemy === selectedEnemies[i]) {
          selectedEnemies.splice(i, 1);
          i--;
          addEnemy = false;
        }
      }
      if(addEnemy) {
        selectedEnemies.push(tempEnemy);
      }
      totalEnemyRange();
      currentPlayer = null;
    }
  }
}

// Mouse input
function mouseWheel(event) {
  if(gameState == "How To Play") {
    if(event.delta > 0) {
      menuY -= 100;
      if(menuY < -pageLength) {
        menuY = -pageLength;
      }
    }
    else if(event.delta < 0) {
      menuY += 100;
      if(menuY > 0) {
        menuY = 0;
      }
    }
  }
  else if(gameState == "Battle") {
    if(zoomNum <= 0) {
      checkZoom(event.delta);
    }
  }
  return false;
}

// Displays text in the controls section
function controlsInfo(tempX, tempY, title, leftText, rightText, offset) {
  fill(0);
  stroke(191, colorHeight(0, 256, -(tempY+menuY), offset), 255, 255);
  strokeWeight(2);
  textSize(40);
  textAlign(CENTER, BASELINE);
  text(title, width/2, tempY);
  textSize(20);
  for(let i = 0; i < leftText.length; i++) {
    fill(255, 50);
    strokeWeight(0);
    rect(width/2 - tempX - 10, i * 25 + tempY + 43, (tempX+10)*2, 10, 5);
    colorMode(HSB, 255);
    fill(0);
    stroke(191, colorHeight(0, 256, -(i * 25 + tempY + 50+menuY), offset), 255, 255);
    strokeWeight(2);
    textAlign(LEFT, BASELINE);
    text(leftText[i], width/2 - tempX, i * 25 + tempY + 50);
    textAlign(RIGHT, BASELINE);
    text(rightText[i], width/2 + tempX, i * 25 + tempY + 50);
  }
}

// Displays text in the how to play section
function menuInfo(tempX, tempY, title, tempText, offset) {
  fill(0);
  stroke(191, colorHeight(0, 256, -(tempY+menuY), offset), 255, 255);
  strokeWeight(2);
  textSize(40);
  textAlign(CENTER, BASELINE);
  text(title, width/2, tempY);
  textSize(20);
  textAlign(LEFT, BASELINE);
  for(let i = 0; i < tempText.length; i++) {
    fill(255, 50);
    strokeWeight(0);
    rect(width/2 - tempX - 10, i * 25 + tempY + 43, (tempX+10)*2, 10, 5);
    colorMode(HSB, 255);
    fill(0);
    stroke(191, colorHeight(0, 256, -(i * 25 + tempY + 50+menuY), offset), 255, 255);
    strokeWeight(2);
    text(tempText[i], width/2 - tempX, i * 25 + tempY + 50);
  }
}

// Returns true if the mouse is within the rectangle bounds of the parameters
// tempX {int} - The x coordinate
// tempY {int} - The y coordinate
// w {int} - The width of the rectangle
// h {int} - The height of the rectangle
function button(tempX, tempY, w, h) {
  if(mouseX >= tempX && mouseX < tempX + w && mouseY >= tempY && mouseY < tempY + h) {
    return true;
  }
  return false;
}

// Shifts a value back and forth between the min and max value based on the frame count. Used to change the color values when setting the fill or stroke color.
function colorShift(min, max, rate, offset) {
  return abs(((frameCount + offset) * rate) % ((max - min)*2) - (max - min)) + min;
}

// Calculates a value based on the height
function colorHeight(min, max, tempY, offset) {
  return abs(((max - min) * (tempY/height)) % ((min - max)*2)) + min + offset;
}

// If the mouse clicks on a unit, it becomes the current player. If not returns the previous unit.
function findPlayer() {
  let tempUnit;
  for(let i = 0; i < playerUnits.length; i++) {
    if(playerUnits[i].x == position[0] && playerUnits[i].y == position[1]) {
      tempUnit = playerUnits[i];
    }
  }
  for(let i = 0; i < enemyUnits.length; i++) {
    if(enemyUnits[i].x == position[0] && enemyUnits[i].y == position[1]) {
      tempUnit = enemyUnits[i];
    }
  }
  if(tempUnit == null) {
    return currentPlayer;
  }
  return tempUnit;
}

// Returns an enemy unit when you double click on it
function doubleClickEnemy() {
  let tempUnit;
  for(let i = 0; i < enemyUnits.length; i++) {
    if(enemyUnits[i].x == position[0] && enemyUnits[i].y == position[1]) {
      tempUnit = enemyUnits[i];
    }
  }
  return tempUnit;
}

// Resizes the grid in case the map doesn't fit the whole screen
function fixSize() {
  let num;
  if(map[0].length * size < width) {
    num = width / map[0].length;
    size = num + 8 - num % 8;
  }
  if(map.length * size < height) {
    num = height / map.length;
    size = num + 8 - num % 8;
  }
}

// At the start of the game, centers the camera around Marth, the main character
function intro() {
  x = 0;
  y = -size*12;
  centerUnit(playerUnits[0]);
  phaseCounter = frameCount;
}

// Checks if the new size of the map can fit to the window 
function checkZoom(num) {
  if(num > 0 && size > 24 && map[0].length * (size-zoomSize) > width && map.length * (size-zoomSize) > height) {
    zoomNum = zoomSize / zoomSpeed;
    zoomOut = false;
  }
  else if(num < 0 && size < 96) {
    zoomNum = zoomSize / zoomSpeed;
    zoomOut = true;
  }
}

// Runs when the map can zoom in/out 
function zoom() {
  zoomNum -= 1;
  let tempPosition = tilePos(width/2, height/2);
  if(zoomOut) {
    size += zoomSpeed;
  }
  else {
    size -= zoomSpeed;
  }
  x = -tempPosition[0] * size + width / 2 - size / 2;
  y = -tempPosition[1] * size + height / 2 - size / 2;
  mapBounds(false);
  if(currentPlayer != null) {
    centerUnit(currentPlayer);
  }
  else {
    centerPos(tempPosition[0], tempPosition[1]);
  }
  fullSpeed = size / 4;
}

// Sets the new coordinates of the map to center around the player
// unit {Unit} - Uses the unit x and y to calculate newX and newY
function centerUnit(unit) {
  newX = -unit.x * size + width/2 - size/2;
  newY = -unit.y * size + height/2 - size/2;
  center = true;
}

// Sets the new coordinates of the map to center around a given x and y
function centerPos(tempX, tempY) {
  newX = -tempX * size + width/2 - size/2;
  newY = -tempY * size + height/2 - size/2;
  center = true;
}

// Moves the camera to the new coordinates
function centerMap() {
  speedChange(true);
  let dx = newX - x;
  let dy = newY - y;
  let ratio = speed/sqrt(pow(dx, 2) + pow(dy, 2));
  if(ratio < 1) {
    x += dx*ratio;
    y += dy*ratio;
  }
  else {
    x = newX;
    y = newY;
    center = false;
    speed = 0;
  }
  let bounds = mapBounds(true);
  if(bounds == "x") {
    newX = x;
  }
  if(bounds == "y") {
    newY = y;
  }
}

// Keeps the camera from going out of bounds
function mapBounds(c) {
  let outOfBounds;
  if(c) {
    outOfBounds = "";
    if(x > 0) {
      x = 0;
      outOfBounds = "x";
    }
    if(y > 0) {
      y = 0;
      outOfBounds = "y";
    }
    if(x < -map[0].length*size + width) {
      x = -map[0].length*size + width;
      outOfBounds = "x";
    }
    if(y < -map.length*size + height) {
      y = -map.length*size + height;
      outOfBounds = "y";
    }
  }
  else {
    outOfBounds = false;
    if(x > 0) {
      x = 0;
      outOfBounds = true;
    }
    if(y > 0) {
      y = 0;
      outOfBounds = true;
    }
    if(x < -map[0].length*size + width) {
      x = -map[0].length*size + width;
      outOfBounds = true;
    }
    if(y < -map.length*size + height) {
      y = -map.length*size + height;
      outOfBounds = true;
    }
  }
  return outOfBounds;
}

// Accelerates/decelerates the camera speed
function speedChange(accelerate) {
  if(accelerate) {
    if(speed < fullSpeed) {
      speed += 0.75;
    }
    else {
      speed = fullSpeed;
    }
  }
  else {
    if(speed > 0) {
      speed -= 0.75;
    }
    else {
      speed = 0;
      currentKey = "";
    }
  }
}

// Moves the camera around the map using WASD or the arrow keys
function moveCamera() {
  let move = true;
  if(currentPlayer != null) {
    if(currentPlayer.state != "Ready" && currentPlayer.state != "Wait") {
      move = false;
    }
  }
  if(phase == "Enemy") {
    move = false;
  }
  if(move) {
    if(speed <= 0 && keyIsPressed) {
      currentKey = keyCode;
    }
    if(!center) {
      speedChange(keyIsPressed && keyCode == currentKey);
      if((currentKey == 87 || currentKey == UP_ARROW) && y < 0) {
        y+=speed;
        if(mapBounds(false)) {
          speed = 0;
        }
      }
      else if((currentKey == 65 || currentKey == LEFT_ARROW) && x < 0) {
        x+=speed;
        if(mapBounds(false)) {
          speed = 0;
        }
      }
      else if((currentKey == 83 || currentKey == DOWN_ARROW) && y > -map.length*size + height) {
        y-=speed;
        if(mapBounds(false)) {
          speed = 0;
        }
      }
      else if((currentKey == 68 || currentKey == RIGHT_ARROW) && x > -map[0].length*size + width) {
        x-=speed;
        if(mapBounds(false)) {
          speed = 0;
        }
      }
    }
    if(currentKey == 81) {
      if(zoomNum <= 0) {
        checkZoom(1);
      }
    }
    else if(currentKey == 69) {
      if(zoomNum <= 0) {
        checkZoom(-1);
      }
    }
  }
}

// Draws all the map tiles
function drawMap() {
  for(let i = 0; i < map.length; i++) {
    for(let j = 0; j < map[i].length; j++) {
      if(checkDraw(map[i][j].x, map[i][j].y)) {
        map[i][j].drawTerrain(size);
      }
    }
  }
}

// Draws all the units
function drawUnits() {
  for(let i = 0; i < playerUnits.length; i++) {
    if(checkDraw(playerUnits[i].x, playerUnits[i].y)) {
      playerUnits[i].drawUnit(size);
    }
  }
  for(let i = 0; i < enemyUnits.length; i++) {
    if(checkDraw(enemyUnits[i].x, enemyUnits[i].y)) {
      enemyUnits[i].drawUnit(size);
    }
  }
}

// Checks the position of tiles and units to only draw them inside the window to make the game run smoother
function checkDraw(tempX, tempY) {
  if((tempX+1) * size + x >= 0 && tempX * size + x <= width && (tempY+1) * size + y >= 0 && tempY * size + y <= height) {
    return true;
  }
  return false;
}

// Draws the outline where the cursor is around a tile
function drawOutline(r, g, b) {
  fill(0, 0, 0, 0);
  strokeWeight(2);
  stroke(r, g, b);
  rect(position[0] * size, position[1] * size, size, size, 10);
}

// Provides the position the mouse is on the map
function tilePos(posX, posY) {
  let tempX = posX-x - (posX-x) % size;
  let tempY = posY-y - (posY-y) % size;
  return [tempX / size, tempY / size];
}

// Everytime a unit moves, every unit's movement and range tiles are updated
function updateUnits() {
  for(let i = 0; i < playerUnits.length; i++) {
    playerUnits[i].checkMove();
    playerUnits[i].checkDisplayRange();
  }
  for(let i = 0; i < enemyUnits.length; i++) {
    enemyUnits[i].checkMove();
    enemyUnits[i].checkDisplayRange();
  }
  totalEnemyRange();
}

// Removes a unit from the list when they fall in battle
function removeUnits() {
  for(let i = 0; i < playerUnits.length; i++) {
    if(!playerUnits[i].alive) {
      playerUnits.splice(i, 1);
    }
  }
  for(let i = 0; i < enemyUnits.length; i++) {
    if(!enemyUnits[i].alive) {
      enemyUnits.splice(i, 1);
    }
  }
}

// Draws every possible tile the enemy team can currently attack from
function drawEnemyRange() {
  fill(255, 0, 255, 200);
  strokeWeight(0);
  for(let i = 0; i < enemyRangeTiles.length; i++) {
    rect(enemyRangeTiles[i][0] * size + 1, enemyRangeTiles[i][1] * size + 1, size-2, size-2);
  }
}

// Calculates every possible tile the enemy team can currently attack from
function totalEnemyRange() {
  enemyRangeTiles = [];
  for(let i = 0; i < enemyUnits.length; i++) {
    enemyRangeTiles = enemyRangeTiles.concat(enemyUnits[i].movementTiles);
    enemyRangeTiles = enemyRangeTiles.concat(enemyUnits[i].filteredRangeTiles);
  }
  for(let i = 0; i < enemyRangeTiles.length; i++) {
    for(let j = i+1; j < enemyRangeTiles.length; j++) {
      if(enemyRangeTiles[i][0] == enemyRangeTiles[j][0] && enemyRangeTiles[i][1] == enemyRangeTiles[j][1]) {
        enemyRangeTiles.splice(j, 1);
        j--;
      }
    }
  }
  selectedEnemyRange();
  for(let i = 0; i < selectedRangeTiles.length; i++) {
    for(let j = 0; j < enemyRangeTiles.length; j++) {
      if(selectedRangeTiles[i][0] == enemyRangeTiles[j][0] && selectedRangeTiles[i][1] == enemyRangeTiles[j][1]) {
        enemyRangeTiles.splice(j, 1);
        j--;
      }
    }
  }
}

// Draws the range of selected enemies
function drawSelectedEnemyRange() {
  fill(255, 50, 50, 200);
  strokeWeight(0);
  for(let i = 0; i < selectedRangeTiles.length; i++) {
    rect(selectedRangeTiles[i][0] * size + 1, selectedRangeTiles[i][1] * size + 1, size-2, size-2);
  }
}

// Calculates the range of selected enemies
function selectedEnemyRange() {
  selectedRangeTiles = [];
  for(let i = 0; i < selectedEnemies.length; i++) {
    selectedRangeTiles = selectedRangeTiles.concat(selectedEnemies[i].movementTiles);
    selectedRangeTiles = selectedRangeTiles.concat(selectedEnemies[i].filteredRangeTiles);
  }
  for(let i = 0; i < selectedRangeTiles.length; i++) {
    for(let j = i+1; j < selectedRangeTiles.length; j++) {
      if(selectedRangeTiles[i][0] == selectedRangeTiles[j][0] && selectedRangeTiles[i][1] == selectedRangeTiles[j][1]) {
        selectedRangeTiles.splice(j, 1);
        j--;
      }
    }
  }
}

// Returns the color value of a certain weapon type
function weaponColor(type) {
  if(type == "Sword") {
    return [255, 50, 50];
  }
  else if(type == "Lance") {
    return [100, 100, 255];
  }
  else if(type == "Axe") {
    return [100, 255, 100];
  }
  else if(type == "Bow") {
    return [200, 200, 200];
  }
  else if(type == "Magic") {
    return [200, 0, 255];
  }
  else if(type == "Dragonstone") {
    return [255, 255, 0];
  }
  else if(type == "Firearm") {
    return [255, 100, 0];
  }
}

// When all units from a team have moved, the phase switches
function checkPhase() {
  let changePhase = true;
  if(phase == "Player") {
    for(let i = 0; i < playerUnits.length; i++) {
      if(playerUnits[i].state != "Wait") {
        changePhase = false;
      }
    }
    if(changePhase) {
      switchPhase();
    }
  }
  else if(phase == "Enemy") {
    for(let i = 0; i < enemyUnits.length; i++) {
      if(enemyUnits[i].state != "Wait") {
        changePhase = false;
      }
    }
    if(changePhase) {
      switchPhase();
    }
  }
}

// Switches phase and updates units
function switchPhase() {
  if(phase == "Player") {
    for(let i = 0; i < playerUnits.length; i++) {
      playerUnits[i].newTurn();
    }
    phase = "Enemy";
    currentPlayer = null;
  }
  else if(phase == "Enemy") {
    for(let i = 0; i < enemyUnits.length; i++) {
      enemyUnits[i].newTurn();
    }
    phase = "Player";
    currentPlayer = null;
    centerUnit(playerUnits[0]);
    turn++;
  }
  phaseCounter = frameCount;
}

// Used to attack automatically
function autoAttack() {
  if(currentPlayer != null) {
    if(currentPlayer.state == "Ready" && !center && frameCount - phaseCounter >= 300) {
      currentPlayer.autoMove();
      centerUnit(currentPlayer);
    }
    else if(currentPlayer.state == "AutoAttack" && !center) {
      currentPlayer.enterAttack();
    }
    else if(currentPlayer.state == "Wait") {
      for(let i = 1; i < enemyUnits.length; i++) {
        if(currentPlayer == enemyUnits[i]) {
          currentPlayer = enemyUnits[i-1];
          centerUnit(currentPlayer);
        }
      }
    }
  }
  else {
    currentPlayer = enemyUnits[enemyUnits.length-1];
    centerUnit(currentPlayer);
  }
}

// Checks for a game over or if the stage is complete
function endGame() {
  if(enemyUnits.length > 0) {
    if(enemyUnits[0].name != "Grima") {
      result = "Stage Complete";
      resultCounter = frameCount;
    }
  }
  else {
    result = "Stage Complete";
    resultCounter = frameCount;
  }
  if(playerUnits.length > 0) {
    if(playerUnits[0].name != "Marth") {
      result = "Game Over";
      resultCounter = frameCount;
    }
  }
  else {
    result = "Game Over";
    resultCounter = frameCount;
  }
}

// Resets the game back to the main menu
function reset() {
  phase = "Player";
  gameState = "Main Menu";
  tempState = "";
  result = "";
  speed = 0;
  zoomNum = 0;
  zoomOut = false;
  x = 0;
  y = 0;
  newX = 0;
  newY = 0;
  center = false;
  attackSkip = false;
  auto = false;
  keyCounter = 0;
  phaseCounter = -500;
  resultCounter = -500;
  turn = 1;
  currentKey = null;
  currentPlayer = null;
  currentTarget = null;
  playerUnits = [];
  enemyUnits = [];
  selectedEnemies = [];
  selectedRangeTiles = [];
  enemyRangeTiles = [];
  let tempUnit;
  let tempInventory;
  for(let i = 0; i < playerUnitText.length; i++) {
    tempUnit = playerUnitText[i].split(", ");
    tempInventory = tempUnit.slice(4);
    for(let j = 0; j < tempInventory.length; j++) {
      tempInventory[j] = new Item(tempInventory[j]);
    }
    playerUnits.push(new Unit(tempUnit[0], tempUnit[1], size, tempUnit[2], tempUnit[3], "Ally", "None", tempInventory));
  }
  for(let i = 0; i < enemyUnitText.length; i++) {
    tempUnit = enemyUnitText[i].split(", ");
    tempInventory = tempUnit.slice(5);
    for(let j = 0; j < tempInventory.length; j++) {
      tempInventory[j] = new Item(tempInventory[j]);
    }
    enemyUnits.push(new Unit(tempUnit[0], tempUnit[1], size, tempUnit[2], tempUnit[3], "Enemy", tempUnit[4], tempInventory));
  }
  updateUnits();
}

// Units are able to move and attack with the weapons in their inventory
class Unit {
  constructor(x, y, size, name, unitClass, team, directions, inventory) {
    this.x = parseInt(x);
    this.y = parseInt(y);
    this.previousX = this.x;
    this.previousY = this.y;
    this.size = parseInt(size);
    this.name = name;
    this.unitClass = unitClass;
    this.team = team;
    this.directions = directions;
    this.inventory = inventory;
    if(this.inventory.length > 0) {
      this.currentItem = inventory[0];
    }
    else {
      this.currentItem = null;
    }
    this.movementTiles = [];
    this.tempMovementTiles = [];
    this.totalRangeTiles = [];
    this.rangeTiles = [];
    this.tempRangeTiles = [];
    this.enemiesInMovementRange = [];
    this.enemiesInRange = [];
    this.filteredRangeTiles = [];
    this.attackTiles = [];
    this.state = "Ready";
    this.optionsArrow = 0;
    this.attackNum = 0;
    this.attackCounter = 0;
    this.finalStats = [];
    this.outcome = [];
    this.alive = true;
    
    if(this.unitClass == "Lord") {
      this.fullHealth = 18;
      this.strength = 5;
      this.skill = 3;
      this.speed = 7;
      this.luck = 7;
      this.defense = 7;
      this.baseResistance = 0;
      this.movement = 7;
      if(this.team == "Ally") {
        this.image = playerUnitImages[0];
      }
      else {
        this.image = enemyUnitImages[0];
      }
      this.staticImage = staticUnitImages[0];
    }
    else if(this.unitClass == "Mercenary") {
      this.fullHealth = 16;
      this.strength = 4;
      this.skill = 8;
      this.speed = 10;
      this.luck = 0;
      this.defense = 5;
      this.baseResistance = 0;
      this.movement = 7;
      if(this.team == "Ally") {
        this.image = playerUnitImages[1];
      }
      else {
        this.image = enemyUnitImages[1];
      }
      this.staticImage = staticUnitImages[1];
    }
    else if(this.unitClass == "Hero") {
      this.fullHealth = 24;
      this.strength = 8;
      this.skill = 14;
      this.speed = 14;
      this.luck = 0;
      this.defense = 8;
      this.baseResistance = 0;
      this.movement = 7;
      if(this.team == "Ally") {
        this.image = playerUnitImages[2];
      }
      else {
        this.image = enemyUnitImages[2];
      }
      this.staticImage = staticUnitImages[2];
    }
    else if(this.unitClass == "Thief") {
      this.fullHealth = 16;
      this.strength = 3;
      this.skill = 1;
      this.speed = 9;
      this.luck = 0;
      this.defense = 2;
      this.baseResistance = 0;
      this.movement = 7;
      if(this.team == "Ally") {
        this.image = playerUnitImages[3];
      }
      else {
        this.image = enemyUnitImages[3];
      }
      this.staticImage = staticUnitImages[3];
    }
    else if(this.unitClass == "Fighter") {
      this.fullHealth = 18;
      this.strength = 5;
      this.skill = 1;
      this.speed = 7;
      this.luck = 0;
      this.defense = 4;
      this.baseResistance = 0;
      this.movement = 6;
      if(this.team == "Ally") {
        this.image = playerUnitImages[4];
      }
      else {
        this.image = enemyUnitImages[4];
      }
      this.staticImage = staticUnitImages[4];
    }
    else if(this.unitClass == "Pirate") {
      this.fullHealth = 18;
      this.strength = 5;
      this.skill = 1;
      this.speed = 6;
      this.luck = 0;
      this.defense = 4;
      this.baseResistance = 0;
      this.movement = 6;
      if(this.team == "Ally") {
        this.image = playerUnitImages[5];
      }
      else {
        this.image = enemyUnitImages[5];
      }
      this.staticImage = staticUnitImages[5];
    }
    else if(this.unitClass == "Archer") {
      this.fullHealth = 16;
      this.strength = 4;
      this.skill = 1;
      this.speed = 4;
      this.luck = 0;
      this.defense = 5;
      this.baseResistance = 0;
      this.movement = 5;
      if(this.team == "Ally") {
        this.image = playerUnitImages[6];
      }
      else {
        this.image = enemyUnitImages[6];
      }
      this.staticImage = staticUnitImages[6];
    }
    else if(this.unitClass == "Sniper") {
      this.fullHealth = 24;
      this.strength = 7;
      this.skill = 10;
      this.speed = 14;
      this.luck = 0;
      this.defense = 7;
      this.baseResistance = 0;
      this.movement = 7;
      if(this.team == "Ally") {
        this.image = playerUnitImages[7];
      }
      else {
        this.image = enemyUnitImages[7];
      }
      this.staticImage = staticUnitImages[7];
    }
    else if(this.unitClass == "Hunter") {
      this.fullHealth = 18;
      this.strength = 6;
      this.skill = 1;
      this.speed = 5;
      this.luck = 0;
      this.defense = 3;
      this.baseResistance = 0;
      this.movement = 6;
      if(this.team == "Ally") {
        this.image = playerUnitImages[8];
      }
      else {
        this.image = enemyUnitImages[8];
      }
      this.staticImage = staticUnitImages[8];
    }
    else if(this.unitClass == "Horseman") {
      this.fullHealth = 16;
      this.strength = 4;
      this.skill = 1;
      this.speed = 7;
      this.luck = 0;
      this.defense = 4;
      this.baseResistance = 0;
      this.movement = 9;
      if(this.team == "Ally") {
        this.image = playerUnitImages[9];
      }
      else {
        this.image = enemyUnitImages[9];
      }
      this.staticImage = staticUnitImages[9];
    }
    else if(this.unitClass == "Cavalier") {
      this.fullHealth = 16;
      this.strength = 5;
      this.skill = 2;
      this.speed = 6;
      this.luck = 0;
      this.defense = 7;
      this.baseResistance = 0;
      this.movement = 9;
      if(this.team == "Ally") {
        this.image = playerUnitImages[10];
      }
      else {
        this.image = enemyUnitImages[10];
      }
      this.staticImage = staticUnitImages[10];
    }
    else if(this.unitClass == "Paladin") {
      this.fullHealth = 22;
      this.strength = 8;
      this.skill = 7;
      this.speed = 11;
      this.luck = 0;
      this.defense = 9;
      this.baseResistance = 0;
      this.movement = 10;
      if(this.team == "Ally") {
        this.image = playerUnitImages[11];
      }
      else {
        this.image = enemyUnitImages[11];
      }
      this.staticImage = staticUnitImages[11];
    }
    else if(this.unitClass == "Knight") {
      this.fullHealth = 16;
      this.strength = 5;
      this.skill = 1;
      this.speed = 3;
      this.luck = 0;
      this.defense = 11;
      this.baseResistance = 0;
      this.movement = 5;
      if(this.team == "Ally") {
        this.image = playerUnitImages[12];
      }
      else {
        this.image = enemyUnitImages[12];
      }
      this.staticImage = staticUnitImages[12];
    }
    else if(this.unitClass == "General") {
      this.fullHealth = 28;
      this.strength = 9;
      this.skill = 1;
      this.speed = 4;
      this.luck = 0;
      this.defense = 14;
      this.baseResistance = 0;
      this.movement = 5;
      if(this.team == "Ally") {
        this.image = playerUnitImages[13];
      }
      else {
        this.image = enemyUnitImages[13];
      }
      this.staticImage = staticUnitImages[13];
    }
    else if(this.unitClass == "Pegasus Knight") {
      this.fullHealth = 16;
      this.strength = 4;
      this.skill = 5;
      this.speed = 11;
      this.luck = 0;
      this.defense = 6;
      this.baseResistance = 0;
      this.movement = 8;
      if(this.team == "Ally") {
        this.image = playerUnitImages[14];
      }
      else {
        this.image = enemyUnitImages[14];
      }
      this.staticImage = staticUnitImages[14];
    }
    else if(this.unitClass == "Dracoknight") {
      this.fullHealth = 22;
      this.strength = 9;
      this.skill = 3;
      this.speed = 6;
      this.luck = 0;
      this.defense = 14;
      this.baseResistance = 0;
      this.movement = 10;
      if(this.team == "Ally") {
        this.image = playerUnitImages[15];
      }
      else {
        this.image = enemyUnitImages[15];
      }
      this.staticImage = staticUnitImages[15];
    }
    else if(this.unitClass == "Ballistician") {
      this.fullHealth = 20;
      this.strength = 5;
      this.skill = 1;
      this.speed = 3;
      this.luck = 0;
      this.defense = 14;
      this.baseResistance = 0;
      this.movement = 4;
      if(this.team == "Ally") {
        this.image = playerUnitImages[16];
      }
      else {
        this.image = enemyUnitImages[16];
      }
      this.staticImage = staticUnitImages[16];
    }
    else if(this.unitClass == "Mage") {
      this.fullHealth = 16;
      this.strength = 1;
      this.skill = 1;
      this.speed = 5;
      this.luck = 0;
      this.defense = 3;
      this.baseResistance = 0;
      this.movement = 6;
      if(this.team == "Ally") {
        this.image = playerUnitImages[17];
      }
      else {
        this.image = enemyUnitImages[17];
      }
      this.staticImage = staticUnitImages[17];
    }
    else if(this.unitClass == "Priest") {
      this.fullHealth = 16;
      this.strength = 1;
      this.skill = 1;
      this.speed = 1;
      this.luck = 0;
      this.defense = 3;
      this.baseResistance = 0;
      this.movement = 5;
      if(this.team == "Ally") {
        this.image = playerUnitImages[18];
      }
      else {
        this.image = enemyUnitImages[18];
      }
      this.staticImage = staticUnitImages[18];
    }
    else if(this.unitClass == "Bishop") {
      this.fullHealth = 22;
      this.strength = 3;
      this.skill = 1;
      this.speed = 14;
      this.luck = 0;
      this.defense = 8;
      this.baseResistance = 0;
      this.movement = 5;
      if(this.team == "Ally") {
        this.image = playerUnitImages[19];
      }
      else {
        this.image = enemyUnitImages[19];
      }
      this.staticImage = staticUnitImages[19];
    }
    else if(this.unitClass == "Manakete") {
      this.fullHealth = 18;
      this.health = this.fullHealth;
      this.strength = 1;
      this.skill = 1;
      this.speed = 1;
      this.luck = 0;
      this.defense = 3;
      this.baseResistance = 0;
      this.movement = 6;
      if(this.team == "Ally") {
        this.image = playerUnitImages[20];
      }
      else {
        this.image = enemyUnitImages[20];
      }
      this.staticImage = staticUnitImages[20];
    }
    else {
      this.fullHealth = 18;
      this.strength = 5;
      this.skill = 3;
      this.speed = 7;
      this.luck = 7;
      this.defense = 7;
      this.baseResistance = 0;
      this.movement = 7;
      if(this.team == "Ally") {
        this.image = playerUnitImages[0];
      }
      else {
        this.image = enemyUnitImages[0];
      }
      this.staticImage = staticUnitImages[0];
    }
    
    this.health = this.fullHealth;
    this.resistance = this.baseResistance;
    this.stats = [];
    this.calculateStats();
  }
  
  // Shows the name and class of the unit
  display(tempX, tempY, transparency) {
    if(button(20, 20, 150, 50)) {
      transparency = 100;
    }
    fill(0, transparency);
    stroke(255, transparency);
    strokeWeight(5);
    rect(20-tempX, 20-tempY, 150, 50, 10);
    textSize(20);
    textAlign(CENTER);
    if(this.team == "Ally") {
      fill(100, 100, 255, transparency);
    }
    else {
      fill(255, 50, 50, transparency);
    }
    stroke(0, transparency);
    strokeWeight(0);
    text(this.name, 95-tempX, 45-tempY);
    textSize(12);
    fill(255, transparency);
    text(this.unitClass, 95-tempX, 60-tempY);
    textAlign(LEFT);
  }
  
  // Displays different information based on the state of the unit
  details(tempX, tempY) {
    let transparency = 255;
    if(this.state != "Preattack" && this.state != "Attack") {
      if(button(20, 20, 150, 365)) {
        transparency = 100;
      }
      this.displayStats(tempX, tempY, transparency);
    }
    if(this.state == "Options") {
      this.options(tempX, tempY);
    }
    else if(this.state == "Preattack") {
      this.preattack(tempX, tempY);
    }
    else if(this.state == "Item") {
      this.itemOptions(tempX, tempY);
    }
  }
  
  // Shows the full stats of the unit
  displayStats(tempX, tempY, transparency) {
    let tempText = "HP: " + this.health + "/" + this.fullHealth +
      "\nSTR: " + this.strength +
      "\nSKL: " + this.skill +
      "\nSPD: " + this.speed +
      "\nLCK: " + this.luck +
      "\nDEF: " + this.defense +
      "\nRES: " + this.resistance +
      "\nMOV: " + this.movement;
    fill(255, transparency);
    stroke(255, transparency);
    strokeWeight(5);
    textAlign(LEFT)
    rect(20-tempX, 20-tempY, 150, 365, 10);
    this.display(tempX, tempY, transparency);
    fill(0, transparency);
    stroke(255, transparency);
    strokeWeight(5);
    rect(20-tempX, 90-tempY, 150, 175, 10);
    rect(20-tempX, 285-tempY, 150, 100, 10);
    textSize(15);
    fill(255, transparency);
    stroke(0, transparency);
    strokeWeight(0);
    text(tempText, 35-tempX, 115-tempY);
    let newColor = [];
    for(let i = 0; i < this.inventory.length; i++) {
      newColor = weaponColor(this.inventory[i].type);
      fill(newColor[0], newColor[1], newColor[2], transparency)
      text(this.inventory[i].name, 35-tempX, 310-tempY + i * 20);
    }
    textSize(20);
    textAlign(CENTER);
    fill(0, transparency);
    stroke(0, transparency);
    strokeWeight(0);
    text("STATS", 95-tempX, 88-tempY);
    textSize(18);
    text("INVENTORY", 95-tempX, 283-tempY);
  }
  
  // Shows options to attack, equip an item, or wait
  options(tempX, tempY) {
    fill(0);
    stroke(255);
    strokeWeight(5);
    rect(width-300-tempX, height-200-tempY, 250, 150, 20);
    textAlign(CENTER, CENTER);
    fill(255);
    stroke(255);
    strokeWeight(0);
    if(button(width-300, height-185, 250, 30)) {
      textSize(21);
    }
    else {
      textSize(20);
    }
    text("Attack", width-175-tempX, height-175-tempY);
    if(button(width-300, height-185 + 30, 250, 30)) {
      textSize(21);
    }
    else {
      textSize(20);
    }
    text("Item", width-175-tempX, height-145-tempY);
    if(button(width-300, height-185 + 60, 250, 30)) {
      textSize(21);
    }
    else {
      textSize(20);
    }
    text("Wait", width-175-tempX, height-115-tempY);
    textAlign(LEFT, BASELINE);
  }
  
  // When about to attack an enemy, shows the predicted stats
  preattack(tempX, tempY) {
    fill(255);
    stroke(255);
    strokeWeight(5);
    rect(50-tempX, height-250-tempY, 250, 200, 20);
    fill(0);
    rect(50-tempX, height-250-tempY, 250, 50, 20, 20, 10, 10);
    rect(50-tempX, height-200-tempY, 250, 50, 20);
    rect(50-tempX, height-100-tempY, 85, 50, 10, 5, 5, 20);
    rect(135-tempX, height-100-tempY, 80, 50, 5);
    rect(215-tempX, height-100-tempY, 85, 50, 5, 10, 20, 5);
    rect(50-tempX, height-200-tempY, 250, 85, 10);
    image(map[this.y][this.x].image, 70-tempX, height-180-tempY, 48, 48);
    image(this.image, 74-tempX, height-176-tempY, 40, 40);
    fill(0, 0);
    stroke(100, 100, 255);
    strokeWeight(2);
    rect(69-tempX, height-181-tempY, 50, 50, 5);
    
    textSize(22);
    textAlign(CENTER, BASELINE);
    fill(255);
    stroke(0);
    strokeWeight(0);
    text(this.currentItem.name, 175-tempX, height-218-tempY);
    
    if(button(255, height-240, 30, 30)) {
      triangle(258-tempX, height-237-tempY, 258-tempX, height-213-tempY, 282-tempX, height-225-tempY);
    }
    else {
      triangle(260-tempX, height-235-tempY, 260-tempX, height-215-tempY, 280-tempX, height-225-tempY);
    }
    if(button(65, height-240, 30, 30)) {
      triangle(92-tempX, height-237-tempY, 92-tempX, height-213-tempY, 68-tempX, height-225-tempY);
    }
    else {
      triangle(90-tempX, height-235-tempY, 90-tempX, height-215-tempY, 70-tempX, height-225-tempY);
    }
    
    textSize(20);
    fill(100, 100, 255);
    text(this.name, 210-tempX, height-170-tempY);
    textSize(15);
    fill(255);
    text(this.unitClass, 210-tempX, height-155-tempY);
    textSize(22);
    text("HP: " + this.health + "/" + this.fullHealth, 210-tempX, height-130-tempY);
    textSize(20);
    if(this.finalStats[0][4]) {
      if(this.finalStats[0][3]) {
        textAlign(RIGHT);
        text(this.finalStats[0][0], 105-tempX, height-67-tempY);
        textSize(12);
        fill(100, 255, 100);
        text("x2", 125-tempX, height-70-tempY);
      }
      else {
        text(this.finalStats[0][0], 92-tempX, height-67-tempY);
      }
      textAlign(CENTER);
      fill(255);
      textSize(20);
      text(this.finalStats[0][1], 175-tempX, height-67-tempY);
      text(this.finalStats[0][2], 258-tempX, height-67-tempY);
    }
    else {
      textAlign(CENTER);
      fill(255);
      textSize(20);
      text("-", 92-tempX, height-67-tempY);
      text("-", 175-tempX, height-67-tempY);
      text("-", 258-tempX, height-67-tempY);
    }
    fill(0);
    textSize(15);
    text("ATK", 92-tempX, height-102-tempY);
    text("HIT", 175-tempX, height-102-tempY);
    text("CRIT", 258-tempX, height-102-tempY);
    
    fill(255);
    stroke(255);
    strokeWeight(5);
    rect(width-300-tempX, height-250-tempY, 250, 200, 20);
    fill(0);
    rect(width-300-tempX, height-250-tempY, 250, 50, 20, 20, 10, 10);
    rect(width-300-tempX, height-100-tempY, 85, 50, 10, 5, 5, 20);
    rect(width-215-tempX, height-100-tempY, 80, 50, 5);
    rect(width-135-tempX, height-100-tempY, 85, 50, 5, 10, 20, 5);
    rect(width-300-tempX, height-200-tempY, 250, 85, 20, 20);
    image(map[currentTarget.y][currentTarget.x].image, width-280-tempX, height-180-tempY, 48, 48);
    image(currentTarget.image, width-276-tempX, height-176-tempY, 40, 40);
    fill(0, 0);
    stroke(255, 50, 50);
    strokeWeight(2);
    rect(width-281-tempX, height-181-tempY, 50, 50, 5);
    
    textSize(22);
    textAlign(CENTER, BASELINE);
    fill(255);
    stroke(0);
    strokeWeight(0);
    text(currentTarget.currentItem.name, width-175-tempX, height-218-tempY);
    
    textSize(20);
    fill(255, 50, 50);
    stroke(0);
    strokeWeight(0);
    text(currentTarget.name, width-140-tempX, height-170-tempY);
    textSize(15);
    fill(255);
    text(currentTarget.unitClass, width-140-tempX, height-155-tempY);
    textSize(22);
    text("HP: " + currentTarget.health + "/" + currentTarget.fullHealth, width-140-tempX, height-130-tempY);
    textSize(20);
    if(this.finalStats[1][4]) {
      if(this.finalStats[1][3]) {
        textAlign(RIGHT);
        text(this.finalStats[1][0], width-245-tempX, height-67-tempY);
        textSize(12);
        fill(100, 255, 100);
        text("x2", width-225-tempX, height-70-tempY);
      }
      else {
        text(this.finalStats[1][0], width-258-tempX, height-67-tempY);
      }
      textAlign(CENTER);
      fill(255);
      textSize(20);
      text(this.finalStats[1][1], width-175-tempX, height-67-tempY);
      text(this.finalStats[1][2], width-92-tempX, height-67-tempY);
    }
    else {
      textAlign(CENTER);
      fill(255);
      textSize(20);
      text("-", width-258-tempX, height-67-tempY);
      text("-", width-175-tempX, height-67-tempY);
      text("-", width-92-tempX, height-67-tempY);
    }
    fill(0);
    textSize(15);
    text("ATK", width-258-tempX, height-102-tempY);
    text("HIT", width-175-tempX, height-102-tempY);
    text("CRIT", width-92-tempX, height-102-tempY);
  }
  
  // Lets you equip an item in your inventory
  itemOptions(tempX, tempY) {
    fill(0);
    stroke(255);
    strokeWeight(5);
    rect(width-300-tempX, height-200-tempY, 250, 150, 20);
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(255);
    stroke(255);
    strokeWeight(0);
    for(let i = 0; i < this.inventory.length; i++) {
      fill(255);
      strokeWeight(0);
      if(this.inventory[i] === this.currentItem) {
        fill(255, 255, 50);
      }
      if(button(width-300, height-185 + i*30, 250, 30)) {
        textSize(21);
      }
      else {
        textSize(20);
      }
      text(this.inventory[i].name, width-175-tempX, height-175-tempY + i*30);
    }
    textAlign(LEFT, BASELINE);
  }
  
  // Draws the battle information during an attack
  drawAttack(i, temp) {
    fill(0);
    stroke(255);
    strokeWeight(5);
    rect(width/2-300, 50, 600, 150, 20);
    
    let tempText = "";
    if(temp) {
      if(this.outcome[0][i] == "Player") {
        if(this.outcome[1][i] == "Hit") {
          tempText = this.name + " landed an attack for " + this.finalStats[0][0] + " damage\nwith " + this.currentItem.name + ".";
        }
        else if(this.outcome[1][i] == "Crit") {
          tempText = this.name + " landed a critical attack for " + (this.finalStats[0][0] * 3) + "\ndamage with " + this.currentItem.name + ".";
        }
        else {
          tempText = this.name + " missed with " + this.currentItem.name + ".";
        }
      }
      else {
        if(this.outcome[1][i] == "Hit") {
          tempText = currentTarget.name + " landed an attack for " + this.finalStats[1][0] + " damage\nwith " + currentTarget.currentItem.name + ".";
        }
        else if(this.outcome[1][i] == "Crit") {
          tempText = currentTarget.name + "landed a critical attack for " + (this.finalStats[1][0] * 3) + "\ndamage with " + currentTarget.currentItem.name + ".";
        }
        else {
          tempText = currentTarget.name + " missed with " + currentTarget.currentItem.name + ".";
        }
      }
    }
    else {
      if(!this.alive) {
        if(this.team == "Ally") {
          tempText = this.name + " fell in battle.";
        }
        else {
          tempText = this.name + " has been defeated.";
        }
      }
      else if(!currentTarget.alive) {
        if(currentTarget.team == "Ally") {
          tempText = currentTarget.name + " fell in battle.";
        }
        else {
          tempText = currentTarget.name + " has been defeated.";
        }
      }
      else {
        tempText = currentTarget.name + " withstood the attack.";
      }
    }
    
    textAlign(LEFT);
    textSize(20);
    fill(255);
    stroke(255);
    strokeWeight(0);
    text(tempText, width/2-250, 100);
  }
  
  // The unit attacks an enemy unit
  attack() {
    if(this.attackCounter == 0) {
      this.attackTimer(0, 0, false);
    }
    if(this.attackCounter == 1) {
      this.attackTimer(90, 0, true);
    }
    for(let i = 0; i < this.outcome[0].length; i++) {
      if(this.attackCounter == 2+i*2) {
        this.attackTimer(90, 0, false);
        this.drawAttack(i, true);
      }
      else if(this.attackCounter == 3+i*2) {
        this.attackTimer(60, i+1, true);
      }
    }
    if(this.attackCounter == 2 + this.outcome[0].length*2) {
      this.attackTimer(270);
      this.drawAttack(0, false);
    }
    if(this.attackCounter == 3 + this.outcome[0].length*2) {
      this.attackTimer(30);
    }
    if(this.attackCounter > 3 + this.outcome[0].length*2) {
      this.state = "Wait";
    }
    if(this.alive) {
      image(this.image, 200, height - 200, 144, 144);
      fill(100, 0, 0);
      stroke(255);
      strokeWeight(2);
      rect(190, height-240, 164, 20);
      colorMode(HSB, 255);
      fill(85 * (this.health/this.fullHealth), 255, 255);
      rect(190, height-240, 164 * (this.health/this.fullHealth), 20);
      colorMode(RGB, 255);
    }
    if(currentTarget.alive) {
      image(currentTarget.image, width-356, height-200, 144, 144);
      fill(100, 0, 0);
      stroke(255);
      strokeWeight(2);
      rect(width-366, height-240, 164, 20);
      colorMode(HSB, 255);
      fill(85 * (currentTarget.health/currentTarget.fullHealth), 255, 255);
      rect(width-366, height-240, 164 * (currentTarget.health/currentTarget.fullHealth), 20);
      colorMode(RGB, 255);
    }
  }
  
  // This is the timer to wait for an attack to finish before starting the next one
  attackTimer(num, i, damage) {
    if(num <= frameCount-this.attackNum || attackSkip || skip) {
      this.attackNum = frameCount;
      this.attackCounter += 1;
      if(damage && i < this.outcome[0].length) {
        this.damage(i);
      }
    }
  }
  
  // Deals damage to a unit
  damage(i) {
    if(this.alive && currentTarget.alive) {
      if(this.outcome[0][i] == "Player") {
        if(this.outcome[1][i] == "Hit") {
          currentTarget.health -= this.finalStats[0][0];
        }
        else if(this.outcome[1][i] == "Crit") {
          currentTarget.health -= (this.finalStats[0][0] * 3);
        }
        if(currentTarget.health <= 0) {
          currentTarget.health = 0;
          currentTarget.alive = false;
        }
      }
      else {
        if(this.outcome[1][i] == "Hit") {
          this.health -= this.finalStats[1][0];
        }
        else if(this.outcome[1][i] == "Crit") {
          this.health -= (this.finalStats[1][0] * 3);
        }
        if(this.health <= 0) {
          this.health = 0;
          this.alive = false;
        }
      }
    }
    else {
      this.attackCounter = 2 + this.outcome[0].length*2;
    }
  }
  
  // The outcome of the battle
  battleOutcome() {
    let sequence = [[], []];
    if(this.finalStats[0][4]) {
      sequence[0].push("Player");
      sequence[1].push(this.battle(this.finalStats[0]));
    }
    if(this.finalStats[1][4]) {
      sequence[0].push("Enemy");
      sequence[1].push(this.battle(this.finalStats[1]));
    }
    if(this.finalStats[0][3] && this.finalStats[0][4]) {
      sequence[0].push("Player");
      sequence[1].push(this.battle(this.finalStats[0]));
    }
    if(this.finalStats[1][3] && this.finalStats[1][4]) {
      sequence[0].push("Enemy");
      sequence[1].push(this.battle(this.finalStats[1]));
    }
    return sequence;
  }
  
  // Randomly determines if an attack hits or misses
  battle(s) {
    let hit = random(100);
    let crit = random(100);
    if(s[1] > hit) {
      if(s[2] > crit) {
        return "Crit";
      }
      else {
        return "Hit";
      }
    }
    else {
      return "Miss";
    }
  }
  
  // This is used to sequence the attacks
  attackReset() {
    this.attackCounter = 0;
  }
  
  // Draws the unit
  drawUnit(newSize) {
    this.size = newSize;
    if(this.state == "Wait") {
      image(this.staticImage, this.x * this.size, this.y * this.size, this.size, this.size);
    }
    else {
      image(this.image, this.x * this.size, this.y * this.size, this.size, this.size);
    }
    colorMode(RGB, 255);
    fill(100, 0, 0);
    strokeWeight(0);
    rect(this.x * this.size, (this.y+1) * this.size - 3, this.size, 3);
    colorMode(HSB, 255);
    fill(85 * (this.health/this.fullHealth), 255, 255);
    rect(this.x * this.size, (this.y+1) * this.size - 3, this.size * (this.health/this.fullHealth), 3);
    colorMode(RGB, 255);
  }
  
  // Calculates the movement tiles
  checkMove() {
    let tempList;
    this.movementTiles = [];
    this.enemiesInMovementRange = [];
    this.tempMovementTiles = [[this.x, this.y, this.movement]];
    while(this.tempMovementTiles.length > 0) {
      this.checkRight(this.tempMovementTiles[0], true);
      this.checkDown(this.tempMovementTiles[0], true);
      this.checkLeft(this.tempMovementTiles[0], true);
      this.checkUp(this.tempMovementTiles[0], true);      
      this.movementTiles.push(this.tempMovementTiles[0]);
      this.tempMovementTiles.shift();
      tempList = this.filterList(this.movementTiles, this.tempMovementTiles);
      this.movementTiles = tempList[0];
      this.tempMovementTiles = tempList[1];
    }
  }
  
  // Calculates the range tiles
  // tempX {int} - The x coordinate
  // tempY {int} - The y coordinate
  // range {int} - The range used to calculate which tiles to add to the list
  checkRange(tempX, tempY, range) {
    let tempList;
    this.rangeTiles = [];
    this.tempRangeTiles = [[tempX, tempY, range]];
    while(this.tempRangeTiles.length > 0) {
      this.checkRight(this.tempRangeTiles[0], false);
      this.checkDown(this.tempRangeTiles[0], false);
      this.checkLeft(this.tempRangeTiles[0], false);
      this.checkUp(this.tempRangeTiles[0], false);
      this.rangeTiles.push(this.tempRangeTiles[0]);
      this.tempRangeTiles.shift();
      tempList = this.filterList(this.rangeTiles, this.tempRangeTiles);
      this.rangeTiles = tempList[0];
      this.tempRangeTiles = tempList[1];
    }
  }
  
  // Calculates the total range tiles
  checkDisplayRange() {
    let tempList;
    let add = false;
    this.totalRangeTiles = [];
    this.filteredRangeTiles = [];
    for(let i = 0; i < this.movementTiles.length; i++) {
      this.checkRange(this.movementTiles[i][0], this.movementTiles[i][1], this.getMaxRange());
      this.totalRangeTiles = this.totalRangeTiles.concat(this.rangeTiles);
      tempList = this.filterList(this.totalRangeTiles, this.rangeTiles);
      this.totalRangeTiles = tempList[0];
      this.rangeTiles = tempList[1];
    }
    for(let i = 0; i < this.enemiesInMovementRange.length; i++) {
      if(this.getMaxRange() > 0) {
        this.totalRangeTiles.push([this.enemiesInMovementRange[i].x, this.enemiesInMovementRange[i].y, 0]);
      }
    }
    tempList = this.filterList(this.movementTiles, this.totalRangeTiles);
    this.filteredRangeTiles = tempList[1];
    this.totalRangeTiles = this.totalRangeTiles.concat(this.movementTiles);
    for(let i = 0; i < this.filteredRangeTiles.length; i++) {
      if(map[this.filteredRangeTiles[i][1]][this.filteredRangeTiles[i][0]].movement < 0) {
        this.filteredRangeTiles.splice(i, 1);
        i--;
      }
    }
    let team = this.yourTeam();
    for(let i = 0; i < team.length; i++) {
      for(let j = 0; j < this.filteredRangeTiles.length; j++) {
        if(team[i].x == this.filteredRangeTiles[j][0] && team[i].y == this.filteredRangeTiles[j][1] && !(this.x == team[i].x && this.y == team[i].y)) {
          this.filteredRangeTiles.splice(j, 1);
          j--;
        }
      }
    }
  }
  
  // Finds the maximum range a unit has based on their weapons
  getMaxRange() {
    let maxRange = 0;
    if(this.inventory.length > 0) {
      maxRange = this.inventory[0].range;
      for(let i = 1; i < this.inventory.length; i++) {
        if(this.inventory[i].range > maxRange) {
          maxRange = this.inventory[i].range;
        }
      }
    }
    return maxRange;
  }
  
  // Checks if a unit can move another space to the right
  checkRight(list, move) {
    let tempX = list[0] + 1;
    let tempY = list[1];
    let mov = list[2];
    if(tempX < map[0].length) {
      if(mov - map[tempY][tempX].movement >= 0 && map[tempY][tempX].movement >= 0 && move) {
        this.addMovement(tempX, tempY, mov);
      }
      else if(!move && mov > 0) {
        this.tempRangeTiles.push([tempX, tempY, mov - 1]);
      }
    }
  }
  
  // Checks if a unit can move another space down
  checkDown(list, move) {
    let tempX = list[0];
    let tempY = list[1] + 1;
    let mov = list[2];
    if(tempY < map.length) {
      if(mov - map[tempY][tempX].movement >= 0 && map[tempY][tempX].movement >= 0 && move) {
        this.addMovement(tempX, tempY, mov);
      }
      else if(!move && mov > 0) {
        this.tempRangeTiles.push([tempX, tempY, mov - 1]);
      }
    }
  }
  
  // Checks if a unit can move another space to the left
  checkLeft(list, move) {
    let tempX = list[0] - 1;
    let tempY = list[1];
    let mov = list[2];
    if(tempX >= 0) {
      if(mov - map[tempY][tempX].movement >= 0 && map[tempY][tempX].movement >= 0 && move) {
        this.addMovement(tempX, tempY, mov);
      }
      else if(!move && mov > 0) {
        this.tempRangeTiles.push([tempX, tempY, mov - 1]);
      }
    }
  }
  
  // Checks if a unit can move another space up
  checkUp(list, move) {
    let tempX = list[0];
    let tempY = list[1] - 1;
    let mov = list[2];
    if(tempY >= 0) {
      if(mov - map[tempY][tempX].movement >= 0 && map[tempY][tempX].movement >= 0 && move) {
        this.addMovement(tempX, tempY, mov);
      }
      else if(!move && mov > 0) {
        this.tempRangeTiles.push([tempX, tempY, mov - 1]);
      }
    }
  }
  
  // A unit cannot move passed an enemy unit, instead they have to go around. This prevents you from doing so.
  addMovement(tempX, tempY, mov) {
    let tempTeam = this.otherTeam();
    let tempUnit;
    let unit = false;
    for(let i = 0; i < tempTeam.length; i++) {
      if(tempX == tempTeam[i].x && tempY == tempTeam[i].y) {
        tempUnit = tempTeam[i];
        unit = true;
      }
    }
    if(unit) {
      this.enemiesInMovementRange.push(tempUnit);
    }
    else {
      this.tempMovementTiles.push([tempX, tempY, mov - map[tempY][tempX].movement]);
    }
  }
  
  // Takes out duplicate tiles
  filterList(list1, list2) {
    for(let i = 0; i < list1.length; i++) {
      for(let j = 0; j < list2.length; j++) {
        if(list1[i][0] == list2[j][0] && list1[i][1] == list2[j][1]) {
          list2.splice(j, 1);
          j--;
        }
      }
    }
    for(let i = 0; i < list2.length; i++) {
      for(let j = i+1; j < list2.length; j++) {
        if(list2[i][0] == list2[j][0] && list2[i][1] == list2[j][1]) {
          if(list2[i][2] >= list2[j][2]) {
            list2.splice(j, 1);
            j--;
          }
          else {
            list2.splice(i, 1);
            j = i + 1;
          }
        }
      }
    }
    return [list1, list2];
  }
  
  // Changes the current item
  switchItem(num) {
    let index = 0;
    for(let i = 0; i < this.inventory.length; i++) {
      if(this.currentItem === this.inventory[i]) {
        index = i+num;
      }
    }
    if(index >= this.inventory.length) {
      index = index % this.inventory.length;
    }
    else if(index < 0) {
      index = this.inventory.length+index;
    }
    this.currentItem = this.inventory[index];
    this.battleStats();
  }
  
  // Adds the stats of the current weapon to the stats of the unit
  calculateStats() {
    let totalStrength = this.strength + this.currentItem.might;
    let totalHit = this.skill + this.currentItem.hit;
    let totalCritical = (this.skill + this.luck)/2 + this.currentItem.critical;
    let totalSpeed = this.speed - this.currentItem.weight;
    let totalDefense = this.defense + map[this.y][this.x].defense;
    let totalEvade = this.speed + map[this.y][this.x].avoidance;
    if(totalSpeed < 0) {
      totalSpeed = 0;
    }
    this.stats = [totalStrength, totalHit, totalCritical, totalSpeed, totalDefense, totalEvade];
  }
  
  // Compares and calculates the stats between the unit and an enemy unit
  battleStats() {
    this.calculateStats();
    let playerStrength = this.stats[0] - currentTarget.stats[4];
    let enemyStrength = currentTarget.stats[0] - this.stats[4];
    if(playerStrength < 0) {
      playerStrength = 0;
    }
    if(enemyStrength < 0) {
      enemyStrength = 0;
    }
    if(this.currentItem.type == "Sword") {
      if(currentTarget.currentItem.type == "Axe") {
        playerStrength = Math.ceil(playerStrength * 1.5);
      }
      else {
        enemyStrength = Math.ceil(enemyStrength * 1.5);
      }
    }
    else if(this.currentItem.type == "Lance") {
      if(currentTarget.currentItem.type == "Sword") {
        playerStrength = Math.ceil(playerStrength * 1.5);
      }
      else {
        enemyStrength = Math.ceil(enemyStrength * 1.5);
      }
    }
    else if(this.currentItem.type == "Axe") {
      if(currentTarget.currentItem.type == "Lance") {
        playerStrength = Math.ceil(playerStrength * 1.5);
      }
      else {
        enemyStrength = Math.ceil(enemyStrength * 1.5);
      }
    }
    for(let i = 0; i < this.currentItem.effective.length; i++) {
      if(this.currentItem.effective[i] == currentTarget.unitClass) {
        playerStrength *= 3;
      }
    }
    for(let i = 0; i < currentTarget.currentItem.effective.length; i++) {
      if(currentTarget.currentItem.effective[i] == this.unitClass) {
        enemyStrength *= 3;
      }
    }
    let playerHit = this.stats[1] - currentTarget.stats[5];
    let enemyHit = currentTarget.stats[1] - this.stats[5];
    if(playerHit < 0) {
      playerHit = 0;
    }
    if(enemyHit < 0) {
      enemyHit = 0;
    }
    if(playerHit > 100) {
      playerHit = 100;
    }
    if(enemyHit > 100) {
      enemyHit = 100;
    }
    let playerCrit = Math.ceil(this.stats[2] - currentTarget.luck);
    let enemyCrit = Math.ceil(currentTarget.stats[2] - this.luck);
    if(playerCrit < 0) {
      playerCrit = 0;
    }
    if(enemyCrit < 0) {
      enemyCrit = 0;
    }
    if(playerCrit > 100) {
      playerCrit = 100;
    }
    if(enemyCrit > 100) {
      enemyCrit = 100;
    }
    let playerDouble = false;
    let enemyDouble = false;
    if(this.stats[3] > currentTarget.stats[3]) {
      playerDouble = true;
    }
    else if(this.stats[3] < currentTarget.stats[3]) {
      enemyDouble = true;
    }
    let playerAttack = false;
    let enemyAttack = false;
    let distance = this.distance();
    if(this.currentItem.range >= distance) {
      playerAttack = true;
    }
    if(currentTarget.currentItem.range >= distance) {
      enemyAttack = true;
    }
    this.finalStats = [[playerStrength, playerHit, playerCrit, playerDouble, playerAttack], [enemyStrength, enemyHit, enemyCrit, enemyDouble, enemyAttack]];
  }
  
  // The distance of tiles between 2 units
  distance() {
    let tempX = Math.abs(this.x - currentTarget.x);
    let tempY = Math.abs(this.y - currentTarget.y);
    return tempX + tempY;
  }
  
  // The distance of tiles between a position on the map and an enemy unit
  newDistance(newX, newY) {
    let tempX = Math.abs(newX - currentTarget.x);
    let tempY = Math.abs(newY - currentTarget.y);
    return tempX + tempY;
  }
  
  // Draws the movement tiles
  drawMovTiles(newSize) {
    this.size = newSize;
    fill(100, 100, 255, 200);
    stroke(0);
    strokeWeight(0);
    if(this.state == "Ready") {
      for(let i = 0; i < this.movementTiles.length; i++) {
        rect(this.movementTiles[i][0] * this.size + 1, this.movementTiles[i][1] * this.size + 1, this.size-2, this.size-2);
      }
    }
  }
  
  // Draws the range tiles
  drawRangeTiles(newSize) {
    this.size = newSize;
    fill(255, 100, 100, 200);
    stroke(0);
    strokeWeight(0);
    if(this.state == "Ready") {
      for(let i = 0; i < this.filteredRangeTiles.length; i++) {
        rect(this.filteredRangeTiles[i][0] * this.size + 1, this.filteredRangeTiles[i][1] * this.size + 1, this.size-2, this.size-2);
      }
    }
    else if(this.state == "Select" || this.state == "Item" || this.state == "Wait"){
      for(let i = 0; i < this.rangeTiles.length; i++) {
        rect(this.rangeTiles[i][0] * this.size + 1, this.rangeTiles[i][1] * this.size + 1, this.size-2, this.size-2);
      }
    }
  }
  
  // Moves the unit around the map
  move(tempX, tempY) {
    let canMove = false;
    for(let i = 0; i < this.movementTiles.length; i++) {
      if(this.movementTiles[i][0] == tempX && this.movementTiles[i][1] == tempY) {
        canMove = true;
      }
    }
    if(canMove && this.state == "Ready") {
      this.state = "Options";
      this.previousX = this.x;
      this.previousY = this.y;
      this.x = tempX;
      this.y = tempY;
      this.checkRange(this.x, this.y, this.getMaxRange());
      let team = this.yourTeam();
      for(let i = 0; i < team.length; i++) {
        for(let j = 0; j < this.rangeTiles.length; j++) {
          if(team[i].x == this.rangeTiles[j][0] && team[i].y == this.rangeTiles[j][1] && !(this.x == team[i].x && this.y == team[i].y)) {
            this.rangeTiles.splice(j, 1);
            j--;
          }
        }
      }
      return true;
    }
    return false;
  }
  
  // Used to undo a move. Once a unit attacks, it can't move again until the next turn.
  unMove() {
    this.state = "Ready";
    this.x = this.previousX;
    this.y = this.previousY;
  }
  
  // The menu options
  menu() {
    let options = false;
    if(button(width-300, height-185, 250, 30)) {
      this.state = "Select";
      options = true;
    }
    if(button(width-300, height-185 + 30, 250, 30)) {
      this.state = "Item";
      options = true;
    }
    if(button(width-300, height-185 + 60, 250, 30)) {
      this.state = "Wait";
      options = true;
    }
    return options;
  }
  
  // Changes to the select state
  menuAttack() {
    this.state = "Select";
  }
  
  // Goes back from the item menu to options
  backToOptions() {
    this.state = "Options";
  }
  
  // Goes back from the preattack state to the select state
  backToSelect() {
    this.state = "Select";
  }
  
  // Changes the current item
  itemMenu() {
    let item = false;
    for(let i = 0; i < this.inventory.length; i++) {
      if(button(width-300, height-185 + i*30, 250, 30)) {
        this.currentItem = this.inventory[i];
        item = true;
        this.calculateStats();
      }
    }
    return item;
  }
  
  // When in the select state you can select an enemy in your range to attack
  select(tempX, tempY) {
    let canSelect = false;
    for(let i = 0; i < this.rangeTiles.length; i++) {
      if(this.rangeTiles[i][0] == tempX && this.rangeTiles[i][1] == tempY && currentTarget.x == tempX && currentTarget.y == tempY) {
        canSelect = true;
      }
    }
    if(canSelect && this.state == "Select") {
      this.battleStats();
      this.state = "Preattack";
      return true;
    }
    return false;
  }
  
  // Goes back to options
  unSelect() {
    this.state = "Options";
  }
  
  // Enters the attack state
  enterAttack() {
    this.outcome = this.battleOutcome();
    this.state = "Attack";
  }
  
  // Auto moves the unit
  autoMove() {
    this.checkRange(this.x, this.y, this.getMaxRange());
    let yourTeam = this.yourTeam();
    let otherTeam = this.otherTeam();
    this.enemiesInRange = [];
    this.attackTiles = [];
    for(let i = 0; i < yourTeam.length; i++) {
      for(let j = 0; j < this.rangeTiles.length; j++) {
        if(yourTeam[i].x == this.rangeTiles[j][0] && yourTeam[i].y == this.rangeTiles[j][1] && !(this.x == yourTeam[i].x && this.y == yourTeam[i].y)) {
          this.rangeTiles.splice(j, 1);
          j--;
        }
      }
    }
    if(this.directions == "Stop") {
      for(let i = 0; i < otherTeam.length; i++) {
        for(let j = 0; j < this.rangeTiles.length; j++) {
          if(otherTeam[i].x == this.rangeTiles[j][0] && otherTeam[i].y == this.rangeTiles[j][1]) {
            this.enemiesInRange.push(otherTeam[i]);
          }
        }
      }
    }
    else if(this.directions == "Attack") {
      for(let i = 0; i < otherTeam.length; i++) {
        for(let j = 0; j < this.totalRangeTiles.length; j++) {
          if(otherTeam[i].x == this.totalRangeTiles[j][0] && otherTeam[i].y == this.totalRangeTiles[j][1]) {
            this.enemiesInRange.push(otherTeam[i]);
          }
        }
      }
    }
    if(this.enemiesInRange.length > 0) {
      this.attackTiles = [];
      let lowHealth = this.enemiesInRange[0];
      let lowDefense = this.enemiesInRange[0];
      let lowResistance = this.enemiesInRange[0];
      let lord = false;
      let normalItems = [];
      let magicItems = [];
      let itemsInRange = [];
      for(let i = 0; i < this.enemiesInRange.length; i++) {
        if(this.enemiesInRange[i].health < lowHealth.health) {
          lowHealth = this.enemiesInRange[i];
        }
        if(this.enemiesInRange[i].defense < lowDefense.defense) {
          lowDefense = this.enemiesInRange[i];
        }
        if(this.enemiesInRange[i].resistance < lowResistance.resistance) {
          lowResistance = this.enemiesInRange[i];
        }
        if(this.enemiesInRange[i] == otherTeam[0]) {
          lord = true;
        }
      }
      if(lord) {
        currentTarget = otherTeam[0];
      }
      else if(lowHealth.health / lowHealth.fullHealth < 0.25) {
        currentTarget = lowHealth;
      }
      else if(magicItems.length > 0) {
        currentTarget = lowResistance;
      }
      else {
        currentTarget = lowDefense;
      }
      for(let i = 0; i < this.totalRangeTiles.length; i++) {
        this.attackTiles.push([this.totalRangeTiles[i][0], this.totalRangeTiles[i][1], this.newDistance(this.totalRangeTiles[i][0], this.totalRangeTiles[i][1])]);
      }
      let newAttackTiles = [];
      for(let i = 0; i < this.movementTiles.length; i++) {
        for(let j = 0; j < this.attackTiles.length; j++) {
          let newTile = true;
          let team = this.yourTeam();
          for(let k = 0; k < team.length; k++) {
            if(team[k].x == this.movementTiles[i][0] && team[k].y == this.movementTiles[i][1] && !(this.x == team[k].x && this.y == team[k].y)) {
              newTile = false;
            }
          }
          if(this.movementTiles[i][0] == this.attackTiles[j][0] && this.movementTiles[i][1] == this.attackTiles[j][1] && newTile) {
            newAttackTiles.push(this.attackTiles[j])
          }
        }
      }
      this.attackTiles = newAttackTiles;
      for(let i = 0; i < this.inventory.length; i++) {
        if(this.directions == "Stop") {
          if(this.inventory[i].type == "Magic" && this.inventory[i].range >= this.distance()) {
            magicItems.push(this.inventory[i]);
          }
          else if(this.inventory[i].range >= this.distance()){
            normalItems.push(this.inventory[i]);
          }
          if(this.inventory[i].range >= this.distance()){
            itemsInRange.push(this.inventory[i]);
          }
        }
        else if(this.directions == "Attack") {
          for(let j = 0; j < this.attackTiles.length; j++) {
            if(this.inventory[i].type == "Magic" && this.inventory[i].range >= this.attackTiles[j][2]) {
              magicItems.push(this.inventory[i]);
            }
            else if(this.inventory[i].range >= this.attackTiles[j][2]){
              normalItems.push(this.inventory[i]);
            }
            if(this.inventory[i].range >= this.attackTiles[j][2]) {
              itemsInRange.push(this.inventory[i]);
              j = this.attackTiles.length;
            }
          }
        }
      }
      if(itemsInRange.length > 0) {
        if(lord) {
          this.currentItem = random(itemsInRange);
        }
        else if(lowHealth.health / lowHealth.fullHealth < 0.25) {
          this.currentItem = random(itemsInRange);
        }
        else if(magicItems.length > 0) {
          this.currentItem = random(magicItems);
        }
        else {
          this.currentItem = random(normalItems);
        }
        if(this.directions == "Attack") {
          let tempRange = this.currentItem.range;
          while(tempRange > 0) {
            let tempAttackTiles = [];
            for(let i = 0; i < this.attackTiles.length; i++) {
              if(this.attackTiles[i][2] == tempRange) {
                tempAttackTiles.push(this.attackTiles[i]);
              }
            }
            if(tempAttackTiles.length > 0) {
              let tile = random(tempAttackTiles);
              this.x = tile[0];
              this.y = tile[1];
              tempRange = 0;
            }
            else {
              tempRange--;
            }
          }
        }
        this.battleStats();
        this.state = "AutoAttack";
      }
      else {
        this.state = "Wait";
      }
    }
    else {
      this.state = "Wait";
    }
  }
  
  // Returns the list of units on the same team
  yourTeam() {
    if(this.team == "Ally") {
      return playerUnits;
    }
    return enemyUnits;
  }
  
  // Returns the list of units on the enemy team
  otherTeam() {
    if(this.team == "Ally") {
      return enemyUnits;
    }
    return playerUnits;
  }
  
  // Resets the units after the turn ends
  newTurn() {
    this.state = "Ready";
  }
}

// Items that can be used by units
class Item {
  constructor(name) {
    this.name = name;
    this.effective = [];
    if(this.name == "Iron Sword") {
      this.image = "";
      this.type = "Sword";
      this.weight = 2;
      this.might = 5;
      this.hit = 100;
      this.critical = 0;
      this.range = 1;
    }
    else if(this.name == "Steel Sword") {
      this.image = "";
      this.type = "Sword";
      this.weight = 4;
      this.might = 8;
      this.hit = 80;
      this.critical = 0;
      this.range = 1;
    }
    else if(this.name == "Silver Sword") {
      this.image = "";
      this.type = "Sword";
      this.weight = 3;
      this.might = 12;
      this.hit = 100;
      this.critical = 0;
      this.range = 1;
    }
    else if(this.name == "Killing Edge") {
      this.image = "";
      this.type = "Sword";
      this.weight = 2;
      this.might = 8;
      this.hit = 100;
      this.critical = 20;
      this.range = 1;
    }
    else if(this.name == "Levin Sword") {
      this.image = "";
      this.type = "Sword";
      this.weight = 2;
      this.might = 7;
      this.hit = 90;
      this.critical = 0;
      this.range = 2;
    }
    else if(this.name == "Cursed Sword") {
      this.image = "";
      this.type = "Sword";
      this.weight = 5;
      this.might = 17;
      this.hit = 100;
      this.critical = 0;
      this.range = 1;
    }
    else if(this.name == "Wyrmslayer") {
      this.image = "";
      this.type = "Sword";
      this.weight = 2;
      this.might = 6;
      this.hit = 80;
      this.critical = 0;
      this.range = 1;
      this.effective.push("Dracoknight");
      this.effective.push("Manakete");
    }
    else if(this.name == "Armorslayer") {
      this.image = "";
      this.type = "Sword";
      this.weight = 2;
      this.might = 5;
      this.hit = 80;
      this.critical = 0;
      this.range = 1;
      this.effective.push("Knight");
      this.effective.push("Paladin");
      this.effective.push("General");
    }
    else if(this.name == "Rapier") {
      this.image = "";
      this.type = "Sword";
      this.weight = 1;
      this.might = 5;
      this.hit = 100;
      this.critical = 10;
      this.range = 1;
      this.effective.push("Cavalier");
      this.effective.push("Knight");
      this.effective.push("General");
    }
    else if(this.name == "Mercurius") {
      this.image = "";
      this.type = "Sword";
      this.weight = 1;
      this.might = 18;
      this.hit = 100;
      this.critical = 10;
      this.range = 1;
    }
    else if(this.name == "Falchion") {
      this.image = "";
      this.type = "Sword";
      this.weight = 3;
      this.might = 10;
      this.hit = 100;
      this.critical = 0;
      this.range = 1;
      this.effective.push("Manakete");
    }
    else if(this.name == "Iron Lance") {
      this.image = "";
      this.type = "Lance";
      this.weight = 6;
      this.might = 8;
      this.hit = 80;
      this.critical = 0;
      this.range = 1;
    }
    else if(this.name == "Silver Lance") {
      this.image = "";
      this.type = "Lance";
      this.weight = 7;
      this.might = 12;
      this.hit = 80;
      this.critical = 0;
      this.range = 1;
    }
    else if(this.name == "Ridersbane") {
      this.image = "";
      this.type = "Lance";
      this.weight = 5;
      this.might = 5;
      this.hit = 90;
      this.critical = 0;
      this.range = 1;
      this.effective.push("Cavalier");
      this.effective.push("Horseman");
      this.effective.push("Paladin");
    }
    else if(this.name == "Javelin") {
      this.image = "";
      this.type = "Lance";
      this.weight = 6;
      this.might = 5;
      this.hit = 70;
      this.critical = 0;
      this.range = 2;
    }
    else if(this.name == "Gradivus") {
      this.image = "";
      this.type = "Lance";
      this.weight = 4;
      this.might = 20;
      this.hit = 100;
      this.critical = 0;
      this.range = 2;
    }
    else if(this.name == "Iron Axe") {
      this.image = "";
      this.type = "Axe";
      this.weight = 7;
      this.might = 7;
      this.hit = 80;
      this.critical = 0;
      this.range = 1;
    }
    else if(this.name == "Steel Axe") {
      this.image = "";
      this.type = "Axe";
      this.weight = 9;
      this.might = 9;
      this.hit = 70;
      this.critical = 0;
      this.range = 1;
    }
    else if(this.name == "Hammer") {
      this.image = "";
      this.type = "Axe";
      this.weight = 6;
      this.might = 6;
      this.hit = 70;
      this.critical = 0;
      this.range = 1;
      this.effective.push("Knight");
      this.effective.push("General");
    }
    else if(this.name == "Cursed Axe") {
      this.image = "";
      this.type = "Axe";
      this.weight = 14;
      this.might = 20;
      this.hit = 70;
      this.critical = 0;
      this.range = 1;
    }
    else if(this.name == "Hand Axe") {
      this.image = "";
      this.type = "Axe";
      this.weight = 9;
      this.might = 5;
      this.hit = 60;
      this.critical = 0;
      this.range = 2;
    }
    else if(this.name == "Iron Bow") {
      this.image = "";
      this.type = "Bow";
      this.weight = 1;
      this.might = 4;
      this.hit = 90;
      this.critical = 0;
      this.range = 2;
      this.effective.push("Pegasus Knight");
      this.effective.push("Dracoknight");
    }
    else if(this.name == "Steel Bow") {
      this.image = "";
      this.type = "Bow";
      this.weight = 3;
      this.might = 7;
      this.hit = 80;
      this.critical = 0;
      this.range = 2;
      this.effective.push("Pegasus Knight");
      this.effective.push("Dracoknight");
    }
    else if(this.name == "Silver Bow") {
      this.image = "";
      this.type = "Bow";
      this.weight = 6;
      this.might = 11;
      this.hit = 80;
      this.critical = 0;
      this.range = 2;
      this.effective.push("Pegasus Knight");
      this.effective.push("Dracoknight");
    }
    else if(this.name == "Bowgun") {
      this.image = "";
      this.type = "Bow";
      this.weight = 2;
      this.might = 5;
      this.hit = 100;
      this.critical = 20;
      this.range = 2;
      this.effective.push("Pegasus Knight");
      this.effective.push("Dracoknight");
    }
    else if(this.name == "Parthia") {
      this.image = "";
      this.type = "Bow";
      this.weight = 3;
      this.might = 17;
      this.hit = 100;
      this.critical = 0;
      this.range = 2;
      this.effective.push("Pegasus Knight");
      this.effective.push("Dracoknight");
    }
    else if(this.name == "Fire") {
      this.image = "";
      this.type = "Magic";
      this.weight = 0;
      this.might = 5;
      this.hit = 100;
      this.critical = 0;
      this.range = 2;
    }
    else if(this.name == "Thunder") {
      this.image = "";
      this.type = "Magic";
      this.weight = 1;
      this.might = 6;
      this.hit = 90;
      this.critical = 0;
      this.range = 2;
    }
    else if(this.name == "Blizzard") {
      this.image = "";
      this.type = "Magic";
      this.weight = 2;
      this.might = 7;
      this.hit = 80;
      this.critical = 5;
      this.range = 2;
    }
    else if(this.name == "Elfire") {
      this.image = "";
      this.type = "Magic";
      this.weight = 5;
      this.might = 9;
      this.hit = 80;
      this.critical = 0;
      this.range = 2;
    }
    else if(this.name == "Bolganone") {
      this.image = "";
      this.type = "Magic";
      this.weight = 6;
      this.might = 12;
      this.hit = 70;
      this.critical = 0;
      this.range = 2;
    }
    else if(this.name == "Thoron") {
      this.image = "";
      this.type = "Magic";
      this.weight = 3;
      this.might = 13;
      this.hit = 100;
      this.critical = 10;
      this.range = 2;
    }
    else if(this.name == "Swarm") {
      this.image = "";
      this.type = "Magic";
      this.weight = 6;
      this.might = 16;
      this.hit = 90;
      this.critical = 0;
      this.range = 2;
    }
    else if(this.name == "Aura") {
      this.image = "";
      this.type = "Magic";
      this.weight = 7;
      this.might = 20;
      this.hit = 90;
      this.critical = 0;
      this.range = 2;
    }
    else if(this.name == "Excalibur") {
      this.image = "";
      this.type = "Magic";
      this.weight = 3;
      this.might = 13;
      this.hit = 100;
      this.critical = 20;
      this.range = 2;
    }
    else if(this.name == "Imhullu") {
      this.image = "";
      this.type = "Magic";
      this.weight = 9;
      this.might = 14;
      this.hit = 70;
      this.critical = 0;
      this.range = 2;
    }
    else if(this.name == "Starlight") {
      this.image = "";
      this.type = "Magic";
      this.weight = 5;
      this.might = 13;
      this.hit = 100;
      this.critical = 0;
      this.range = 2;
    }
    else if(this.name == "Arrowspate") {
      this.image = "";
      this.type = "Firearm";
      this.weight = 7;
      this.might = 12;
      this.hit = 90;
      this.critical = 0;
      this.range = 2;
      this.effective.push("Pegasus Knight");
      this.effective.push("Dracoknight");
    }
    else if(this.name == "Stonehoist") {
      this.image = "";
      this.type = "Firearm";
      this.weight = 13;
      this.might = 15;
      this.hit = 50;
      this.critical = 0;
      this.range = 2;
    }
    else if(this.name == "Hoistflamme") {
      this.image = "";
      this.type = "Firearm";
      this.weight = 10;
      this.might = 12;
      this.hit = 100;
      this.critical = 0;
      this.range = 2;
    }
    else if(this.name == "Thunderbolt") {
      this.image = "";
      this.type = "Firearm";
      this.weight = 11;
      this.might = 10;
      this.hit = 90;
      this.critical = 0;
      this.range = 2;
      this.effective.push("Ballistician");
    }
    else if(this.name == "Pachyderm") {
      this.image = "";
      this.type = "Firearm";
      this.weight = 12;
      this.might = 18;
      this.hit = 90;
      this.critical = 0;
      this.range = 2;
    }
    else if(this.name == "Firestone") {
      this.image = "";
      this.type = "Dragonstone";
      this.weight = 3;
      this.might = 16;
      this.hit = 80;
      this.critical = 0;
      this.range = 1;
    }
    else if(this.name == "Divinestone") {
      this.image = "";
      this.type = "Dragonstone";
      this.weight = 1;
      this.might = 12;
      this.hit = 100;
      this.critical = 0;
      this.range = 1;
      this.effective.push("Manakete");
    }
    else if(this.name == "Magestone") {
      this.image = "";
      this.type = "Dragonstone";
      this.weight = 6;
      this.might = 18;
      this.hit = 90;
      this.critical = 0;
      this.range = 1;
    }
    else if(this.name == "Earthstone") {
      this.image = "";
      this.type = "Dragonstone";
      this.weight = 10;
      this.might = 20;
      this.hit = 70;
      this.critical = 0;
      this.range = 1;
    }
    else if(this.name == "Heal") {
      this.image = "";
      this.type = "Staff";
      this.weight = 0;
      this.might = 10;
      this.hit = 100;
      this.critical = 0;
      this.range = 1;
    }
    else if(this.name == "Mend") {
      this.image = "";
      this.type = "Staff";
      this.weight = 0;
      this.might = 20;
      this.hit = 100;
      this.critical = 0;
      this.range = 1;
    }
    else if(this.name == "Recover") {
      this.image = "";
      this.type = "Staff";
      this.weight = 0;
      this.might = -1;
      this.hit = 100;
      this.critical = 0;
      this.range = 1;
    }
    else if(this.name == "Physic") {
      this.image = "";
      this.type = "Staff";
      this.weight = 0;
      this.might = 10;
      this.hit = 100;
      this.critical = 0;
      this.range = -1;
    }
    else if(this.name == "Fortify") {
      this.image = "";
      this.type = "Staff";
      this.weight = 0;
      this.might = 10;
      this.hit = 100;
      this.critical = 0;
      this.range = -1;
    }
    else if(this.name == "Warp") {
      this.image = "";
      this.type = "Staff";
      this.weight = 0;
      this.might = 0;
      this.hit = 100;
      this.critical = 0;
      this.range = 1;
    }
  }
}

// Terrain used to make the map
class Terrain {
  constructor(x, y, size, name) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.name = name;
    if(name == "Grass") {
      this.image = terrainImages[0];
      this.avoidance = 5;
      this.defense = 0;
      this.movement = 1;
    }
    else if(name == "Bush") {
      this.image = terrainImages[1];
      this.avoidance = 15;
      this.defense = 1;
      this.movement = 2;
    }
    else if(name == "Forest") {
      this.image = terrainImages[2];
      this.avoidance = 30;
      this.defense = 2;
      this.movement = 3;
    }
    else if(name == "Sand") {
      this.image = terrainImages[3];
      this.avoidance = 10;
      this.defense = 1;
      this.movement = 3;
    }
    else if(name == "Water") {
      this.image = terrainImages[4];
      this.avoidance = 30;
      this.defense = 0;
      this.movement = 4;
    }
    else if(name == "Floor") {
      this.image = terrainImages[5];
      this.avoidance = 0;
      this.defense = 2;
      this.movement = 1;
    }
    else if(name == "Stronghold1") {
      this.image = terrainImages[6];
      this.avoidance = 20;
      this.defense = 5;
      this.movement = 2;
    }
    else if(name == "Stronghold2") {
      this.image = terrainImages[7];
      this.avoidance = 20;
      this.defense = 5;
      this.movement = 2;
    }
    else if(name == "Wall") {
      this.image = terrainImages[8];
      this.avoidance = 0;
      this.defense = 0;
      this.movement = -1;
    }
    else if(name == "Ceiling1") {
      this.image = terrainImages[9];
      this.avoidance = 0;
      this.defense = 0;
      this.movement = -1;
    }
    else if(name == "Ceiling2") {
      this.image = terrainImages[10];
      this.avoidance = 0;
      this.defense = 0;
      this.movement = -1;
    }
    else if(name == "MountainG") {
      this.image = terrainImages[11];
      this.avoidance = 40;
      this.defense = 2;
      this.movement = 4;
    }
    else if(name == "MountainE") {
      this.image = terrainImages[12];
      this.avoidance = 40;
      this.defense = 2;
      this.movement = 4;
    }
    else {
      this.image = playerUnitImages[0];
      this.avoidance = 0;
      this.defense = 0;
      this.movement = -1;
    }
  }
  
  // Includes stats about the terrain
  details(tempX, tempY) {
    let transparency = 255;
    if(button(width-170, 55, 150, 100)) {
      transparency = 100;
    }
    textAlign(LEFT, BASELINE);
    let tempText = "";
    if(this.name == "Ceiling1" || this.name == "Ceiling2") {
      tempText = "Ceiling";
    }
    else if(this.name == "Wall") {
      tempText = this.name;
    }
    else if(this.name == "Stronghold1" || this.name == "Stronghold2") {
      tempText = "Stronghold\n" +
         "Avoid: +" + this.avoidance + "%\n" +
         "Def: +" + this.defense + "\n" +
         "Mov: -" + this.movement;
    }
    else if(this.name == "MountainG" || this.name == "MountainE") {
      tempText = "Mountain\n" +
         "Avoid: +" + this.avoidance + "%\n" +
         "Def: +" + this.defense + "\n" +
         "Mov: -" + this.movement;
    }
    else {
      tempText = this.name + "\n" +
         "Avoid: +" + this.avoidance + "%\n" +
         "Def: +" + this.defense + "\n" +
         "Mov: -" + this.movement;
    }
    fill(0, transparency);
    stroke(255, transparency);
    strokeWeight(5);
    rect(width-170-tempX, 55-tempY, 150, 100, 10);
    textSize(15);
    fill(255, transparency);
    strokeWeight(0);
    text(tempText, width-155-tempX, 80-tempY);
    image(this.image, width-75-tempX, 105-tempY, 40, 40);
    strokeWeight(2);
    fill(255, 0);
    rect(width-76-tempX, 104-tempY, 42, 42, 5);
  }
  
  // Draws the terrain tile
  drawTerrain(newSize) {
    this.size = newSize;
    image(this.image, this.x * this.size, this.y * this.size, this.size, this.size);
  }
}