import "./App.css";
import { Toaster } from "./components/ui/toaster";
import { ThemeProvider } from "./utils/providers/theme-provider";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";

function App() {
  return (
    <ThemeProvider>
      <Toaster />
      <Router>
        <AppRouter />
      </Router>
    </ThemeProvider>
  );
}

export default App;
