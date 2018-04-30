import { StyleSheet } from 'react-native';
import { colors, metrics, general, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: colors.white,
    fontFamily: fonts.PassionOne,
    marginBottom: 40
  },
  input: {
    height: 45,
    color: colors.white,
    backgroundColor: colors.darkTransparent,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding * 2 + 3,
    fontSize: 14,
    width: metrics.screenWidth - 40,
    marginBottom: 10
  },
  btEntrar: {
    backgroundColor: colors.buttons,
    height: 45,
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.baseMargin
  },
  txtEntrar: {
    color: colors.white,
    fontWeight: 'bold'
  },
  searchSection: {
    flexDirection: 'row',
  },
  searchIcon: {
    padding: 10,
    marginLeft: 5,
    position: 'absolute',
    color: colors.white,
    marginTop: 3
  },
  txtEsqueci: {
    color: colors.white,
    fontSize: 13
  }
});

export default styles;
