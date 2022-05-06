import * as React from 'react';
import {Text, TextInput, Button} from 'react-native-paper';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {styles} from './style';

const DonationForm = () => {
  const [text, setText] = React.useState('');
  //Date, Name, Amount, Ref Person, Receipt No, Receipt Book No, PAN, Phone, Address
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{paddingBottom: 100}}
        automaticallyAdjustContentInsets={false}>
        <TextInput
          mode="outlined"
          label="Date"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Name"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Amount"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Ref Person"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Receipt No"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Receipt Book No"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="PAN"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Phone"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Address"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.input}
        />

        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          dark={true}
          style={{padding: 10, margin:12}}
          >
            SAVE
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DonationForm;
