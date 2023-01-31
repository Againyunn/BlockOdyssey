import { QueryClient, QueryClientProvider } from "react-query";

// pages
import ProductList from "pages/ProductList";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ProductList />
      </QueryClientProvider>
    </div>
  );
}

export default App;
