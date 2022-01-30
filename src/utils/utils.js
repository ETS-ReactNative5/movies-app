
export const getTruncatedString = (str, num) => {
  if (str?.length <= num || num === -1) {
    return str;
  }
  return `${str?.slice(0, num)}...`;
};

export const bannerImageSrc = 'https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80';

export const TEST_IDS = {
  CAROUSEL_ITEM_CONTAINER_WRAPPER: 'container-wrapper',
  CAROUSEL_ITEM_IMAGE_CONTAINER: 'image-container',
  CAROUSEL_ITEM_RATING_CONTAINER: 'rating-container',
  CAROUSEL_ITEM_TITLE_WRAPPER: 'title-wrapper',
  REVIEW_CARD_REVIEWEE_NAME: 'reviewee_name',
  REVIEW_CARD_AVERAGE_SCORE: 'average-score',
  REVIEW_CARD_DATE: 'data',
  REVIEW_CARD_CONTENT: 'content'
};

export const NAVIGATION_ROUTES = {
  HOME: 'Home',
  DETAIL: 'Detail',
  MOVIES_LIST: 'MoviesList',
  POPULAR: 'PopularMoviews',
  TRENDING: 'TrendingMovies',
  SEARCH: 'Search',
};

export const backIconSvg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 12L2.79289 11.2929C2.40237 11.6834 2.40237 12.3166 2.79289 12.7071L3.5 12ZM10.2071 17.2929L4.20711 11.2929L2.79289 12.7071L8.79289 18.7071L10.2071 17.2929ZM4.20711 12.7071L10.2071 6.70711L8.79289 5.29289L2.79289 11.2929L4.20711 12.7071ZM3.5 13L20.5 13L20.5 11L3.5 11L3.5 13Z" />
</svg>`;

export const searchIconSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 10C16 13.3137 13.3137 16 10 16V18C14.4183 18 18 14.4183 18 10H16ZM10 16C6.68629 16 4 13.3137 4 10H2C2 14.4183 5.58172 18 10 18V16ZM4 10C4 6.68629 6.68629 4 10 4V2C5.58172 2 2 5.58172 2 10H4ZM10 4C13.3137 4 16 6.68629 16 10H18C18 5.58172 14.4183 2 10 2V4ZM14.2421 15.6574L20.5418 21.9571L21.956 20.5429L15.6563 14.2432L14.2421 15.6574Z"/>
</svg>`;

export const imagePrefixUrl = 'https://image.tmdb.org/t/p/w500/';

export const emptyPlaceholder= 'https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg';
