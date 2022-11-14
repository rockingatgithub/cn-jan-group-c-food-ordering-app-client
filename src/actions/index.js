import Cookies from "js-cookie"

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

export const fetchUserProfile = () => {

    return async ( dispatch, getState ) => {

        const userToken = Cookies.get('token')

        if (userToken) {

        let res = await fetch(`http://localhost:8000/customer/createSession`, {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get('token')}`
            }
        })

        let parsedRes = await res.json()
        dispatch(setUser(parsedRes.user))

    }

}

}

export const  addFood = (food) => {

    return async (dispatch, getState) => {

        let res = await fetch(`http://localhost:8000/food/addFood`, {
            method: 'POST',
            body: JSON.stringify(food),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        let parsedRes = await res.json()
        dispatch(addFoodHandler(parsedRes.food))

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

export const addFoodHandler = (food) => {

    return { type: 'SETFOOD', 
        data: {
            food,
        }
    }

}