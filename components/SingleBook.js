import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import {API_URL} from '../config/environement/dev';
import Loading from './Loading';
import styles from '../style/component.style';
import theme from '../style/theme.style';
import icons from '../style/icons.style';

const BOOK = gql`
  query GetBook($id: ID!) {
    book(id: $id) {
      title
      id
      author
      description
      aboutAuthor
      shortDescription
      pages
      langue
      thumbnail {
        id
        url
      }
      categories {
        name
        id
      }
    }
  }
`;
const SingleBook = ({route, navigation}) => {
  const {id} = route.params;
  const {loading, error, data, refetch} = useQuery(BOOK, {
    variables: {
      id: id,
    },
  });

  if (loading) {
    return <Loading />;
  }
  console.log({id});
  console.log(data, 'SINGLEBOOK');

  return (
    <>
      <View style={{flex: 1}}>
        <ImageBackground
          source={{
            uri: `${API_URL}${data.book.thumbnail.url}`,
          }}
          blurRadius={10}
          resizeMode="cover"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: 'transparent',
          }}
        />
        {/*HEADER*/}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
            height: 70,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.back_arrow_icon}
              resizeMode="contain"
              style={styles.singleHeaderBack}
            />
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              marginLeft: -50,
              justifyContent: 'center',
            }}>
            <Text style={styles.singleHeaderTitle}>{data.book.title}</Text>
          </View>
        </View>
        {/*BOOK IMAGE*/}
        <View style={{flex: 6, paddingTop: 0, alignItems: 'center'}}>
          <Image
            source={{
              uri: `${API_URL}${data.book.thumbnail.url}`,
            }}
            resizeMode="contain"
            style={{
              flex: 1,
              width: 150,
              height: 'auto',
            }}
          />
        </View>
        <View
          style={{flex: 1.8, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: theme.WHITE_COLOR, fontSize: 16}}>
            {data.book.title}
          </Text>
          <Text style={{color: theme.WHITE_COLOR, fontSize: 10}}>
            {data.book.author}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.6,
          paddingVertical: 20,
          paddingHorizontal: 10,
          backgroundColor: theme.BLACK_COLOR,
        }}>
        <ScrollView>
          <Text style={styles.singleDescriptionTitle}>Description</Text>
          <Text style={styles.singleDescriptionContent}>
            {data.book.description}
          </Text>
        </ScrollView>
      </View>
    </>
  );
};

export default SingleBook;
