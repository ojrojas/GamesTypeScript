export interface IWindowProperties {
    windowName: string;
    windowSize: IWindowSize;
    windowContext: '2d' | 'webgl' | 'webgl2';
}

export interface IWindowSize {
    width: number;
    height: number;
}