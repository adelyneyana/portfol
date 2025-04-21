import React from 'react';
import { FaLinkedin, FaFacebook, FaTelegram, FaInstagram, FaTiktok } from 'react-icons/fa';

const SocialLinks = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin />, href: '#' },
    { name: 'Facebook', icon: <FaFacebook />, href: '#' },
    { name: 'Telegram', icon: <FaTelegram />, href: '#' },
    { name: 'Instagram', icon: <FaInstagram />, href: '#' },
    { name: 'TikTok', icon: <FaTiktok />, href: '#' },
  ];

  return (
    <div className="flex flex-col space-y-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          className="flex items-center space-x-3 text-gray-600 hover:text-pink-600 transition-colors"
        >
          <span className="text-xl">{social.icon}</span>
          <span>{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 