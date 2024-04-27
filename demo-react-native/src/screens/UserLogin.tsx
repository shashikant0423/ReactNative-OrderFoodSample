import { ActivityIndicator, Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAppSelector, useAppDispatch } from "../redux/hook";
import Styles from "../utilities/Style";
import { useState } from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LoginResponseModel, login } from "../redux/accountSlice";

const UserLogin = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const dispatch = useAppDispatch();
    // const account = useAppSelector(state => state.account);
    // console.log(account);
    // if (account.data===undefined || account.data == null) {
    //      Alert.alert('Error', `${user.error}`);
    // }
    // else{
    //     navigation.navigate('OTP', {emailId : email});
    // }
    const loading = useAppSelector(state => state.account.isLoading);

    return (
        <>
            <View style={Styles.login_header}>
                <Image
                    style={Styles.login_header_logo}
                    source={require('../assets/demo.png')} />
                <Text style={Styles.login_header_text}>
                    <Text style={Styles.login_header_text_bold}>
                        {'Welcome to Demo React Native'}
                    </Text>
                </Text>
            </View>
            <View style={Styles.login_wrapper}>
                <View style={Styles.form}>
                    <TextInput
                        style={Styles.form_input}
                        value={email}
                        placeholder={'Email'}
                        onChangeText={(Text) => { setEmail(Text) }} />
                    <TextInput
                        style={Styles.form_input}
                        value={password}
                        placeholder={'Password'}
                        onChangeText={(Text) => { setPass(Text) }} />
                    <TouchableOpacity onPress={() => {
                        dispatch(login({ email: email, password: password })).then(response => {
                            var result = response.payload as LoginResponseModel;
                            console.log(result);
                            if (result?.access_token) {
                                navigation.navigate('Home', { emailId: email });
                            }
                        });
                    }}>
                        <View style={Styles.button}>
                            <Text style={Styles.button_label}>{'Send OTP'}</Text>
                        </View>
                    </TouchableOpacity>
                    {loading && (
                        <ActivityIndicator size={'large'} style={{ alignSelf: 'center' }} />
                    )}
                </View>
            </View>
        </>
    );
};

export default UserLogin;