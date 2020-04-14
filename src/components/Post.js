import React, { Component } from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import Author from './Author' 
import Comments from './Comments'
import AddComment from './AddComment'

class Post extends Component {
    render() {
        const AddComm = this.props.name ? <AddComment postId={this.props.id} /> : null
        return(
            <View style={styles.container}>
                <Image source={{ uri: this.props.image }} style={styles.image}/>
                <Author email={this.props.email} nickName={this.props.nickName} />
                <Comments comments={this.props.comments} />
                {AddComm}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain',
    }
})

const mapStateToProps = ({ user }) => {
    return {
        name: user.name
    }
}

export default connect(mapStateToProps)(Post)