import { useState } from "react";
import { Sidebar } from "./components/lms/Sidebar";

function App() {
  const [activeView, setActiveView] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeView={activeView} onNavigate={setActiveView} />

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-72 p-8">
        {activeView === "dashboard" && (
          <h1 className="text-2xl font-bold text-primary">
            Dashboard Coming Soon...
          </h1>
        )}
        {activeView === "courses" && (
          <h1 className="text-2xl font-bold text-primary">
            Courses Coming Soon...
          </h1>
        )}
      </main>
    </div>
  );
}

export default App;
