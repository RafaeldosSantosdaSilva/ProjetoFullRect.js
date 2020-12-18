import Menu from './Components/Menu';
import Footer from './Components/footer/footer';
import Rotas from './rotas';

import { BrowserRouter } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu />
        </header>
        <main>
          <Container fluid>
            <Rotas/>
          </Container>
        </main>
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
