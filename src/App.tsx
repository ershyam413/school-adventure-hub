
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TransportationPage from "./pages/TransportationPage";
import HostelPage from "./pages/HostelPage";
import AcademicsPage from "./pages/AcademicsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/transportation" element={<TransportationPage />} />
          <Route path="/hostel" element={<HostelPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/academics/:level" element={<AcademicsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
