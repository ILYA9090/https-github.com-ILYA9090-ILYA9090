import React from 'react'

const Select = ({defaultValue}) => {
  return (
    <select>
      {defaultValue.map((d) => <option value="">{d}</option>)}
    </select>
      
  )
}

export default Select
