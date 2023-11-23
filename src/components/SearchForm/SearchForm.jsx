import React, {useState} from "react";
import './SearchForm.css'

const SearchForm = ({initialQuery, onSearch,}) => {

    const [query, setQuery] = useState(initialQuery || '')

    const handleKeyDown = (e) => {
        e.key === 'Enter' && onSearch(query)
    };

    return (
        <>
            <h2>2. SearchForm</h2>
            <div className="search-form">
                <input
                    className="search-form__input"
                    value={query}
                    type="text"
                    placeholder="search"
                    onChange={e => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button
                    className="search-form__button"
                    onClick={() => onSearch(query)}
                >
                    Search
                </button>
            </div>
        </>
    )
}

export default SearchForm