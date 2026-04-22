import { useRouter } from 'expo-router';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('@/assets/images/fondo.jpg')} // cambia por tu imagen
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        
        {/* Título centrado */}
        <Text style={styles.title}>SITP</Text>

        {/* Parte inferior */}
        <View style={styles.bottomContainer}>
          <Text style={styles.subtitle}>Bienvenido</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/(tabs)')} // cambia la ruta si quieres
          >
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)', // oscurece fondo
    paddingVertical: 60,
  },
  title: {
    marginTop: '40%',
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});