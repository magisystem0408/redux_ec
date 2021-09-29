import {
    createStore as reduxCreateStore,
    combineReducers,
} from "redux";


import {UsersReducer} from "../users/reducers";

export default function createStore(){
// combineReducers　とは
// 分割したReducersをまとめる
    return reduxCreateStore(
        combineReducers({
            users:UsersReducer
        })
    )
}

