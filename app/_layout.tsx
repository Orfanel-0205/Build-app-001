import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

import "./global.css";

// Keep splash screen visible while fonts are loading
SplashScreen.preventAutoHideAsync();
 
export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'PTSans-Regular': require('../assets/fonts/PTSans-Regular.ttf'),
    'PTSans-Bold': require('../assets/fonts/PTSans-Bold.ttf'),
    'PTSans-Italic': require('../assets/fonts/PTSans-Italic.ttf'),
    'PTSans-BoldItalic': require('../assets/fonts/PTSans-BoldItalic.ttf'),
    });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) 
      SplashScreen.hideAsync();
    
    
     
  }, [fontsLoaded, error]);

  return <Stack screenOptions={{ headerShown: false}}/>;}