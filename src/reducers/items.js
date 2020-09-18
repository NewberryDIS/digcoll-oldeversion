import { FILTER, DISPLAY_MORE, GET_ITEM } from '../actions/items'

const chunkSize = 20

const initialState = {
  items: [],
  categories: [],
  item: {},
  position: 0
}

function shuffle(array) {
  let currentIndex = array.length
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    const temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

let ite = window.ITEMDATA
const items = []
let n = 1

function itemstring(num) {
  return 'ITEMDATA' + num
}

while (ite !== undefined) {
  items.push(ite.items)
  ite = window[itemstring(n)]
  n++
}
const allitems = [].concat.apply([], items)

/* function sortAlpha(array) {
  return array.sort((a, b) => a.title.localeCompare(b.title))
} */

export default function queue(state = initialState, action) {

  switch (action.type) {

    case GET_ITEM: {
      const imd = action.arrayId
      const item = window[imd].items.find((i) => {
        return i.id === action.itemId
      })
      return {
        ...state,
        item: item
      }
    }

    case FILTER: {
      const itemarray = allitems
      shuffle(itemarray)
      const newItems = itemarray.filter((i) => {
        if (action.itemTypes.length === 0) {
          return true
        } else {
		  const found = i.core.some(r => action.itemTypes.includes(r))
		  if (found) {
			  // i.core = action.itemTypes
			  return action.itemTypes
		  }
        }
      })
      return {
        ...state,
        items: newItems,
        position: chunkSize
      }
    }

    case DISPLAY_MORE: {
      return {
        ...state,
        position: state.position + chunkSize
      }
    }

    default: {
      return state
    }

  }

}
