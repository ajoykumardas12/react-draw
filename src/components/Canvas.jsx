import { useOnDraw } from "./Hooks";

const Canvas = ({width, height}) => {

    const setCanvasRef = useOnDraw();

    return(
        <canvas 
            width={width}
            height={height}
            style={canvasStyle}
            ref={setCanvasRef}
        />
    )
}

const canvasStyle = {
    border: "1px solid black"
}

export default Canvas;