import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from './Context/ThemeContext';
import Conntainer from './componets/Conntainer';
import { UserContextProvider } from './Context/UserContext';

function App() {
  return (
  <ThemeProvider>
    <UserContextProvider>
<Conntainer>  </Conntainer>
</UserContextProvider>
  </ThemeProvider>
  );
}

export default App;
