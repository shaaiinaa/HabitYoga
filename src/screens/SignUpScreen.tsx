// import React, {useState} from 'react';
// import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
// import {signUp} from '../auth/signUp'; // Import the signUp function

// const SignUpScreen = ({navigation}) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSignUp = async () => {
//     const result = await signUp(email, password);
//     if (result.error) {
//       setError(result.error);
//     } else {
//       console.log('User signed up successfully');
//       navigation.navigate('Home'); // Navigate to Home screen after successful signup
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Sign Up</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       <Button title="Sign Up" onPress={handleSignUp} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   input: {
//     width: '80%',
//     padding: 10,
//     marginVertical: 8,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   error: {
//     color: 'red',
//     marginBottom: 8,
//   },
// });

// export default SignUpScreen;
import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {supabase} from '../lib/supabase';
import {Button, Input} from '@rneui/themed';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

export default function EmailForm({navigation}: Props) {
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId:
      '84931455035-jttocbne93p5do53tgudok254pdktur8.apps.googleusercontent.com',
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const {error} = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    else navigation.navigate('Referral');
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    console.log('0---------------');
    console.log(supabase);
    console.log('1---------------');
    const data = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    console.log('2---------------', data);
    const {
      data: {session},
      error,
    } = data;

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert('Please check your inbox for email verification!');
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{type: 'font-awesome', name: 'envelope'}}
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          leftIcon={{type: 'font-awesome', name: 'lock'}}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title="Sign in"
          disabled={loading}
          onPress={() => signInWithEmail()}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Button
          title="Sign up"
          disabled={loading}
          onPress={() => signUpWithEmail()}
        />
      </View>
      {/* <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={async () => {
          try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            if (userInfo.data.idToken) {
              const {data, error} = await supabase.auth.signInWithIdToken({
                provider: 'google',
                token: userInfo.data.idToken,
              });
              console.log(error, data);
            } else {
              throw new Error('no ID token present!');
            }
          } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
            } else {
              // some other error happened
            }
          }
        }}
      /> */}
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={async () => {
          try {
            await GoogleSignin.hasPlayServices();

            const userInfo = await GoogleSignin.signIn();
            console.log('Google User Info:', userInfo); // Debug log

            if (userInfo.idToken) {
              const {data, error} = await supabase.auth.signInWithIdToken({
                provider: 'google',
                token: userInfo.idToken,
              });

              if (error) {
                console.error('Supabase Auth Error:', error); // Log Supabase error
                Alert.alert('Authentication Failed', error.message);
              } else {
                console.log('Supabase Auth Success:', data); // Log success
                navigation.navigate('Home'); // Adjust based on your app flow
              }
            } else {
              throw new Error('No ID token present!');
            }
          } catch (error: any) {
            console.error('Google Sign-In Error:', error); // Log Google sign-in error
            Alert.alert('Google Sign-In Error', error.message);

            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              Alert.alert('Sign-In Cancelled', 'You cancelled the login flow.');
            } else if (error.code === statusCodes.IN_PROGRESS) {
              Alert.alert('In Progress', 'Sign-in is already in progress.');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              Alert.alert(
                'Play Services Error',
                'Play services not available.',
              );
            }
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
});
