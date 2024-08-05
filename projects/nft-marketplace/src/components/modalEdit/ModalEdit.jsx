import { useState } from "react";
import axios from 'axios';
import { ModalForm } from "../modalForm/ModalForm";
import { InputForm } from '../inputForm/InputForm';


const API_URL = 'http://localhost:4000/nfts'
const IMG_SRC = '/src/assets/card2.png'

export function ModalEdit({onClose}){
    const [editNftId, setEditNftId] = useState(null);
    const [inputId, setInputId] = useState('');
    const [formData, setFormData] = useState({
      title: '',
      rank: '',
      author: '',
      price_eth: '',
      price_usd: '',
    });
    const [error, setError] = useState('');

    const handleIdChange = (e) => {
      setInputId(e.target.value);
    };
  
    const handleIdSubmit = async (e) => {
      e.preventDefault();
      try {
     
        const response = await axios.get(`${API_URL}/${inputId}`);
        console.log(response)
        if(response.status === 200){
          setFormData({
            title: response.data.title,
            rank: response.data.rank,
            author: response.data.author,
            price_eth: response.data.price_eth,
            price_usd: response.data.price_usd,
          });
          setEditNftId(inputId);
        } else {
          setError('NFT ID not found.');
          console.log('response not recieved');
        }
        // console.log(formData);
      } catch (error) {
        console.error('Error deleting NFT:', error);
        setError('NFT ID not found.');
      }
    };
  
    const handleEditChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    const handleEditSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.patch(`${API_URL}/${editNftId}`, {
          title: formData.title,
          rank: formData.rank,
          author: formData.author,
          price_eth: parseFloat(formData.price_eth),
          price_usd: parseFloat(formData.price_usd),
        });
        onClose();
     
      } catch (error) {
        setError('Error updating NFT');
      }
    };
    
    return (  
      !editNftId ? (
        <InputForm
          inputId={inputId}
          formHeading={'Edit NFT'}                
          handleSubmit={handleIdSubmit}
          handleChange={handleIdChange}
          onClose={onClose}
          error={error}
        />
      ) : (
        <ModalForm
          formHeading={'Edit NFT'}
          formData={formData}
          handleChange={handleEditChange}
          handleSubmit={handleEditSubmit}
          error={error}
          required={false}              
        />)
    );
}

