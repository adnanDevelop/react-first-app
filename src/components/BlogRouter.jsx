import React from 'react'
import Common from './Common';
import image from '../assets/gallery-3.jpg'

const BlogRouter = () => {
  return (
    <>
      <Common
        title="Grow your business."
        visit="/blog"
        img = {image}
        btn ='Contact Now'
      /> 
    </>
  )
}

export default BlogRouter
