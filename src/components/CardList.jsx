import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {
  return (
    <>
    {robots.map(robot => (
        <Card key={robot.id} robot={robot}></Card>
      ))}
    </>
  )
}

export default CardList