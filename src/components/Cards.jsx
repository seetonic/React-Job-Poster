/* eslint-disable react/prop-types */



function Cards({children, bg='bg-gray-100'}) {
  return (
    <div className={`${bg} px-10 py-6 rounded-lg shadow-md flex-grow`}>  
        {children}
    </div>
  )
}

export default Cards