import './App.css';
import SearchBar from './seachBar';
import Result from './result';
import ResultItem from './resultItem';
import SongList from './songList';
import SongListItem from './songListItem';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Result>
        <ResultItem />
      </Result>
      <SongList>
        <SongListItem />
      </SongList>
    </div>
  );
}

export default App;
