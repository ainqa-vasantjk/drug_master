import { defaultReject } from "../settings/commonSchema";

const validateNetworError = ({ res, rejectWithValue }) => {
  return new Promise((resolve, reject) => {
    if (!res.ok)
      return rejectWithValue({
        ...defaultReject,
        message: `${res?.statusText}`,
      });

    resolve();
  });
};

const returnException = ({ error, rejectWithValue }) => {
  return rejectWithValue({
    ...defaultReject,
    message: error.message,
  });
};

export { validateNetworError, returnException };
