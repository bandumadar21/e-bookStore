import { useLocation } from "react-router-dom";
import { OrderSuccess } from "./OrderSuccess";
import { OrderFail } from "./OrderFail";
import useTitle from "../../hooks/useTitle";

export const OrderPage = () => {
  useTitle("Order Summary");
  const { state } = useLocation();

  return (
    <main>
      { state.status ? <OrderSuccess data={state.data} /> : <OrderFail /> }
    </main>
  )
}