import React from 'react'

export interface Props {
  [key: string]: any
}
function Rank(props: Props) {
  return <div>Rank</div>
}

export default React.memo(Rank)
