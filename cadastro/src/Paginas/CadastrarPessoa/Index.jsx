import Axios from 'axios'
import React, { useState } from 'react';
import ReactInputMask from 'react-input-mask';
import '../../Estilo/CadastrarPessoas/Index.css'
import NavBar from '../../Components/NavBar/NavBar';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea
}
  from 'mdb-react-ui-kit';

const App = () => {

  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      nome: values.nome,
      email: values.email,
      endereco: values.endereco,
      numero: values.numero,
      cpf: values.cpf,
      nascimento: values.nascimento,
      telefone: values.telefone,
      celular: values.celular,
      mensagem: values.mensagem,
    }).then((response) => {
      console.log(response)
    })
    console.log(values)
  }

  return (

    <div>
      <NavBar />
      <MDBContainer fluid>

        <MDBRow className='d-flex justify-content-center align-items-center'>
        <MDBCol lg='7' className='my-4'>

            <h1 className="text-black mb-4">Ficha de Cadastro</h1>

            <MDBCard>
              <MDBCardBody className='px-4'>

                <MDBRow className='align-items-center pt-4 pb-3'>

                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Nome Completo</h6>
                  </MDBCol>

                  <MDBCol md='9' className='pe-5'>
                    <MDBInput name="nome" size='md' id='form1' type='text' placeholder='Nome Completo' onChange={handleChangeValues} />
                  </MDBCol>

                </MDBRow>

                <MDBRow className='align-items-center pt-4 pb-3'>

                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Email</h6>
                  </MDBCol>

                  <MDBCol md='9' className='pe-5'>
                    <MDBInput name="email" size='md' id='form2' type='email' placeholder='exemplo@exemplo.com' onChange={handleChangeValues} />
                  </MDBCol>

                </MDBRow>

                <MDBRow className='align-items-center pt-4 pb-3'>

                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Endereço</h6>
                  </MDBCol>

                  <MDBCol md='5' className='pe-5'>
                    <MDBInput name='endereco' size='md' id='form1' type='text' placeholder='Rua, Bairro e Cidade' onChange={handleChangeValues} />
                  </MDBCol>

                  <MDBCol md='2' className='ps-3'>
                    <h6 className="mb-0">Numero</h6>
                  </MDBCol>

                  <MDBCol md='2' className='pe-5'>
                    <ReactInputMask name='numero' size='md' id='form1' type='text' mask='9999' className='form-control' onChange={handleChangeValues} />
                  </MDBCol>

                </MDBRow>

                <MDBRow className='align-items-center pt-4 pb-3'>

                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">CPF</h6>
                  </MDBCol>

                  <MDBCol sm='3' className='pe-1'>
                    <ReactInputMask name='cpf' size='md' id='form1' type='text' placeholder='999.999.999-99' mask='999.999.999-99' className='form-control' onChange={handleChangeValues} />
                  </MDBCol>

                  <MDBCol sm='2' className='ps-5'>
                    <h6 className="mb-0">Data</h6>
                  </MDBCol>

                  <MDBCol md='3' className='ps-3'>
                    <ReactInputMask name='nascimento' size='md' id='form1' type='text' placeholder='DD/MM/AAAA' mask='99/99/9999' className='form-control' onChange={handleChangeValues} />
                  </MDBCol>

                </MDBRow>

                <MDBRow className='align-items-center pt-4 pb-3'>

                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Telefone</h6>
                  </MDBCol>

                  <MDBCol sm='3' className='pe-1'>
                    <ReactInputMask name='telefone' size='md' id='form1' type='text' placeholder='(__) ____-____' mask='(99) 9999-9999' className='form-control' onChange={handleChangeValues} />
                  </MDBCol>

                  <MDBCol sm='2' className='ps-5'>
                    <h6 className="mb-0">Celular</h6>
                  </MDBCol>

                  <MDBCol md='3' className='ps-3'>
                    <ReactInputMask name='celular' size='md' id='form1' type='text' placeholder='(__) _ ____-____' mask='(99) 9 9999-9999' className='form-control' onChange={handleChangeValues} />
                  </MDBCol>

                </MDBRow>

                <hr className="mx-n3" />

                <MDBRow className='align-items-center pt-4 pb-3'>

                  <MDBCol md='3' className='ps-5'>
                    <h6 className="mb-0">Messagem</h6>
                  </MDBCol>

                  <MDBCol md='9' className='pe-5'>
                    <MDBTextArea name='mensagem' id='textAreaExample' rows={3} placeholder='Mensagem' onChange={handleChangeValues} />
                  </MDBCol>

                </MDBRow>

                <hr className="mx-n3" />

                <div className="d-grid gap-2">

                  <MDBBtn responsive className='my-3' size='xl' variant="secondary" onClick={() => handleClickButton()}>CADASTRAR</MDBBtn>

                </div>
              </MDBCardBody>

            </MDBCard>

          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </div>

  );
}

export default App;
