import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router";

function App() {
  return (
    <div className="bg-slate-300 h-full pb-16">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
