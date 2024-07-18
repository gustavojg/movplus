import React from 'react';
import { Text, View } from 'react-native';

export const TextWithBorder = ({ style, children, textStyle, borderStyle, stroke }) => {
  return (
    <View style={style}>
      {/* Texto sombra arriba */}
      <Text style={[textStyle, borderStyle, { position: 'absolute', top: -stroke }]}>
        {children}
      </Text>
      {/* Texto sombra abajo */}
      <Text style={[textStyle, borderStyle, { position: 'absolute', top: stroke }]}>
        {children}
      </Text>
      {/* Texto sombra izquierda */}
      <Text style={[textStyle, borderStyle, { position: 'absolute', left: -stroke }]}>
        {children}
      </Text>
      {/* Texto sombra derecha */}
      <Text style={[textStyle, borderStyle, { position: 'absolute', left: stroke }]}>
        {children}
      </Text>
      {/* Texto principal */}
      <Text style={textStyle}>
        {children}
      </Text>
    </View>
  );
};