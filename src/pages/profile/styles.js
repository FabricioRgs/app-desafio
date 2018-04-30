import { StyleSheet } from 'react-native';
import { colors, metrics, general, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  headerTitle: {
    fontWeight: '500',
    fontFamily: fonts.PassionOne,
    lineHeight: 24,
    marginTop: 5,
    alignSelf: 'center',
    flex: 1,
    textAlign: 'center',
    //marginLeft: - 30,
  },
  mainContainer: {
    paddingHorizontal: metrics.basePadding,
  },
  theme: {
    backgroundColor: colors.primaryDarker,
  },
  headerRight: {
    marginRight: metrics.basePadding,
  },
  panel: {
    height: 82,
    backgroundColor: colors.primaryDarker,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: metrics.baseMargin,
  },
  panelText: {
    color: colors.white,
    fontWeight: '500',
    fontFamily: fonts.PassionOne,
    lineHeight: 21,
    fontWeight: 'bold',
  },
  line: {
    height: 1,
    backgroundColor: colors.primaryDarker,
    marginBottom: 10,
  },
});

export default styles;
