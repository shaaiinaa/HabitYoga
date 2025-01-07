import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://ruolnqfygopdimiumqdp.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1b2xucWZ5Z29wZGltaXVtcWRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3OTk5NzUsImV4cCI6MjA1MTM3NTk3NX0.wYT_t7aGiNeJfL_5MnND00yfxjaKWEKMhkDNtcTRoJs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
