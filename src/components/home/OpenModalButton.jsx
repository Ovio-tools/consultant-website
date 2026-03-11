'use client'

import { useContactModal } from '../ContactModal'

export default function OpenModalButton({ children, className = 'btn-primary', style }) {
  const { openModal } = useContactModal()
  return (
    <button onClick={openModal} className={className} style={style}>
      {children}
    </button>
  )
}
