import * as constant from '../constant'


const initialState = { userdataState: []}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case constant.GET_EMP_DATA:
            return {
                ...state,
                userdataState: action.payload

            }
        default: return { ...state }
    }

}