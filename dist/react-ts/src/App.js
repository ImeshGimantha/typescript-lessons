import { jsx as _jsx } from "react/jsx-runtime";
import './App.css';
import Header from './components/Header';
function App() {
    return (_jsx(Header, { title: 'Hello World', color: 'red' }));
}
export default App;
