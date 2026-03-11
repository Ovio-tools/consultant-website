'use client'

import { useContactModal } from '../ContactModal'

export default function OpenModalButton({ children, className = 'btn-primary' }) {
  const { openModal } = useContactModal()
  return (
    <button onClick={openModal} className={className}>
      {children}
    </button>
  )
}
