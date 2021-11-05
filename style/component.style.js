import {StyleSheet} from 'react-native';
import theme from './theme.style';

export default StyleSheet.create({
  loading: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  home: {
    backgroundColor: theme.BLACK_COLOR,
    flex: 2,
  },
  homeHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  homeTitle: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: theme.WHITE_COLOR,
  },
  homeTitleNumber: {
    fontSize: 12,
    marginRight: 10,
    color: theme.WHITE_COLOR,
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
    color: theme.WHITE_COLOR,
    marginTop: 5,
    fontSize: 12,
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
  homeHeaderTop: {
    backgroundColor: '#1a1a1a',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  homeHeaderTopTitle: {
    color: theme.WHITE_COLOR,
    fontSize: 16,
  },
  homeHeaderTopGreetings: {
    color: theme.WHITE_COLOR,
    fontSize: 10,
    marginBottom: 10,
  },
});
