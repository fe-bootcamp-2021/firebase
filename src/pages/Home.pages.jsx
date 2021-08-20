import { useAuth } from "../hooks/useAuth.hook";

export default function Home() {
  const { user, signout } = useAuth();
  return (
    <div>
      <h1>Home</h1>

      <h3>Hi, {user.displayName || user.email}</h3>

      {!user.emailVerified && <p>Please, verify your email.</p>}

      <button onClick={signout}>Log Out</button>
    </div>
  );
}
