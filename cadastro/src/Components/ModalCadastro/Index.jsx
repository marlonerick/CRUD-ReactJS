import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactInputMask from 'react-input-mask';
import Axios from 'axios'

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBTextArea
}
    from 'mdb-react-ui-kit';

const ModalCadastro = ({ onClose = () => { } }, props) => {

    const [show, setShow] = useState(false);

    const [values, setValues] = useState({
        id: props.id,
        nome: props.nome,
        email: props.email,
        endereco: props.endereco,
        numero: props.numero,
        cpf: props.cpf,
        nascimento: props.nascimento,
        telefone: props.telefone,
        celular: props.celular,
        mensagem: props.mensagem,
    });

    const [cadastro, setCadastro] = useState();

    console.log("Modal", cadastro)

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    }

    const handleClickButtonChange = () => {
        Axios.post(`http://localhost:3001/atualizarDados/${values.id}`).then((response) => {
            setCadastro(response.data)
        }, [])

    }

    const handleClickButtonSearch = () => {
        Axios.get(`http://localhost:3001/buscarDados/${values.id}`).then((response) => {
            setCadastro(response.data)
        }, [])
    }

    return (
        <>

            <Modal show={setShow} size='lg' >
                <Modal.Header>
                    <Modal.Title>Altera Dados Cadastrados</Modal.Title>
                </Modal.Header>

                <MDBContainer fluid>

                    <hr className="mx-n3" />

                    <MDBCol>
                        <h6>Buscar Cliente</h6>
                    </MDBCol>

                    <MDBCard>
                        <MDBRow className='align-items-center pt-4 pb-3'>

                            <MDBCol md='3' className='ps-5'>
                                <h6 className="mb-0">Nº Cliente</h6>
                            </MDBCol>

                            <MDBCol sm='3' className='pe-1'>
                                <MDBInput name='id' size='md' id='form1' type='text' onChange={handleChangeValues} />
                            </MDBCol>

                            <MDBCol>
                                <Button variant="primary" onClick={() => handleClickButtonSearch()} >
                                    PROCURAR
                                </Button>
                            </MDBCol>

                        </MDBRow>

                    </MDBCard>

                    <hr className="mx-n3" />

                    {typeof cadastro !== "undefined" && cadastro.map((value) => {
                        return (
                            <MDBCard>

                                <MDBCardBody className='px-4'>

                                    <MDBRow className='align-items-center pt-4 pb-3'>

                                        <MDBCol md='3' className='ps-5'>
                                            <h6 className="mb-0">Nome Completo</h6>
                                        </MDBCol>

                                        <MDBCol md='9' className='pe-5'>
                                            <MDBInput name="nome" size='md' id='form1' type='text' placeholder='Nome Completo'
                                                value={value.nome} onChange={handleChangeValues} ></MDBInput>
                                        </MDBCol>

                                    </MDBRow>

                                    <MDBRow className='align-items-center pt-4 pb-3'>

                                        <MDBCol md='3' className='ps-5'>
                                            <h6 className="mb-0">Email</h6>
                                        </MDBCol>

                                        <MDBCol md='9' className='pe-5'>
                                            <MDBInput name="email" size='md' id='form2' type='email' placeholder='exemplo@exemplo.com' 
                                            onChange={handleChangeValues} value={value.nome} />
                                        </MDBCol>

                                    </MDBRow>

                                    <MDBRow className='align-items-center pt-4 pb-3'>

                                        <MDBCol md='3' className='ps-5'>
                                            <h6 className="mb-0">Endereço</h6>
                                        </MDBCol>

                                        <MDBCol md='5' className='pe-5'>
                                            <MDBInput name='endereco' size='md' id='form1' type='text' placeholder='Rua, Bairro e Cidade' 
                                            onChange={handleChangeValues} value={value.endereco} />
                                        </MDBCol>

                                        <MDBCol md='2' className='ps-3'>
                                            <h6 className="mb-0">Numero</h6>
                                        </MDBCol>

                                        <MDBCol md='2' className='pe-5'>
                                            <ReactInputMask name='numero' size='md' id='form1' type='text' mask='9999' className='form-control' 
                                            onChange={handleChangeValues} value={value.numero} />
                                        </MDBCol>

                                    </MDBRow>

                                    <MDBRow className='align-items-center pt-4 pb-3'>

                                        <MDBCol md='3' className='ps-5'>
                                            <h6 className="mb-0">CPF</h6>
                                        </MDBCol>

                                        <MDBCol sm='3' className='pe-1'>
                                            <ReactInputMask name='cpf' size='md' id='form1' type='text' 
                                            placeholder='999.999.999-99' mask='999.999.999-99' className='form-control' 
                                            onChange={handleChangeValues} value={value.cpf} />
                                        </MDBCol>

                                        <MDBCol sm='2' className='ps-5'>
                                            <h6 className="mb-0">Data</h6>
                                        </MDBCol>

                                        <MDBCol md='3' className='ps-3'>
                                            <ReactInputMask name='nascimento' size='md' id='form1' type='text' 
                                            placeholder='DD/MM/AAAA' mask='99/99/9999' className='form-control'
                                            onChange={handleChangeValues} value={value.nascimento} />
                                        </MDBCol>

                                    </MDBRow>

                                    <MDBRow className='align-items-center pt-4 pb-3'>

                                        <MDBCol md='3' className='ps-5'>
                                            <h6 className="mb-0">Telefone</h6>
                                        </MDBCol>

                                        <MDBCol sm='3' className='pe-1'>
                                            <ReactInputMask name='telefone' size='md' id='form1' type='text' 
                                            placeholder='(  ) ____-____' mask='(99) 9999-9999' className='form-control' 
                                            onChange={handleChangeValues} value={value.telefone} />
                                        </MDBCol>

                                        <MDBCol sm='2' className='ps-5'>
                                            <h6 className="mb-0">Celular</h6>
                                        </MDBCol>

                                        <MDBCol md='3' className='ps-3'>
                                            <ReactInputMask name='celular' size='md' id='form1' type='text' 
                                            placeholder='(  ) _ ____-____' mask='(99) 9 9999-9999' className='form-control' 
                                            onChange={handleChangeValues} value={value.celular} />
                                        </MDBCol>
                                    </MDBRow>

                                    <hr className="mx-n3" />

                                    <MDBRow className='align-items-center pt-4 pb-3'>

                                        <MDBCol md='3' className='ps-5'>
                                            <h6 className="mb-0">Messagem</h6>
                                        </MDBCol>

                                        <MDBCol md='9' className='pe-5'>
                                            <MDBTextArea name='mensagem' id='textAreaExample' rows={3} placeholder='Mensagem' 
                                            onChange={handleChangeValues} value={value.mensagem} />
                                        </MDBCol>

                                    </MDBRow>

                                </MDBCardBody>

                            </MDBCard>
                        )
                    })}

                    <hr className="mx-n3" />

                </MDBContainer>

                <Modal.Footer>

                    <Button variant="success" onClick={() => handleClickButtonChange()} >
                        ALTERAR
                    </Button>

                    <Button variant="danger" onClick={() => onClose()}>
                        FECHAR
                    </Button>

                </Modal.Footer>

            </Modal>
        </>
    );
}

export default ModalCadastro;