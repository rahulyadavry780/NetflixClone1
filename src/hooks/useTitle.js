import React from 'react'

 export const useTitle = (title) => {
  return (
   document.title=`${title}/ Netflix`
  )
}

export default useTitle
