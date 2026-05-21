import type { FC } from "react";

const SignIn: FC = () => {
  return (
    <div>
      <h1>Sign in to DevsNet</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
        </div>
        <div className="form-group">
          <input id="remember-me" name="remember-me" type="checkbox" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <div className="form-actions">
          <button>Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
