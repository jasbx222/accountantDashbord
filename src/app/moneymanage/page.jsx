"use client";
import { useState } from "react";

export default function Page() {
  const clients = [
    { id: 16101, name: "جاسم محمد" },
    { id: 16102, name: "علي حسين" },
    { id: 16103, name: "فاطمة علي" },
  ];

  const [transactions, setTransactions] = useState([
    {
      id: 3201,
      name: "جاسم محمد",
      type: "مقبوضات",
      amount: 500,
      service: " تسديد فاتورة",
      date: "2025-04-01",
    },
    {
      id: 3202,
      name: "علي حسين",
      type: "مدفوعات",

      service: "شراء منتج",

      amount: 300,
      date: "2025-04-02",
    },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [transactionType, setTransactionType] = useState("");
  const [amount, setAmount] = useState("");
  const [service, setService] = useState("");
  const [client, setClient] = useState("");

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // إنشاء معاملة جديدة
    const newTransaction = {
      id: transactions.length + 3201, // تحديد المعرف الجديد
      name: client,
      type: transactionType,
      amount: amount,
      service: service,
      date: new Date().toISOString().split("T")[0], // التاريخ الحالي
    };

    // إضافة المعاملة الجديدة إلى قائمة المعاملات
    setTransactions([...transactions, newTransaction]);

    // إعادة تعيين القيم في النموذج
    setShowPopup(false); // غلق البوب-اب بعد تقديم النموذج
    setTransactionType("");
    setAmount("");
    setService("");
    setClient("");
  };

  return (
    <div className="p-6 md:w-[70%] w-[100%] relative md:left-80 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">صفحة المقبوضات والمدفوعات</h1>
      <button
        onClick={handlePopupToggle}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        إضافة عملية
      </button>

      {/* البوب-اب */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">إضافة عملية</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">العميل</label>
                <select
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  required
                >
                  <option value="">اختر العميل</option>
                  {clients.map((client) => (
                    <option key={client.id} value={client.name}>
                      {client.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  نوع العملية
                </label>
                <select
                  value={transactionType}
                  onChange={(e) => setTransactionType(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  required
                >
                  <option value="">اختر النوع</option>
                  <option value="مقبوضات">مقبوضات</option>
                  <option value="مدفوعات">مدفوعات</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">المبلغ</label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">الخدمة</label>
                <input
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                حفظ
              </button>
              <button
                type="button"
                onClick={handlePopupToggle}
                className="bg-red-500 text-white px-4 py-2 rounded ml-2"
              >
                إغلاق
              </button>
            </form>
          </div>
        </div>
      )}

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
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded ${
                      transaction.type === "مقبوضات"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {transaction.type}
                  </span>
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
