import { useState, useEffect } from "react";

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  console.log(user)
  const mail = user.email
  console.log(mail)

  const handleSubmit = (eventy) => {
    eventy.preventDefault();
    console.log(user);
  };

  const autofill = () => {
    const mail = user.email;
    if (mail.includes("@")) {
      const mailParts = mail.split("@");
      const u_name = mailParts[0];
      setUser((user) => ({
        ...user,
        username: u_name,
      }));
    }
  };

  return (
    <div>
      <h1>Registration</h1>
      <form  onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={(e) => {setUser({ ...user, email: e.target.value }),autofill()}}
          placeholder="Email Adress"
        />
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={(ev) => setUser({ ...user, username: ev.target.value })}
          placeholder="User Name"
        />

        <input
          type="password"
          name="password"
          value={user.password}
          onChange={(evt) => setUser({ ...user, password: evt.target.value })}
          placeholder="Password"
        />
        <input
          type="password"
          name="passwordConfirm"
          value={user.passwordConfirm}
          onChange={(event) => setUser({ ...user, passwordConfirm: event.target.value })}
          placeholder="Confirm Password"
        />
        <button type="submit" id="button">REGISTRATION</button>
      </form>
    </div>
  );
};

export default Registration;
