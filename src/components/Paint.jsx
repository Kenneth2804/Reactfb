import React, {useRef, useState, useEffect} from 'react'
import '../styles/paint.css';


export default function Paint() {

    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [context, setContext] = useState(null);
    const [color, setColor] = useState('black');
    const [lineWidth, setLineWidth] = useState(5);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        ctx.lineCap = 'round';
        setContext(ctx);
      }, []);

      const startDrawing = (e) => {
        context.beginPath();
        context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setIsDrawing(true);
      };

      const draw = (e) => {
        if (!isDrawing) return;
        context.strokeStyle = color;
        context.lineWidth = lineWidth;
        context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        context.stroke();
      };

      const stopDrawing = () => {
        context.closePath();
        setIsDrawing(false);
      };

      const handleColorChange = (e) => {
        setColor(e.target.value);
      };
    
      const handleLineWidthChange = (e) => {
        setLineWidth(e.target.value);
      };
    
      const clearCanvas = () => {
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      };    

  return (
    <div>
          <div className="toolbar">
        <input type="color" value={color} onChange={handleColorChange} />
        <input
          type="range"
          min="1"
          max="20"
          value={lineWidth}
          onChange={handleLineWidthChange}
        />
        <button onClick={clearCanvas}>Clear</button>
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        className="canvas"
      />
      
    </div>
  )
}
