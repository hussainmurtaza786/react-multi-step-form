import './App.css';
import PersonalDetails from './Components/Details/PersonalDetailForm/PersonalDetails';


function App() {
    return (

           
            <PersonalDetails />

    );
}

export default App;


function DummyComp ({children}){
    return(
        <div>
            hello world {children("XYZ")}
        </div>
    )
}