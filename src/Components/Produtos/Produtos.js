import { useState, useEffect } from 'react';
import Produto from './Produto/Produto';
import { Container, Row } from 'react-bootstrap';

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(async () => {
        const resposta = await fetch("http://localhost/FullStackEletro/produtos.php")
        const dados = await resposta.json()
        setProdutos(dados);
        
    }, []);

    return (
        <Container>
            <Row>
                {produtos && produtos.map(item => <Produto key={item.produtos_id} imagem={item.nomeimagem} nome={item.nomeproduto}
                 preco={item.preco} categoria={item.categoria} />)}
            </Row>
        </Container>
    )
}
