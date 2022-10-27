import React from 'react';
import Chat from './Chat';

function Profile(props) {
    console.log(props)
    return (
        <div>

            Email:- {props.user.email}

            <Chat/>
            
        </div>
    );
}

export default Profile;


