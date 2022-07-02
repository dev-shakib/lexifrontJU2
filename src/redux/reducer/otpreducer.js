
const initialState = {
    otp_data:{}
};
export const otpdata_reducers = (state=initialState,{type,payload}) =>{
    switch (type) {
        case "FATCHING_OTP_DATA":
            return {...state,otp_data:payload};
        default: 
        return state;
    }
};