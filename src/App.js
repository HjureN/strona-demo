import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';

function App() {
    const { products } = data;
    return (
        <div className="App">
            <Header></Header>
            <div className="row">
                <Main products={products}> </Main>
                <Basket></Basket>
            </div>
        </div>
    );
}

export default App;
