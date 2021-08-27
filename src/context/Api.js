import React from "react";

const initialState = {
  loading: true,
  error: "",
  data: "",
  // selected: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        // selected: action.item,
        loading: false,
        error: "",
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        // selected: "",
        loading: false,
        error: action.error,
        data: "",
      };
    case "POST_SUCCESS":
      return {
        ...state,
        // selected: action.item,
        loading: false,
        error: "",
        data: action.payload,
      };
    case "POST_FAILURE":
      return {
        ...state,
        // selected: "",
        loading: false,
        error: action.error,
        data: "",
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return { ...state };
  }
};

// Create Contexts
export const PlanContext = React.createContext();
export const CarContext = React.createContext();
export const ModelContext = React.createContext();
export const BrandContext = React.createContext();
export const OrderContext = React.createContext();
export const SystemContext = React.createContext();
export const ComponentContext = React.createContext();
export const ExactCompContext = React.createContext();
export const SubscriptionContext = React.createContext();
export const UserContext = React.createContext();
export const ItemContext = React.createContext();
export const ProbContext = React.createContext();
export const AuthContext = React.createContext();

// Define Routes
export const brandRoute = "https://remotoglobal.com/api/brand";
export const carRoute = "https://remotoglobal.com/api/car";
export const modelRoute = "https://remotoglobal.com/api/model";
export const planRoute = "https://remotoglobal.com/api/plan";
export const orderRoute = "https://remotoglobal.com/api/order";
export const productRoute = "https://remotoglobal.com/api/product";
export const componentRoute = "https://remotoglobal.com/api/component";
export const exactcomponentRoute = "https://remotoglobal.com/api/exact_comp";
export const subscriptionRoute = "https://remotoglobal.com/api/subscription";
export const userRoute = "https://remotoglobal.com/api/register";
export const systemRoute = "https://remotoglobal.com/api/system";
export const profileRoute = "https://remotoglobal.com/api/profile";

export const adminBrandRoute = "https://remotoglobal.com/api/admin/brand";
export const adminCarRoute = "https://remotoglobal.com/api/admin/car";
export const adminModelRoute = "https://remotoglobal.com/api/admin/model";
export const adminPlanRoute = "https://remotoglobal.com/api/admin/plan";
export const adminOrderRoute = "https://remotoglobal.com/api/admin/order";
export const adminProductRoute = "https://remotoglobal.com/api/admin/product";
export const adminComponentRoute =
  "https://remotoglobal.com/api/admin/component";
export const adminExactcomponentRoute =
  "https://remotoglobal.com/api/admin/exact_comp";
export const adminSubscriptionRoute =
  "https://remotoglobal.com/api/admin/subscription";
export const adminUserRoute = "https://remotoglobal.com/api/admin";
export const adminSystemRoute = "https://remotoglobal.com/api/admin/system";
export const adminFileUploadRoute =
  "https://remotoglobal.com/api/admin/upload_file";
export const adminProbRoute = "https://remotoglobal.com/api/admin/prob";
export const adminProfileRoute = "https://remotoglobal.com/api/admin/profile";
export const adminTransactionRoute =
  "https://remotoglobal.com/api/admin/transactions";

// export const brandRoute = "http://localhost:8000/api/brand";
// export const carRoute = "http://localhost:8000/api/car";
// export const modelRoute = "http://localhost:8000/api/model";
// export const planRoute = "http://localhost:8000/api/plan";
// export const orderRoute = "http://localhost:8000/api/order";
// export const productRoute = "http://localhost:8000/api/product";
// export const componentRoute = "http://localhost:8000/api/component";
// export const exactcomponentRoute = "http://localhost:8000/api/exact_comp";
// export const subscriptionRoute = "http://localhost:8000/api/subscription";
// export const userRoute = "http://localhost:8000/api/register";
// export const systemRoute = "http://localhost:8000/api/system";
// export const profileRoute = "http://localhost:8000/api/profile";

// export const adminBrandRoute = "http://localhost:8000/api/admin/brand";
// export const adminCarRoute = "http://localhost:8000/api/admin/car";
// export const adminModelRoute = "http://localhost:8000/api/admin/model";
// export const adminPlanRoute = "http://localhost:8000/api/admin/plan";
// export const adminOrderRoute = "http://localhost:8000/api/admin/order";
// export const adminProductRoute = "http://localhost:8000/api/admin/product";
// export const adminComponentRoute = "http://localhost:8000/api/admin/component";
// export const adminExactcomponentRoute =
//   "http://localhost:8000/api/admin/exact_comp";
// export const adminSubscriptionRoute =
//   "http://localhost:8000/api/admin/subscription";
// export const adminUserRoute = "http://localhost:8000/api/admin";
// export const adminSystemRoute = "http://localhost:8000/api/admin/system";
// export const adminFileUploadRoute =
//   "http://localhost:8000/api/admin/upload_file";
// export const adminProbRoute = "http://localhost:8000/api/admin/prob";
// export const adminProfileRoute = "http://localhost:8000/api/admin/profile";
// export const adminTransactionRoute =
//   "http://localhost:8000/api/admin/transactions";

function Api({ children }) {
  // Create Reducers
  const [brand, brandDispatch] = React.useReducer(reducer, initialState);
  const [car, carDispatch] = React.useReducer(reducer, initialState);
  const [model, modelDispatch] = React.useReducer(reducer, initialState);
  const [plan, planDispatch] = React.useReducer(reducer, initialState);
  const [order, orderDispatch] = React.useReducer(reducer, initialState);
  const [system, systemDispatch] = React.useReducer(reducer, initialState);
  const [component, componentDispatch] = React.useReducer(
    reducer,
    initialState
  );
  const [exactComponent, exactComponentDispatch] = React.useReducer(
    reducer,
    initialState
  );
  const [subscription, subscriptionDispatch] = React.useReducer(
    reducer,
    initialState
  );
  const [user, userDispatch] = React.useReducer(reducer, initialState);
  const [auth, authDispatch] = React.useReducer(reducer, initialState);
  const [item, itemDispatch] = React.useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state: user, dispatch: userDispatch }}>
      <BrandContext.Provider value={{ state: brand, dispatch: brandDispatch }}>
        <CarContext.Provider value={{ state: car, dispatch: carDispatch }}>
          <ModelContext.Provider
            value={{ state: model, dispatch: modelDispatch }}
          >
            <PlanContext.Provider
              value={{ state: plan, dispatch: planDispatch }}
            >
              <OrderContext.Provider
                value={{ state: order, dispatch: orderDispatch }}
              >
                <SystemContext.Provider
                  value={{ state: system, dispatch: systemDispatch }}
                >
                  <ComponentContext.Provider
                    value={{
                      state: component,
                      dispatch: componentDispatch,
                    }}
                  >
                    <SubscriptionContext.Provider
                      value={{
                        state: subscription,
                        dispatch: subscriptionDispatch,
                      }}
                    >
                      <ItemContext.Provider
                        value={{ state: item, dispatch: itemDispatch }}
                      >
                        <ExactCompContext.Provider
                          value={{
                            state: exactComponent,
                            dispatch: exactComponentDispatch,
                          }}
                        >
                          <AuthContext.Provider
                            value={{
                              state: auth,
                              dispatch: authDispatch,
                            }}
                          >
                            {children}
                          </AuthContext.Provider>
                        </ExactCompContext.Provider>
                      </ItemContext.Provider>
                    </SubscriptionContext.Provider>
                  </ComponentContext.Provider>
                </SystemContext.Provider>
              </OrderContext.Provider>
            </PlanContext.Provider>
          </ModelContext.Provider>
        </CarContext.Provider>
      </BrandContext.Provider>
    </UserContext.Provider>
  );
}

export default Api;
