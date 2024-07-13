import { AxiosResponse } from "axios";
import ROUTES from "../../config/constants/apiRoutes";
import { TAuth, TLogin, TRegister } from "./authTypes";
import { axiosInstance } from "../axiosInstance";

export const generateAuthManager = {
  axiosInstance,

  login: async (params: TLogin) => {
    return axiosInstance.post<TLogin, AxiosResponse<TAuth>>(ROUTES.LOGIN, {
      ...params,
    });
  },

  register: async (params: TRegister) => {
    return axiosInstance.post<TLogin, AxiosResponse<TAuth>>(ROUTES.REGISTER, {
      ...params,
    });
  },
};
