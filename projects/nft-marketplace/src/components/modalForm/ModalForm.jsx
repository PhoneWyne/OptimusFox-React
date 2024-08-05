export function ModalForm({formHeading, formData, handleChange, handleSubmit, required}) {
     return (
      <div>
        <h2 className='text-lg text-gray-700 font-semibold mb-4'>{formHeading}</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='title'>
              Title
            </label>
            <input
              id='title'
              name='title'
              type='text'
              value={formData.title}
              onChange={handleChange}
              required = {required}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='rank'>
              Rank
            </label>
            <input
              id='rank'
              name='rank'
              type='text'
              value={formData.rank}
              onChange={handleChange}
              required = {required}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='author'>
              Author
            </label>
            <input
              id='author'
              name='author'
              type='text'
              value={formData.author}
              onChange={handleChange}
              required = {required}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='price_eth'>
              Price (ETH)
            </label>
            <input
              id='price_eth'
              name='price_eth'
              type='number'
              step='0.01'
              value={formData.price_eth}
              onChange={handleChange}
              required = {required}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='price_usd'>
              Price (USD)
            </label>
            <input
              id='price_usd'
              name='price_usd'
              type='number'
              step='0.01'
              value={formData.price_usd}
              onChange={handleChange}
              required = {required}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
}