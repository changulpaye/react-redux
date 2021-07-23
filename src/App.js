import configureStore from './store/configureStore';
import './App.css';
import Bugs from './components/bugs';
import { Provider  } from "react-redux";
import BugsList from './components/BugsList';
const store = configureStore();
function App() {
  return (
   <Provider store={store}>
     <BugsList/>
     {/* <Bugs /> */}
   </Provider>
  );
}

export default App;
