import React from 'react'

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  message: string
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  message,
}) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 w-full h-[100vh] ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <p>{message}</p>
        <div className="mt-4 flex justify-end">
          <button
            className="mr-4 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => {
              onConfirm()
              onClose()
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal
