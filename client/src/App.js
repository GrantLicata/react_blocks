import './App.css';
import Advertisement from './components/Advertisement';
import Navigation from './components/Navigation'
import Main from './components/Main'
import SubContents from './components/SubContents';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main>
        <SubContents />
        <SubContents />
        <SubContents />
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;
