import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { 
    title, 
    artist, 
    thumbnail_image, 
    image 
  } = album; //Destructures album to make cleaner code.
  const { 
    thumbnailStyle, 
    headerContentStyle, 
    thumbnailContainer,
    headerTextStyle,
    imageStyle
  } = styles; //Destructures styles to make cleaner code.
  
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      
      <CardSection>
        <Button onPress={() => console.log(title)} />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center', //Tells all its children they need to position themselves in some fashion.
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1, //This combined with width: null makes the image span the entire width.
    width: null
  }
};

export default AlbumDetail;
