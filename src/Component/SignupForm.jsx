import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    alert(
      "Submitted email is: " +
        data.email +
        " Password: " +
        data.password
    );
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Email
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
                pattern:{
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address"
                }
              })}
            />
          </label>
     </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            Password
            <input
              type="password"
              placeholder="......."
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password must be at least 4 characters",
                },
                maxLength: {
                  value: 12,
                  message: "Password cannot exceed 12 characters",
                },
              })}
            />
          </label>

          {errors.password && (
            <p style={{ color: "crimson" }}>
              {errors.password.message}
            </p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}