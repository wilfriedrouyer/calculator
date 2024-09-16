import './App.css';
import Calculator from './component/Calculator';
import { useTheme } from './component/ThemeContext';

function App() {
  const { mode } = useTheme();

  return (
    <>
      <div className={`App ${mode}`}>
        <Calculator />
      </div>
    </>
  );
}

export default App;
