import React, { useContext } from 'react'
import IndividualItem from './individualItem'
import Spinner from '../components/layout/Spinner'

import EbayContext from '../context/Ebay/ebayContext'

const Items = () => {
  const ebayContext = useContext(EbayContext)
  const itemStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
  }

  const { loading, items } = ebayContext

  if (!loading) {
    return (
      <div style={itemStyle}>
        {items.map(item => (
          <IndividualItem key={item.id} item={item}></IndividualItem>
        ))}
      </div>
    )
  } else {
    return <Spinner></Spinner>
  }
}

export default Items
