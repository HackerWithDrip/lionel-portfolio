import { useState, useRef } from 'react';

export const use3DCard = () => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateY = ((x - midX) / midX) * 10;
    const rotateX = ((midY - y) / midY) * 10;

    setTilt({
      rotateX,
      rotateY,
      scale: 1.03,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return {
    cardRef,
    tilt,
    handleMouseMove,
    handleMouseLeave,
  };
};

