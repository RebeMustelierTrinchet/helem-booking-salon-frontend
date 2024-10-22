import { useState } from 'react';
import I1 from "./imagenes/I1.jpg";
import I2 from "./imagenes/I2.jpg";
import I3 from "./imagenes/I3.jpg";
import I4 from "./imagenes/I4.jpg";
import I5 from "./imagenes/I5.jpg";
import I6 from "./imagenes/I6.jpg";

const IMAGES = [I1, I2, I3, I4, I5, I6];

export default function Carousel_Gallery() {
    const [index, setIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState(null);

    const moveImages = (isUp) => {
        if (animating) return; // Prevenir otro movimiento durante la animación
        setAnimating(true);
        setDirection(isUp ? 'up' : 'down');

        setTimeout(() => {
            setIndex((prev) => isUp ? (prev - 1 + IMAGES.length) % IMAGES.length : (prev + 1) % IMAGES.length);
            setAnimating(false);
        }, 500); // Duración de la animación, en ms
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '400px', overflow: 'hidden' }}>
            {/* Contenedor Izquierdo */}
            <div style={{ position: 'relative', width: '45%', height: '100%', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    transition: 'transform 0.5s ease',
                    transform: animating ? (direction === 'up' ? 'translateY(-450px)' : 'translateY(450px)') : 'translateY(0)'
                }}>
                    <img src={IMAGES[index]} alt="Left Carousel" style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>

            {/* Flechas de Navegación */}
            <div>
                <button onClick={() => moveImages(true)}>↑</button>
                <button onClick={() => moveImages(false)}>↓</button>
            </div>

            {/* Contenedor Derecho */}
            <div style={{ position: 'relative', width: '45%', height: '100%', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    transition: 'transform 0.5s ease',
                    transform: animating ? (direction === 'up' ? 'translateY(450px)' : 'translateY(-450px)') : 'translateY(0)'
                }}>
                    <img src={IMAGES[(index + 1) % IMAGES.length]} alt="Right Carousel" style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>
        </div>
    );
}
