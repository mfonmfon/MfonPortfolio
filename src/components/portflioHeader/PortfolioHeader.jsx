

const PortfolioHeader = () => {
  return (
    <div className='w-full h-20 bg-black'>
      <div className="flex flex-row md:flex-row justify-between items-center p-5 ">
        <div className="ml-6">
          <h1 className='text-2xl md:text-3xl  font-bold text-center text-white'>Mfon</h1>
        </div>
        <div className="mr-7">
          <button onClick={() => window.location.href = '/letstalk'} className="text-white border-1 rounded-md px-4 py-2 bg-gray-500 hover:bg-gray-300 
          hover:bg-gray-300 md:px-6 md:py-3">Lets talk</button>
        </div>
      </div>
    </div>
  )
}

export default PortfolioHeader
