import Header from "./components/Header";
import Notifications from "./components/Notifications";
import MainNews from "./components/MainNews";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.body} >
     <Header />
     <div className={styles.page}>
         <div>
             <Notifications />
         </div>
         <div>
             <MainNews/>
         </div>
     </div>
    </div>
  );
}

export default App;
