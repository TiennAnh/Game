export default class MapScene extends Phaser.Scene {
  constructor() {
    super("MapScene");
  }

  preload() {}

  create() {
    // BACKGROUND
    const map = this.make.tilemap({ key: "backGround" });

    const tileset1 = map.addTilesetImage("Terrain", "terrain");

    const tileset2 = map.addTilesetImage("Confetti", "confetti"); // TILESET - IMAGES

    const backGround = map.createLayer("BackGround", [tileset1]).setScale(1.5);

    const colision = map
      .createLayer("Colision", [tileset2])
      .setScale(1.5)
      .setAlpha(0.001); // LAYER

    // --------------------------------------------------- //

    // --------------------- PLAYER ---------------------- //
    this.player = this.physics.add.sprite(65, 250, "move-Right");

    this.player.setCollideWorldBounds(true);

    this.player.setBounce(0.2);

    this.anims.create({
      key: "turn-right",
      frames: this.anims.generateFrameNumbers("move-Right", {
        start: 0,
        end: 11,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn-left",
      frames: this.anims.generateFrameNumbers("move-Left", {
        start: 0,
        end: 11,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // --------------------------------------------------- //

    // --------------------- COLISION ---------------------//

    colision.setCollisionByProperty({ ColisionTilee: true }); // Colider

    this.physics.add.collider(this.player, colision); // Colider

    // --------------------------------------------------- //

    // -------------------- ITEMS ------------------------ //

    this.itemMoving = this.physics.add.sprite(55, 250, "start-Moving");

    this.anims.create({
      key: "start-moving",
      frames: this.anims.generateFrameNumbers("start-Moving", {
        start: 0,
        end: 16,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.physics.add.collider(this.itemMoving, colision); // Colider

    this.checkPoint = this.physics.add.sprite(700, 250, "checkPoint");

    this.anims.create({
      key: "check-point",
      frames: this.anims.generateFrameNumbers("checkPoint", {
        start: 0,
        end: 9,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.physics.add.collider(this.checkPoint, colision);

    this.targetFruit = this.physics.add.sprite(100, 250, "Apple");

    this.anims.create({
      key: "apple",
      frames: this.anims.generateFrameNumbers("Apple", {
        start: 0,
        end: 16,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.physics.add.collider(this.targetFruit, colision);
  }

  update() {
    // ------------------ ITEM -------------------- //
    this.itemMoving.anims.play("start-moving", true);

    this.checkPoint.anims.play("check-point", true);

    this.targetFruit.anims.play("apple", true);

    // ------------------ PLAYER ----------------- //

    this.cursors = this.input.keyboard.createCursorKeys();

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-120);

      this.player.anims.play("turn-left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(120);

      this.player.anims.play("turn-right", true);
    } else {
      this.player.anims.stop();

      this.player.setVelocityX(0);
    }

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-150);
    }
  }
}
