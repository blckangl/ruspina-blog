export interface IUser{
  id:string;
  firstName:string;
  lastName:string;
  email:string;
  password?:string;
  country:string;
  birthday:Date;
  date_creation:Date;
}
