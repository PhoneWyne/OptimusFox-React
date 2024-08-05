import avatar from '../assets/avatar.png';
import logo from '../assets/logo.svg';
import {
  Bag,
  BarChart,
  ChevronDown,
  Cursor,
  Menu,
  Plus,
} from '../assets/Icons';
import { Button } from '../components/shared/Button';
import { LayoutContainer } from './LayoutContainer';

// new imports
import axios from 'axios';

import { useState } from 'react';
import { Modal } from '../components/modal/Modal';
import { ModalOptions } from '../components/modalOptions/ModalOptions';
import { ModalAdd } from '../components/modalAdd/ModalAdd';
import { ModalDelete } from '../components/modalDelete/ModalDelete';
import { ModalEdit } from '../components/modalEdit/ModalEdit';

// API URL
// http://localhost:4000/nfts
// image src
// "/src/assets/card2.png"

// can edit just here, to change elsewhere
const API_URL = 'http://localhost:4000/nfts'
const IMG_SRC = '/src/assets/card2.png'

export function Navbar() {

  const [isModalOpen , setIsModalOpen] = useState(false)
  // control which modal to show, by default set to "options"
  // "options" means display choice of selection between Add, Delete, Edit
  // "add" - add NFT
  // "delete" - delete NFT by id
  // "edit" - edit NFT by id
  const [modalView , setModalView] = useState("options")

  const openModal = () => setIsModalOpen(true);
  // reset to default
  const closeModal = () => {
    setIsModalOpen(false);
    setModalView('options');
    setEditNftId(null);
    setInputId('');
    setError('');
  };

   // updates modalView to "add", 'delete', 'edit'
  const handleSelectOption = (option) => {
    setModalView(option);
  };

  return (
    <LayoutContainer>
      <div className='p-4 md:hidden'>
        <Menu />
      </div>
      <div className='justify-between hidden md:flex'>
        <div className='flex gap-8 items-center'>
          <a href='/'>
            <img src={logo} alt='logo' className='h-6' />
          </a>
          <ul className='flex gap-4'>
            <NavItem Icon={Cursor} title='Discover' url='/discover' />
            <NavItem
              isActive
              Icon={Bag}
              title='Marketplace'
              url='/marketplace'
            />
            <NavItem Icon={BarChart} title='Leaderboards' url='/leaderboards' />
          </ul>
        </div>
        <div className='flex gap-4'>
          {/* Add, Delete, Edit NFT is handled here */}
          <Button
            className='flex items-center gap-1 rounded-xl px-3 bg-zinc-700'
            variant='ghost'
            onClick={openModal}            
          >            
            <span>Manage NFTs</span>
            {/* <Plus /> */}
          </Button>
          
          <div className='flex gap-1 items-center'>
            <img className='h-6 w-6' src={avatar} />
            <Button variant='ghost' size='icon'>
              <ChevronDown />
            </Button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}> 
          {/*default view  */}
          {modalView === 'options' && <ModalOptions onSelect={handleSelectOption} />}
          {/* Add Modal */}
          {modalView === 'add' && (
            <ModalAdd onClose={closeModal}/>
          )}
          {/* Delete Modal */}
          {modalView === 'delete' && (
            <ModalDelete onClose={closeModal}/>
          )}
          {/* Edit Modal */}
          {modalView === 'edit' && (
            <ModalEdit onClose={closeModal}/>
          )}
        </Modal>
      )}
    </LayoutContainer>
  );
}

function NavItem({ Icon, title, url, isActive = false }) {
  return (
    <a
      className={`flex gap-2 items-center ${
        isActive ? 'rounded-xl p-2 bg-zinc-700' : undefined
      }`}
      href={url}
    >
      <Icon />
      <li>{title}</li>
    </a>
  );
}
