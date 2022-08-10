import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b3747',
    flexDirection: 'column',
  },
  movieHeader: {
    fontSize: 20,
    marginVertical: 7,
    fontWeight: 'bold',
    marginHorizontal: 20,
    textTransform: 'uppercase',
  },
  cardStyle: {
    height: 200,
    width: '90%',
    borderRadius: 10,
    marginHorizontal: '5%',
    marginVertical: 10,
    flexDirection: 'row',
    backgroundColor: '#1B2430',
  },
  cardImage: {
    resizeMode: 'cover',
    height: '100%',
    width: '40%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 5,
  },
  cardTxt: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: 'white',
    margin: 10,
  },
  detailTxt: {
    fontSize: 12,
    color: 'white',
    marginHorizontal: 10,
  },
  actionsButton: {
    position: 'absolute',
    bottom: 15,
    right: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  cardButton: {
    backgroundColor: '#F10086',
    height: 30,
    width: 100,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardButtonTxt: {
    color: 'white',
  },
  loveButton: { height: 35, resizeMode: 'contain', tintColor: '#F10086' },
})

export default styles
