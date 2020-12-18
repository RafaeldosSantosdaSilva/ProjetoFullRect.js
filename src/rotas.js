import { Switch, Route } from 'react-router-dom';

import  Produtos  from './Pages/Produtos';
import  Pedidos from './Pages/Pedidos';
import  Home from './Pages/Home';
import  Contato from './Pages/Contato';
import  Lojas from './Pages/Lojas'

function Rotas() {
    return (
        <Switch>
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/pedidos" component={Pedidos} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/contato" component={Contato} />
            <Route exact path="/lojas" component={Lojas} />
        </Switch>
    );
}

export default Rotas;