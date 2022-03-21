export const httpMessage = {
  OkMessage: "200 Successful",
  ErroMessage: "500 Internal server error",
};

export const jsonHeader = {
  "Content-Type": "application/json",
};

export const defaultLoading = {
  loading: true,
  error: false,
  message: "loading",
  data: {},
};

export const defaultReject = {
  loading: false,
  error: true,
  message: "",
  data: {},
};

export const defaultState = {
  List: {
    loading: false,
    error: false,
    data: [],
    message: "",
  },
  Info: {
    loading: false,
    error: false,
    data: {},
    message: "",
  },
};
