export const setTileIsExpanded = (rowId, elementId) => ({
  type: 'TILE_IS_EXPANDED',
  rowId,
  elementId
})

export const setTileIsCollapsed = () => ({
  type: 'TILE_IS_COLLAPSED'
})
