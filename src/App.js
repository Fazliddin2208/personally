import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import './styles/style.scss'
import { initializeStore } from "./redux/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const { store, persistor } = initializeStore(); 
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
    </PersistGate>
    </Provider> 
  );
}

export default App;
