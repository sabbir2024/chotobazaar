import { MdOutlinePayments, MdOutlineShoppingCart } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";
import { PiSealCheckBold } from "react-icons/pi";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";




export default function AnalyticsBentoGrid({ orders }) {

    // Calculate dynamic stats from orders
    const calculateStats = () => {
        if (!orders || orders.length === 0) {
            return {
                monthlyRevenue: 0,
                activeOrders: 0,
                totalOrders: 0,
                revenueChange: 0,
                ordersChange: 0,
                avgOrderValue: 0
            };
        }

        // Get current month's orders
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        const currentMonthOrders = orders.filter(order => {
            const orderDate = new Date(order.orderDate);
            return orderDate.getMonth() === currentMonth && orderDate.getFullYear() === currentYear;
        });

        const previousMonthOrders = orders.filter(order => {
            const orderDate = new Date(order.orderDate);
            const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
            const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
            return orderDate.getMonth() === prevMonth && orderDate.getFullYear() === prevYear;
        });

        // Calculate revenue
        const currentRevenue = currentMonthOrders.reduce((sum, order) => sum + order.total, 0);
        const previousRevenue = previousMonthOrders.reduce((sum, order) => sum + order.total, 0);

        // Calculate revenue change percentage
        let revenueChange = 0;
        if (previousRevenue > 0) {
            revenueChange = ((currentRevenue - previousRevenue) / previousRevenue) * 100;
        } else if (currentRevenue > 0) {
            revenueChange = 100;
        }

        // Active orders (pending + processing)
        const activeOrders = orders.filter(order =>
            order.status === 'pending' || order.status === 'processing'
        ).length;

        // Total orders
        const totalOrders = orders.length;

        // Orders change (current month vs previous month)
        const currentOrdersCount = currentMonthOrders.length;
        const previousOrdersCount = previousMonthOrders.length;
        let ordersChange = 0;
        if (previousOrdersCount > 0) {
            ordersChange = ((currentOrdersCount - previousOrdersCount) / previousOrdersCount) * 100;
        } else if (currentOrdersCount > 0) {
            ordersChange = 100;
        }

        // Average order value
        const avgOrderValue = totalOrders > 0 ? currentRevenue / totalOrders : 0;

        return {
            monthlyRevenue: currentRevenue,
            activeOrders: activeOrders,
            totalOrders: totalOrders,
            revenueChange: revenueChange.toFixed(1),
            ordersChange: ordersChange.toFixed(1),
            avgOrderValue: avgOrderValue.toFixed(2)
        };
    };

    const stats = calculateStats();

    // Calculate daily sales for chart (last 7 days)
    const getLast7DaysSales = () => {
        const last7Days = [];
        const today = new Date();

        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(today.getDate() - i);
            date.setHours(0, 0, 0, 0);

            const dailyOrders = orders.filter(order => {
                const orderDate = new Date(order.orderDate);
                orderDate.setHours(0, 0, 0, 0);
                return orderDate.getTime() === date.getTime();
            });

            const dailyTotal = dailyOrders.reduce((sum, order) => sum + order.total, 0);

            last7Days.push({
                date: date,
                total: dailyTotal,
                count: dailyOrders.length
            });
        }

        return last7Days;
    };

    const weeklySales = getLast7DaysSales();
    const maxSales = Math.max(...weeklySales.map(day => day.total), 1);

    // Get day names
    const getDayName = (date) => {
        return date.toLocaleDateString('en-US', { weekday: 'short' });
    };

    // Dynamic status based on revenue change
    const getRevenueStatus = () => {
        const change = parseFloat(stats.revenueChange);
        if (change > 0) return { text: 'positive', color: 'emerald' };
        if (change < 0) return { text: 'negative', color: 'red' };
        return { text: 'neutral', color: 'gray' };
    };

    const revenueStatus = getRevenueStatus();

    // Group orders by status for additional insights
    const getStatusCount = () => {
        const statuses = {};
        orders.forEach(order => {
            statuses[order.status] = (statuses[order.status] || 0) + 1;
        });
        return statuses;
    };

    const statusCounts = getStatusCount();

    return (
        <>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 dark:text-black">
                {/* Stat Card 1 - Revenue */}
                <div className="bg-surface-container-low p-5 sm:p-6 md:p-8 rounded-2xl flex flex-col justify-between group hover:bg-surface-container-lowest transition-colors duration-300">
                    <div className="flex justify-between items-start">
                        <div className="bg-primary/10 p-2 sm:p-3 rounded-xl text-primary">
                            <span className="material-symbols-outlined text-xl sm:text-2xl"><MdOutlinePayments /></span>
                        </div>
                        <span className={`text-xs font-bold px-2 py-1 rounded-lg ${revenueStatus.color === 'emerald' ? 'text-emerald-600 bg-emerald-50' :
                            revenueStatus.color === 'red' ? 'text-red-600 bg-red-50' :
                                'text-gray-600 bg-gray-50'
                            }`}>
                            {stats.revenueChange > 0 ? '+' : ''}{stats.revenueChange}%
                        </span>
                    </div>
                    <div className="mt-6 sm:mt-8">
                        <p className="text-xs sm:text-sm text-on-surface-variant font-medium">Monthly Revenue</p>
                        <h4 className="text-2xl sm:text-3xl font-black tracking-tighter mt-1">
                            ${stats.monthlyRevenue.toLocaleString()}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">
                            Avg order: ${stats.avgOrderValue.toLocaleString()}
                        </p>
                    </div>
                </div>

                {/* Stat Card 2 - Active Orders */}
                <div className="bg-surface-container-low p-5 sm:p-6 md:p-8 rounded-2xl flex flex-col justify-between group hover:bg-surface-container-lowest transition-colors duration-300">
                    <div className="flex justify-between items-start">
                        <div className="bg-tertiary/10 p-2 sm:p-3 rounded-xl text-tertiary">
                            <span className="material-symbols-outlined text-xl sm:text-2xl"><MdOutlineShoppingCart /></span>
                        </div>
                        <span className={`text-xs font-bold px-2 py-1 rounded-lg ${stats.ordersChange > 0 ? 'text-emerald-600 bg-emerald-50' :
                            stats.ordersChange < 0 ? 'text-red-600 bg-red-50' :
                                'text-gray-600 bg-gray-50'
                            }`}>
                            {stats.ordersChange > 0 ? '+' : ''}{stats.ordersChange}%
                        </span>
                    </div>
                    <div className="mt-6 sm:mt-8">
                        <p className="text-xs sm:text-sm text-on-surface-variant font-medium">Active Orders</p>
                        <h4 className="text-2xl sm:text-3xl font-black tracking-tighter mt-1">
                            {stats.activeOrders.toLocaleString()}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">
                            Total: {stats.totalOrders} orders
                        </p>
                    </div>
                </div>

                {/* Stat Card 3 - Orders by Status */}
                <div className="bg-surface-container-low p-5 sm:p-6 md:p-8 rounded-2xl flex flex-col justify-between group hover:bg-surface-container-lowest transition-colors duration-300">
                    <div className="flex justify-between items-start">
                        <div className="bg-amber/10 p-2 sm:p-3 rounded-xl text-amber-600">
                            <span className="material-symbols-outlined text-xl sm:text-2xl"><ImStatsBars /></span>
                        </div>
                        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
                            {orders.length} total
                        </span>
                    </div>
                    <div className="mt-6 sm:mt-8">
                        <p className="text-xs sm:text-sm text-on-surface-variant font-medium">Orders by Status</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {Object.entries(statusCounts).map(([status, count]) => (
                                <span key={status} className="text-xs px-2 py-1 rounded-full bg-gray-100">
                                    {status}: {count}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stat Card 4 - Top Product */}
                <div className="bg-surface-container-low p-5 sm:p-6 md:p-8 rounded-2xl flex flex-col justify-between group hover:bg-surface-container-lowest transition-colors duration-300">
                    <div className="flex justify-between items-start">
                        <div className="bg-purple/10 p-2 sm:p-3 rounded-xl text-purple-600">
                            <span className="material-symbols-outlined text-xl sm:text-2xl"><PiSealCheckBold /></span>
                        </div>
                    </div>
                    <div className="mt-6 sm:mt-8">
                        <p className="text-xs sm:text-sm text-on-surface-variant font-medium">Top Selling Product</p>
                        {orders.length > 0 && (() => {
                            const productSales = {};
                            orders.forEach(order => {
                                if (order.productName) {
                                    productSales[order.productName] = (productSales[order.productName] || 0) + order.quantity;
                                }
                            });
                            const topProduct = Object.entries(productSales).sort((a, b) => b[1] - a[1])[0];
                            return (
                                <>
                                    <h4 className="text-sm font-bold tracking-tighter mt-1 line-clamp-2">
                                        {topProduct?.[0] || 'No products'}
                                    </h4>
                                    <p className="text-xs text-gray-400 mt-1">
                                        {topProduct?.[1] || 0} units sold
                                    </p>
                                </>
                            );
                        })()}
                    </div>
                </div>


            </section>
            {/* Sales Performance Chart - Spans 2 columns */}
            <div className="sm:col-span-2 bg-surface-container-lowest p-5 sm:p-6 md:p-8 rounded-2xl shadow-sm relative overflow-hidden group">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div>
                        <h4 className="text-base sm:text-lg font-bold">Sales Performance</h4>
                        <p className="text-xs text-on-surface-variant">Last 7 days revenue trend</p>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm"><TbArrowBigDownLinesFilled /></span>
                    </button>
                </div>

                {/* Dynamic Graph Visualization */}
                <div className="h-24 sm:h-28 md:h-32 flex items-end gap-1 sm:gap-2 px-2">
                    {weeklySales.map((day, idx) => {
                        const heightPercent = (day.total / maxSales) * 100;
                        const isHighest = day.total === maxSales && maxSales > 0;
                        return (
                            <div
                                key={idx}
                                className={`flex-1 rounded-t-lg transition-all duration-500 group-hover:scale-y-105 ${isHighest ? 'bg-primary' : 'bg-surface-container-highest'
                                    }`}
                                style={{ height: `${Math.max(heightPercent * 1.5, 4)}px` }}
                                title={`${getDayName(day.date)}: $${day.total.toLocaleString()} (${day.count} orders)`}
                            />
                        );
                    })}
                </div>
                <div className="flex justify-between mt-4 text-[10px] text-on-surface-variant font-bold uppercase tracking-widest px-1">
                    {weeklySales.map((day, idx) => (
                        <span key={idx}>{getDayName(day.date)}</span>
                    ))}
                </div>

                {/* Total revenue for the week */}
                <div className="mt-4 pt-3 border-t border-gray-100 text-right">
                    <p className="text-xs text-gray-400">
                        Week total: ${weeklySales.reduce((sum, day) => sum + day.total, 0).toLocaleString()}
                    </p>
                </div>
            </div>
        </>
    );
}