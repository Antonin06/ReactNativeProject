import React from 'react';
import {Text} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import {API_URL} from '../config/environement/dev';
import Loading from './Loading';

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

  return <Text>{data.book.title}</Text>;
};

export default SingleBook;
