export interface picOfDay {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
}
export interface picOfDayState {
  picsData: picOfDay[] | [];
  loading: boolean;
  error: null | string;
}

export enum PicOfDayActionTypes {
  FETCH_PIC_OF_DAY = "FETCH_PIC_OF_DAY",
  FETCH_PIC_OF_DAY_SUCCESS = "FETCH_PIC_OF_DAY_SUCCESS",
  FETCH_PIC_OF_DAY_ERROR = "FETCH_PIC_OF_DAY_ERROR",
}
interface FetchPicOfDayAction {
  type: PicOfDayActionTypes.FETCH_PIC_OF_DAY;
}
interface FetchPicOfDaySuccessAction {
  type: PicOfDayActionTypes.FETCH_PIC_OF_DAY_SUCCESS;
  payload: any[];
}
interface FetchPicOfDayErrorAction {
  type: PicOfDayActionTypes.FETCH_PIC_OF_DAY_ERROR;
  payload: string;
}

export type PicOfDayAction =
  | FetchPicOfDayAction
  | FetchPicOfDaySuccessAction
  | FetchPicOfDayErrorAction;
