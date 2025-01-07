import {supabase} from '../auth/supabaseClient';

const signUp = async (email, password) => {
  const {error, user} = await supabase.auth.signUp({email, password});
  if (error) {
    console.error('Error signing up:', error.message);
    return {error: error.message};
  } else {
    console.log('User signed up:', user);
    return {user}; // You might want to return user details or an error
  }
};

const signIn = async (email, password) => {
  const {error, user} = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error('Error signing in:', error.message);
    return {error: error.message};
  } else {
    console.log('User signed in:', user);
    return {user}; // Return user details or error
  }
};

const signOut = async () => {
  const {error} = await supabase.auth.signOut();
  if (error) {
    console.error('Error signing out:', error.message);
    return {error: error.message};
  } else {
    console.log('User signed out');
    return {success: true}; // Return success flag or error
  }
};

export {signOut, signIn, signUp};
