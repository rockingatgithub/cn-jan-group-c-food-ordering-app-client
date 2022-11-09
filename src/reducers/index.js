const initialState = {
    isLoggedIn: false,
    user: {},
    counter: 0
}


function appreducer( state = initialState, action ) {

    switch (action.type) {
        case 'LOGIN':
            
            return { ...initialState, isLoggedIn: true  }
        case 'SETUSER' : {
            return {...initialState, ...action.data }
        }
    
        default:
           return {...initialState}
    }

}

export default appreducer