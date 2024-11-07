import { useState } from 'react';
import I1 from "./../../images/I1.jpeg";
import I2 from "./../../images/I2.jpeg";
import I3 from "./../../images/I3.jpeg";
import I4 from "./../../images/I4.jpeg";
import I5 from "./../../images/I5.jpeg";
import I6 from "./../../images/I6.jpeg";
import I7 from "./../../images/I7.jpeg";
import I8 from "./../../images/I8.jpeg";
import I9 from "./../../images/I9.jpeg";
import I10 from "./../../images/I10.jpeg";
import I11 from "./../../images/I11.jpeg";
import I12 from "./../../images/I12.jpeg";
import I13 from "./../../images/I13.jpeg";
import I14 from "./../../images/I14.jpeg";
import I15 from "./../../images/I15.jpeg";
import I16 from "./../../images/I16.jpeg";
import style from './gallery.module.css'

const IMAGES = [I1, I2, I3, I4, I5, I6,I7,I8];
const IMAGES1 = [I9, I10, I11, I12, I13, I14, I15, I16];

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
        <div className={style.main_conteiner} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', overflow: 'hidden' }}>
            {/* Contenedor Izquierdo */}
            <div style={{ position: 'relative', width: '38%', height: '100%', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    transition: 'transform 1s ease',
                    transform: animating ? (direction === 'up' ? 'translateY(-140vh)' : 'translateY(140vh)') : 'translateY(0)'
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
            <div style={{ position: 'relative', width: '40%', height: '100%', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    transition: 'transform 1s ease',
                    transform: animating ? (direction === 'up' ? 'translateY(140vh)' : 'translateY(-140vh)') : 'translateY(0)'
                }}>
                    <img src={IMAGES1[(index + 1) % IMAGES.length]} alt="Right Carousel" style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>
        </div>
    );
}
