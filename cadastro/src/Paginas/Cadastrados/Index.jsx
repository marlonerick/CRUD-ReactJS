import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import Table from 'react-bootstrap/Table';
import NavBar from "../../Components/NavBar/NavBar";
import '../../Estilo/Cadastrados/Index.css'
import Button from 'react-bootstrap/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalAlterar from '../../Components/ModalCadastro/Index.jsx'

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,

}
    from 'mdb-react-ui-kit';

const ListarDados = () => {

    const [show, setShow] = useState(false);

    const [cadastro, setCadastro] = useState();

    useEffect(() => {
        Axios.get("http://localhost:3001/getDados").then((response) => {
            setCadastro(response.data)
        })
    }, []);

    const handleClickButtonDelete = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`);
        alert("Foi excluido com sucesso. ")
    }

    const OpenModal = (id) => {
        setShow(true);
        alert(id)

    }

    const closeModal = () => {
        setShow(false);
    }
    return (
        <div>
            <NavBar />

            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center'>
                    <MDBCol lg='auto' className='my-4'>
                        <MDBCard>
                            <MDBCardBody className='px- justify-content-end'>

                                <h1 className="d-flex justify-content-around">TABELA DE CADASTRADOS</h1>

                                <Table responsive bordered hover striped="rows">
                                    <thead>
                                        <tr className='rows-color-table'>
                                            <th >Nº</th>
                                            <th>Nome Completo</th>
                                            <th>Email</th>
                                            <th>Endereço</th>
                                            <th>Numero</th>
                                            <th>CPF</th>
                                            <th>Data de Nascimento</th>
                                            <th>Telefone</th>
                                            <th>Celular</th>
                                            <th>Mensagem</th>
                                            <th>Editar</th>
                                            <th>Excluir</th>
                                        </tr>
                                    </thead>
                                    {typeof cadastro !== "undefined" && cadastro.map((value) => {
                                        return (
                                            <tbody key={value.id}>
                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.nome}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.endereco}</td>
                                                    <td>{value.numero}</td>
                                                    <td>{value.cpf}</td>
                                                    <td>{value.nascimento}</td>
                                                    <td>{value.telefone}</td>
                                                    <td>{value.celular}</td>
                                                    <td>{value.mensagem}</td>
                                                    <td>
                                                        <Button variant="success" onClick={() => OpenModal(value.id)} ><EditIcon></EditIcon></Button>
                                                        {show ? <ModalAlterar onClose={() => closeModal()} /> : null}
                                                    </td>
                                                    <td>
                                                        <Button variant="danger" onClick={() => handleClickButtonDelete(value.id)}><DeleteIcon></DeleteIcon></Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    })}
                                </Table>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>

        </div >

    );
}

export default ListarDados;