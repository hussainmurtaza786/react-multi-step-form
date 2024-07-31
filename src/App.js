import './App.css';
import PersonalDetails from './Components/Details/PersonalDetailForm/PersonalDetails';
import CartProvider from './Store/CartProvider';

function App() {
    return (
        <CartProvider>
            <PersonalDetails />
        </CartProvider>
    );
}

export default App;
