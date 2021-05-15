export interface UserData {
  userId: string;
  token: string;
}

export interface UserValues {
  memberId: string;
  password: string;
}

export enum FormFieldsName {
  MEMBER_ID = 'memberId',
  PASSWORD = 'password',
}

export enum FormFieldsPlaceholder {
  MEMBER_ID = 'Enter your member id',
  PASSWORD = 'Enter your password',
  BUTTON = 'Sign In',
}

export enum FormError {
  MEMBER_ID = 'Member id is required.',
  PASSWORD = 'Password is required.',
  FORM = 'Username or password are not valid',
}
