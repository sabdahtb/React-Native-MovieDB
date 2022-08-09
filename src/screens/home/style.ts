import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b3747',
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    height: 50,
  },
  headerImage: {
    resizeMode: 'contain',
    height: 54,
    width: 216,
  },
  movieHeader: {
    fontSize: 20,
    marginVertical: 7,
    fontWeight: 'bold',
    marginHorizontal: 20,
    textTransform: 'uppercase',
  },
  actionsButton: {
    width: '100%',
    height: '10%',
    paddingTop: 5,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textActionsButton: {
    fontSize: 30,
    marginBottom: 4,
  },
  buttonStyles: {
    height: 40,
    width: 100,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1B2430',
    marginVertical: 5,
  },
  pageStyles: {
    height: 50,
    paddingHorizontal: 30,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F10086',
    marginVertical: 5,
    shadowColor: '#9206bd',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,

    elevation: 15,
  },
  pageText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardStyle: {
    height: 300,
    width: '90%',
    borderRadius: 10,
    marginHorizontal: '5%',
    marginVertical: 5,
  },
  cardImage: {
    resizeMode: 'cover',
    height: '75%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderRadius: 5,
    marginBottom: 5,
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
