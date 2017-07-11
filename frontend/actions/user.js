import { USERS_REQUEST } from '../constants/user';

export default function fetchUsersRequest() {
  return {
    type: USERS_REQUEST
  };
}
