import React from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter} from 'react-router-dom';
import './global.css';
import Registration from "./components/Registration";

const App = () => {
  return (
    <div>
      <Registration />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
