import React, { useReducer } from 'react'
import axios from 'axios'
import EbayContext from './ebayContext'
import EbayReducer from './ebayReducer'
import { SEARCH_ITEMS, SET_LOADING, CLEAR_ITEMS } from '../../types'

const EbayState = props => {
  const initialState = {
    items: [], //stores single users
    loading: false
  }
  const [state, dispatch] = useReducer(EbayReducer, initialState)

  //Search items
  const searchItems = async text => {
    setLoading()
    const encode = encodeURI(text)
    // const res = await axios.get(
    //   `https://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=${process.env.API_KEY}&GLOBAL-ID=EBAY-AU&RESPONSE-DATA-FORMAT=JSON&callback=_cb_findItemsByKeywords&REST-PAYLOAD&keywords=${encode}&paginationInput.entriesPerPage=50`
    // )
    const res = await fetch(
      `https://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=PaoloSol-topsearc-SBX-369ec6ae1-8a70569e&GLOBAL-ID=EBAY-AU&RESPONSE-DATA-FORMAT=JSON&callback=_cb_findItemsByKeywords&REST-PAYLOAD&keywords=${encode}&paginationInput.entriesPerPage=50`,
      {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      }
    )
    console.log(JSON.stringify(res))

    console.log(`res: ${res} process.env: ${process.env.REACT_APP_API_KEY}`)
    // dispatch({
    //   type: SEARCH_ITEMS,
    //   payload: res.data.items
    // })
  }
  //Set Loading

  const setLoading = () => dispatch({ type: SET_LOADING })

  //Clear Items
  const clearItems = () => dispatch({ type: CLEAR_ITEMS })

  return (
    <EbayContext.Provider
      value={{
        items: state.items,
        loading: state.loading,
        searchItems,
        clearItems
      }}
    >
      {props.children}
    </EbayContext.Provider>
  )
}

export default EbayState
