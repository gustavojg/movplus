import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Cuentame un cuento</Text>
      <View style={styles.searchBar}>
        {/* Aquí puedes agregar tu componente de búsqueda */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: "Calistoga-Regular",
    textShadowColor: "blue",
    textDecorationColor: 'red',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5
  },
  searchBar: {
    // Estilos para la barra de búsqueda
  },
});

export default Header;
