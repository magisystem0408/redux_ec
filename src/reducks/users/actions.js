// 純粋にデータだけを記述するため
// どのstateをどう変更するのか？Reducersに任せる

export const SIGN_IN = "SIGN_IN"
export const signInAction = (userState) => {
    return {
        type: "SIGN_IN",
        payload: {
            isSignIn: true,
            uid: userState.uid,
            username: userState.username
        }
    }
}


export const SIGN_OUT = "SIGN_OUT"
export const signOutAction = () => {
    return{
        type:"SIGN_OUT",
        payload:{
            isSignedIn:false,
            uid:"",
            username: ""
        }
    }
}