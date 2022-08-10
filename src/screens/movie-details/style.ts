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
  backButton: {
    position: 'absolute',
    top: 5,
    left: 15,
    paddingBottom: 20,
    paddingRight: 20,
  },
  backIcon: {
    tintColor: 'white',
    resizeMode: 'contain',
    width: 30,
  },
})

export default styles
