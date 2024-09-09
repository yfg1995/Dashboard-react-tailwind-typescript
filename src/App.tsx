import { Sidebar } from "./components/Sidebar/Sidebar";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <div className="bg-[#1e1e1e] overflow-hidden">
      <Sidebar />

      <main className="md:pl-20 lg:pl-60">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
