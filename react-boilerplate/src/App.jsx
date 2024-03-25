import { Route, Routes } from "react-router";
import routes from "./routes";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
 
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => (
      <Route
        path={route.path}
        element={
          route.private ? (
            <PrivateRoute>{route.component}</PrivateRoute>
          ) : (
            route.component
          )
        }
        key={route.key}
      />
    ));

  return <Routes>{getRoutes(routes)}</Routes>;
}

export default App;
