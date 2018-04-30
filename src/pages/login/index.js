import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';
import { Creators as IdentificationActions } from 'store/ducks/identification';

import { TextInputMask } from 'react-native-masked-text';

import { colors } from 'styles';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';

class Login extends Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    telInput: '',
    passwordInput: ''
  }

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

          <View style={styles.searchSection}>
            <IconEntypo style={styles.searchIcon} name="lock" size={20} />
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              placeholder="Sua senha secreta"
              underlineColorAndroid="transparent"
              placeholderTextColor={colors.whiteTransparent}
              value={this.state.passwordInput}
              onChangeText={passwordInput => this.setState({ passwordInput })}
            >
            </TextInput>
          </View>

          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.btEntrar}
            onPress={() => this.props.loginUserRequest(this.refs['txtPhone'].getRawValue(), this.state.passwordInput)}
          >
            <Text style={styles.txtEntrar}> Entrar </Text>
          </TouchableOpacity>
          <View style={{ alignItems: 'center', marginTop: 10}}>
            <TouchableOpacity>
              <Text style={ styles.txtEsqueci }> Esqueci minha senha </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  tel: state.identification.tel,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UserActions, ...IdentificationActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
console.disableYellowBox = true;
