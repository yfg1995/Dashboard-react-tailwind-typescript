import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      {/* <div className="fixed top-0 left-0 w-full h-full bg-brandCharcoalBlack py-[24px] px-[12px] flex flex-col items-center md:max-w-[80px] lg:max-w-[240px]" /> */}

      <main className="h-full w-full bg-[#1e1e1e] overflow-hidden md:pl-20 lg:pl-60">
        <Dashboard />
      </main>
    </>
  );
}

export default App;
