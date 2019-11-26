import { connect } from "react-redux";
import { compose } from "redux";
import Autocomplete, { Props, Dispatch } from "./Autocomplete";
import { loadData } from "../../store/AutocompleteReducers";

type MapStateToProps = Props;

const mapStateToProps = (state: any): MapStateToProps => ({
    values: state.autocomplete.values,
});

type MapDispatchToProps = Dispatch

const mapDispatchToProps= (dispatch: any): MapDispatchToProps => ({
    loadItemData: (search: string) => dispatch(loadData(search))
});

const enhancer = compose(connect<MapStateToProps, MapDispatchToProps, {}>(
        mapStateToProps,
        mapDispatchToProps,
    ),
)

export const AutocompleteContainer = enhancer(Autocomplete);
