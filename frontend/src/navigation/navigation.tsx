import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PayButton } from '../components/index';
import HomeScreen from '../screens/Home';
import WalletScreen from '../screens/Wallet';
import PayScreen from '../screens/Pay/index';
import colors from './styles/colors';
import icons from './icons';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Pay') {
            return (
              <PayButton
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            );
          }

          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: colors.backgroundColor,
          borderTopColor: colors.borderTopColor,
        },
        activeTintColor: colors.activeTintColor,
        inactiveTintColor: colors.inactiveTintColor
      }}
    >
      <Tab.Screen
        name="Home"
        component={ HomeScreen }
        options={{ title: 'Início' }}
      />
      
      <Tab.Screen
        name="Wallet"
        component={ WalletScreen }
        options={{ title: 'Carteira' }}
      />

      <Tab.Screen
        name="Pay"
        component={ PayScreen }
        options={{ title: '' }}
      />

      <Tab.Screen
        name="Notifications"
        component={ PayScreen }
        options={{ title: 'Notificações' }}
      />

      <Tab.Screen
        name="Settings"
        component={ PayScreen }
        options={{ title: 'Ajustes' }}
      />
    </Tab.Navigator>
  );
}
