import { IEngineProperties } from "../Properties/game-properties";

export class WindowGame {
    px = 'px';
    private glContext: WebGLRenderingContext | WebGL2RenderingContext | null = null;
    windowProperties: IEngineProperties;
    constructor(properties: IEngineProperties) {
        this.windowProperties = properties;
    }

    Initialize(element: HTMLElement) {
        let canvas = document.createElement('canvas');
        this.glContext = canvas.getContext("webgl2");
        let isSupported = !!this.glContext;
        if (!isSupported) {
            alert("this browser do not support webgl version "+this.glContext?.VERSION);
            this.glContext = canvas.getContext('webgl');
        }

        element.style.width = this.windowProperties.windowSize.width + this.px;
        element.style.height = this.windowProperties.windowSize.height + this.px;

        canvas.style.width = element.style.width;
        canvas.style.height = element.style.height;

        element.style.boxShadow = '1px 1px 3px green';

        element.appendChild(canvas);
        console.debug("init rendering gl context");

    }

    GetContext = () => this.glContext;
}