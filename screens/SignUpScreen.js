import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { themeColors } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

export default function SignUpScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [designation, setDesignation] = useState('');

    const clearForm = () => {
        setEmail('');
        setFullName('');
        setPassword('');
        setGender('');
        setDesignation('');
    };

    const signUp = () => {
        // Perform your sign-up logic here
        Alert.alert('Success', 'You are registered!');
        clearForm(); // Clear the form after successful registration
    };

    return (
        <View style={{ flex: 1, backgroundColor: themeColors.bg }}>
            <SafeAreaView style={{ flex: 0 }} />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ backgroundColor: 'yellow', padding: 12, borderRadius: 10, marginLeft: 10 }}
                    >
                        <ArrowLeftIcon size={20} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                    <Image source={require('../assets/images/signup.png')} style={{ width: 120, height: 120 }} />
                </View>
            </SafeAreaView>

            <View
                style={{
                    flex: 3,
                    backgroundColor: 'white',
                    paddingHorizontal: 20,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    justifyContent: 'space-between',
                    paddingBottom: 20,
                }}
            >
                <View style={{ marginTop: 10, flex: 1 }}>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />

                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Name"
                        value={fullName}
                        onChangeText={(text) => setFullName(text)}
                    />

                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Password"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />

                    <Text style={styles.label}>Gender</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <TouchableOpacity
                            style={[styles.radioButton, gender === 'Male' && styles.radioButtonSelected]}
                            onPress={() => setGender('Male')}
                        >
                            <Text>Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.radioButton, gender === 'Female' && styles.radioButtonSelected]}
                            onPress={() => setGender('Female')}
                        >
                            <Text>Female</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.radioButton, gender === 'Transgender' && styles.radioButtonSelected]}
                            onPress={() => setGender('Transgender')}
                        >
                            <Text>Transgender</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.label}>Designation</Text>
                    <Picker
                        style={styles.input}
                        selectedValue={designation}
                        onValueChange={(itemValue) => setDesignation(itemValue)}
                    >
                        <Picker.Item label="Select Designation" value="" />
                        <Picker.Item label="Professor" value="Professor" />
                        <Picker.Item label="Assistant Professor" value="Assistant Professor" />
                        <Picker.Item label="Associate Professor" value="Associate Professor" />
                        <Picker.Item label="Student" value="Student" />
                    </Picker>
                </View>

                <TouchableOpacity style={styles.button} onPress={signUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.clearButton} onPress={clearForm}>
                    <Text style={styles.clearButtonText}>Clear</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = {
    label: {
        fontSize: 16,
        color: '#000',
        marginBottom: 5,
        paddingTop: 0,
    },
    input: {
        height: 40,
        borderColor: '#3498db',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    radioButton: {
        borderWidth: 1,
        borderColor: '#3498db',
        borderRadius: 5,
        padding: 5,
        marginRight: 10,
    },
    radioButtonSelected: {
        backgroundColor: '#2ecc71',
    },
    button: {
        backgroundColor: '#2ecc71',
        padding: 12,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
    clearButton: {
        backgroundColor: '#3498db',
        padding: 12,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
    },
    clearButtonText: {
        fontSize: 18,
        color: '#fff',
    },
};
