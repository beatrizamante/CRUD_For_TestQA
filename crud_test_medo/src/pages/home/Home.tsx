import React from 'react'
import Card from '../../components/Card';
import createImage from '../../assets/images/vinyl.jpg'

export default function home() {
  return (
    <div>
      <Card
      imageSrc={createImage}
      title="Create Vinyl"
      description="Click here to create your Vinyl"
      ></Card>
    </div>
  )
}
