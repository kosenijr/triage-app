import logo from './logo.svg';
import { FaEllipsisV, FaSearch, FaBolt, FaCalendarAlt, FaUndo } from "react-icons/fa";
import styles from '../src/styles/App.module.css'

function App() {
  return (
    <div className=>
      <div>
        <FaSearch />
        <FaBolt />
        <FaCalendarAlt />
        <FaUndo />
      </div>
      <div>
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
    </div>
  );
}

export default App;

// styles is a regular object