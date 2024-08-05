import { Button } from '../shared/Button';

export function InputForm ({formHeading, handleSubmit, handleChange, onClose, inputId,  error}) {
    return (
        <div>
          <h2 className='text-lg text-gray-700 font-semibold mb-4'>{formHeading}</h2>
          <form onSubmit={handleSubmit}>
            <label className='block text-gray-700 mb-2'>
              NFT ID:
              <input
                type='text'
                value={inputId}
                onChange={handleChange}
                className='ml-2 p-2 text-gray-700 border border-gray-300 rounded'
              />
            </label>
            {error && <p className='text-red-600 mb-2'>{error}</p>}
            <div className='flex gap-4'>
              <Button type='submit' className='bg-red-600 text-white'>
                Submit
              </Button>
              <Button type='button' onClick={onClose} className='bg-gray-300'>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      );
}



// export function InputForm({ inputId, handleChange, handleSubmit, error }) {
//   return (
//     <form onSubmit={handleSubmit} className="p-4 text-gray-700">
//       <div>
//         <label>Enter NFT ID:</label>
//         <input
//           type="text"
//           value={inputId}
//           onChange={handleChange}
//           required
//           className="text-gray-700"
//         />
//       </div>
//       {error && <p className="text-red-500">{error}</p>}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
