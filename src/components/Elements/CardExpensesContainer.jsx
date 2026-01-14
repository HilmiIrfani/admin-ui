import React from "react";

function CardExpensesContainer({
    header,
    headerBg,
    children,
}) {
    return (
        <div className="h-full bg-white rounded-lg shadow-xl overflow-hidden">
            {header && (
                <div className={`${headerBg} px-8 py-5`}>
                    {header}
                </div>
            )}
            <div className="px-8 py-5">
                {children}
            </div>
        </div>
    );
}

export default CardExpensesContainer;
