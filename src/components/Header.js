import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Gravatar } from 'react-native-gravatar'
import { Text, View, Image, Platform, StyleSheet } from 'react-native'
import * as Font from 'expo-font'
import icon from '../../assets/imgs/icon.png'

class Header extends Component{
    state = {
        fontLoad: false
    }
    
    async componentDidMount() {
        await Font.loadAsync({
            'shelter': require('../../assets/fonts/shelter.otf')
        })
        this.setState({ fontLoad: true })
    }
    render(){
        const name = this.props.name || 'Anonymos'
        const gravatar = this.props.email ? 
            (<Gravatar options={{ email: this.props.email, secure: true }} style={styles.avatar}/>) 
            : null
        return(
            <View style={styles.container}>
            { this.state.fontLoad ? 
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image}/>
                    <Text style={styles.title}>Insta-Clone</Text>
                </View> : null }
                <View style={styles.userContainer}>
                    <Text>{name}</Text>
                    {gravatar}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 15,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }, 
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
    },
    title:{
        color: '#000',
        fontFamily: 'shelter',
        height: 30,
        marginTop: 10,
        fontSize: 28,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    user: {
        fontSize: 10,
        color: '#888',
    },
    avatar: {
        width: 30, 
        height: 30, 
        marginLeft: 10,
    }
})

const mapStateToProps = ({ user }) => {
    return {
        name: user.name,
        email: user.email,
    }
}

export default connect(mapStateToProps)(Header)