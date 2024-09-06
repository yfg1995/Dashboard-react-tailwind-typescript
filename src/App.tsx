import { Dashboard } from "./components/Dashboard/Dashboard";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="bg-[#1e1e1e] overflow-hidden">
      <Nav />

      <main className="md:pl-20 lg:pl-60">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
