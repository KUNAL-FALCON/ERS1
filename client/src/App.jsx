import { EthProvider } from "./contexts/EthContext";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserMainScreen } from "./components/User-Screens/UserMainScreen";

function App() {
  return (
    <EthProvider>
      <BrowserRouter
        basename='/'
      >
        <Routes>
          <Route path="/" element = { < UserMainScreen/>} />
        </Routes>
      </BrowserRouter>
    </EthProvider>
  );
}

export default App;
