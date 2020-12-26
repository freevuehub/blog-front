import React from 'react'
import { useRouter } from 'next/router'

const IdPage: React.FC = () => {
  const router = useRouter()

  return (
    <div>
      {router.query.category}
      {router.query.id}
    </div>
  )
}

export default IdPage
