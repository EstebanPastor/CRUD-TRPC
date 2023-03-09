import { trpc } from "./trpc";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { QueryClientProvider, QueryClient, Query } from "@tanstack/react-query";
import AppContent from "./AppContent";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  const [trpcCient] = useState(() => {
    return trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/trpc",
        }),
      ],
    });
  });

  return (
    <trpc.Provider client={trpcCient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default App;
