import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { DashboardCard } from "./DashboardCard";
import { DashboardEmpty } from "./DashboardEmpty";
import useTitle from "../hooks/useTitle";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  useTitle("Dashboard");

  useEffect(() => {
    async function fetchOrders(){
      try{
        //const data = await getUserOrders();
        const token=sessionStorage.getItem("token");
        const cbid=sessionStorage.getItem("cbid");
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`}
        }
        const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${cbid}`, requestOptions);
        if(!response.ok){
            throw { message: response.statusText, status: response.status }; //eslint-disable-line
        }
        const data = await response.json();
        setOrders(data);
      } catch(error){
        toast.error(error.message, { closeButton: true, position: "bottom-center" });
      }      
    }
    fetchOrders();
  }, []);

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>

      <section>
        { orders.length && orders.map((order) => (
          <DashboardCard key={order.id} order={order} />
        )) }
      </section>

      <section>
        { !orders.length && <DashboardEmpty /> }
      </section>

    </main>
  )
}