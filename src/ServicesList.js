const ServicesList = () => {
  const services = [
    { name: 'DIVINE Fortune Cookie', id: '0' },
    { name: 'Daily Horoscope', id: '1' },
    { name: 'Shopping Search here...', id: '2', disabled: true },
    { name: 'O Tarot Reader', id: '3' },
    { name: 'Face Reader', id: '4' },
    { name: 'COD Time Travel', id: '5', disabled: true },
    { name: 'Kundli', id: '6' },
    { name: 'Dream Interpretation', id: '7' },
    { name: 'Meditation', id: '8' },
    { name: 'Love Check', id: '9' },
    { name: 'Swiping Questions', id: '10' },
    { name: 'Read your future now!', id: '11' },
    { name: 'Angel Reader', id: '12' },
    { name: 'Palm Reader', id: '13' },
    { name: 'Embark on your Journey!', id: '14' },
    { name: 'Astrology', id: '15' },
    { name: 'Crystal Ball', id: '16' },
    { name: 'Nourish Your Soul..', id: '17' },
    { name: 'Language', id: '18' },
    { name: 'Login / Register', id: '19', disabled: true },
    { name: 'Emotional Support', id: '20' },
    { name: 'Let\'s take you to the another Dimension!', id: '21' },
    { name: 'Fortune Wheel', id: '22' },
    { name: 'Ketina Love Reading', id: '23' },
    { name: 'Finger Reader', id: '24' },
    { name: 'Biorythm', id: '25' },
    { name: 'Numerlogy', id: '26' },
    { name: 'Get Your Solutions', id: '27' },
  ];

  return (
    <div className="services-list">
      {services.map((service) => (
        <div
          key={service.id}
          className={`service-item ${service.disabled ? 'disabled' : ''}`}
        >
          {service.name}
        </div>
      ))}
    </div>
  );
};

export default ServicesList;