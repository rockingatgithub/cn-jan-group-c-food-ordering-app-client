export const setCounter = (count) => {
    return { type: 'INC', data: count+1 }
}


export const login = (user, userType, type) => {

    return async (dispatch, getState) => {

        let res = await fetch(`http://localhost:8000/${userType}/${type}`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        let parsedRes = await res.json()

        if (parsedRes.message.includes('successfully Added!')) {
            dispatch(setUser(parsedRes.user))

            if (window) {
                document.cookie = 'token' + "=" + (parsedRes.token || "");
            }
        }

    }

    
}

export const setUser = (user) => {

    return { type: 'SETUSER', 
        data: {
            user,
            isLoggedIn: true,
        }
    }

}