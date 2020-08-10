import React from 'react';
import { Modal, CircularProgress } from '@material-ui/core';
import InputText from '../Commons/inputText';
import './style.scss';
import { CloseOutlined, Check } from '@material-ui/icons';

function Page (props) {
  const {
    open,
    handleChange,
    onClose,
    error,
    errorEmail,
    send,
    sending,
    success
  } = props
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
    >
      <div className="contact-modal">
        <div className="container">
          <div className="modal-header">
            <h5 className="title">
              Contactá al anunciante
            </h5>
            <button className="close-button" onClick={onClose}>
              <CloseOutlined />
            </button>
          </div>
          <div className="input-container">
            <InputText
              type="text"
              labelText="Nombre"
              placeholder="Ingresá tu nombre"
            />
          </div>
          <div className="input-container">
            <InputText
              type="email"
              labelText="Email"
              placeholder="Ingresá tu email"
              error={error}
              errorMessage={errorEmail}
              handleChange={(event) => {
                const newValue = event;
    
                handleChange(newValue);
    
              }}
            />
          </div>
          <div className="input-container">
            <InputText
              type="phone"
              labelText="Teléfono"
              placeholder="Ingresá tu teléfono"
            />
          </div>
          {
            sending && !success ?
              <div className="sending">
                <CircularProgress size={30}/>
              </div>
            :
              !success ?
                <div className="send-contact">
                  <button className="custom-button" onClick={send}>
                    Enviar consulta
                  </button>
                </div>
              :
              null
          }
          {
            success ?
              <div className="success">
                <Check />
                <span>Consulta enviada</span>
              </div>
            :
              null
          }
        </div>
      </div>
    </Modal>
  )
}

export default Page;