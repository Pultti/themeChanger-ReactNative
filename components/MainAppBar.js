import { Appbar } from 'react-native-paper';
import React from 'react';
import { getHeaderTitle } from '@react-navigation/elements';

export default function MainAppbar(props) {
    const title = getHeaderTitle(props.options, props.route.name);
    return (
      <Appbar.Header style={{ backgroundColor: props.backgroundColor }} mode="center-aligned">
        {props.back ? <Appbar.BackAction color={props.color} onPress={() => props.navigation.goBack()} /> : null}
        <Appbar.Content title={title} color={props.color} />
        {!props.back ? <Appbar.Action icon="cog" color={props.color} onPress={() => props.navigation.navigate('Settings')} /> : null}
      </Appbar.Header>
    );
  }