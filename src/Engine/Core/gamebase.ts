import { IWindowProperties } from "../Properties/window-properties";
import { WindowGame } from "../Window/window-game";

export class GameBase {
    windowGame: WindowGame;
    isRunning = true;
    constructor(windowProperties: IWindowProperties, element: HTMLElement) {
        this.windowGame = new WindowGame(windowProperties);
        this.windowGame.Initialize(element);
    }

    loadContent() {

    }

    unloadContent() {

    }

    update() {

    }

    input() {

    }

    draw() {
        this.windowGame.getContext()!.drawingBufferColorSpace = "display-p3";
        this.windowGame.getContext()!.clearColor(1, 0, 0, 1);
        this.windowGame.getContext()!.clear(this.windowGame.getContext()!.COLOR_BUFFER_BIT);
    }

    run() {
       
    }
}