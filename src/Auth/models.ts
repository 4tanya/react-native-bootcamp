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

export enum FormFieldsPlaceholderKey {
  MEMBER_ID = 'placeholders-memberId',
  PASSWORD = 'placeholders-password',
  BUTTON = 'placeholders-button',
}

export enum FormErrorKey {
  MEMBER_ID = 'errors-memberId',
  PASSWORD = 'errors-password',
  FORM = 'errors-form',
}
