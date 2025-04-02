"use client";
import { useState } from "react";

export default function FinancialReportsPage() {
  const [transactions] = useState([
    { id: 3201, name: "جاسم محمد", type: "مقبوضات", amount: 500, service: "تسديد فاتورة", date: "2025-04-01" },
    { id: 3202, name: "علي حسين", type: "مدفوعات", amount: 300, service: "شراء منتج", date: "2025-04-02" },
  ]);

  const exportToCSV = () => {
    const csvContent = [
      ["الرقم", "العميل", "النوع", "المبلغ", "الخدمة", "التاريخ"],
      ...transactions.map(({ id, name, type, amount, service, date }) => [id, name, type, amount, service, date]),
    ]
      .map((row) => row.join(","))
      .join("\n");
    
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "financial_reports.csv";
    link.click();
  };

  return (
    <div className="p-6 md:w-[70%]  relative md:left-80 md:min-h-screen">
      <h1 className="text-2xl font-bold mb-6">التقارير المالية</h1>
      <button onClick={exportToCSV} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        تصدير إلى CSV
      </button>

      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-6">
        <table className="min-w-full text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">الرقم</th>
              <th className="p-3">العميل</th>
              <th className="p-3">النوع</th>
              <th className="p-3">المبلغ</th>
              <th className="p-3">الخدمة</th>
              <th className="p-3">التاريخ</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b">
                <td className="p-3">{transaction.id}</td>
                <td className="p-3">{transaction.name}</td>
                <td className={`p-3 ${transaction.type === "مقبوضات" ? "text-green-600" : "text-red-600"}`}>
                  {transaction.type}
                </td>
                <td className="p-3">{transaction.amount} د.ع</td>
                <td className="p-3">{transaction.service}</td>
                <td className="p-3">{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
