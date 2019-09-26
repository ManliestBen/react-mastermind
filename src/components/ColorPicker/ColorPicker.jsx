import React from 'react';
import styles from './ColorPicker.module.css';

const ColorPicker = (props) => (
  <div>
    {props.colors.map((color, idx) =>
      <button
        className={styles.button}
        style={{
          backgroundColor: idx === props.selColorIdx ? 'white' : color,
          borderColor: color
        }}
        key={color}
      ></button>
    )}
  </div>
);

export default ColorPicker;
