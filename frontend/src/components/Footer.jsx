import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-light py-4 border-top border-secondary">
      <div className="container text-center">
        <p className="mb-1">🔭 <strong>Cosmos Explorer</strong> &copy; {new Date().getFullYear()}</p>
        <p className="small text-white">Built using NASA Open APIs — Explore the universe from your browser 🌌</p>
      </div>
    </footer>
  );
};

export default Footer;
