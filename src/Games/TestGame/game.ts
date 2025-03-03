import { GameBase } from "../../Engine/Core/game-base";
import { IEngineProperties } from "../../Engine/Properties/game-properties";

export class GameTest extends GameBase{
    constructor(windowProperties: IEngineProperties, element: HTMLElement)
    {
        super(windowProperties, element);
    }

    Draw(): void {
        this._windowGame.GetContext()!.clearColor(0, .6, .8, 0);
    }
    
}