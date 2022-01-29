
export const getTruncatedString = (str, num) => {
  if (str?.length <= num || num === -1) {
    return str;
  }
  return `${str?.slice(0, num)}...`;
};

export const bannerImageSrc = 'https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80';
