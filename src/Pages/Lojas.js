import React from "react";
import './lojas.css';

const Lojas = () => {
  return (
    <main>
        <br/><br/>
        <section className="loja">
            <div className="box-loja">
                <img src="../imagens/botafogoshopping.jpg" alt="Shopping Botafogo" />
                <h3>Botafogo Praia Shopping - RJ</h3>
                <p>Rua Praia de Botafogo, 400</p>
                <p>2º andar</p>
                <p>Botafogo</p>
                <p>(21) 1199-9911</p>
            </div>
            <div className="box-loja">
                <img src="../imagens/norteshopping.jpg" alt="Norte Shopping" />
                <h3>Norte Shopping - RJ</h3>
                <p>Av. Dom Hélder Câmara, 5474</p>
                <p>1º andar</p>
                <p>Cachambi</p>
                <p>(21) 7777-2323</p>
            </div>
            <div className="box-loja">
                <img src="../imagens/shoppingtijuca.jpg" alt="Shopping Tijuca" />
                <h3>Shopping Tijuca - RJ</h3>
                <p>Rua Conde de Bonfim, 344</p>
                <p>3º andar</p>
                <p>Tijuca</p>
                <p>(21) 5544-4455</p>
            </div>
        </section>
    </main>

  );
};

export default Lojas;
