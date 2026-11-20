import Phaser from "phaser";
import { HEIGHT, WIDTH } from "./actors.ts";
import { Hud } from "./hud.ts";
import { GameScene } from "./scenes/play.ts";
import "./style.css";
import { BootScene } from "./scenes/boot.ts";
import { TitleScene } from "./scenes/title.ts";
import { CutsceneScene } from "./scenes/cutscene.ts";

/**
 * URL switches for self-play, e.g. ?attract&speed=4&seed=7
 * - attract: skip the title wait and start the self-play demo at once
 * - speed: fixed steps per displayed frame during self-play (1–8)
 * - seed: changes every random decision in the run
 */
export interface LaunchOptions {
  attract: boolean;
  speed: number;
  seed: number;
}

const params = new URLSearchParams(location.search);
const options: LaunchOptions = {
  attract: params.has("attract"),
  speed: Phaser.Math.Clamp(Number(params.get("speed") ?? 1) || 1, 1, 8),
  seed: Number(params.get("seed") ?? 121) || 121,
};

const hud = new Hud();

export function fadeTo(
  current: Phaser.Scene,
  target: string,
  data?: object,
): void {
  if (current.cameras.main.fadeEffect.isRunning) return;
  current.cameras.main.fadeOut(450, 4, 2, 12);
  current.cameras.main.once("camerafadeoutcomplete", () => {
    current.scene.start(target, data);
  });
}

new Phaser.Game({
  type: Phaser.WEBGL,
  parent: "game",
  width: WIDTH,
  height: HEIGHT,
  backgroundColor: "#04020c",
  scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
  scene: [
    new BootScene(),
    new TitleScene(hud, options),
    new GameScene(hud, options),
    new CutsceneScene(hud),
  ],
});
