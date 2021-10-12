import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div className='App'>
			<AppNavbar />
			<Container>
				<ItemModal />
				<ShoppingList />
			</Container>
		</div>
	);
}

export default App;
