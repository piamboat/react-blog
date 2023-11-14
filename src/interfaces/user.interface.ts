export interface UserInterface {
  id: number;
  name: string;
  username?: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface CreatingUserInterface {
  id?: number;
  name: string;
  username: string;
  password: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    lat: string;
    lng: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UserCardInterface {
  userObj: UserInterface;
  handleDeleteUser: (delId: number) => void;
}
