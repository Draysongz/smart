
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  to: string;  // Add a "to" prop for routing
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive = false, to }) => (
 <Link to={to}>
    <div
      className={`flex flex-col items-center ${
        isActive ? "text-lime-500" : "text-white"
      }`}
    >
      {icon}
      <span className="mt-1 text-xs">{label}</span>
    </div>
  </Link>
);

const NavigationBar: React.FC = () => {
   const location = useLocation();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-neutral-900 px-6 py-4 rounded-t-3xl h-[70px]">
      <div className="flex justify-between items-center">
        <NavItem
          icon={
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          }
          label="Home"
          isActive={location.pathname === "/"}
          to="/"
        />
        <NavItem
          icon={
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
            </svg>
          }
          isActive={location.pathname === "/boost"}
          label="Upgrade"
          to="/boost"
        />
        <NavItem
          icon={
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
            </svg>
          }
          label="Tasks"
          isActive={location.pathname === "/tasks"}
          to="/tasks"
        />
        <NavItem
          icon={
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
          }
          label="Friends"
          isActive={location.pathname === "/referral"}
          to="/referral"
        />
        <NavItem
          icon={
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
            </svg>
          }
          label="Airdrop"
          isActive={location.pathname === "/airdrop"}
          to="/airdrop"
        />
        <NavItem
          icon={
            <svg fill="currentColor" className="w-6 h-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
	 viewBox="0 0 482.368 482.368">
<g>
	<path d="M468.756,13.241C457.966,2.427,442.108-2.186,427.299,0.98c-47.696,10.211-137.739,37.375-204.92,104.542
		c-20.236,20.234-38.564,41.292-54.703,62.394L14.908,181.96c-6.176,0.564-11.479,4.66-13.589,10.502
		c-2.112,5.84-0.657,12.369,3.737,16.763l94.955,94.971c-2.815,19.461-0.626,35.921,6.145,49.003l-36.812,36.804
		c-6.255,6.255-6.255,16.388,0,22.645c3.127,3.128,7.225,4.69,11.323,4.69c4.097,0,8.194-1.563,11.322-4.69l36.781-36.781
		c9.211,4.793,20.001,7.459,32.635,7.459c4.786,0,9.869-0.493,15.077-1.204l95.547,95.557c3.05,3.057,7.147,4.692,11.323,4.692
		c1.829,0,3.675-0.313,5.441-0.954c5.85-2.111,9.93-7.413,10.509-13.597l14.042-152.956c21.205-16.154,42.504-34.661,63.101-55.257
		c67.181-67.173,94.345-157.217,104.557-204.929C484.206,39.606,479.624,24.118,468.756,13.241z M434.009,32.296
		c0.907-0.196,1.845-0.29,2.767-0.29c3.52,0,6.835,1.369,9.336,3.864c3.16,3.182,4.504,7.717,3.566,12.119
		c-2.362,11.001-5.677,24.427-10.274,39.329c-10.79-2.4-20.971-7.498-29.133-15.661c-8.133-8.14-13.214-18.312-15.606-29.079
		C409.566,37.981,422.999,34.65,434.009,32.296z M51.844,210.727l91.593-8.421c-10.775,16.765-20,33.34-27.164,49.291
		c-2.579,5.755-4.77,11.323-6.786,16.796L51.844,210.727z M154.008,350.625l35.999-35.99c0.016-0.024,0.03-0.048,0.046-0.07
		l0.673-0.672c6.254-6.257,6.254-16.398,0-22.645c-6.255-6.255-16.388-6.255-22.645,0l-36.78,36.789
		c-2.205-15.216,2.517-37.297,14.199-63.327c4.315-9.625,9.523-19.525,15.341-29.564c22.472-0.149,44.443,8.639,60.894,25.107
		c16.529,16.521,25.335,38.61,25.131,61.136C207.052,344.456,174.165,353.518,154.008,350.625z M270.528,430.887l-58.049-58.057
		c20.814-7.56,43.318-19.024,66.492-33.848L270.528,430.887z M353.801,236.96c-31.932,31.916-62.99,56.633-91.295,74.835
		c-2.08-23.324-12.229-45.656-29.445-62.866c-17.155-17.155-39.393-27.296-62.632-29.415c19.501-30.361,44.897-61.661,74.594-91.35
		c40.972-40.964,91.718-65.687,134.128-80.458c3.222,13.089,9.883,25.349,19.797,35.271c9.93,9.946,22.238,16.523,35.358,19.745
		C419.544,145.149,394.819,195.948,353.801,236.96z"/>
	<path d="M263.037,146.18c-9.727,9.72-15.091,22.645-15.091,36.391c-0.014,13.746,5.333,26.67,15.061,36.389
		c9.727,9.729,22.659,15.091,36.405,15.091c13.762,0,26.678-5.363,36.39-15.083c9.727-9.719,15.091-22.643,15.091-36.397
		c0-13.746-5.365-26.678-15.091-36.407C316.379,126.743,282.459,126.727,263.037,146.18z M324.479,207.646
		c-13.386,13.402-36.733,13.394-50.151-0.008c-6.694-6.694-10.369-15.591-10.369-25.06c0-9.469,3.691-18.375,10.4-25.075
		c6.692-6.702,15.591-10.393,25.067-10.393c9.477,0,18.359,3.683,25.052,10.376c6.71,6.708,10.4,15.615,10.4,25.084
		C334.879,192.039,331.188,200.944,324.479,207.646z"/>
</g>
</svg>
          }
          label="Boost"
          isActive={location.pathname === "/powerUps"}
          to="/powerUps"
        />
      </div>
    </nav>
  );
};

export default NavigationBar;
