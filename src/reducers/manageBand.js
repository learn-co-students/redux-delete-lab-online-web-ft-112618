export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let band = {
        id: Math.random()*100000000,
        name: action.name
      }
      return { bands: state.bands.concat(band)}

    case 'DELETE_BAND':
      let bandToDelete = state.bands.find(band => band.id === action.id)

      return {bands: state.bands.filter(band => band.id !== bandToDelete.id)}

    default:
      return state;
  }
};
