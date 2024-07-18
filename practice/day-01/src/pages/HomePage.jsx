// import { Button } from "@mui/material"; // already declared, comment one out
import { Button } from "../components/ui/Button";
import { User } from "../components/user/User";

const userData = {
  id: 1,
  name: "Steve Waugh",
  role: "Software Engineer",
  age: 21,
};

export function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      {/* call component "User" and pass "userData" to it */}
      {/* why is this called two times? */}
      <User data={userData} />
      <Button />
      <Button>MUI Button</Button>
      <User />
    </div>
  );
}
