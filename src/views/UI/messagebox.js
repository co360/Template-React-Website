import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {  api } from '../../views';
class MessageBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.toggle}  className={'modal-warning ' + this.props.className}>
                <ModalHeader toggle={this.toggle}>{this.props.title ? this.props.title : 'warning'}</ModalHeader>
                <ModalBody>
                    {this.props.message}
                </ModalBody>
                <ModalFooter>
                    <Button  color="warning" onClick={() => { api.api.hideMessage() }}>OK</Button>{' '}
                    <Button color="secondary" onClick={() => { api.api.hideMessage() }} >Close</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default MessageBox
