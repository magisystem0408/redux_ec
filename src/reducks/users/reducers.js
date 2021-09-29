import * as Actions from "./actions"
import initalState from "../store/initalState";


export const UsersReducer =(state=initalState,action) =>{

    switch (action.type){
        case Actions.SIGN_IN:
            //現在のステートとaction.payloadを展開して送る
            return{
                //...stateという元々のstateを入れる
                ...state,
                //こっちが変更分のもの
                ...action.payload
            }
        default:
            return state
    }

}