import React from 'react'
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
const PostFilter = ({filter, setFilter}) => {
  return (
      <div>
        <MyInput
          value={filter.query}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="поиск ..."
        />
        <MySelect
          value={filter.sort}
          onChange={sortPosts}
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
