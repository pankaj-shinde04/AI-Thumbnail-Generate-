import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import AuthInput, { emailIcon, lockIcon } from '../components/AuthInput';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthLayout
      title="Login"
      subtitle="Please sign in to continue"
      footer={
        <>
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="text-primary hover:text-primary-hover font-medium transition-colors">
            Sign up
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <AuthInput
          id="login-email"
          type="email"
          name="email"
          placeholder="Email id"
          icon={emailIcon}
          value={form.email}
          onChange={handleChange}
        />

        <AuthInput
          id="login-password"
          type="password"
          name="password"
          placeholder="Password"
          icon={lockIcon}
          value={form.password}
          onChange={handleChange}
        />

        <Link
          to="/forgot-password"
          className="text-sm text-primary hover:text-primary-hover font-medium transition-colors -mt-1"
        >
          Forget password?
        </Link>

        <button
          type="submit"
          className="w-full py-3.5 mt-2 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold transition-all duration-300 btn-glow hover:scale-[1.02] active:scale-[0.98]"
        >
          Login
        </button>
      </form>
    </AuthLayout>
  );
}
