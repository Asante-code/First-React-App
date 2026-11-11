import React from 'react'

const audrey = (props) => {
  return (
    <div>
        <p>Student Name: {props.name}</p>
        <p>Student Age: {props.age}</p>
        <p>Student Course: {props.course}</p>
        <p>Student Level: {props.level}</p>
    </div>
  )
}

export default audrey