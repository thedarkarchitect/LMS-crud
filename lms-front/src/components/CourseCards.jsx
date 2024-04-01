import React from 'react'
import Card from './Card'

const CourseCards = () => {
  return (
    <>
        <div class="grid-cols-1 sm:grid md:grid-cols-2 ">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </>
  )
}

export default CourseCards
