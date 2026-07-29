"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import LocationModal from "@/components/ui/LocationModal";
import { LocateFixed, MapPin, Loader2 } from "lucide-react";
import { useCreateLead } from "@/services/queries";
import { toast } from "sonner";

export default function HeroForm() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    carDetails: "",
    address: "",
    query: "",
  });
  const [showMapModal, setShowMapModal] = useState(false);

  const { mutateAsync: createLead, isPending: isSubmitting } = useCreateLead();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createLead({
        name: formData.name,
        phone: formData.number,
        source: 'QUICK_CALLBACK',
        vehicleBrand: formData.carDetails,
        city: formData.address,
        message: formData.query,
      });
      toast.success("Query Submitted Successfully! We will contact you soon.");
      setFormData({ name: "", number: "", carDetails: "", address: "", query: "" });
    } catch (err: any) {
      toast.error(err.message || "Failed to submit request. Please try again.");
    }
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
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="address" className="block text-sm font-medium text-neutral-text-dark">
              Address / Location
            </label>
            <button
              type="button"
              onClick={() => setShowMapModal(true)}
              className="flex items-center gap-1.5 text-xs font-semibold text-primary-blue hover:text-primary-blue-dark transition-colors"
            >
              <LocateFixed className="w-3.5 h-3.5" />
              Select on Map
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              onClick={() => setShowMapModal(true)}
              required
              readOnly
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all cursor-pointer"
              placeholder="e.g., Cyber City, Gurgaon"
            />
            <MapPin className="w-4 h-4 text-neutral-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div>
          <label htmlFor="query" className="block text-sm font-medium text-neutral-text-dark mb-1">
            Query / Message
          </label>
          <textarea
            id="query"
            name="query"
            value={formData.query}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all resize-none"
            placeholder="Type your query here..."
          ></textarea>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full mt-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
            </span>
          ) : (
            "Submit Query"
          )}
        </Button>
      </form>

      <LocationModal
        isOpen={showMapModal}
        onClose={() => setShowMapModal(false)}
        onConfirm={(locStr) => {
          setFormData(prev => ({ ...prev, address: locStr }));
        }}
      />
    </div>
  );
}
