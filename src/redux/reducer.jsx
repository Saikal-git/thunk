const initialState = {
  users: [],
  weather: {},
  facts: {},
  news: [],
  univer: [],
  btc: {},
  adress: {},
  geoData: {},
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, users: action.payload };
    case "GET_WEATHER":
      return { ...state, weather: action.payload };
    case "GET_FACT":
      return { ...state, facts: action.payload };
    case "NEWS":
      return { ...state, news: action.payload };
    case "GET_UNIVER":
      return { ...state, univer: action.payload };
    case "GET_BTC":
      return { ...state, btc: action.payload };
    case "GET_ADRESS":
      return { ...state, adress: action.payload };
    case "GET_ADRESS_DATA":
      return { ...state, geoData: action.payload };
    default:
      return state;
  }
};
