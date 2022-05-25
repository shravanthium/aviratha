import React from 'react';
import {Text, TextInput, Button} from 'react-native-paper';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {styles} from './style';

const DonationForm = () => {
  const [donation, setDonation] = React.useState([
    {name: 'Date', value: null},
    {name: 'Amount', value: null},
    {name: 'Ref Person', value: null},
    {name: 'Receipt No', value: null},
    {name: 'Receipt Book No', value: null},
    {name: 'PAN', value: null},
    {name: 'Phone', value: null},
    {name: 'Address', value: null},
  ]);

  handleInputChange = (text, item) => {
    let donations = [...donation];
    let index = donation.findIndex(obj => obj.name == item.name);
    donations[index].value = text;
    setDonation({donations});
  };

  //Date, Name, Amount, Ref Person, Receipt No, Receipt Book No, PAN, Phone, Address
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{paddingBottom: 100}}
        automaticallyAdjustContentInsets={false}>
        {donation.map(item => (
          <TextInput
            mode="outlined"
            label={item.name}
            onChangeText={text => handleInputChange(text, item)}
            value={item.value}
            style={styles.input}
          />
        ))}
        <Button
          mode="contained"
          onPress={() => console.log({donation})}
          dark={true}
          style={{padding: 10, margin: 12}}>
          SAVE
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DonationForm;
