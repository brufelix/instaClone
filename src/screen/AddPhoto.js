import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, 
    ScrollView, Platform, Dimensions, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { addPost } from '../store/actionsType/actionsPost'

class AddPhoto extends Component {    
    state = {
        image: null, 
        comment: '',
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      }

    _pickImage = async () => {
        if (!this.props.name){
            Alert.alert('Failed', 'Verifique o login')
            return
        }
        let res = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          base64: true,
        });
        
        if (!res.cancelled) {
            this.setState({ image: { uri: res.uri, base64: res.base64 }});
        }
    };

    save = async () => {
        if (!this.props.name){
            Alert.alert('Failed', 'verifique login')
            return
        }
        this.props.onAddPost({
            id: Math.random(),
            nickName: this.props.name,
            email: this.props.email,
            image: this.state.image,
            comments: [{
                nickName: this.props.name,
                comment: this.state.comment
            }]
        }) 
    } 
    
    componentDidUpdate = prevProps => {
        if ( prevProps.loading && !this.props.loading ) {
            this.setState({ image: null, comment: '' })
            this.props.navigation.navigate('Feed')
        }
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    render() {
        let { image } = this.state

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe sua imagem</Text>
                    <View style={styles.imageContainer}>
                        <Image source={image} style={styles.image} />
                    </View>
                    <TouchableOpacity onPress={this._pickImage}>
                        <Text style={styles.buttomText}>Select image</Text>
                    </TouchableOpacity>
                    <TextInput placeholder='Algum Comentário para a foto?' style={styles.input} editable={this.props.name != null}
                    onChangeText={comment => this.setState({ comment })} value={ this.state.comment }/>
                    <TouchableOpacity onPress={this.save} style={[styles.buttom, this.props.loading ? styles.buttomDisabled : null]} 
                    disabled={this.props.loading}>
                        <Text style={styles.buttomText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 20,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '100%',
        height: Dimensions.get('window').width * 3 / 4,
        backgroundColor: '#EEE',
        marginTop: 10,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        // resizeMode: 'center',
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
    },
    buttomText: {
        fontSize: 20,
        color: '#222',
    },
    input: {
        marginTop: 20,
        width: '90%',
    },
    buttomDisabled: {
        backgroundColor: '#AAA'
    }
})

const mapStateToProps = ({ user, posts }) => {
    return {
        name: user.name,
        email: user.email,
        loading: posts.isUploading
    } 
}

const mapDispatchtoprops = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post)) 
    }
}

export default connect(mapStateToProps, mapDispatchtoprops)(AddPhoto)