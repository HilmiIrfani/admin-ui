import { useEffect, useState, useContext } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CircularProgress from "@mui/material/CircularProgress";
import CardExpenses from "../components/Fragments/CardExpenses";
import AppSnackbar from "../components/Fragments/Snackbar";
import { AuthContext } from "../context/authContext";
import { expensesService } from "../services/dataServices";

export default function Expenses() {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);

    const { logout } = useContext(AuthContext);

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    const handleCloseSnackbar = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    const fetchExpenses = async () => {
        setLoading(true);
        try {
            const data = await expensesService();
            setExpenses(data);
        } catch (err) {
            setSnackbar({
                open: true,
                message: "Gagal mengambil data expenses",
                severity: "error",
            });

            if (err?.status === 401) {
                logout();
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <MainLayout title="Expenses Comparison">
            {loading && (
                <div className="flex flex-col justify-center items-center h-[60vh] text-primary">
                    <CircularProgress color="inherit" size={50} />
                    <span className="mt-3 font-medium">Loading Data</span>
                </div>
            )}

            {!loading && expenses.length === 0 && (
                <div className="flex justify-center items-center h-[60vh]">
                    <p className="text-gray-500">No expenses data available</p>
                </div>
            )}

            {!loading && expenses.length > 0 && (
                <>
                    <h2 className="text-2xl text-gray-02 mb-6">
                        Expenses Comparison
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {expenses.map((expense, index) => (
                            <CardExpenses key={index} data={expense} />
                        ))}
                    </div>
                </>
            )}

            <AppSnackbar
                open={snackbar.open}
                message={snackbar.message}
                severity={snackbar.severity}
                onClose={handleCloseSnackbar}
            />
        </MainLayout>
    );
}
