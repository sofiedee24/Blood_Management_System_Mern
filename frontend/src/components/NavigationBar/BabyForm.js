import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function BabyForm() {
  const [donorDate, setDonorDate] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorBloodGroup, setDonorBloodGroup] = useState("");
  const [donorVolume, setDonorVolume] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // ✅ validation here (only runs on submit)
    if (!donorDate || !donorName || !donorBloodGroup || !donorVolume) {
      setError("Please fill all the required fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/insertdonor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: donorDate,
          donor: donorName,
          bloodGroup: donorBloodGroup,
          volume: donorVolume,
        }),
      });

      if (res.status === 201) {
        alert("Data inserted successfully");
        setDonorDate("");
        setDonorName("");
        setDonorBloodGroup("");
        setDonorVolume("");
        navigate("/products"); // ✅ redirect if needed
      } else if (res.status === 422) {
        setError("Donor with that data already exists.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid p-5">
      <h1>Enter Donor Information</h1>

      <form onSubmit={handleSubmit}>
        <div className="mt-5 col-lg-6 col-md-6 col-12 fs-4">
          <label className="form-label fw-bold">Date</label>
          <input
            type="date"
            onChange={(e) => setDonorDate(e.target.value)}
            value={donorDate}
            className="form-control fs-5"
            required
          />
        </div>

        <div className="mt-3 col-lg-6 col-md-6 col-12 fs-4">
          <label className="form-label fw-bold">Donor Name</label>
          <input
            type="text"
            onChange={(e) => setDonorName(e.target.value)}
            value={donorName}
            className="form-control fs-5"
            placeholder="Enter donor name"
            required
          />
        </div>

        <div className="mt-3 col-lg-6 col-md-6 col-12 fs-4">
          <label className="form-label fw-bold">Blood Group</label>
          <input
            type="text"
            onChange={(e) => setDonorBloodGroup(e.target.value)}
            value={donorBloodGroup}
            className="form-control fs-5"
            placeholder="Enter blood group"
            required
          />
        </div>

        <div className="mt-3 mb-5 col-lg-6 col-md-6 col-12 fs-4">
          <label className="form-label fw-bold">Volume (ml)</label>
          <input
            type="number"
            onChange={(e) => setDonorVolume(e.target.value)}
            value={donorVolume}
            className="form-control fs-5"
            placeholder="Enter volume"
            required
          />
        </div>

        <div className="d-flex justify-content-center col-lg-6 col-md-6">
          <NavLink to="/products" className="btn btn-secondary me-5 fs-4">
            Cancel
          </NavLink>
          <button
            type="submit"
            className="btn btn-primary fs-4"
            disabled={loading}
          >
            {loading ? "Inserting..." : "Insert"}
          </button>
        </div>

        <div className="col text-center col-lg-6">
          {error && <div className="text-danger mt-3 fs-5 fw-bold">{error}</div>}
        </div>
      </form>
    </div>
  );
}

export default BabyForm;
