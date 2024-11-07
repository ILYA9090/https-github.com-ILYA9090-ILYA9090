import React from 'react'

const PostFilter = () => {
  return (
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="поиск ..."
        />
        <MySelect
          value={selectedSort}
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
