export const headlines = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_HEADLINES':
      return action.payload;
    default:
      return state;
  }
};

export const selectedArticle = (state = null, action) => {
  switch (action.type) {
    case 'ARTICLE_SELECTED':
      return action.payload;
    default:
      return state;
  }
};

export const termHome = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_TERM':
      return action.payload;
    case 'CLEAN_TERM':
      return '';
    default:
      return state;
  }
};

export const termEverything = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_TERM':
      return action.payload;
    default:
      return state;
  }
};

export const selectedOption = (state = 'option1', action) => {
  switch (action.type) {
    case 'SELECTED_OPTION':
      return action.payload;
    default:
      return state;
  }
};
