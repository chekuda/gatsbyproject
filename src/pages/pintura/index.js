import React from 'react'
import Paper from '@material-ui/core/Paper'

import styles from './styles'

const Pintura = ({ data }) => {
  const classes = styles()
  return (
    <div className={classes.gridContainer}>
      {
        data.allDatoCmsWork.edges.map(data =>
          <Paper key={data.title} className={classes.paper}>
            <img src={data.node.coverImage.fluid.src} className={classes.gridItem} alt={data.node.slug}/>
            <figcaption className={classes.cardCaption}>
              <h6 className={classes.cardTitle}>
                {data.node.title}
              </h6>
            </figcaption>
          </Paper>
        )
      }
    </div>
  )
}

export default Pintura
