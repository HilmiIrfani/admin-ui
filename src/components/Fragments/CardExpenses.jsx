import React from "react";
import Icon from "../Elements/Icon";
import CircularProgress from "@mui/material/CircularProgress";
import CardExpensesContainer from "../Elements/CardExpensesContainer";

function CardExpense({ data }) {
    if (!data || Object.keys(data).length === 0) {
        return (
            <CardExpensesContainer >
                <div className="flex flex-col justify-center items-center h-40 text-primary">
                    <CircularProgress color="inherit" size={50} />
                    <span className="mt-2">Loading Data</span>
                </div>
            </CardExpensesContainer>
        );
    }

    const isUp = data.trend === "up";

    const getIcon = (category) => {
        switch (category?.toLowerCase()) {
            case "housing": return <Icon.House />;
            case "food": return <Icon.Food />;
            case "transportation": return <Icon.Transport />;
            case "entertainment": return <Icon.Movie />;
            case "shopping": return <Icon.Shopping />;
            default: return <Icon.Other />;
        }
    };

    /** ================= HEADER ================= */
    const header = (
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <div className="p-3 bg- text-gray-02 rounded-md me-4 shadow-sm">
                    {getIcon(data.category)}
                </div>
                <div>
                    <div className="text-1xl font-bold text-gray-02 capitalize">
                        {data.category}
                    </div>
                    <div className="text-2xl font-bold text-black">
                        ${data.amount}
                    </div>
                </div>
            </div>

            <div className="text-right">
                <div
                    className={`flex items-center justify-end font-bold ${isUp ? "text-red-500" : "text-green-500"
                        }`}
                >
                    {data.percentage}%
                    <span className="ms-1">
                        {isUp ? (
                            <Icon.ArrowUp size={14} />
                        ) : (
                            <Icon.ArrowDown size={14} />
                        )}
                    </span>
                </div>
                <div className="text-1xl text-gray-400">
                    Compare to the last month
                </div>
            </div>
        </div>
    );

    return (
        <CardExpensesContainer header={header} headerBg="bg-gray-06">

            {/* Detail */}
            <div className="space-y-0">
                {data.detail?.length > 0 ? (
                    data.detail.map((item, idx) => (
                        <div key={idx}>
                            <div className="flex justify-between items-center py-3">
                                <span className="font-semibold text-gray-01">
                                    {item.item}
                                </span>
                                <div className="text-right">
                                    <div className="font-semibold text-gray-01">
                                        ${item.amount}
                                    </div>
                                    <div className="text-1xl text-gray-02">
                                        {item.date}
                                    </div>
                                </div>
                            </div>

                            {/* Divider antar item */}
                            {idx !== data.detail.length - 1 && (
                                <div className="border-b border-gray-200" />
                            )}
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-400 py-4">
                        No details available
                    </div>
                )}
            </div>

        </CardExpensesContainer>
    );
}

export default CardExpense;
