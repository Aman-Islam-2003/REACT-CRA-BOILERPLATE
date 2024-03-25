import { requestHandler } from "..";


export const getPaymentDetail = (token, user_id, store_id, list_id) => {
  return requestHandler({
    method: "GET",
    url: `users/${user_id}/store/${store_id}/lists/${list_id}/paymentIntent`,
    token,
  });
};
export const placeOrder = (token, user_id, store_id, list_id, data) => {
  return requestHandler({
    method: "POST",
    url: `users/${user_id}/store/${store_id}/lists/${list_id}/order`,
    token,
    data,
  });
};