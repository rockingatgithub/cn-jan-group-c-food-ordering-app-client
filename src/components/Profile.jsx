import React from 'react';

function Profile(props) {
    console.log(props)
    return (
        <div>

            Email:- {props.user.email}
            
        </div>
    );
}

export default Profile;