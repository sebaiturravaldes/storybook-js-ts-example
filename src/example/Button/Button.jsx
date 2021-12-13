import React from "react"

import PropTypes from 'prop-types'

const Button = ({value,isLoading, backgroundColor, size}) => {
  return <button>{value}</button>
}

Button.propTypes = {
  /**
   * comment value
   */
   value: PropTypes.string,
  /**
   * Is this the principal call to action on the page?
   */
   isLoading: PropTypes.bool,
   /**
   * What background color to use
   */
    backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'normal', 'large']),
}
Button.defaultProps = {
  value: 'soy un boton',
  isLoading: false,
}


export default Button