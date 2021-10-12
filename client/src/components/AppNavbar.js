import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const AppNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<Navbar bg='dark' variant='dark' expand='lg' className='mb-5'>
				<Container>
					<Navbar.Brand href='#'>ShoppingList</Navbar.Brand>
					<Navbar.Toggle
						onClick={toggle}
						aria-controls='basic-navbar-nav'
					/>
					<Navbar.Collapse id='basic-navbar-nav' isOpen={isOpen}>
						<Nav className='me-auto justify-content-end'>
							<Nav.Link href='http://github.com/pheN0M1nal'>
								Github
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default AppNavbar;
