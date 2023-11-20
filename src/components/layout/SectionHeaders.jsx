import React from 'react'

const SectionHeaders = ({subHeader, mainHeader}) => {
  return (
      <div>
          <h3 className="font-semibold">{subHeader}</h3>
          <h1 className="font-bold text-primary text-3xl italic">{mainHeader}</h1>
    </div>
  )
}

export default SectionHeaders