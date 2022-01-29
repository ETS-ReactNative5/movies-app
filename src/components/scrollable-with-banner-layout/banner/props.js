import { bool, func, object, number, any } from 'prop-types';

export const propTypes = {
  /**
   * To check either a group has a banner placeholder or not.
   */
  hasBannerPlaceholder: bool,
  /**
   * To check the availability of banner image
   */
  hasBannerImage: bool,
  /**
   * Banner image source to render in the header
   */
  bannerImageSource: any,
  /**
   * Banner image scale for parallax effect
   */
  bannerImageScale: object,
  /**
   * Banner image y-axis translation for parallax effect
   */
  bannerImageTranslateY: object,
  /**
   * To track the loading status of the screen
   */
  isLoading: bool,
  /**
   * To track the loading status of the banner image
   */
  isLoadingImage: bool,
  /**
   * To let know when the image gets loaded
   */
  setIsLoadingImage: func,
  /**
   * To be used for styling use cases
   */
  insets: object,
  /**
   * Banner image height
   */
  height: number,
  /**
   * handle to banner overlay
   */
  hasOverlay: bool,
  /**
   * To set the scroll offset for sticky header title
   */
  setScrollOffset: func,
  /**
   * To handle the image not found usecase
   */
  setImageNotFound: func,
};

export const defaultProps = {
  hasBannerPlaceholder: false,
  hasBannerImage: false,
  bannerImageSource: '',
  bannerImageScale: {},
  bannerImageTranslateY: {},
  isLoading: true,
  isLoadingImage: false,
  setIsLoadingImage: () => {},
  setImageNotFound: () => {},
  setScrollOffset: () => {},
  insets: {},
  height: 0,
  hasOverlay: false,
};
