import { combineReducers } from "redux"
import { autocomplete } from "./AutocompleteReducers"

 export interface Store {
   values: any;
 }

 export const rootReducer = () => 
     combineReducers<Store>({
        values: autocomplete,
     });
