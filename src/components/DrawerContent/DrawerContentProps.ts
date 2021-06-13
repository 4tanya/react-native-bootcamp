import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

export default interface DrawerContentProps
  extends DrawerContentComponentProps<DrawerContentOptions> {
  signOut: () => void;
}
