import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // redirect to the Home page on success
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-center text-2xl">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>Email</label>
          <input type="email" {...register("email")} />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="">
          <label>Password</label>
          <input type="password" {...register("password")} />
          {errors.password && (
            <span className="text-red-500 ">{errors.password.message}</span>
          )}
        </div>
        <button
          className="border-2 rounded-lg px-4 py-1
        "
          type="submit"
        >
          Login
        </button>
      </form>
      <p>
        Don't have an account? <a href="/signup">SignUp</a>
      </p>
    </div>
  );
};

export default LoginPage;
