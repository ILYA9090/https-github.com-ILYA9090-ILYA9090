import React from 'react'
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import MySelect from './UI/select/MySelect';
const PostFilter = ({filter, setFilter}) => {
  return (
      <div>
        <MyInput
          value={filter.query}
          onChange={(e) => setFilter({...filter, query : e.target.value})}
          placeholder="поиск ..."
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort : selectedSort})}
          defaultValue="сортировка по"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
  )
}

export default PostFilter
