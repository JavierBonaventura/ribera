import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownAnimation = useSpring({
    height: isOpen ? '70px' : '0px',
    opacity: isOpen ? 1 : 0,
    overflow: 'hidden',
    config: { duration: 500 },
  });

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleMenuClick}>menu 1</button>
      <animated.div style={dropdownAnimation}>
        <ul>
          <li>Opción 1</li>
          <li>Opción 2</li>
          <li>Opción 3</li>
        </ul>
      </animated.div>
      <button onClick={handleMenuClick}>menu 2</button>

    </div>
  );
};

export default DropdownMenu;
