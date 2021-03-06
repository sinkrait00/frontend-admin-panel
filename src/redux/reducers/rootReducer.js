import { combineReducers } from "redux";
import {modalReducer} from "./modalReducer";
import {authReducer} from "./authReducer";
import {categoryReducer} from "./categoryReducer";
import {tableReducer} from "./tableReducer";
import {specialistReducer} from "./specialistReducer";
import {mainReducer} from "./mainReducer";
import {userReducer} from "./userReducer";
import {ruleReducer} from "./ruleReducer";
import {qasReducer} from "./qasReducer";
import {aboutReducer} from "./aboutReducer";
import {instructionReducer} from "./instructionReducer";




export const rootReducer = combineReducers({
    modal : modalReducer,
    auth: authReducer,
    category: categoryReducer,
    table: tableReducer,
    specialist: specialistReducer,
    main: mainReducer,
    user: userReducer,
    rules: ruleReducer,
    qas: qasReducer,
    about: aboutReducer,
    instruction: instructionReducer
})



