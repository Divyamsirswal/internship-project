import { useState } from 'react';

const options = [
  { id: 1, name: 'Fortune Cookie', link: '/fortune-cookie' },
  { id: 2, name: 'Daily Horoscope', link: '/daily-horoscope' },
  { id: 3, name: 'Shopping', link: '/shopping' },
  { id: 4, name: 'Kundli', link: '/kundli' },
  { id: 5, name: 'Love Check', link: '/love-check' },
  { id: 6, name: 'Language', link: '/language' },
  { id: 7, name: 'Login/Register', link: '/login-register' },
  { id: 8, name: 'Fortune Wheel', link: '/fortune-wheel' },
];

const Navigation = () => {
  const [activeOption, setActiveOption] = useState(null);

  return (
    <div className="flex flex-col items-center space-y-2">
      {options.map((option) => (
        <button
          key={option.id}
          className={`px-4 py-2 rounded-md ${
            activeOption === option.name ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => setActiveOption(option.name)}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
};

export default Navigation;