import './style.css'
import { IWindowProperties } from './Engine/Properties/window-properties';
import { GameTest } from './Games/TestGame/game';

const windowProperties: IWindowProperties = {
  windowContext: 'webgl2',
  windowSize: { width: 1024, height: 768 },
  windowName: 'WindowGames'
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="ContextGames">
  </div>
`
const elementGame = document.querySelector<HTMLElement>('#ContextGames');
const game = new GameTest(windowProperties, elementGame!);

game.run();


