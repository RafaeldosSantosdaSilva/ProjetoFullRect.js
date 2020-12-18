import { ListGroup } from 'react-bootstrap';
import './categoria.css';
export default function Categorias() {
  
     return (
    
        ['sm'].map((breakpoint, idx) => (
            <ListGroup horizontal={breakpoint} className="my-2" key={idx}>
            <ListGroup.Item action className="p-4 itemlista">Todos</ListGroup.Item>
            <ListGroup.Item action className="p-4 itemlista">Fogões</ListGroup.Item>
            <ListGroup.Item action className="p-4 itemlista">Geladeiras</ListGroup.Item>
            <ListGroup.Item action className="p-4 itemlista">Lava-Louças</ListGroup.Item>
            <ListGroup.Item action className="p-4 itemlista">Máquina de lavar</ListGroup.Item>
            <ListGroup.Item action className="p-4 itemlista">Microondas</ListGroup.Item>
            </ListGroup>
          ))
        );
    }