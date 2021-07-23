import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import BugsList from './components/BugsList';
import configureStore from './store/configureStore';

const store = configureStore();
function App() {
  return (
   <Provider store={store}>
      <ToastContainer />
     <BugsList/>
     {/* <Bugs /> */}
   </Provider>
  );
}

export default App;
