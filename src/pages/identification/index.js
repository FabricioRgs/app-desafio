import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as IdentificationActions } from 'store/ducks/identification';

import { colors, general } from 'styles';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

class Identification extends Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>
            SCHEDULER
          </Text>

          <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="phone" size={20} />
            <TextInputMask
              ref={'txtPhone'}
              type={'cel-phone'}
              options={{
                format: '(99) 99999-9999'
              }}
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Seu número de telefone"
              underlineColorAndroid="transparent"
              placeholderTextColor={colors.whiteTransparent}
              value={this.props.tel}
              onChangeText={telInput => this.props.changeTel(telInput)}
            >
            </TextInputMask>
          </View>

          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.btEntrar}
            onPress={
              () => {
                this.props.checkPhoneRequest(this.refs['txtPhone'].getRawValue());
              }
            }
          >
            <Text style={styles.txtEntrar}> Entrar </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  tel: state.identification.tel,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(IdentificationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Identification);
