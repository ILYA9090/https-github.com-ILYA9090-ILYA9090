import React, {useState} from 'react'
import Comments from './Comments'
import { useAddCommentsMutation } from '../../slices/PostsApi'
const AddComments = ({children}) => {

    const [userText, setUserText] = useState('')
    const [addPosts] = useAddCommentsMutation()

        const handleSumbitForm = async(e) => {
            e.preventDefault()
            await addPosts({text : userText})
        }

  return (
    <div>
      <form type='form' onSubmit={handleSumbitForm}>
        <input
        type="text"
        value={userText}
        onChange={(event) = setUserText(event.target.value)}
        />
      </form>
      <Comments/>
    </div>
  )
}

export default AddComments
