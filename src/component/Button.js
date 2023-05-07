import React from 'react';

function Button(props) {
return (
<button type="button" className={props.className} onClick={props.onClick}>
{props.label}
</button>
);
}

export default Button;

