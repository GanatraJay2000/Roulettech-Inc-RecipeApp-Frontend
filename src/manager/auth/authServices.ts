import { API } from "../API";
import { CTX, TLogin, TRegister } from "./authTypes";

export const login = async ({ params, ctx }: { params: TLogin; ctx: CTX }) => {
  const response = await API.auth.login(params);
  if (response.status === 200) {
    ctx.setAuth(response.data);
  }
  return response;
};

export const register = async ({ params }: { params: TRegister }) => {
  const response = await API.auth.register(params);
  return response;
};
