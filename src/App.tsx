import { DashboardUsersProfitUpdates } from "./components/Dashboard/DashboardUsersProfitUpdates";
import { Test } from "./components/Test";
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
      <DashboardUsersProfitUpdates />
    </main>
  );
}

export default App;
