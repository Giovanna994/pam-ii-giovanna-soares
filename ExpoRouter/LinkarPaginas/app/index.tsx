import { View } from 'react-native';
import { Link } from 'expo-router';


export default function Page() {
  return (
    <View>
      <Link href="/primeirolink">Primeiro Link</Link>
      <Link href="/segundolink">Segundo Link</Link>
    </View>
  );
}

