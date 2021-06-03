import React from 'react';
import {  Modal, ModalHeader, ModalBody, Row } from 'reactstrap';

const DamModal = ({modal, toggle, currentState}) => {
    return (
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Dam Info -  {currentState}</ModalHeader>
        <ModalBody>
            <Row>
                <p className='text-center'>Reservoir</p>
                <strong>Water Replenished:</strong>
                <strong>People benifited:</strong>
                <strong>Date:</strong>
            </Row>
        </ModalBody>
      </Modal>
    )
}

export default DamModal
