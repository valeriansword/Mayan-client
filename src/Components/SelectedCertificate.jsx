import React from 'react'

function SelectedCertificate({selectedImage,handleClose}) {
  return (<>
    {selectedImage && (
        <div className="fixed inset-0 z-150 flex items-center pt-[300px] justify-center bg-black bg-opacity-75" onClick={handleClose}>
          <div className="relative">
            <img
              src={selectedImage}
              alt="Zoomed Certificate"
              className="rounded-lg max-w-full max-h-screen object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-800 rounded-full p-3 hover:bg-gray-700 transition duration-200"
              onClick={handleClose}
            >
              &times;
            </button>
          </div>
        </div>
      )}
 </> )
}

export default SelectedCertificate
