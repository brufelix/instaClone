import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { createUser } from '../store/actionsType/actionsUser'

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    }

    componentDidUpdate = prevProps => {
        if (prevProps.isLoading && !this.props.isLoading) {
            this.setState({ name:'', email:'', password:'' })
            this.props.navigation.navigate('Feed')
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput onChangeText={name => this.setState({ name })} placeholder='Name'
                autoFocus={true} value={this.state.name} style={styles.input}/>
                <TextInput onChangeText={email => this.setState({ email })} placeholder='E-mail'
                value={this.state.email} keyboardType='email-address' style={styles.input}/>
                <TextInput onChangeText={password => this.setState({ password })} value={this.state.password}
                secureTextEntry={true} placeholder='Senha' style={styles.input}/>
                <TouchableOpacity onPress={() => this.props.onCreateUser(this.state)}
                style={styles.buttom}>
                    <Text style={styles.buttomText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF',
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15,
    }
})

const mapStateToProps = ({ user }) => {
    return {
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreateUser: user => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)