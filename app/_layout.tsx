// src/app/_layout.tsx
import { useRouter, Slot } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { getAuthStatus } from '../src/lib/auth';
import { useFonts } from 'expo-font';

export default function Layout() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const [fontsLoaded, fontError] = useFonts({
    "Calistoga-Regular": require("../assets/fonts/Calistoga-Regular.ttf"),
  });

  useEffect(() => {
    async function checkAuth() {
      const status = await getAuthStatus();
      setIsLoggedIn(status);
      setLoading(false);
    }

    checkAuth();
  }, []);

  useEffect(() => {
    if (!loading) {
      if (isLoggedIn) {
        router.replace('/main/Home');
      } else {
        router.replace('/auth/Login');
      }
    }
  }, [loading, isLoggedIn, router]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Slot />;
}
