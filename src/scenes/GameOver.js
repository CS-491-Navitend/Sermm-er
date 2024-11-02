import { Scene } from "phaser";

export class GameOver extends Scene {
  constructor() {
    super("GameOver");
  }

  create({ game }) {
    const x = game.width / 2;
    const y = 250;

    this.add.text(x, y, "Game Over!", { fontSize: "32px", fill: "#fff" }).setOrigin(0.5);

    this.add.text(x, y + 50, `Wins: ${game.winCount}`, { fontSize: "32px", fill: "#fff" }).setOrigin(0.5);

    this.add.text(data["game"].width / 2, 400, "Press R to restart", { fontSize: "32px", fill: "#fff" }).setOrigin(0.5);
    this.add.text(data["game"].width / 2, 450, "Press M for Main Menu", { fontSize: "32px", fill: "#fff" }).setOrigin(0.5);


    this.add.text(x, y + 150, "Press R to restart", { fontSize: "32px", fill: "#fff" }).setOrigin(0.5);

    this.input.keyboard.once("keydown-R", () => {
      this.scene.start("Game", { level: game.level });
    });
    
        // Go to main menu on 'M' key press
    this.input.keyboard.on("keydown-M", () => {
      this.scene.start("MainMenu");
    });
  }
}
