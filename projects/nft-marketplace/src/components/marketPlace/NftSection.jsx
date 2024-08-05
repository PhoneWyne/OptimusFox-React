import axios from 'axios';
// import author from '../../assets/author.png'; shifted to NftCard.jsx
import { useEffect, useState } from 'react';

// import { nfts } from '../../data/nfts'; shifted to json-server
// endpoint: http://localhost:4000/nfts
import {NftCard} from './NftCard';

export function NftSection() {
  // set state of Nft cards
  const [nfts, setNfts] = useState([]);
  // used to determine Loading states
  const [loading, setLoading] = useState(true);
  const fetchNFTs = async () => {
    try {
      const response = await axios.get('http://localhost:4000/nfts');
      setNfts(response.data);
    } catch(error){
      console.error("Error fetching NFT data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNFTs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  // if nfts is empty, its len will be 0
  if (nfts.length === 0) {
    return <div>No NFT data available</div>;
  }
  return (
    <div className='grid xlm:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-6 gap-8'>
      {nfts?.map((nft) => (
        <NftCard nft={nft} />
      ))}
    </div>
  );
}
