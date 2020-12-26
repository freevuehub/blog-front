import React from 'react'
import { useRouter } from 'next/router'

const DevlogPage: React.FC = () => {
  const router = useRouter()

  return (
    <div>
      {router.query.category}
    </div>
  )
}

export default DevlogPage
