const initialState = {
  authenticating: false,
  auth_error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADMIN_AUTHENTICATING_START":
      return { ...state, authenticating: true };

    case "ADMIN_AUTHENTICATING_FINISHED":
      return { ...state, authenticating: false };

    case "ADMIN_AUTHENTICATING_ERROR":
      return { ...state, authenticating: false, auth_error: action.payload };

    case "ADMIN_AUTHENTICATING_UPDATE":
      return { ...state, authenticating: false, auth_error: action.payload };
    case "CLIENT_AUTHENTICATING_START":
      return { ...state, authenticating: true };

    case "CLIENT_AUTHENTICATING_FINISHED":
      return { ...state, authenticating: false };

    case "CLIENT_AUTHENTICATING_ERROR":
      return { ...state, authenticating: false, auth_error: action.payload };

    case "CLIENT_AUTHENTICATING_UPDATE":
      return { ...state, authenticating: false, auth_error: action.payload };

    default:
      return state;
  }
}
