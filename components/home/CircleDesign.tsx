"use client";
import {
  motion,
  useAnimation,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import React, { useEffect, useState } from "react";

interface CircleDesignProps {
  radius?: number;
  pointCount?: number;
  circleColor?: string;
  pointColor?: string;
}

const CircleDesign: React.FC<CircleDesignProps> = ({
  radius = 40,
  pointCount = 6,
  circleColor = "purple",
  pointColor = "cyan",
}) => {
  const size = radius * 2 + 20;
  const controls = useAnimation();
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const rotation = useMotionValue(0);
  useEffect(() => {
    const calculated = Array.from({ length: pointCount }, (_, i) => ({
      x: size / 2 + radius * Math.cos((2 * Math.PI * i) / pointCount),
      y: size / 2 + radius * Math.sin((2 * Math.PI * i) / pointCount),
    }));
    setPoints(calculated);
  }, [radius, pointCount, size]);

  useAnimationFrame((_t, delta) => {
    if (!isHovered) {
      rotation.set(rotation.get() + delta * 0.036); // 360 degrees in 10 seconds
    }
  });

  if (!points.length) return null;

  return (
    <motion.div
      style={{
        rotate: rotation,
        width: size,
        height: size,
        display: "inline-block",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={circleColor}
          fill="transparent"
          strokeWidth="2"
        />
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="6" fill={pointColor} />
        ))}
      </svg>
    </motion.div>
  );
};

export default CircleDesign;
