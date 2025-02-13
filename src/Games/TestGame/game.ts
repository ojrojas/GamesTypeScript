import { GameBase } from "../../Engine/Core/gamebase";
import { IWindowProperties } from "../../Engine/Properties/window-properties";

export class GameTest extends GameBase{
    constructor(windowProperties: IWindowProperties, element: HTMLElement)
    {
        super(windowProperties, element);
    }

    draw(): void {
    }
    
}