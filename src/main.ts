import './style.css'
import { IEngineProperties } from './Engine/Properties/game-properties';
import { GameTest } from './Games/TestGame/game';

const engineProperties: IEngineProperties = {
  windowContext: 'webgl2',
  windowSize: { width: 1024, height: 768 },
  windowName: 'WindowGames'
}

const app = document.querySelector<HTMLDivElement>('#app')!;

window.onload = () => {
  const game = new GameTest(engineProperties, app!);

  game.run();

}
