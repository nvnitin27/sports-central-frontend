  import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts,getRecentSportNews } from '../services';


const PostWidget = ({categories, slug}) => {

  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if(slug) {
      getRecentSportNews()
          .then(function(response){
              return response.json();
          })
          .then(function(myJson) {
              setRelatedPosts(myJson);
          })

    } else {
      getRecentSportNews()
          .then(function(response){
              return response.json();
          })
          .then(function(myJson) {
              setRelatedPosts(myJson);
          })
    }
  }, [slug])



  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4 text-black'>
        {slug ? 'Related Posts' : 'Recent Tweets'}
      </h3>

        <div className='recent_news'>
      {relatedPosts.data && relatedPosts.data.length>0 && relatedPosts.data.map((data) => (
        // <div key={post.title} className="flex items-center w-full mb-4">
        //   <div className="w-16 flex-none">
        //     <img
        //       alt={post.title}
        //       height="60px"
        //       width="60px"
        //       unoptimized
        //       className="align-middle rounded-full"
        //       src={post.featuredImage.url}
        //     />
        //   </div>
        //   <div className="flex-grow ml-4">
        //     <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
        //     <Link href={`/post/${post.slug}`} className="text-md" key={post.title}>{post.title}</Link>
        //   </div>
        // </div>
          <div key={data.id} className="card">
          <div key={data.id} className="flex items-center w-full mb-4">
              <div  className="flex items-center w-full mb-4">
                <div className="flex-grow ml-4" >
                    <p className="text-gray-500 font-xs">{data.text}</p>
                </div>

              </div>

          </div>
          </div>
      ))}
        </div>
    </div>
  )
}

export default PostWidget