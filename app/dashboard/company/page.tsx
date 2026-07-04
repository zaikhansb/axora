"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import CompanyProfileForm from "@/components/CompanyProfileForm";
import { Company } from "@/types/company";
import { getCompany, saveCompany } from "@/lib/firestore";

const emptyCompany: Company = {
  companyName: "",
  contactPerson: "",

  businessEmail: "",

  phoneNumber: "",

  country: "",
  street: "",
  city: "",
  zipCode: "",

  industry: "",
  businessType: "",

  yearEstablished: "",
  employees: "",

  vatNumber: "",

  website: "",

  about: "",
};

export default function CompanyPage() {
  const [uid, setUid] = useState("");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  const [company, setCompany] = useState<Company>(emptyCompany);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        window.location.href = "/login";
        return;
      }

      setUid(user.uid);

      const data = await getCompany(user.uid);

      if (data) {
        setCompany({
          ...company,
          ...data,
        });
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setCompany((prev: Company) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      await saveCompany(uid, company);

      alert("Company Profile Saved Successfully!");

    } catch (error) {
      console.error(error);
      alert("Unable to save company profile.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <main className="flex justify-center items-center min-h-screen">
        Loading...
      </main>
    );
  }

  return (
    <main className="bg-slate-100 min-h-screen p-10">
      <CompanyProfileForm
        company={company}
        handleChange={handleChange}
        handleSave={handleSave}
        saving={saving}
      />
    </main>
  );
}