export interface UserInterface {
  name: string;
  email: string;
  phone: string;
  dateBirth: string;
  passWord: string;
}

export interface HeaderUserInterface {
  data: UserInterface;
}
