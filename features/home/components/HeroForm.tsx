"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function HeroForm() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    carDetails: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just showing an alert. This can be connected to an API later.
    alert("Query Submitted Successfully! We will contact you soon.");
    setFormData({ name: "", number: "", carDetails: "", address: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl border border-neutral-text-muted/10 w-full max-w-md mx-auto relative z-20">
      <div className="mb-6">
        <h3 className="font-heading font-bold text-2xl text-neutral-text-dark">
          Get a Quick Callback
        </h3>
        <p className="text-sm text-neutral-text-muted mt-1">
          Provide your details and we'll fetch the best prices for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-text-dark mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="number" className="block text-sm font-medium text-neutral-text-dark mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        <div>
          <label htmlFor="carDetails" className="block text-sm font-medium text-neutral-text-dark mb-1">
            Car Details
          </label>
          <input
            type="text"
            id="carDetails"
            name="carDetails"
            value={formData.carDetails}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
            placeholder="e.g., Hyundai Creta 2022"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-neutral-text-dark mb-1">
            Address / Location
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            rows={2}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all resize-none"
            placeholder="Your residential address or area"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full mt-2"
        >
          Submit Query
        </Button>
      </form>
    </div>
  );
}
