import {
  PicOfDayAction,
  PicOfDayActionTypes,
  picOfDayState,
} from "../types/picOfDay";

const InitialState: picOfDayState = {
  picsData: [],
  loading: false,
  error: null,
};

export const picOfDayReducer = (
  state = InitialState,
  action: PicOfDayAction
): picOfDayState => {
  switch (action.type) {
    case PicOfDayActionTypes.FETCH_PIC_OF_DAY:
      return { ...state, loading: true };
    case PicOfDayActionTypes.FETCH_PIC_OF_DAY_SUCCESS:
      return { ...state, loading: false, picsData: action.payload };
    case PicOfDayActionTypes.FETCH_PIC_OF_DAY_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
