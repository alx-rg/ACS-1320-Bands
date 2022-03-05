// npm run deploy <- to update GH Page
import './App.css';
import Header from './Header';
import MetalMeta from './MetalMeta';
import Band from './Band';
import data from "./metal.json";

function App() {

  const bands = data.map(( {band_name, fans, formed, origin, split, style}) => {
    fans = fans * 1000
    return (
      <Band 
      band_name={band_name}
      formed={formed}
      origin={origin}
      fans={fans.toLocaleString('en')}
      split={split}
      style={style}
    />
    )
  }
  )


  return (
    <div className="App">
      <Header />
      <MetalMeta />
      <div className='band'>{bands}</div>      
    </div>
  );
}

export default App;
