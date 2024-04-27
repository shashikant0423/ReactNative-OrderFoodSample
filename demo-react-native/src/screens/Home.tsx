import { ActivityIndicator, Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAppSelector, useAppDispatch } from "../redux/hook";
import Styles from "../utilities/Style";
import { useState } from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Home = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [email, setEmail] = useState('');
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
            <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
                <Text style={{color:'#000000'}}>
                    {'Welcome to Home'}
                </Text>
            </View>
        </>
    );
};

export default Home;