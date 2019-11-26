import { debounceTime, mergeMap, filter, map, catchError } from 'rxjs/operators';
import { AutocompleteActionName, setValues } from '../store/AutocompleteReducers';
import { EMPTY } from 'rxjs';
import { ofType } from 'redux-observable';
import {ajax} from "rxjs/ajax";

const API = 'https://api.punkapi.com/v2/beers';
const search = (term: string) => `${API}?beer_name=${encodeURIComponent(term)}`;

export const fetchData = (action$: any) => {
    return action$.pipe(
        ofType(AutocompleteActionName.LOAD_DATA),
        debounceTime(500),
        filter(({searchValue}) => searchValue.trim('')),
        mergeMap(({searchValue}) => 
            {
                return ajax.getJSON(search(searchValue)).pipe(
                    map((data: any) => {
                        const names = data.map((value: any) => value.name);
                        return setValues(names);
                    }),
                    catchError(() => {return EMPTY})
                );
            }
        ),
    );
}
