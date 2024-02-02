export default class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    this.load.tilemapTiledJSON(
      "backGround",
      "/public/assets/backGround/Map.json"
    );

    this.load.image("terrain", "/public/assets/backGround/Terrain.png");

    this.load.image("confetti", "/public/assets/backGround/Confetti.png");

    this.load.spritesheet(
      "start-Moving",
      "/public/assets/animations/StartMoving.png",
      {
        frameWidth: 64,
        frameHeight: 64,
      }
    );

    this.load.spritesheet(
      "checkPoint",
      "/public/assets/animations/Checkpoint.png",
      {
        frameWidth: 64,
        frameHeight: 64,
      }
    );

    this.load.spritesheet(
      "move-Right",
      "/public/assets/animations/RunRight.png",
      {
        frameWidth: 32,
        frameHeight: 32,
      }
    );

    this.load.spritesheet(
      "move-Left",
      "/public/assets/animations/RunLeft.png",
      {
        frameWidth: 32,
        frameHeight: 32,
      }
    );

    this.load.spritesheet(
      "Apple",
      "/public/assets/animations/fruit/Apple.png",
      {
        frameWidth: 32, 
        frameHeight: 24,
      }
    );
  }

  create() {
    this.scene.start("MapScene");
  }

  update() {}
}
