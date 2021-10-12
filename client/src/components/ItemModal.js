import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../actions/ItemAction';

const ItemModal = () => {
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const handleClose = () => setIsOpen(false);
	const handleShow = () => setIsOpen(true);
	const [name, setName] = useState('');
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	// const onChange = () => {

	// }
	const onSubmit = e => {
		e.preventDefault();
		const newItem = {
			name: name,
		};
		if (name === '') {
			return;
		}
		dispatch(addItem(newItem));
		handleClose();
		setName('');
	};
	return (
		<div>
			<Button
				variant='dark'
				style={{ marginBottom: '2rem' }}
				onClick={toggle}>
				Add Item
			</Button>
			<Modal show={isOpen} toggle={toggle}>
				<Modal.Header toggle={toggle}>
					Add To Shopping List
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={onSubmit}>
						<Form.Group>
							<Form.Label for='item'>Item</Form.Label>
							<Form.Control
								type='text'
								name='name'
								controlId='Adding item'
								placeholder='Add Shopping Item'
								onChange={e => setName(e.target.value)}
							/>
						</Form.Group>
						<Button
							className='mt-2'
							variant='primary'
							type='submit'
							onClick={onSubmit}>
							Submit
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default ItemModal;
