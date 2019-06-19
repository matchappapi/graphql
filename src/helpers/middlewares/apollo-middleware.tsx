import { ApolloServer } from 'apollo-server-express';

import BookingsAPI from '../../service/api-bookings'
import AuthAPI from '../../service/api-authentication'
import UsersAPI from '../../service/api-users'

import schema from "../../graphql/schema"

export default (): ApolloServer => {

  return new ApolloServer({
    schema,
    dataSources: () => {
      return {
        bookingsAPI: new BookingsAPI(),
        authAPI: new AuthAPI(),
        usersAPI: new UsersAPI(),
      };
    }
  })
}