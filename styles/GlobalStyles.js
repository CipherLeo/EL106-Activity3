import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    padding: 40,
  },
  textContainerRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  block: {
    alignSelf: 'stretch',
  },
  subtitleText: {
    color: 'grey',
  },
  centerText: {
    textAlign: 'center',
  },
  rightText: {
    textAlign: 'right',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default Styles;