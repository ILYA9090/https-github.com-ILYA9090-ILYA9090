import React from 'react'

const MySelect = ({options, defaultValue}) => {
  return (
    <div>
      <select>
          <option value="">{defaultValue}</option>
        </select>
    </div>
  )
}

export default MySelect
