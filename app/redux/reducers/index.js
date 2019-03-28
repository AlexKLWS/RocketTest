const expandedTileState = (state = {}, action) => {
  switch (action.type) {
    case 'TILE_IS_EXPANDED':
      return { rowId: action.rowId, elementId: action.elementId }
    case 'TILE_IS_COLLAPSED':
      return { rowId: null, elementId: null }
    default:
      return state
  }
}

export default expandedTileState