import {StyleSheet} from 'react-native';
import theme from './theme.style';

export default StyleSheet.create({
  loading: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  home: {
    backgroundColor: theme.PRIMARY_COLOR,
    flex: 2,
  },
  homeHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeTitle: {
    fontSize: 18,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 5,
  },
  homeItem: {
    margin: 10,
  },
  homeItemPhoto: {
    width: 'auto',
    height: 150,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  homeItemText: {
    color: theme.BLACK_COLOR,
    marginTop: 5,
  },
  singleHeaderTitle: {
    color: theme.WHITE_COLOR,
  },
  singleHeaderBack: {
    width: 25,
    height: 25,
    tintColor: theme.WHITE_COLOR,
  },
  singleDescriptionTitle: {
    color: theme.WHITE_COLOR,
    fontSize: 16,
    marginBottom: 10,
  },
  singleDescriptionContent: {
    color: theme.WHITE_COLOR,
    fontSize: 12,
    lineHeight: 16,
  },
});
