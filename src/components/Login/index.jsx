import React from "react";

import "./styles.scss";

export default function Login({ setClick }) {
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    if (password === "peppita") {
      setClick(true);
    }
  }, [password]);
  return (
    <div className="login">
      <label htmlFor="passsword">Entre com sua senha:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}
