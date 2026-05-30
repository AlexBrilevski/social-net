import type { FC } from "react";

import styles from "./SignIn.module.css";

const SignIn: FC = () => {
  return (
    <div>
      <h1 className={styles["page-title"]}>Sign in to DevsNet</h1>

      <form className={styles["signin-form"]}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="form-control"
            type="email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="form-control"
            type="password"
            name="password"
          />
        </div>
        <div className="form-group form-group-checkbox">
          <input
            id="remember-me"
            type="checkbox"
            name="remember-me"
          />
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
