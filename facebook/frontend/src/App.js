
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Widget from './components/Widget/Widget';

function App() {
  return (
    <div className="App">
    {/* Header */}
    <Header/>
    {/* app body */}
    <div className='app-body'>
        <Sidebar/>
        {/* sidebar */}
        <Feed/>
        {/* feed */}
        {/**widget */}
        <Widget/>
      </div>
    </div>
  );
}

export default App;
