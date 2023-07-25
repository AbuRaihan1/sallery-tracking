const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("./Layout/Main");
const { default: Home } = require("./Pages/Home/Home");
const { default: Expense } = require("./Pages/expense/Expense");

const router = createBrowserRouter([
  {
    pah: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/expense",
        element: <Expense />,
      },
    ],
  },
]);

export default router;
