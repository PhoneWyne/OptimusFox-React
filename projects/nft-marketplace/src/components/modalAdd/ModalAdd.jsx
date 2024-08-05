import { useState } from "react";
import axios from 'axios';
import { ModalForm } from "../modalForm/ModalForm";


const API_URL = 'http://localhost:4000/nfts'
const IMG_SRC = '/src/assets/card2.png'

export function ModalAdd({onClose}) {
    const [formData , setFormData] = useState({
      title: '',
      rank: '',
      author: '',
      price_eth: '',
      price_usd: ''
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const newNFT = {
        ...formData,
        price_eth: parseFloat(formData.price_eth),
        price_usd: parseFloat(formData.price_usd),
        image: IMG_SRC,
      };
      try {
        await axios.post( API_URL, newNFT);
        onClose();
      } catch (error) {
        console.error('Error creating NFT:', error);
      }
    };
    return (
      <ModalForm 
        formHeading={'Create New NFT'}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        required = {true}
      />
      
    );
  }
  