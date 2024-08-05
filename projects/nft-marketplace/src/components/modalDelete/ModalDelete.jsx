import { useState } from 'react';
import axios from 'axios';
import { InputForm } from '../inputForm/InputForm';
// API URL
const API_URL = 'http://localhost:4000/nfts';

export function ModalDelete({ onClose }) {
  const [deleteId, setDeleteId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`${API_URL}/${deleteId}`);
      if (response.status === 200) {
        onClose(); // Close modal upon successful deletion
      } else {
        setError('NFT ID not found.');
      }
    } catch (error) {
      console.error('Error deleting NFT:', error);
      setError('NFT ID not found.');
    }
  };

  const handleChange = (e) => {
    setDeleteId(e.target.value)
  };
  return (
    <InputForm 
      formHeading={'Delete NFT'}
      inputId = {deleteId}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      onClose={onClose}
      error={error}
    />
  );
}

