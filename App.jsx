// src/App.jsx
import React, { useState } from 'react';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      name: 'John Doe',
      role: 'Frontend Developer',
      image: 'https://i.pravatar.cc/300?img=1',
    },
    {
      name: 'Jane Smith',
      role: 'UI/UX Designer',
      image: 'https://i.pravatar.cc/300?img=2',
    },
    {
      name: 'Mike Johnson',
      role: 'Backend Engineer',
      image: 'https://i.pravatar.cc/300?img=3',
    },
    {
      name: 'Emily Davis',
      role: 'Product Manager',
      image: 'https://i.pravatar.cc/300?img=4',
    },
    {
      name: 'Chris Martin',
      role: 'DevOps Specialist',
      image: 'https://i.pravatar.cc/300?img=5',
    },
  ];

  const handleViewProfile = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>React UI Components Demo</h1>

      {/* BUTTONS */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Buttons</h2>
        <Button
          label="Primary Button"
          onClick={() => alert('Primary Clicked')}
        />
        &nbsp;
        <Button
          label="Secondary Button"
          type="secondary"
          onClick={() => alert('Secondary Clicked')}
        />
        &nbsp;
        <Button label="Disabled Button" disabled />
      </section>

      {/* CARDS + MODAL */}
      <section>
        <h2>User Cards</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {users.map((user, index) => (
            <div key={index}>
              <Card
                title={user.name}
                description={user.role}
                image={user.image}
              />
              <div style={{ marginTop: '0.5rem' }}>
                <Button
                  label="View Profile"
                  onClick={() => handleViewProfile(user)}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedUser && (
          <div>
            <h2>{selectedUser.name}</h2>
            <p>
              <strong>Role:</strong> {selectedUser.role}
            </p>
            <img
              src={selectedUser.image}
              alt={selectedUser.name}
              style={{ width: '100%', maxWidth: '300px', borderRadius: '8px' }}
            />
            <div style={{ marginTop: '1rem' }}>
              <Button
                label="Close"
                type="secondary"
                onClick={() => setIsModalOpen(false)}
              />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default App;
