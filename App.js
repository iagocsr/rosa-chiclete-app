import { StyleSheet, Text, View, Image, Modal, FlatList, ScrollView, Alert, TouchableOpacity, TextInput, Button } from 'react-native';
import { Entypo, AntDesign, Feather, MaterialIcons} from '@expo/vector-icons'; 
import { useState } from 'react';

export default function App() {
  const [nomeCategoria, setCategoria] = useState([
    {nome:'Infantil',link: require('./assets/infantil.jpg'), key:1},
    {nome:'Feminino',link: require('./assets/feminino.jpg') , key:2},
    {nome:'Acessorios', link: require('./assets/acessorios.jpg'), key:3},
    {nome:'Ofertas',link: require('./assets/ofertas.png'), key:4},
  ])
  const [modalVisible, setModalVisible] = useState(false);

  return (
  <View style={{flex:1}}>
 
    <ScrollView style={styles.container}>
    
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput placeholder='Pesquisar' style={styles.inputStyle}/>
            <Button
              title='Buscar'
              color={'grey'}
              onPress={() => setModalVisible(!modalVisible)}>
            </Button>
          </View>
        </View>
      </Modal>
      
      <View style={styles.nav}>
       <TouchableOpacity
       onPress={() => setModalVisible(true)}
       >
          <Entypo name="magnifying-glass" size={30} color="black" />
       </TouchableOpacity>
          <View style={styles.Logo}>
            <Image style={styles.LogoImage}
            source={require('./assets/Logo.png')}/>
            <Text style={{fontSize:17}}>Rosa Chiclete</Text>
          </View>
        <View style={styles.itensIcons}>
          <AntDesign name="hearto" size={30} color="black" />
          <Feather name="shopping-bag" size={24} color="black" />
        </View>
      </View>
      
      <FlatList
      contentContainerStyle={styles.containerFotos} 
      data={nomeCategoria}
      renderItem={({item}) => 
      <View style={styles.itensFotos}>
        <Image style={styles.imagenMenu} source={item.link}/>
        <Text>{item.nome}</Text>
      </View>
    }
      />

    <Image style={styles.imagemPrincipal} source={require('./assets/fotoPrincipal.jpg')}></Image>
      
    </ScrollView>

    <View style={styles.footerMenu}>
      <View style={styles.itemFooter}>
        <Entypo name="home" size={24} color="black" />
        <Text>Inicio</Text>
      </View>
      <View style={styles.itemFooter}>
        <MaterialIcons name="category" size={24} color="black" />
        <Text>Categorias</Text>
      </View>
      <View style={styles.itemFooter}>
        <Feather name="menu" size={24} color="black" />
        <Text>Menu</Text>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  nav:{
    justifyContent:'space-between',
    flexDirection:'row',
    marginTop:40,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding:5,
  },

  Logo:{
    flexDirection:'row',
    alignItems:'center',
  },

  LogoImage:{
    width:30,
    height:30,
  },

  itensIcons:{
    flexDirection:'row',
    alignItems:'center',
    gap: 10,
  },

  containerFotos:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding:10,
    marginTop:10,
  },

  imagenMenu:{
    height:50,
    width:50,
    borderRadius:50,
  },

  itensFotos:{
    alignItems:'center',
  },

  imagemPrincipal:{
    width: '100%',
    height:450
  },

  footerMenu:{
    justifyContent:'space-between',
    flexDirection:'row',
    padding:10,
    borderTopWidth: 0.1,
    borderColor: 'grey',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },

  itemFooter:{
    alignItems:'center',
  },

  centeredView: {
    height:'100%',
    width:'100%',
  },
 
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection:'row',
    alignItems:'center',
    gap: 10,
  },

  inputStyle: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    width: '70%',
  }

});