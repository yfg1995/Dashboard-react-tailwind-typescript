import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="h-full bg-[#1e1e1e]">
      <div className="fixed top-0 left-0 max-w-[240px] w-full h-screen bg-brandCharcoalBlack py-[24px] px-[12px] flex flex-col items-center" />

      <main className="pl-60 h-full">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
