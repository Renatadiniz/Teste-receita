import { View } from "react-native";
import MinhasReceitas2 from "./src/Screens/MinhasReceitas2/index"

export default function App() {
  return (
    <View>
      {/*Para visualizar as telas desenvolvidas, basta trocar o nome a seguir. Ex: <Login />, <Home />, etc. e rodar o comando npm start para abrir o QR code do Expo Go*/}
      <MinhasReceitas2 />
    </View>
  );
}

