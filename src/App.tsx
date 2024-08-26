import { Dashboard } from "./components/Dashboard/Dashboard";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// const queryClient = new QueryClient();

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    // <Test />
    // <ReactQueryDevtools />
    // </QueryClientProvider>

    <main className="bg-brandOnyxBlack h-[100vh]">
      <Dashboard />
    </main>
  );
}

export default App;
