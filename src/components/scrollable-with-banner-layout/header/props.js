import { string, array, bool, func, object } from 'prop-types';

export const propTypes = {
  /**
   * Header backgroun opacity for sticky header effect
   */
  headerBackgroundOpacity: object,
  /**
   * To handle sticky header visibility
   */
  isHeaderVisible: bool,
  /**
   * To handle share button visibility on header
   */
  isShareVisible: bool,
  /**
   * To handle global search button visibility on header
   */
  isSearchVisible: bool,
  /**
   * To check the availability of banner image
   */
  hasBannerImage: bool,
  /**
   * To check the border visibility
   */
  isButtonBorderVisible: bool,
  /**
   * Sticky header title
   */
  title: string,
  /**
   * To be used for styling use cases
   */
  insets: object,
  /**
   * Items to show in menu action sheet
   */
  menuItems: array,
  /**
   * To handle routing and navigation
   */
  navigation: object,
  /**
   * Callback for back button press
   */
  onPressBackButton: func,
  /**
   * Callback for share button press
   */
  onPressShareButton: func,
  /**
   * To handle visibility of banner image preview modal
   */
  togglePreviewScreen: func,
};

export const defaultProps = {
  headerBackgroundOpacity: {},
  isHeaderVisible: false,
  isShareVisible: false,
  isSearchVisible: true,
  hasBannerImage: false,
  isButtonBorderVisible: false,
  title: '',
  menuItems: [],
  insets: {},
  navigation: {},
  onPressBackButton: () => {},
  onPressShareButton: () => {},
  togglePreviewScreen: () => {},
};
