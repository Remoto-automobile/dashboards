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

// Define Routes
export const brandRoute = "http://localhost:8000/api/brand";
export const carRoute = "http://localhost:8000/api/car";
export const modelRoute = "http://localhost:8000/api/model";
export const planRoute = "http://localhost:8000/api/plan";
export const orderRoute = "http://localhost:8000/api/order";
export const productRoute = "http://localhost:8000/api/product";
export const componentRoute = "http://localhost:8000/api/component";
export const exactcomponentRoute = "http://localhost:8000/api/exact_comp";
export const subscriptionRoute = "http://localhost:8000/api/subscription";
export const userRoute = "http://localhost:8000/api/user";
export const systemRoute = "http://localhost:8000/api/system";

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
                          {children}
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
