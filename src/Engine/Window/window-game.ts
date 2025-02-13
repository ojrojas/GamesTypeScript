import { IWindowProperties } from "../Properties/window-properties";

export class WindowGame {
    glContext: WebGLRenderingContext | WebGL2RenderingContext|  null = null;
    windowProperties: IWindowProperties;
    constructor(properties: IWindowProperties) {
        this.windowProperties = properties;
    }


    Initialize(element:HTMLElement)
    {   let canvas = document.createElement('canvas');
        this.glContext = canvas.getContext("webgl2");
        let isSupported = !!this.glContext;
        if(!isSupported)
        {
            alert("this browser do not support webgl context");
            this.glContext = canvas.getContext('webgl');
        }

        element.appendChild(canvas);
        console.log("init rendering gl context")
    }

    getContext = () => this.glContext;
}