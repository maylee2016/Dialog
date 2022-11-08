import React from 'react';
import PropTypes, { string } from 'prop-types';
import './dialog.css';

/**
 * Primary UI component for user interaction
 */
export const Dialog = ({ backgroundColor, size, dialog, ...props }) => {
  const mode = showModal = {
                            display:'block'
                          };
  return (

    <div className="dialog" style={showDialog}>
      <div className='dialog-window'>
        <div className="dialog-window__header">
          <h3 className='title'>{title}</h3>
          <CloseTag />
        </div>
        <div className="dialog-window__body">
          <p>{paragraph}</p>
          <button className='btn' onClick={btnAction}>{btnLabel}</button>
        </div>
      </div>
    </div>

  );
};

Dialog.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  //primary: PropTypes.bool,
  dialog: string
  /**
   * What background color to use
   */
  //backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  //size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  //label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  //onClick: PropTypes.func,
};

Dialog.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
