"use client";
import { useState } from "react";

export default function ClientsPage() {
  // Fake user data
  const session = {
    user: {
      name: "Ahmed",
      role: "manager", // Change to "accountant" or other roles to test permissions
    },
  };

  // Fake client data
  const [clients, setClients] = useState([
    { id: 16101,  name: "علي حسين"  ,email:'jass@sms.com', phone:'123456789'},
    { id: 16102, name: "فاطمة علي",email:'jass@sms.com', phone:'123456789'},
    { id: 16103,name:  "جاسم محمد" ,email:'jass@sms.com', phone:'123456789'},
  ]);

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const hasPermission = (action) => {
    if (!session || !session.user) return false;
    const { role } = session.user;
    if (action === "add" || action === "edit") {
      return role === "accountant" || role === "manager";
    }
    if (action === "delete") {
      return role === "manager";
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      setError("جميع الحقول مطلوبة");
      return;
    }
    setClients([...clients, { id: clients.length + 16101, name,email, phone }]);
    setShowModal(false);
    setName("");
    setPhone("");
    setEmail("");
    setError(null);
  };

  return (
    <div className="p-6 w-1/2 relative  md:left-72  top-24  rounded-lg">
      <h1 className="text-2xl font-bold mb-4">إدارة العملاء</h1>
      {hasPermission("add") && (
        <button onClick={() => setShowModal(true)} className="bg-blue-500 text-white p-2 rounded">
          إضافة عميل
        </button>
      )}
      <ul className="mt-4">
        {clients.map((client) => (

          <li key={client.id}  className="border w-[350px] md:w-[800px]   rounded-3xl p-2 mb-2 flex justify-between">
     
            <span className="font-bold">{client.id}</span>  
            <span >{client.name}</span>
            <span >{client.email}</span>
            <span >{client.phone}</span>
            <div>
              {hasPermission("edit") && <button className="bg-green-400 text-white p-1 mx-1">تعديل</button>}
              {hasPermission("delete") && <button className="bg-red-500 text-white p-1">حذف</button>}
            </div>
          </li>
        ))}
      </ul>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-4">إضافة عميل جديد</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">الاسم</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" required />
              </div>
              <div>
                <label className="block text-sm font-medium">الهاتف</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" required />
              </div>
              <div>
                <label className="block text-sm font-medium">البريد الإلكتروني</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" required />
              </div>
              <div className="flex justify-end space-x-2">
                <button type="button" onClick={() => setShowModal(false)} className="bg-gray-500 text-white p-2 rounded">إلغاء</button>
                <button type="submit" className="bg-green-500 text-white p-2 rounded">إضافة</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
