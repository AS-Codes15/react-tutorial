import SidebarComponent from "./components/Sidebar";
import Expenses from "./pages/Expenses";
import { sidebarList } from './config/constants';
import AddExpense from './pages/Expenses/AddExpense';

import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="flexbox">
      <SidebarComponent sidebarList={sidebarList} />

      <div className="layout-container">
        <Routes>

          {/* redirect */}
          <Route path="/dashboard" element={<Navigate to="/" />} />

          {/* main routes */}
          <Route path="/" element={<Expenses />} />
          <Route path="/add" element={<AddExpense />} />
          <Route path="/edit/:id" element={<AddExpense />} />

          <Route path="/analytics" element={<p>Analytics Page!</p>} />

          {/* fallback */}
          <Route path="*" element={<p>Not found!</p>} />

        </Routes>
      </div>
    </div>
  );
}

export default App;