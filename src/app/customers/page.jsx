"use client"
import {  useState } from "react";

const Customers = () => {
    const customers = [
        { name: "أحمد علي", balance: 1500 },
        { name: "محمد حسن", balance: 3200 },
        { name: "خالد سعيد", balance: 2100 },
        { name: "عمر زيدان", balance: 500 },
        { name: "يوسف عبد الله", balance: 7000 },
        { name: "سالم منصور", balance: 3800 },
        { name: "فارس نجيب", balance: 2900 },
        { name: "نادر فؤاد", balance: 4500 },
        { name: "ماجد سليمان", balance: 6000 },
        { name: "أيمن جابر", balance: 1300 },
        { name: "إبراهيم يوسف", balance: 2500 },
        { name: "مروان سمير", balance: 4800 },
        { name: "طارق عبد الرحمن", balance: 5200 },
        { name: "حسن جمال", balance: 1700 },
        { name: "سامر خليل", balance: 3300 },
        { name: "بدر عادل", balance: 2900 },
        { name: "سامي يوسف", balance: 1200 },
        { name: "ماهر عبد الكريم", balance: 3100 },
        { name: "فؤاد مصطفى", balance: 4000 },
        { name: "جميل راشد", balance: 2300 }
    ];
    
 


  return (
    <div className="container relative md:top-0 top-24 md:w-1/2 mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">قائمة العملاء</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-green-500">
            <th className="px-4 py-2 border-b">الاسم</th>
            <th className="px-4 py-2 border-b">الرصيد</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
      
              className="cursor-pointer hover:bg-gray-100"
            >
              <td className="px-4 py-2 border-b">{customer.name}</td>
              <td className="px-4 py-2 border-b">{customer.balance}د.ع</td>
            </tr>
          ))}
           <tr
           
      
              className="cursor-pointer bg-green-500 hover:bg-green-300"
            >
              <td className="px-4 py-2 border-b">الاجمالي</td>
              <td className="px-4 py-2 border-b">{customers.length}</td>
              
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Customers;

// pages/api/customers.js

// export default function handler(req, res) {
//   const customers = [
//     { id: "1", name: "أحمد علي", balance: 5000 },
//     { id: "2", name: "مريم محمد", balance: 3500 },
//     { id: "3", name: "سعيد خالد", balance: 1200 },
//     { id: "4", name: "فاطمة علي", balance: 8900 },
//   ];

//   // إرسال البيانات في حالة الطلب GET
//   if (req.method === "GET") {
//     res.status(200).json({ customers });
//   } else {
//     res.status(405).json({ message: "طريقة الطلب غير مدعومة" });
//   }
// }