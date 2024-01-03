import React, {useState} from 'react';
import './GenreSelect.css'

const GenreSelect = ({genresList, curentGenre, onSelect, }) => {
    const [selectedGenre, setGenre] = useState(curentGenre)

    const handleClick = (genre) => {
        setGenre(genre)
        onSelect(genre)
    }

    return (
        <>
            <h2>3. GenreSelect</h2>
            <ul className="genres-list">
                {genresList.map((genre) => (
                    <li 
                        className={genre === selectedGenre ? 'active' : ''}
                        key={genre}
                    >
                        <button onClick={() => handleClick(genre)}>
                            {genre}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default GenreSelect