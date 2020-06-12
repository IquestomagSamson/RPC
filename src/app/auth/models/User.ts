export interface User {
  // id?: string;
  //   // name: string;
  //   // username: string;
  //   // email: string;
  //   // password: string;
  //   // address: string;
  //   // phone: number;
  id?: string;
  name?: string;
  username?: string;
  email?: string;
  roles?: {
    id?: string;
    name?: string;
  };
  avatar?: string;
  phone: string;
  password: string;
  address: string;
}
