import logo from '../assets/logo.png';

export default function BrandLogo({ className = 'w-30 h-30' }) {
  return (
    <img
      src={logo}
      alt="AI Thumbnail"
      className={`object-contain ${className}`}
    />
  );
}
