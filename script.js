const BUY_PHONE = "BUY_PHONE";
const BUY_TABLET = "BUY_TABLET";
const BUY_TV = "BUY_TV";

function buyPhone() {
  return {
    type: BUY_PHONE,
  };
}

function buyTablet() {
  return {
    type: BUY_TABLET,
  };
}

function buytelevision() {
  return {
    type: BUY_TV,
  };
}

const initialStatePhone = {
  phones: 5,
  tablet: 10,
};

const Phonereducer = (state = initialStatePhone, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        phones: state.phones - 1,
      };

    case BUY_TABLET:
      return {
        ...state,
        tablet: state.tablet - 1,
      };

    //   case BUY_TV:
    //    return {
    //      ...state,
    //      tele: state.tele - 1,
    //    };

    default:
      return state;
  }
};

const initialStateTv = {
  tele: 5,
};

const tvReducer = (state = initialStateTv, action) => {
  switch (action.type) {
    case BUY_TV:
      return {
        ...state,
        tele: state.tele - 1,
      };

    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  phone: Phonereducer,
  tele: tvReducer,
});
const store = Redux.createStore(rootReducer);

const availablePhones = document.getElementById("count");
const availableTablet = document.getElementById("count-tab");
const availabletele = document.getElementById("count-tv");

availablePhones.innerHTML = store.getState().phone.phones;
availableTablet.innerHTML = store.getState().phone.tablet;
availabletele.innerHTML = store.getState().tele.tele;

document.getElementById("buy-phone").addEventListener("click", function () {
  store.dispatch(buyPhone());
});

document.getElementById("buy-tablet").addEventListener("click", function () {
  store.dispatch(buyTablet());
});

document.getElementById("buy-telev").addEventListener("click", function () {
  store.dispatch(buytelevision());
});

store.subscribe(() => {
  availablePhones.innerHTML = store.getState().phone.phones;
  availableTablet.innerHTML = store.getState().phone.tablet;
  availabletele.innerHTML = store.getState().tele.tele;
});
