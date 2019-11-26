import React, { Fragment } from "react";
import ItemsList from "./ItemsList";

export interface Props {
  values: string[];
}

export interface Dispatch {
  loadItemData(search: string): void;
}

interface State {
    activeSuggestion: number;
    filteredSuggestions: string[];
    showSuggestions: boolean;
    userInput: string;
}

class Autocomplete extends React.Component<Props & Dispatch, State> {

  state = {
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: "", 
  };

  onChange = (e: any) => {
    const { values } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestions = values.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.props.loadItemData(e.currentTarget.value);

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = (e: any) => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  render() {
    const {
      onChange,
      onClick,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    return (
      <Fragment>
        <input
          type="text"
          onChange={onChange}
          value={userInput}
        />
        {showSuggestions && userInput && (
          <ItemsList
            items={filteredSuggestions}
            activeItem={activeSuggestion}
            onSelect={onClick}
          />
        )}
      </Fragment>
    );
  }
}

export default Autocomplete;