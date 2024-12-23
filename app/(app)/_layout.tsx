import React from 'react';
import { Stack } from 'expo-router';
import { Platform, StatusBar, View } from 'react-native';
import { colors } from '../../src/theme/colors';

export default function AppLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background.primary }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.background.primary}
        translucent
      />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background.primary,
          },
          headerTintColor: colors.text.primary,
          headerTitleStyle: {
            color: colors.text.primary,
          },
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: colors.background.primary,
          },
          animation: 'fade',
          animationDuration: 200,
          ...Platform.select({
            android: {
              headerBackVisible: true,
              headerBackTitle: undefined,
            },
          }),
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="rooftop/[id]"
          options={{
            title: 'Rooftop Details',
            headerBackTitle: Platform.OS === 'ios' ? 'Back' : undefined,
          }}
        />
        <Stack.Screen
          name="rooftop/[id]/edit"
          options={{
            title: 'Edit Rooftop',
            headerBackTitle: Platform.OS === 'ios' ? 'Back' : undefined,
          }}
        />
        <Stack.Screen
          name="rooftop/[id]/review"
          options={{
            title: 'Write Review',
            headerBackTitle: Platform.OS === 'ios' ? 'Back' : undefined,
          }}
        />
        <Stack.Screen
          name="booking/[id]"
          options={{
            title: 'Booking Details',
            headerBackTitle: Platform.OS === 'ios' ? 'Back' : undefined,
          }}
        />
        <Stack.Screen
          name="profile/edit"
          options={{
            title: 'Edit Profile',
            headerBackTitle: Platform.OS === 'ios' ? 'Back' : undefined,
          }}
        />
      </Stack>
    </View>
  );
} 