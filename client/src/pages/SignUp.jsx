import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import AuthInput, { emailIcon, lockIcon, userIcon } from '../components/AuthInput';

export default function SignUp() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthLayout
      title="Sign Up"
      subtitle="Create your account to get started"
      footer={
        <>
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:text-primary-hover font-medium transition-colors">
            Login
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <AuthInput
          id="signup-name"
          type="text"
          name="name"
          placeholder="Full name"
          icon={userIcon}
          value={form.name}
          onChange={handleChange}
        />

        <AuthInput
          id="signup-email"
          type="email"
          name="email"
          placeholder="Email id"
          icon={emailIcon}
          value={form.email}
          onChange={handleChange}
        />

        <AuthInput
          id="signup-password"
          type="password"
          name="password"
          placeholder="Password"
          icon={lockIcon}
          value={form.password}
          onChange={handleChange}
        />

        <AuthInput
          id="signup-confirm-password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          icon={lockIcon}
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full py-3.5 mt-2 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold transition-all duration-300 btn-glow hover:scale-[1.02] active:scale-[0.98]"
        >
          Sign Up
        </button>
      </form>
    </AuthLayout>
  );
}
