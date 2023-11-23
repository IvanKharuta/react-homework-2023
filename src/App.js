import Counter from "./components/Counter/Counter";
import SearchForm from "./components/SearchForm/SearchForm";
import GenreSelect from "./components/GenreSelect/GenreSelect";
import './App.css'

const onSearchCallback = (query) => alert(query)

const movieGenres = ['All', 'Documentary', 'Comedy', 'Crime']

const handleSelect = (genre) => {
  alert(genre);
};

function App() {
  return (
    <div className="App">
      <Counter initialValue={3} />
      <SearchForm initialQuery="Movie Title" onSearch={onSearchCallback} />
      <GenreSelect
        genresList={movieGenres}
        curentGenre="Comedy" 
        onSelect={handleSelect}
      />
    </div>
  );
}

export default App;
