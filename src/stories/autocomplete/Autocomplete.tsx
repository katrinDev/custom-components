import { FC, useState } from "react";
import {InputHTMLAttributes } from 'react';

export type AutocompleteProps = InputHTMLAttributes<HTMLInputElement> & {
    options: string[]
}

const Autocomplete: FC<AutocompleteProps> = ({options, ...props}) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const onChange = (e) => {
        const userInput = e.target.value;
        const filtered = options.filter(
            (suggestion) =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
        setInputValue(userInput);
        setFilteredSuggestions(filtered);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
    };

    const onClick = (e) => {
        setInputValue(e.target.innerText);
        setFilteredSuggestions([]);
        setShowSuggestions(false);
    };

    const renderSuggestions = () => {
        if (showSuggestions && inputValue) {
            if (filteredSuggestions.length) {
                return (
                    <ul className="suggestions">
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;
                            if (index === activeSuggestionIndex) {
                                className = "suggestion-active";
                            }
                            return (
                                <li className={className} key={suggestion} onClick={onClick}>
                                    {suggestion}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                return (
                    <div className="no-suggestions">
                        <em>No suggestions available</em>
                    </div>
                );
            }
        }
        return null;
    };

    return (
        <div className="autocomplete">
            <input
                type="text"
                onChange={onChange}
                value={inputValue}
                {...props}
            />
            {renderSuggestions()}
        </div>
    );
};

export default Autocomplete;