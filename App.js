//Exercise 4
import React from 'react';
import {View, Text, StyleSheet, SectionList,Image,TouchableOpacity,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';


const datasource = [
  {data:[
      {Name:'Liu Bei',Info:"He was the self-proclaimed emperor and founder of Shu. He was known to have been an ambitious and charismatic leader who had the affable power to draw people to him, he is also oath brothers with Guan Yu and Zhang fei.",Color:"green", CardImage:'https://static.wikia.nocookie.net/dynastywarriors/images/9/9e/Liu_Bei_Artwork_%28DW9%29.png/revision/latest/scale-to-width-down/200?cb=20210718222420' },
      {Name:'Guan Yu',Info:"He was known for being a mighty warrior with a studious mind who could cleave apart an army of thousands with ease. His well-kept beard was famous, and he was nicknamed Beautiful Beard,he is also oath brothers with Liu Bei and Zhang fei.",Color:"green", CardImage:'https://static.wikia.nocookie.net/dynastywarriors/images/1/12/Guan_Yu_Artwork_%28DW9%29.png/revision/latest/scale-to-width-down/200?cb=20210718221742' },
      {Name:'Zhang Fei',Info:"His bravery and might were praised to be second to Guan Yu, but he was also cruel and wouldn't hesitate to punish insubordination with beatings or the death penalty,he is also oath brothers with Liu Bei and Guan Yu.",Color:"green", CardImage:'https://static.wikia.nocookie.net/dynastywarriors/images/e/ea/Zhang_Fei_Artwork_%28DW9%29.png/revision/latest/scale-to-width-down/200?cb=20210718224440' },
    ],
    title:"Shu", bgColor:"green",},
  {data:[
      {Name:'Sun Quan',Info:"He was famed for his love of wine and his bushy beard. He ruled as the first living emperor of Wu and sought to govern with patience and careful consideration.",Color:"red", CardImage:'https://static.wikia.nocookie.net/dynastywarriors/images/6/63/Sun_Quan_Artwork_%28DW9%29.png/revision/latest/scale-to-width-down/200?cb=20210718223155' },
      {Name:'Zhou Tai',Info:"He saved Sun Quan many times on the battlefield, eventually becoming his right-hand protector. Most fictional sources state that Zhou Tai was also a former pirate.",Color:"red", CardImage:'https://static.wikia.nocookie.net/dynastywarriors/images/d/dd/Zhou_Tai_Artwork_%28DW9%29.png/revision/latest/scale-to-width-down/200?cb=20210718224801' },
      {Name:'Zhou Yu',Info:"He was the famous military commander who protected his lord's territory from Cao Cao at Chibi. A reputed warrior talented in war and literature, Zhou Yu's potential was feared by Cao Cao and Liu Bei.",Color:"red", CardImage:'https://static.wikia.nocookie.net/dynastywarriors/images/d/d1/Zhou_Yu_Artwork_%28DW9%29.png/revision/latest/scale-to-width-down/200?cb=20210718224822' },
    ],
    title:"Wu", bgColor:"red", },
  {data:[
      {Name:'Cao Cao',Info:"A clean-cut, tall, and crafty individual, Cao Cao excelled in war and politics. He was loved and feared for his perceptiveness and swift retaliations, as well as his very close relationship with many of his retainers. laid the foundations for the future kingdom of Wei.",Color:"blue", CardImage:'https://static.wikia.nocookie.net/dynastywarriors/images/d/d7/Cao_Cao_Artwork_%28DW9%29.png/revision/latest/scale-to-width-down/200?cb=20210718221019' },
      {Name:'Xiahou Dun',Info:"one of Cao Cao's cousins from his father's side of the family. He served Cao Cao for his entire military career, dying mere months after his lord. He famously lost his left eye at Xiapi or Xiaopei from a stray arrow.a capable war general and has him famously devour his left eye after have it skewered the aforementioned arrow",Color:"blue", CardImage:'https://static.wikia.nocookie.net/dynastywarriors/images/8/80/Xiahou_Dun_Artwork_%28DW9%29.png/revision/latest/scale-to-width-down/200?cb=20210718223523' },
      {Name:'Sima Yi',Info:"He was an intellectual who is accredited as the ancestral founder of Western Jin. Once he agreed to serve the Cao family, he became one of Cao Pi's close friends and subsequently an influential figure in Wei, cunningly defending himself from his many detractors.",Color:"blue", CardImage:'https://static.wikia.nocookie.net/dynastywarriors/images/4/4b/Sima_Yi_Artwork_%28DW9%29.png/revision/latest/scale-to-width-down/200?cb=20210718222949' },
    ],
    title:"Wei", bgColor:"blue", },
  {data:[
       {Name:'Dong Zhuo',Info:"started as a minor warlord with formidable martial capabilities who rose to power by subjugating forces west of the imperial capital.He is best known for effectively forcing himself to be the de facto leader of the land, His tyranny was cut short when his step-son, Lu Bu, killed him.",Color:"gold", CardImage:'https://static.wikia.nocookie.net/dynastywarriors/images/6/6d/Dong_Zhuo_Artwork_%28DW9%29.png/revision/latest/scale-to-width-down/200?cb=20210718221507' },
       {Name:'Lu Bu!',Info:"He was a general of the late Han Dynasty who is infamous for his many betrayals in the central plains.Romance of the Three Kingdoms famously dubs him to be the mightiest warrior of his time",Color:"gold", CardImage:'https://static.wikia.nocookie.net/dynastywarriors/images/4/4a/Lu_Bu_Artwork_%28DW9%29.png/revision/latest/scale-to-width-down/200?cb=20210718222506' },
       {Name:'Yuan Shao',Info:"He was a nobleman and ardent supporter of the Han Dynasty who raised a large, powerful army in response to the Yellow Turban Rebellion. Initially born of low prestige, he grew to be a kind-hearted figure of charisma and went against the tyranny of Dong Zhuo.",Color:"gold", CardImage:'https://static.wikia.nocookie.net/dynastywarriors/images/8/8a/Yuan_Shao_Artwork_%28DW9%29.png/revision/latest/scale-to-width-down/200?cb=20210718224101' },
    ],
    title:"Han", bgColor:"gold", },
  {data:[
       {Name:'Zhang Jiao',Info:"was formerly a doctor that became the leader of the infamous Yellow Turbans, the army fighting for a religious sect known as the Way of Peace. Accompanied by his brothers Zhang Liang and Zhang Bao, he began a rebellion against the corrupt and indifferent Han Dynasty.",Color:"yellow", CardImage:'https://static.wikia.nocookie.net/dynastywarriors/images/c/ca/Zhang_Jiao_Artwork_%28DW9%29.png/revision/latest/scale-to-width-down/200?cb=20210718224540' },
       {Name:'Zhang Liang',Info:"was the brother of Zhang Jiao and the younger brother of Zhang Bao. He was said to be an able general and is the grandson of the founder of the Tianshi (Celestial Masters) Sect of Taoism, Zhang Daoling.",Color:"yellow", CardImage:'https://static.wikia.nocookie.net/dynastywarriors/images/1/16/Zhang_Liang_-_RTKXII.jpg/revision/latest/scale-to-width-down/197?cb=20120711221427' },
       {Name:'Zhang Bao',Info:"was a younger brother of Zhang Jiao and older brother of Zhang Liang. Zhang Bao was a general in the Yellow Turban Rebellion. After the death of Zhang Jiao, the Yellow Turbans lacked leadership and so crumbled into dust.",Color:"yellow", CardImage:'https://static.wikia.nocookie.net/dynastywarriors/images/2/2c/Zhang_Bao_-_Yellow_Turbans_%28ROTK14%29.png/revision/latest/scale-to-width-down/198?cb=20190913213924' },
    ],
    title:"Yellow Turbans", bgColor:"yellow", },
];


const styles = StyleSheet.create({

  container: {
      backgroundColor:'grey',
    borderWidth: 2,
    flex: 1,
    flexDirection: 'row',
  },
  textStyle:{
    flex:1,
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    textAlignVertical:'center',
  },
  headerText:{
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imageStyle:{
    alignItems:'center',
    width:300,
    height:300,
    margin:20,
  }
})
const renderItem = ({item}) => {
    const handlePress = () => {
        Alert.alert(item.Name,item.Info);
    };
  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={handlePress} styles={styles.textStyle}>
        <Text style={[styles.textStyle, {color:item.Color}]}>{item.Name}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
        <Image source={{uri:item.CardImage}} style={styles.imageStyle} resizeMode="contain"/>
        </TouchableOpacity>
      </View>
  );
};

const MyApp = () =>{
  return (
      <View style={{marginTop: 30}}>
        <SectionList sections={datasource} renderItem={renderItem}
                     renderSectionHeader={({section:{title, bgColor,}})=>(
                         <Text style={[styles.headerText,styles.container, {backgroundColor: bgColor}]}>
                            {title}</Text>)}/>
      </View>
  )
}

export default MyApp;
