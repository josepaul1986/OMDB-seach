import React from 'react'

/*export default (props) => (
  <h1 class="title">{props.title}</h1>
)*/

/*export default ({ title }) => (
  <h1 class="title">{title}</h1>
)*/

/*export default ({ children }) => (
  <h1 class="title">{children}</h1>
)*/

export const Title = ({ children }) => (
  <h1 className="title">{children}</h1>
)
