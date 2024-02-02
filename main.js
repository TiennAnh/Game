import MapScene from "/src/scenes/MapScene.js";
import BootScene from "/src/scenes/BootScene.js";

export default class MyGame extends Phaser.Game {
  constructor() {
    const config = {
      type: Phaser.AUTO,
      width: 510,
      height: 350,
      scene: [BootScene, MapScene],
      parent: "phaser-example",
      physics: {
        default: "arcade",
        arcade: {
          debug: false,
          gravity: { y: 300 },
        },
      },
    };
    super(config);
  }
}
new MyGame();
