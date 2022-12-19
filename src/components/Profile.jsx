import React from 'react';
import AddFood from './AddFood';
import Chat from './Chat';

function Profile(props) {
    console.log(props)

    const uploadFunction = event => {
        const actionUrl='http://localhost:8000/customer/profile_avatar'
        const files = event.target.files
        const formData = new FormData()
        formData.append('avatar', files[0])

        fetch(actionUrl, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div>

            Email:- {props.user.email}

            {/* <Chat/> */}

            <h1> Add Food  </h1>
            <AddFood/>

            <form>
                <input type="file" name='avatar' onChange={uploadFunction} />
                {/* <button type='submit' > Submit </button> */}
            </form>
            
        </div>
    );
}

export default Profile;


