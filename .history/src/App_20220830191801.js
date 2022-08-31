import logo from './logo.svg';
import { FaEllipsisV, FaSearch, FaBolt, FaCalendarAlt, FaUndo } from "react-icons/fa";
import styles from '../src/styles/App.module.css'
import '../src/styles/Global.module.css'

function App() {
  return (
    <div className={styles['App']}>
      <div className={styles['left-nav']}>
        <FaSearch className='mb-4 mt-4' />
        <FaBolt className='mb-4' />
        <FaCalendarAlt className='mb-4' />
        <FaUndo className='mb-4' />
      </div>
      <div className={styles['right-content']}>
        <header className={styles['header']}>
          <div>
            <span className={styles['title']}>Mount Sinai</span>
            <span className={styles['sub-title']}>Emergency Department</span>
          </div>
          <div>
            <FaEllipsisV />

          </div>
        </header>

        <div>
          <div>
            <h2>Triage</h2>
            <div>
              <h3>John Smith</h3>
              
            </div>
          </div>
          <div>
            <h2>Treating</h2>
          </div>
          <div>
            <h2>Discharging</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// styles is a regular object