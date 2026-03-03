import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FloatingParticles from "./components/FloatingParticles";
import Home from "./pages/Home";
import Themes from "./pages/Themes";
import Keynotes from "./pages/Keynotes";
import CallForPapers from "./pages/CallForPapers";
import Program from "./pages/Program";
import Registration from "./pages/Registration";
import Venue from "./pages/Venue";
import Contact from "./pages/Contact";

function Router() {
  return (
    <>
      <FloatingParticles />
      <Navigation />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/themes"} component={Themes} />
        <Route path={"/keynotes"} component={Keynotes} />
        <Route path={"/call"} component={CallForPapers} />
        <Route path={"/program"} component={Program} />
        <Route path={"/registration"} component={Registration} />
        <Route path={"/venue"} component={Venue} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
