'use strict'
import React, { Component } from 'react'
import {
    Image, View, StyleSheet, TouchableOpacity, Dimensions, Text
} from 'react-native'

import { Icon, Container, Content } from 'native-base'

import Swiper                       from 'react-native-swiper'
import MySwiper                     from './../components/Swiper'
import colors                       from './../resources/styles/colors'
import NavBar                       from './../components/NavBar'

const {width} = Dimensions.get('window')
const imgHeight = 400
export default class UserProfile extends Component {
    static navigationOptions = {
        tabBarVisible: false
    }

    render() {
        const profile = {
            name: 'Yashu Tanna',
            age: 25,
            profession: ['Software Engineer'],
            houseType: '2 Bedroom Apartment',
            hobbies: [
                'Drink', 'Cats', 'Dogs', 'Gym', 'ReactAZ', 'Guitar'
            ],
            location: 'Wynburg, Cape Town',
            blurb: 'Looking for a cool room mate that is not going to lose their mind if i choose to get high sometimes',
            images: [
                'https://if-maroc.org/safi/wp-content/uploads/sites/8/2016/12/bigstock-handsome-business-man-smiling-423597042-300x300.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvECB1xxMflZosvNXJ8bXv9QeqX0c92KvrHaObiIllVA3pOrp'
            ]
        };

        return (
            <Container>
                <Content style={styles.content}>
                    <NavBar title={ `${profile.name}, ${profile.age}` } navigator={ this.props.navigation } />
                    { this.renderSwiper(profile) }
                    { this.renderInfo(profile) }
                    { this.renderDescription(profile) }
                    {/* { this.renderInstagramPhotos(profile) } */}
                    {/* { this.renderInterest(profile) } */}
                </Content>
            </Container>
        )
    }

    renderSwiper(profile) {
        return (
            <Swiper width={width} height={imgHeight}
                removeClippedSubviews={false}
                dotColor='#848288'
                activeDotColor={colors.txtMainRed}
                paginationStyle={{
                    top: -330, left: null, right: (width / 2) - 20
                }} loop={true}>
                    {
                        profile.images.map((uri, idx) => {
                           return (
                               <Image key={idx} style={{ width: width, height: imgHeight }} source={{ uri: uri }} />
                           )
                        })
                    }
            </Swiper>
        )
    }

    renderInfo(profile) {
        return (
            <View style={styles.holder}>
                <Text style={styles.username}>{`${profile.name}, ${profile.age}`}</Text>
                <View style={styles.infoRow}>
                    <Icon style={styles.infoIcon} name="ios-briefcase-outline" />
                    <Text style={styles.info}>{profile.profession}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon style={styles.infoIcon} name="ios-home" />
                    <Text style={styles.info}>{profile.houseType}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon style={styles.infoIcon} name="ios-bonfire" />
                    <Text style={styles.info}>{
                        profile.hobbies.reduce((str, hobby) =>  str === '' ? hobby : `${str}, ${hobby}`, '')
                    }</Text>
                </View>
                <View style={styles.infoRow}>
                    <Icon style={styles.infoIcon} name="ios-locate-outline" />
                    <Text style={styles.info}>{profile.location}</Text>
                </View>
            </View>
        )
    }

    renderDescription(profile) {
        return (
            <View style={styles.holder}>
                <Text style={styles.info}>
                    { profile.blurb }
                </Text>
            </View>
        )
    }

    renderInstagramPhotos() {
        return (
            <View style={[styles.holder, { paddingRight: 5 }]}>
                <Text style={styles.headerTitle}>10 Instagram Photos</Text>
                <MySwiper contentContainerStyle={{marginTop: 5}}>
                    <View style={styles.instagramColumn}>
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/20184329_1786684514705779_4027869279931072512_n.jpg' }} style={styles.instagramPhoto} />
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c0.48.1080.1080/20181020_277936509279004_6121417119469928448_n.jpg' }} style={styles.instagramPhoto} />
                    </View>
                    <View style={styles.instagramColumn}>
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c23.0.1033.1033/20181477_1595470463799234_3991898915942170624_n.jpg' }} style={styles.instagramPhoto} />
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/e15/19534852_1375906055839470_1853943317880897536_n.jpg' }} style={styles.instagramPhoto} />
                    </View>
                    <View style={styles.instagramColumn}>
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/e15/19425314_261720977642296_3471414103040327680_n.jpg' }} style={styles.instagramPhoto} />
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/19228596_1742478359383734_6570009312322650112_n.jpg' }} style={styles.instagramPhoto} />
                    </View>
                    <View style={styles.instagramColumn}>
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/19120913_1075552059211222_1114070823880097792_n.jpg' }} style={styles.instagramPhoto} />
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/18949955_240343086451469_1318011521955004416_n.jpg' }} style={styles.instagramPhoto} />
                    </View>
                    <View style={styles.instagramColumn}>
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/18947353_268474323560359_502601329290510336_n.jpg' }} style={styles.instagramPhoto} />
                        <Image source={{ uri: 'https://instagram.fsgn5-3.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/c0.135.1080.1080/18381891_291086784673292_4220828678638010368_n.jpg' }} style={styles.instagramPhoto} />
                    </View>
                </MySwiper>
            </View>
        )
    }

    renderInterest() {
        const items = interests.map((item, idx) => {
            return (
                <View key={idx} style={styles.interest}>
                    <Text style={styles.interestLabel}>{item}</Text>
                </View>
            )
        })
        return (
            <View style={styles.holder}>
                <Text style={styles.headerTitle}>{interests.length} Interests</Text>
                <View style={ styles.interestHolder }>
                    {items}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#ffffff'
    },
    holder: {
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.bdLine
    },
    username: {
        fontSize: 20,
        marginBottom: 10
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoIcon: {
        color: colors.txtDescription,
        fontSize: 20,
        marginRight: 10
    },
    info: {
        fontSize: 16,
        color: colors.txtDescription
    },
    headerTitle: {
        fontSize: 16
    },
    instagramColumn: {
        paddingRight: 10
    },
    instagramPhoto: {
        width: 110,
        height: 110,
        borderRadius: 5,
        marginTop: 10
    },
    interestHolder: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    interest: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.bdMainRed,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 10
    },
    interestLabel: {
        color: colors.txtMainRed
    }
})
