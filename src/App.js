import React, { Component } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import Navigator from './Navigation'
import { setMessage } from './store/actionsType/actionsMessage'

class App extends Component {
    componentDidUpdate = () => {
        if (this.props.text && this.props.text.trim()){
            Alert.alert(this.props.text || 'Mensagem', this.props.text)
        }
    }

    render() {
        return (
            <Navigator />
        )
    }
}

const mapStateToProps = ({ message }) => {
    return {
        title: message.title,
        text: message.text
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearMessage: () => 
        dispatch(setMessage({ title: '', text: '' })) 
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(App) 