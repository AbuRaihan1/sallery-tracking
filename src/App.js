import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router";

function App() {
  return (
    <div className="bg-slate-200 h-full pb-5">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
