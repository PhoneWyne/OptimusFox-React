// onSelect callbacks to handleSelection
// onSelect('add') is handleSelectOption('add')
export function ModalOptions({ onSelect }) {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-lg font-semibold mb-4'>Select Action</h2>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2'
        onClick={() => onSelect('add')}
      >
        Add NFT
      </button>
      <button
        className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mb-2'
        onClick={() => onSelect('delete')}
      >
        Delete NFT
      </button>
      <button
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2'
        onClick={() => onSelect('edit')}
      >
        Edit NFT
      </button>
    </div>
  );
}
