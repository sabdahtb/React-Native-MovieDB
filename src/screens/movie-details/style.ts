import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b3747',
  },
  moviePhotos: { height: '70%', width: '100%', resizeMode: 'cover' },
  movieTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
  },
  movieTitleText: {
    color: 'white',
    fontSize: 20,
    width: '70%',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  },
})

export default styles
