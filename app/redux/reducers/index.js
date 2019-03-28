const expandedTileState = (state = {}, action) => {
  switch (action.type) {
    case 'TILE_IS_EXPANDED':
      return { expanded: true, rowId: action.rowId, elementId: action.elementId }
    case 'TILE_IS_COLLAPSED':
      return { expanded: false, rowId: null, elementId: null }
    default:
      return state
  }
}

export default expandedTileState