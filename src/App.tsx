import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTopHandler from "./components/ScrollToTopHandler";
import Index from "./pages/Index";
import About from "./pages/About";
import Capabilities from "./pages/Capabilities";
import Process from "./pages/Process";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import EmailRefusal from "./pages/EmailRefusal";
import BusinessInfo from "./pages/BusinessInfo";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <HashRouter>
      <ScrollToTopHandler />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/process" element={<Process />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/email-refusal" element={<EmailRefusal />} />
        <Route path="/business-info" element={<BusinessInfo />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </TooltipProvider>
);

export default App;
