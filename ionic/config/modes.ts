
import {IonicConfig} from './config';


// iOS Mode Settings
IonicConfig.modeConfig('ios', {

  actionSheetEnter: 'action-sheet-slide-in',
  actionSheetLeave: 'action-sheet-slide-out',
  actionSheetCancelIcon: '',
  actionSheetDestructiveIcon: '',

  backButtonText: 'Back',
  backButtonIcon: 'ion-ios-arrow-back',

  forwardIcon: 'ion-ios-arrow-forward',
  iconMode: 'ios',

  tabBarPlacement: 'bottom',
  viewTransition: 'ios',

});


// Material Design Mode Settings
IonicConfig.modeConfig('md', {

  actionSheetEnter: 'action-sheet-md-slide-in',
  actionSheetLeave: 'action-sheet-md-slide-out',
  actionSheetCancelIcon: 'ion-md-close',
  actionSheetDestructiveIcon: 'ion-md-trash',

  backButtonText: '',
  backButtonIcon: 'ion-md-arrow-back',

  forwardIcon: '',
  iconMode: 'md',

  tabBarPlacement: 'top',
  viewTransition: 'md',

  type: 'overlay',
  mdRipple: true,
});