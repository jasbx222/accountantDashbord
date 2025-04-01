"use client"
import { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name ||!phone |!email) {
      setError("جميع الحقول مطلوبة");
      return;
    }

    setIsLoading(true);

    try {
      // إرسال البيانات إلى API
      const response = await fetch("/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email }),
      });

      if (!response.ok) {
        throw new Error("فشل في إضافة العميل");
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return ( 
    <div className="container mx-auto w-1/2 px-4 py-8 relative top-24 md:top-0">
      <h1 className="text-2xl font-bold mb-4">إضافة عميل جديد</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">الاسم</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">الهاتف</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">البريد الإلكتروني</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <button
            type="submit"
          style={{backgroundColor:'#92E3A9'}}
            className={`w-full p-2 mt-4 text-gray-950 rounded-md ${isLoading ? "opacity-50" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "جاري إضافة العميل..." : "إضافة العميل"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;