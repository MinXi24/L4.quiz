import React,{useState} from 'react';
import {View, Text, TextInput, Button, Alert, ScrollView, Image, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'black',
        fontSize: 30,
        flex:1,
        justifyContent: 'space-around',
        textAlign: 'center',
    },
    img:{
        width: 370,
        height: 400,
        borderWidth: 3,
        borderColor: 'dark pink',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        alignItems:'center'
    },
    box: {
        flex: 1,
        justifyContent: 'space-around',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    who: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 3,
        backgroundColor: 'pink',
        textAlign: 'center',
        fontSize: 20
    },
    pop: {
        backgroundColor: 'pink',
        borderWidth: 3,
        borderColor: 'pink'
    }
});

const InputBox = ({label,onChangeText})=>{
  return (
      <View style = {styles.box}>
        <Text>{label}</Text>
        <TextInput style={{borderWidth :1}} onChangeText={onChangeText}/>
      </View>
  );
};

const MyApp = () => {
  const [Username,setUsername] =useState('');
  const [ans,setAns] =useState('');
  const [ans1,setAns1] =useState('');
  const [ans2,setAns2] =useState('');
  return (
      <ScrollView contentContainerStyle={{paddingBottom: 50, paddingTop: 50}}>
          <Text style = {styles.header}>HUMAN QUIZ</Text>
        <InputBox label ="Username:" onChangeText={(text) => setUsername(text)}/>
        <Image source ={require("./img/Lyw.jpg")} style = {styles.img} />
        <Text style = {styles.who}>Who is this?</Text>
        <RNPickerSelect
            onValueChange={(value) => setAns(value)}
            items ={[
              { label: 'Liu Yao Wen', value: 'Liu Yao Wen' },
              { label: 'Song Ya Xuan', value: 'Song Ya Xuan' },
              { label: 'Ding Chen Xin', value: 'Ding Chen Xin' }
            ]}
        />
        <Image source ={require("./img/Joshua.jpg")} style = {styles.img}/>
        <Text style = {styles.who}>Who is this?</Text>
        <RNPickerSelect
            onValueChange={(value) => setAns1(value)}
            items ={[
              { label: 'Vernon', value: 'Vernon' },
              { label: 'The 8', value: 'The 8' },
              { label: 'Joshua', value: 'Joshua' }
            ]}
        />
        <Image source ={require("./img/Yu qi.jpg")} style = {styles.img} />
        <Text style = {styles.who}>Who is this?</Text>
        <RNPickerSelect
            onValueChange={(value) => setAns2(value)}
            items ={[
              { label: 'Shu Hua', value: 'Shu Hua' },
              { label: 'Yu Qi', value: 'Yu Qi' },
              { label: 'Minnie', value: 'Minnie' }
            ]}
        />
        <Button
            title ="SUBMIT"
            onPress ={()=> {
              const correctAns = {
                ans:'Liu Yao Wen',
                ans1:'Joshua',
                ans2:'Yu Qi'};
              let mymessage = 'ALL WRONG! Try again!';
              if (ans == correctAns.ans && ans1 == correctAns.ans1 && ans2 == correctAns.ans2) {
                mymessage = 'You GOT IT ALL! ' + Username;
              }
              else if (
                  (ans === correctAns.ans && ans1 === correctAns.ans1) ||
                  (ans === correctAns.ans && ans2 === correctAns.ans2) ||
                  (ans1 === correctAns.ans1 && ans2 === correctAns.ans2)
              ) {
                mymessage = '2 out of 3 correct. Try again!';
              }
              else if (
                  ans === correctAns.ans ||
                  ans1 === correctAns.ans1 ||
                  ans2 === correctAns.ans2
              ) {
                mymessage = '1 out of 3 correct. Try again!';
              }
              Alert.alert(mymessage);
            }
            }
        />
      </ScrollView>
  );
};

export default MyApp;
