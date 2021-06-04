import React from 'react';
import {  Modal, ModalHeader, ModalBody, Row } from 'reactstrap';

const DamModal = ({modal, toggle, currentState}) => {
    return (
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Interventions -  {currentState}</ModalHeader>
        <ModalBody>
            <Row>
                <p className='text-center'>Reservoir</p>
                <strong>Intervention Name:</strong>
                <strong>Water Replenished:</strong>
                <strong>People benifited:</strong>
                <strong>Date:</strong>
                <strong>Timeline:</strong>
                <strong>Outcome:</strong>
                <strong>Impact:</strong>
                <strong>Partner Info:</strong>
                <strong>Read Stories:</strong>
                <strong>Reports:</strong>
                <strong>Media:</strong>
                <strong>Sharing Options:</strong>
            </Row>
        </ModalBody>
      </Modal>
    )
}

export default DamModal
