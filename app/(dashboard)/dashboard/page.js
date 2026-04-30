import { getServerSession } from "next-auth";
import { authOptions } from "../../lip/authOption";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import { apiUrl } from "../../components/url";

export default async function page() {
    const session = await getServerSession(authOptions);
    const reqOrders = await fetch(`${apiUrl}/orders`);
    const orders = await reqOrders.json();

    return (
        <div>
            <AdminDashboard user={session} orders={orders} />
        </div>
    );
}