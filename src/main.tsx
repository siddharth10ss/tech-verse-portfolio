
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add error handling to catch any rendering issues
try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Root element not found");
    throw new Error("Root element not found");
  }
  
  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error("Failed to render application:", error);
  // Display a fallback message if rendering fails
  document.body.innerHTML = '<div style="text-align:center; padding:2rem; color:black; background:white"><h1>Failed to load application</h1><p>Please check the console for errors.</p></div>';
}
