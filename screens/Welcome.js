import { ImageBackground, StyleSheet, View } from 'react-native';
import { Content, Wrapper, Title, Logo } from '../components/layout';
import Button from '../components/controls/Button';
import Colors from '../constants/Colors';

export default function Welcome({ navigation }) {
    const goToLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <Wrapper backgroundColor={Colors.black}>
            <Content>
                <View style={styles.imageContainer}>
                    <ImageBackground
                        style={styles.background}
                        source={require('../assets/splash-icon.png')}
                        resizeMode="contain"
                    >
                        <View style={styles.logoContainer}>
                            <Logo type="white" />
                        </View>
                    </ImageBackground>
                </View>
                <Title color={Colors.white} title="Bienvenid@ a 4U" /> 
                <Button onPress={goToLogin} label={"YA TENGO CUENTA"} type="white" />
            </Content>
        </Wrapper>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 200,
        width: '100%',
        marginTop: 50,
        marginBottom: 20,
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})