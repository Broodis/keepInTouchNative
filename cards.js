import React, { Component } from 'react';
import { Image, View, ScrollView, Dimensions, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import CustomButton from './components/CustomButton';
import SmallButton from './components/smallButton';
import Input from "./components/Input";
import { RkCard, rkCardHeader, rkCardContent, rkCardFooter, RkText, withRkTheme } from 'react-native-ui-kitten';
import { SocialIcon } from 'react-native-elements';
import { profPic } from './assets/images/profPic.png';
const { height } = Dimensions.get('window');

class resultCards extends React.Component {
    state = {
        screenHeight: 0,
    };
    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
    };
    render() {
        const scrollEnabled = this.state.screenHeight > height;
        return (
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={styles.scrollview}
                scrollEnabled={scrollEnabled}
                onContentSizeChange={this.onContentSizeChange}
            >
                <View style={styles.container}>
                    <Text style={styles.headerStyle}>search results</Text>
                    <View>
                        <RkCard style={styles.topCard} rkType='shadowed'>
                            <View style={styles.CardHeader} rkCardHeader>
                                <View style={styles.iconStyle}>
                                    <SocialIcon type='instagram' light />
                                </View>
                                <View style={styles.handleStyle}>
                                    <Text style={styles.handleFont}>@Jane_Smith</Text>
                                </View>
                            </View>
                            <View style={styles.cardContent} rkCardContent>
                                <View style={styles.profPic}>
                                    <Image
                                        source={require('./assets/images/profPic.png')}
                                        style={{ width: 100, height: 100 }}>
                                    </Image>
                                </View>
                                <View style={styles.buttonView}>
                                    <SmallButton href="https://www.instagram.com/?hl=en" style={styles.smallButtonView} text="View Profile" />
                                </View>
                            </View>
                        </RkCard>
                        <RkCard style={styles.topCard} rkType='shadowed'>
                            <View style={styles.CardHeader3} rkCardHeader>
                                <View style={styles.iconStyle}>
                                    <SocialIcon type='soundcloud' light/>
                                </View>
                                <View style={styles.handleStyle}>
                                    <Text style={styles.handleFont}>JSmith412</Text>
                                </View>
                            </View>
                            <View style={styles.cardContent} rkCardContent>
                                <View style={styles.profPic}>
                                    <Image
                                        source={require('./assets/images/profPic.png')}
                                        style={{ width: 100, height: 100 }}>
                                    </Image>
                                </View>
                                <View style={styles.buttonView}>
                                    <SmallButton href="https://soundcloud.com/" style={styles.smallButtonView} text="View Profile" />
                                </View>
                            </View>
                        </RkCard>
                        <RkCard style={styles.topCard} rkType='shadowed'>
                            <View style={styles.CardHeader2} rkCardHeader>
                                <View style={styles.iconStyle}>
                                    <SocialIcon type='facebook' light/>
                                </View>
                                <View style={styles.handleStyle}>
                                    <Text style={styles.handleFont}>Jane Smith</Text>
                                </View>
                            </View>
                            <View style={styles.cardContent} rkCardContent>
                                <View style={styles.profPic}>
                                    <Image
                                        source={require('./assets/images/profPic.png')}
                                        style={{ width: 100, height: 100 }}>
                                    </Image>
                                </View>
                                <View style={styles.buttonView}>
                                    <SmallButton href="https://www.facebook.com/" style={styles.smallButtonView} text="View Profile" />
                                </View>
                            </View>
                        </RkCard>
                        <RkCard style={styles.topCard} rkType='shadowed'>
                            <View style={styles.CardHeader4} rkCardHeader>
                                <View style={styles.iconStyle}>
                                    <SocialIcon type='twitter' light/>
                                </View>
                                <View style={styles.handleStyle}>
                                    <Text style={styles.handleFont}>@Jane_Smith</Text>
                                </View>
                            </View>
                            <View style={styles.cardContent} rkCardContent>
                                <View style={styles.profPic}>
                                    <Image
                                        source={require('./assets/images/profPic.png')}
                                        style={{ width: 100, height: 100 }}>
                                    </Image>
                                </View>
                                <View style={styles.buttonView}>
                                    <SmallButton href="https://twitter.com/" style={styles.smallButtonView} text="View Profile" />
                                </View>
                            </View>
                        </RkCard>

                    </View>
                </View>
            </ScrollView>
        )
    }
}


const styles = {
    cardContent: {
        flexDirection: "row",
        justifyContent: "center",
        marginRight: 5
    },
    profPic: {
        marginLeft: 10,
        marginRight: -35,
        alignItems: "flex-start",
        marginTop: 5
    },
    smallButtonView: {
        textAlign: "center",
    },
    buttonView: {
        alignItems: "flex-end",
        marginBottom: 25,
        marginLeft: 35
    },
    handleFont: {
        fontSize: 20,
        color: "white"
    },
    handleStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topCard: {
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: "white"
    },
    card: {
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 0,
    },
    CardHeader: {
        backgroundColor: "#fb3958",
        height: 75,
    },
    CardHeader2: {
        backgroundColor: "#3b5998",
        height: 75,
    },
    CardHeader3: {
        backgroundColor: "#ff8800",
        height: 75,
    },
    CardHeader4: {
        backgroundColor: "#1DA1F2",
        height: 75,
    },
    container: {
        //marginTop: 48,
        flex: 1,
        backgroundColor: "black"
    },
    headerStyle: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '200',
        marginBottom: 2,
        color: "white",
        padding: 30
    },
    innerBox: {
        flex: 1,
        backgroundColor: "black",
        margin: 30,
        marginTop: 25,
        marginBottom: 35,
        paddingTop: 6,
        marginTop: 48
    },
    subheaderFont: {
        fontSize: 26,
        textAlign: 'center',
        fontWeight: '100',
        color: "white",
        marginTop: "5%"
    },
    inputUser: {
        textInputColor: "black"
    },
    signupLink: {
        backgroundColor: "black",
        paddingTop: 40
    }
}

export default resultCards;