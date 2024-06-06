import React, { useState, useEffect } from 'react';
import styles from './Featured_Services.module.css';
import img from './../../images/Untitled.png';
import haircut from './../../images/R.png';
import hair_coloring from './../../images/2022-hair-color-trends-3-182x300.jpg';
import hair_party from './../../images/OIP.jpg';
import hair_treatments from './../../images/OIP (1).jpg';
import makeup from './../../images/OIP (2).jpg';
import promo from './../../images/OIP (3).jpg';

const circlesData = [
  {
    id: 1,
    imagen: haircut,
    service: 'Haircut',
    description: 'Our professional stylists will provide you with a trendy haircut that enhances your unique style, ensuring you leave feeling refreshed and confident.'
  },
  {
    id: 2,
    imagen: hair_coloring,
    service: 'Hair Coloring',
    description: 'Transform your look with expert hair coloring. From subtle highlights to vibrant tones, we will help you find the perfect color to express your personality.'
  },
  {
    id: 3,
    imagen: hair_party,
    service: 'Party Hairstyles',
    description: 'Do you have a special event? Let us create an elegant and sophisticated hairstyle that will make you look spectacular and unforgettable.'
  },
  {
    id: 4,
    imagen: hair_treatments,
    service: 'Hair Treatments',
    description: 'Restore the health and vitality of your hair with our personalized hair treatments tailored to every hair type. Experience the best care for your hair.'
  },
  {
    id: 5,
    imagen: makeup,
    service: 'Professional Makeup',
    description: 'Our professional makeup artists will enhance your natural beauty with makeup that suits your style and occasion, ensuring you look stunning and radiant.'
  },
  {
    id: 6,
    imagen: img,
    service: 'Contact Us',
    description: 'For more information about our services or to book an appointment, please contact us at (123) 456-7890 or visit our salon. We look forward to serving you!'
  },
  {
    id: 7,
    imagen: promo,
    service: 'Promotions',
    description: 'Stay tuned for our upcoming promotions. Don\'t miss out on special offers and discounts!'
  },
];

const CircularCarousel = () => {
  const [dimensions, setDimensions] = useState({
    radius: 420,
    centerX: 230,
    centerY: 250
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setDimensions({
          radius: 210,
          centerX: 115,
          centerY: 125
        });
      } else {
        setDimensions({
          radius: 420,
          centerX: 230,
          centerY: 250
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially to set the dimensions

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const angleStep = (2 * Math.PI) / circlesData.length;
  const [angles, setAngles] = useState(circlesData.map((_, i) => i * angleStep));
  const [initialAngle, setInitialAngle] = useState(null);
  const [selectedService, setSelectedService] = useState(circlesData[0]);
  const [selectedServiceInfo, setSelectedServiceInfo] = useState(circlesData[0]);

  const handleMouseDown = (e, index) => {
    e.preventDefault();
    setInitialAngle(angles[index]);
    setSelectedServiceInfo(circlesData[index]);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const mouseX = clientX - dimensions.centerX;
    const mouseY = clientY - dimensions.centerY;
    const newAngles = angles.map((angle) =>
      angle + (angleStep * mouseX * 0.2) / dimensions.radius
    );
    setAngles(newAngles);
  };

  const handleMouseUp = () => {
    setInitialAngle(null);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e, index) => {
    e.preventDefault();
    setInitialAngle(angles[index]);
    setSelectedServiceInfo(circlesData[index]);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const { clientX, clientY } = touch;
    const touchX = clientX - dimensions.centerX;
    const touchY = clientY - dimensions.centerY;
    const newAngles = angles.map((angle) =>
      angle + (angleStep * touchX * 0.2) / dimensions.radius
    );
    setAngles(newAngles);
  };

  const handleTouchEnd = () => {
    setInitialAngle(null);
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  const handleNext = () => {
    const newAngles = angles.map((angle) =>
      angle + angleStep
    );
    setAngles(newAngles);
    const newIndex = (selectedService.id % circlesData.length) + 1;
    setSelectedService(circlesData.find((item) => item.id === newIndex));
  };

  const handleBack = () => {
    const newAngles = angles.map((angle) =>
      angle - angleStep
    );
    setAngles(newAngles);
    const newIndex = selectedService.id === 1 ? circlesData.length : selectedService.id - 1;
    setSelectedService(circlesData.find((item) => item.id === newIndex));
  };

  return (
    <main className={styles.main_container}>
      {selectedServiceInfo && (
        <div className={styles.info}>
          <h2 className={styles.title}>{selectedServiceInfo.service}</h2>
          <p className={styles.text}>{selectedServiceInfo.description}</p>
        </div>
      )}

      <div className={styles.carousel_container}>
        {angles.map((angle, index) => (
          <div
            key={index}
            className={styles.circle}
            style={{
              transform: `translate(${dimensions.centerX + dimensions.radius * Math.cos(angle)}px, ${dimensions.centerY + dimensions.radius * Math.sin(angle)}px)`,
            }}
            onMouseDown={(e) => handleMouseDown(e, index)}
            onTouchStart={(e) => handleTouchStart(e, index)}
          >
            <img
              className={styles.image}
              src={circlesData[index].imagen}
              alt={circlesData[index].service}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default CircularCarousel;
