import React from 'react';
import './UserOutput.css';


const UserOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>This is My First Paragraph.</p>
            <p>This is My Second Paragraph.</p>
            <p>UserName: {props.userName}</p>
        </div>
    );
       
}


export default UserOutput;