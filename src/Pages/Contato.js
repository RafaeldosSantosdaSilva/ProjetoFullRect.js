import {useState} from 'react';
import { Form, Button, Row } from 'react-bootstrap';

export default function Contato() {
    return(
        <Row>
        <div className="col-lg-6 col-md-6 mx-auto">
        <br/><br/>
            <Form>
                <h4>Entre em contato</h4>
                <Form.Group>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" id="nome" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" id="email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Telefone:</Form.Label>
                    <Form.Control type="text" id="fone" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Mensagem:</Form.Label>
                    <Form.Control type="mensagem" id="mensagem" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>
    </Row>
    )
}