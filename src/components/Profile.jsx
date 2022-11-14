import React from 'react';
import AddFood from './AddFood';
import Chat from './Chat';

function Profile(props) {
    console.log(props)
    return (
        <div>

            Email:- {props.user.email}

            {/* <Chat/> */}

            <h1> Add Food  </h1>
            <AddFood/>
            
        </div>
    );
}

export default Profile;


