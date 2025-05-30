// components/Loader.jsx
import './loader.css';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="lds-ripple"><div></div><div></div></div>
    </div>
  );
}
