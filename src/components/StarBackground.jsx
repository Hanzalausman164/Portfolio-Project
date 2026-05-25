import { useState, useEffect } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    const noOfStars = Math.floor(window.innerWidth * window.innerHeight / 1000);
    const newStars = [];

    for (let i = 0; i < noOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // Size between 1 and 4
        x: Math.random() * 100,      // X position in percentage
        y: Math.random() * 100,      // Y position in percentage
        opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
        animationDuration: Math.random() * 4 + 2, // Duration between 2s and 6s
      });
    }

    setStars(newStars);
  };

  const [meteors, setMeteors] = useState([]);

  const generateMeteors = () => {
    const noOfMeteors = 8;
    const newMeteors = [];

    for (let i = 0; i < noOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 3 + 1, // Size between 1 and 4
        x: Math.random() * 100,      // X position in percentage
        y: Math.random() * 20,      // Y position in percentage
        delay: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
        animationDuration: Math.random() * 4 + 2, // Duration between 2s and 6s
      });
    }

    setMeteors(newMeteors);
  };

  useEffect(() => {
    generateStars();
    generateMeteors();
    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle absolute rounded-full bg-white"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}
      {meteors.map((meteors) => (
        <div
          key={meteors.id}
          className="meteor animate-meteor"
          style={{
            width: meteors.size + "px",
            height: meteors.size + "px",
            left: meteors.x + "%",
            top: meteors.y + "%",
            animationDelay: meteors.delay,
            animationDuration: meteors.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
