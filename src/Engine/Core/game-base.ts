import { IEngineProperties } from "../Properties/game-properties";
import { WindowGame } from "../Window/window-game";

export class GameBase {
    readonly _windowGame: WindowGame;
    _isRunning = true;
    constructor(properties: IEngineProperties, element: HTMLElement) {
        this._windowGame = new WindowGame(properties);
        this._windowGame.Initialize(element);
        this._windowGame.GetContext()!.drawingBufferColorSpace = "display-p3";
        console.debug("Version", this._windowGame.GetContext()?.getParameter(this._windowGame.GetContext()?.VERSION!));
        console.debug("Renderer", this._windowGame.GetContext()?.getParameter(this._windowGame.GetContext()?.RENDERER!));
    }

    LoadContent(): void { }

    UnloadContent(): void { }

    Update(): void { }

    Input(): void { }

    public Draw(): void { 
    }

    private GameLoop = (): void => {
        this._windowGame.GetContext()!.clear(this._windowGame.GetContext()!.COLOR_BUFFER_BIT | this._windowGame.GetContext()!.DEPTH_BUFFER_BIT);
        this.Draw();
        if(!this._isRunning) return;
        requestAnimationFrame(this.GameLoop.bind(this));
    }

    public run(): void {
        this.GameLoop();
    }
}