import { AuthPage } from "./pages/auth";
import { TaskBoardPage } from "./pages/taskBoard/TaskBoardPage";

const routes = [
    {path: "/auth", element: <AuthPage />},
    {path: "/*", element: <AuthPage />},
    {path: "/taskBoard", element: <TaskBoardPage />},
]

export default routes;
