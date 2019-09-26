import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div onClick={props.onDismiss} className="ui dimmer modals visible active">
			<div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
				
				  <div className="header">{props.header}</div>
				  <div className="content">
				    <p>{props.content}</p>
				  </div>
				  <div className="actions">
				    {props.actions}
				  </div>
				
			</div>
		</div>,
		document.getElementById('show-modal')
	);
};

export default Modal;