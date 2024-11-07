import React from 'react'

const MySelect = ({options, defaultValue}) => {
  return (
    <div>
      <select>
          <option value="">{defaultValue}</option>
          {options.map(option => 
            <option value={option.value}>
                {option.name}
            </option>
          )}
        </select>
    </div>
  )
}

export default MySelect
