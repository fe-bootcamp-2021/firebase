import { lazy, Suspense } from "react";

const AuthenticatedApp = lazy(() => import("./components/AuthenticatedApp"));
const UnAuthenticatedApp = lazy(() =>
  import("./components/UnAuthenticatedApp")
);

function App() {
  const user = false;

  return (
    <div className="App">
      <h1>App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
      </Suspense>
    </div>
  );
}

export default App;
