import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageBackground: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  iconBackButton: {
    marginLeft: '3%',
    marginRight: '2%',
    height: '40%',
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    height: '9%',
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
  },
  searchView: {
    flexDirection: 'row',
    backgroundColor: '#bdbdbd30',
    borderWidth: 0,
    borderRadius: 6,
    alignItems: 'center',
    height: Platform.OS === "ios" ? '70%' : null,
    width: '80%',
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginHorizontal: 10,
  },
  textInput: {
    flex: 1,
  },
  sectionContainer: {
    height: 36,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
  },
  sectionHeader: {
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2d292670',
  },
  itemContainer: {
    height: 45,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-end',
  },
  itemTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#444444',
    flex: 1,
  },
  itemSeparator: {
    height: 1,
    marginLeft: 20,
    backgroundColor: '#bdbdbd30',
    marginBottom: 0,
  },
  flag: {
    width: 30,
    height: 30,
    marginHorizontal: 20,
    borderRadius: 15,
  },
  selectionTick: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  selectionView: {
    alignItems: 'flex-end',
  },
  
});
