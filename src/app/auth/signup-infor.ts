export class SignUpInfo {
  name: string;
  username: string;
  email: string;
  role: string[];
  password: string;
  phone: string;
  address: string;

    constructor(name: string, username: string, email: string, password: string, phone: any, address: any) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.address = address;
    this.role = ['user'];
  }
}
