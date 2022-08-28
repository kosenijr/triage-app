import logo from './logo.svg';
import './App.css';
import { FaEllipsisV, FaSearch, FaBolt, FaCalendarAlt, FaUndo } from "react-icons/fa";
import styles from '../src/styles/App.module.css'

function App() {
  return (
    <div className="App">
      <div>
        FaSearch FaBolt
        FaCalendarAlt, FaUndo
      </div>
      <header className={styles['header']}>
        <div>
          <span className={styles['title']}>Mount Sinai</span>
          <span className={styles['sub-title']}>Emergency Department</span>
        </div>
        <div>
          <FaEllipsisV />

        </div>
      </header>



    </div>
  );
}

export default App;

// styles is a regular object