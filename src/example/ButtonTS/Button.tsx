import React, { FC } from "react";

interface ButtonProps {
  /**
   * Comment here
   */
   value: string;
   /**
    * sizes...
    */
  size?: 'small' | 'medium' | 'large',
  /**
   * Simple click handler
   */
   onClick?: () => void;
   /**
   * Is primary?
   */
  primary: boolean;
}

/**
 * The world's most _basic_ button
 */
export const Button: FC<ButtonProps> = ({ value, onClick }) => (
  <button onClick={onClick} type="button">
    {value}
  </button>
);

Button.defaultProps = {
  value: 'Soy un boton 2',
  primary: true
};

export default Button