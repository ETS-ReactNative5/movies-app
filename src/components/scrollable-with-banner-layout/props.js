import { string, node, array, bool, func, object, any } from 'prop-types';

export const propTypes = {
  /**
   * To track the refresh status
   */
  isRefreshing: bool,
  /**
   * PTR call back
   */
  onRefresh: func,
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
   * To handle visibility of tab bar on the layout
   */
  isTabBarVisible: bool,
  /**
   * To handle visibility of share button in the header
   */
  isShareVisible: bool,
  /**
   * To handle visibility of global search button in the header
   */
  isSearchVisible: bool,
  /**
   * To track the loading status of the screen
   */
  isLoading: bool,
  /**
   * Banner image source to render in the header
   */
  bannerImageSource: any,
  /**
   * Sticky header title
   */
  title: string,
  /**
   * Component to render the bottom actions on the header
   */
  bannerBottomActionBar: any,
  /**
   * Component to show when the banner image is not available in case of a new group
   */
  bannerImagePlaceholder: any,
  /**
   * Badge Component to show on banner image
   */
  bannerBadge: any,
  /**
   * To check either a group has a banner placeholder or not.
   */
  hasBannerPlaceholder: bool,
  /**
   * Child component to render in layout body
   */
  children: node,
  /**
   * handle to banner overlay
   */
   showBackButton: bool,
  
};

export const defaultProps = {
  showBackButton: true,
  isRefreshing: false,
  onRefresh: () => {},
  menuItems: [],
  navigation: {},
  onPressBackButton: () => {},
  onPressShareButton: () => {},
  isTabBarVisible: false,
  isShareVisible: false,
  isSearchVisible: true,
  isLoading: false,
  bannerImageSource: '',
  title: '',
  bannerBadge: null,
  bannerBottomActionBar: null,
  bannerImagePlaceholder: null,
  hasBannerPlaceholder: false,
  children: null,
  hasOverlay: false,
};
