import { Dashboard } from "./components/Dashboard/Dashboard";
import { Sidebar } from "./components/Sidebar/Sidebar";

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
