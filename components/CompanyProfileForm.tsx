"use client";

import { Company } from "@/types/company";

interface CompanyProfileFormProps {
  company: Company;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleSave: () => void;
  saving: boolean;
}

export default function CompanyProfileForm({
  company,
  handleChange,
  handleSave,
  saving,
}: CompanyProfileFormProps) {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">

      <h1 className="text-3xl font-bold text-blue-600 mb-8">
        Company Profile
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block font-medium mb-2">
            Company Name *
          </label>

          <input
            type="text"
            name="companyName"
            value={company.companyName}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Primary Contact Person *
          </label>

          <input
            type="text"
            name="contactPerson"
            value={(company as any).contactPerson || ""}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Business Email *
          </label>

          <input
            type="email"
            name="businessEmail"
            value={company.businessEmail}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Country *
          </label>

          <select
            name="country"
            value={company.country}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          >
            <option value="">Select Country</option>
            <option>Pakistan</option>
            <option>China</option>
            <option>Turkey</option>
            <option>United Arab Emirates</option>
            <option>Saudi Arabia</option>
            <option>United Kingdom</option>
            <option>Germany</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-2">
            Phone Number *
          </label>

          <input
            type="text"
            name="phoneNumber"
            value={company.phoneNumber}
            onChange={handleChange}
            placeholder="+92 3001234567"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Street
          </label>

          <input
            type="text"
            name="street"
            value={(company as any).street || ""}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            City *
          </label>

          <input
            type="text"
            name="city"
            value={company.city}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Zip / Postal Code
          </label>

          <input
            type="text"
            name="zipCode"
            value={(company as any).zipCode || ""}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Industry *
          </label>

          <select
            name="industry"
            value={company.industry}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          >
            <option value="">Select Industry</option>
            <option>Textile</option>
            <option>Sports Goods</option>
            <option>Surgical Instruments</option>
            <option>Leather</option>
            <option>Food</option>
            <option>Chemicals</option>
            <option>Electronics</option>
            <option>Machinery</option>
            <option>Construction</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-2">
            Business Type
          </label>

          <select
            name="businessType"
            value={(company as any).businessType || ""}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          >
            <option value="">Select</option>
            <option>Manufacturer</option>
            <option>Exporter</option>
            <option>Trading Company</option>
            <option>Distributor</option>
            <option>Wholesaler</option>
            <option>Retailer</option>
            <option>Service Provider</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-2">
            Year Established
          </label>

          <input
            type="number"
            name="yearEstablished"
            value={company.yearEstablished}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Company Size
          </label>

          <select
            name="employees"
            value={company.employees}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          >
            <option value="">Select Company Size</option>
            <option>1-10</option>
            <option>11-50</option>
            <option>51-200</option>
            <option>201-500</option>
            <option>501-1000</option>
            <option>1000+</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-2">
            VAT Number
          </label>

          <input
            type="text"
            name="vatNumber"
            value={(company as any).vatNumber || ""}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Website
          </label>

          <input
            type="url"
            name="website"
            value={company.website}
            onChange={handleChange}
            placeholder="https://www.yourcompany.com"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

      </div>

      <div className="mt-6">
        <label className="block font-medium mb-2">
          About Company
        </label>

        <textarea
          name="about"
          rows={6}
          value={company.about}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
          placeholder="Describe your company, products, export markets, certifications and strengths..."
        />
      </div>

      <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold disabled:bg-gray-400"
        >
          {saving ? "Saving..." : "Save Company Profile"}
        </button>
      </div>

    </div>
  );
}