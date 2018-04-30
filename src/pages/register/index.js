import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import { colors } from 'styles';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';

export default class Register extends Component {

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
              value={this.state.telInput}
              onChangeText={telInput => this.setState({ telInput })}
            >
            </TextInputMask>
          </View>

          <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="user" size={20} />
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nome completo"
              underlineColorAndroid="transparent"
              placeholderTextColor={colors.whiteTransparent}
              value={this.state.nameInput}
              onChangeText={nameInput => this.setState({ nameInput })}
            >
            </TextInput>
          </View>

          <View style={styles.searchSection}>
            <IconEntypo style={styles.searchIcon} name="lock" size={20} />
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              password={true}
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
          >
            <Text style={styles.txtEntrar}> Criar conta grátis </Text>
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
