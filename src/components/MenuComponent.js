import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const MenuComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  const transitions = useTransition(selectedOption, null, {
    from: { height: 0, opacity: 0 },
    enter: { height: 'auto', opacity: 1 },
    leave: { height: 0, opacity: 0 },
    config: { duration: 300 }
  });

  return (
    <div>
      <div onClick={() => handleOptionClick('Option 1')}>
        <p>Option 1</p>
        {transitions.map(({ item, key, props }) =>
          item === 'Option 1' && (
            <animated.div key={key} style={props} className="submenu">
              <p>Contenido del submenú para Option 1</p>
            </animated.div>
          )
        )}
      </div>
      <div onClick={() => handleOptionClick('Option 2')}>
        <p>Option 2</p>
        {transitions.map(({ item, key, props }) =>
          item === 'Option 2' && (
            <animated.div key={key} style={props} className="submenu">
              {/* Contenido del submenú para Option 2 */}
            </animated.div>
          )
        )}
      </div>
      <div onClick={() => handleOptionClick('Option 3')}>
        <p>Option 3</p>
        {transitions.map(({ item, key, props }) =>
          item === 'Option 3' && (
            <animated.div key={key} style={props} className="submenu">
              {/* Contenido del submenú para Option 3 */}
            </animated.div>
          )
        )}
      </div>
    </div>
  );
};

export default MenuComponent;