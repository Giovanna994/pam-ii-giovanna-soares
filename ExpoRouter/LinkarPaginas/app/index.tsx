import { View } from 'react-native';
import { Link } from 'expo-router';

function App() {

  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Link href="LinkarPaginas/app/routes/PrimeiroLink.tsx">Primeiro Link</Link>
      <Link href="@/routes/SegundoLink.tsx">Segundo Link</Link>
      
    </View>

  );
}

export default App
