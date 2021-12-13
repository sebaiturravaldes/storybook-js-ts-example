import React, { FC } from "react";

interface ButtonProps {
  /**
   * este es el comentario del valor
   */
   value: string;
   /**
    * Sabores...
    */
  flavor?: 'custom' | 'icon' | 'disabled' | 'add-remove-remove' | 'add-remove-add' | 'tag-icon' | 'standard-dark' | 'standard-highlighted' | 'standard-normal' | 'standard-disabled' | 'slider-control' | 'icon-minimal' | 'dropdown-dark-open' | 'dropdown-dark-closed' | 'dropdown-light-open' | 'dropdown-light-closed' | 'cancel',
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