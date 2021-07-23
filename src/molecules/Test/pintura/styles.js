// import { makeStyles } from '@material-ui/core/styles'

export default theme => {
  return {
    gridContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: 20,
    },
    paper: {
      margin: 10,
      width: 'calc( ( 100% - 60px ) / 2)',
      height: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 'calc( ( 100% - 80px ) / 4)',
      },
      [theme.breakpoints.up('md')]: {
        width: 'calc( ( 100% - 120px ) / 6)',
      },
    },
    gridItem: {
      cursor: 'pointer',
      width: '100%',
    },
    cardCaption: {
      backgroundColor: 'white',
      padding: '20px',
    },
    cardTitle: {
      marginBottom: '10px',
    },
  }
}
