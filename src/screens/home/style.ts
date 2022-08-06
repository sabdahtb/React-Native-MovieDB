import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b3747',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 32,
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
  },
  movieHeader: {
    fontSize: 24,
    marginVertical: 10,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  actionsButton: {
    width: '100%',
    height: 140,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonStyles: {
    height: 60,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1B2430',
    marginVertical: 5,
  },
  pageStyles: {
    height: 60,
    paddingHorizontal: 30,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1B2430',
    marginVertical: 5,
  },
  pageText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardStyle: {
    height: 400,
    width: 180,
    borderRadius: 10,
    margin: 10,
  },
  cardImage: {
    resizeMode: 'cover',
    height: '75%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  cardTxtContainer: {
    height: 60,
    padding: 5,
    width: '100%',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1B2430',
  },
  cardTxt: {
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#34B3F1',
  },
})

export default styles
