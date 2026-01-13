import logo from './logo.svg';
import './App.css';

function App() {
    const Products =[
        {id:1, name:"iphone 12", price:"ksh35,000", image:"\images\iphone12.png"},
        {id:2, name:"iphone 13", price:"Ksh60,000", image:"\images\iphone13.png"},
    ]
  return (
    <div className="App">
    {/*header*/}
    <header>
    <h1>Techy Gadgets</h1>
    </header>

        <section className="hero">
    <div>
    <h2>Phones</h2>
    </div>
    </section>
    <section>
    <div>
    <h2>Laptops</h2>
    </div>
    </section>
    </div>
  );
}

export default App;
