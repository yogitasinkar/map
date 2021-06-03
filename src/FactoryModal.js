import React from 'react'
import {  Modal, ModalHeader, ModalBody, Row } from 'reactstrap';

const FactoryModal = ({modal, toggle, currentState}) => {
    return (
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Factory Info - {currentState}</ModalHeader>
        <ModalBody>
            <Row>
                <p className='text-center'>Factory</p>
                <strong>Waste Produced:</strong>
                <strong>Water Consumed:</strong> <span>(Ground water + Municipal)</span>
            </Row>
        </ModalBody>
      </Modal>
    )
}

export default FactoryModal
