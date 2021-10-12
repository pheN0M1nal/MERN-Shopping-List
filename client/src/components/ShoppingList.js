import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	Constainer,
	Button,
	Container,
	ListGroup,
	ListGroupItem,
} from 'react-bootstrap';
import { addItem, getItems, deleteItem } from '../actions/ItemAction';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

const ShoppingList = () => {
	const dispatch = useDispatch();
	const items = useSelector(state => state.item.items);
	useEffect(() => {
		dispatch(getItems());
	}, []);

	return (
		<Container>
			{/* <Button
				variant='dark'
				style={{ marginBottom: '2rem' }}
				onClick={() => {
					const name = prompt('Enter Item');
					if (name) {
						dispatch(addItem(name));
					}
				}}>
				Add Item
			</Button> */}
			<ListGroup>
				<TransitionGroup className='shopping-list'>
					{items.map(({ _id, name }) => (
						<CSSTransition
							key={_id}
							timeout={500}
							classNames='fade'>
							<ListGroupItem>
								<Button
									className='remove-btn'
									variant='danger'
									size='sm'
									onClick={() =>
										dispatch(deleteItem(_id))
									}>
									&times;
								</Button>
								{name}
							</ListGroupItem>
						</CSSTransition>
					))}
				</TransitionGroup>
			</ListGroup>
		</Container>
	);
};

export default ShoppingList;
