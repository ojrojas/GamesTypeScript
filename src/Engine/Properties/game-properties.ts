export interface IEngineProperties {
    windowName: string;
    windowSize: IWindowSize;
    windowContext: '2d' | 'webgl' | 'webgl2';
    fps?: 30;
}

export interface IWindowSize {
    width: number;
    height: number;
}