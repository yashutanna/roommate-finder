import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import { Container, Content, List, ListItem, Text } from 'native-base';
import colors                   from './../resources/styles/colors'
import messages                 from './../data/messages'
import Swiper                   from './../components/Swiper'
import matches                  from './../data/matches'

export default class Matches extends Component {
    render() {
        return (
            <Container style={{ backgroundColor: 'white'}}>
                <Content>
                    <TextInput
                        placeholder='Search'
                        underlineColorAndroid='rgba(0,0,0,0)'
                        style={ styles.input } />

                    { this.renderMatchses() }

                    <Text style={styles.header}>Meassges</Text>
                    <List style={styles.holder} dataArray={messages}
                        renderRow={(rowData) =>
                            <TouchableOpacity onPress={ this._onPressRow } style={ styles.row }>
                                <Image style={ styles.avatar } source={{ uri: rowData.avatarUri }} />
                                <View style={ styles.rightPart }>
                                    <View style={ styles.detail }>
                                        <Text style={ styles.username }>{ rowData.username }</Text>
                                        <Text style={ styles.createdDate }>{ rowData.createdDate }</Text>
                                    </View>
                                    <Text style={ styles.description } ellipsizeMode='tail' numberOfLines={2}>{ rowData.message }</Text>
                                </View>
                            </TouchableOpacity>
                        }>
                    </List>
                </Content>
            </Container>
        )
    }

    renderMatchses() {
        let itemThumbs = (
            matches.map((item, idx) => {
                return (
                    <TouchableOpacity onPress={ this._onPressMatch } key={idx} style={ styles.matchesItem }>
                        <Image style={ styles.avatar } source={{ uri: item.uri }}/>
                        <Text style={ styles.matchName } ellipsizeMode='tail' numberOfLines={1}>{ item.username }</Text>
                    </TouchableOpacity>
                )
            })
        )
        return (
            <View style={{ paddingBottom: 30, paddingTop: 10 }}>
                <Text style={styles.header}>New Matches</Text>
                <Swiper contentContainerStyle={{ paddingLeft: 15, paddingTop: 15 }}>
                    { itemThumbs }
                </Swiper>
            </View>
        )
    }

    _onPressRow = (rowData) => {
        this.props.navigation.navigate('Chat')
    }

    _onPressMatch = () => {
        this.props.navigation.navigate('UserProfile')
    }
}

const styles = StyleSheet.create({
    holder: {
        paddingHorizontal: 15
    },
    header: {
        fontSize: 18,
        paddingHorizontal: 15,
        color: colors.txtMainRed
    },
    matchesItem: {
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 20,
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.bdLine
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    matchName: {
        paddingTop: 5,
        width: 60,
        textAlign: 'center'
    },
    detail: {
        flexDirection: 'row'
    },
    description: {
        marginTop: 3,
        paddingRight: 80
    },
    createdDate: {
        fontWeight: '300'
    },
    rightPart: {
        height: 60,
        justifyContent: 'center'
    },
    username: {
        fontWeight: '700',
        marginRight: 10
    },
    input: {
        height: 40,
        color: colors.txtDark,
        fontSize: 16,
        borderRadius: 3,
        paddingHorizontal: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.bdLine
    }
})
