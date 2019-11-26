import React from "react";

interface State {}


interface Props {
    onSelect(e: any): void;
    activeItem: number;
    items: string[]; 
}

export default class ItemsList extends React.Component<Props, State> {
    render() {
        const { activeItem, items, onSelect } = this.props
        if (items.length === 0) {
            return(<div className="no-suggestions">
                <em>Empty</em>
            </div>);
        }

        return(
            <ul className="suggestions">
            {items.map((suggestion, index) => {
              let className;

              if (index === activeItem) {
                className = "suggestion-active";
              }

              return (
                <li
                  className={className}
                  key={suggestion}
                  onClick={onSelect}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        )
    }
}