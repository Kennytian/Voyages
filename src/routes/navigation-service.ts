import { DrawerActions, NavigationActions } from 'react-navigation';

let _navigator: any;

function setTopLevelNavigator(navigatorRef: any): void {
  _navigator = navigatorRef;
}

function back(key?: string): void {
  _navigator.dispatch(NavigationActions.back({ key }));
}

function navigate(routeName: string, params?: any): void {
  _navigator.dispatch(NavigationActions.navigate({ routeName, params }));
}

function setParams(key: string, params?: any): void {
  _navigator.dispatch(NavigationActions.setParams({ key, params }));
}

function openDrawer(): void {
  _navigator.dispatch(DrawerActions.openDrawer());
}

function closeDrawer(): void {
  _navigator.dispatch(DrawerActions.closeDrawer());
}

function toggleDrawer(): void {
  _navigator.dispatch(DrawerActions.toggleDrawer());
}

const NavigationService = {
  back,
  navigate,
  setParams,
  setTopLevelNavigator,
  openDrawer,
  closeDrawer,
  toggleDrawer,
};

export default NavigationService;
