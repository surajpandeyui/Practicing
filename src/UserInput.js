import React from 'react';


const UserInput = (props) => {
    return <input type="text" onChange={props.Changed} value={props.userName}/>;
};

export default UserInput;