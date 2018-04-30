import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import { colors } from 'styles';

import Input from 'components/Input';
import Button from 'components/Button';

class Profile extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'SCHEDULER',
    headerTitleStyle: styles.headerTitle,
    headerRight: (
      <TouchableOpacity onPress={navigation.state.params ? navigation.state.params.logout : null} >
        <Icon name="sign-out" size={24} color={colors.white} style={styles.headerRight} />
      </TouchableOpacity>
    ),
  });

  state = {
    name: '',
    password: '',
    confirmPassword: '',
  }

  componentDidMount() {
    this.props.navigation.setParams({ logout: () => this.props.logout() });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.panel}>
          <Text style={styles.panelText}>Minha conta</Text>
        </View>
        <View style={styles.mainContainer}>
          <Input
            onChangeText={(name) => { this.setState({ name }); }}
            value={this.state.name}
            type="none"
            icon="user"
            placeholder="Nome completo"
          />
          <View style={styles.line} />
          <Input
            onChangeText={(password) => { this.setState({ password }); }}
            value={this.state.password}
            type="none"
            icon="lock"
            placeholder="Quer alterar sua senha?"
            secureTextEntry
          />
          <Input
            onChangeText={(confirmPassword) => { this.setState({ confirmPassword }); }}
            value={this.state.confirmPassword}
            type="none"
            icon="lock"
            placeholder="Confirme a senha digitada"
            secureTextEntry
          />
          <Button title="Alterar informações" onPress={null} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
