import { comment } from 'postcss';
import React, {useState, useEffect, useRef} from 'react'
import { submitComment } from '../services/index';

const CommentsForm = ({slug}) => {

  const [error, setError] = useState(false);
  // const [localStorage, setlocalStorage] = useState(null);
  const [showSuccessMessage, setshowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  // const stroreDataEl = useRef();
  
  const handleCommentSubmission = () => {
    
    setError(false);

    const {value: comment} = commentEl.current;
    const {value: name} = nameEl.current;
    const {value: email} = emailEl.current;

    if(!comment || !name || !email) {
      setError(true);
      return;
    }
   
    const commentObj = { name, email, comment, slug };

    submitComment(commentObj)
      .then((res) => {
        setshowSuccessMessage(true);
         
        setTimeout(() => {
          setshowSuccessMessage(false);
        }, 3000)
      })   
  }
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>CommentsForm</h3>
        <div className='grid grid-cols-1 gap4 mb-4'>
          <textarea 
            ref={commentEl} 
            className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' 
            placeholder='Comment'
            name='comment'
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input 
            type='text'
            ref={nameEl}
            placeholder='Name'
            name='name'
            className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' 
          />
          <input 
            type='email'
            ref={emailEl}
            placeholder='Email'
            name='email'
            className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' 
          />
        </div>
        {error && <p className='text-ss text-red-500'>All fields are required.</p>}
        <div className='mt-8'>
          <button 
            type='button' 
            onClick={handleCommentSubmission}
            className='transition duration-500 ease hover:bg-indigo-900 inline-bock bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer' >
              Post Comment
            </button>
            {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment submitter for review</span>}
        </div>
    </div>
  )
}

export default CommentsForm