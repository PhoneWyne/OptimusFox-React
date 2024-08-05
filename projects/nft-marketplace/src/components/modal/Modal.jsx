
// children are the content to be displayed within Modal, in this case, form fields & Submit button
// onClose called when closing the form
export function Modal({ children, onClose }) {
    return (
      <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
        <div className='bg-white rounded-lg overflow-hidden relative p-6'>
          <button
            className='absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700'
            onClick={onClose}
          >
            {/* &times is basically the cross sign in html */}
            &times;  
          </button>
          {/* render any children element passed, in this case, ModalContent */}
          {children}
        </div>
      </div>
    );
  }