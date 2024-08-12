import React from 'react'
import Card from './Card'
import { Robot } from '../lib/definitions'

const CardList = ({robots}: {robots: Array<Robot>}) => {
  return (
    <>
    {robots.map(robot => (
        <Card key={robot.id} robot={robot}></Card>
      ))}
    </>
  )
}

export default CardList