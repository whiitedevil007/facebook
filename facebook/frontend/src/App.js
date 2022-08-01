
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widget from './Widget';

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
