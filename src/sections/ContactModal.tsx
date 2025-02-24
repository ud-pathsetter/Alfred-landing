"use client";

import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [organization, setOrganization] = useState("");
  const [industry, setIndustry] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          role,
          organization,
          industry,
          message,
        }),
      });

      if (res.ok) {
        toast.success("We'll Reach Out Soon!", {
          position: "top-right",
        });

        // Clear fields & close modal
        setName("");
        setEmail("");
        setRole("");
        setOrganization("");
        setIndustry("");
        setMessage("");
        onClose();
      } else {
        toast.error("Error submitting form. Please try again.", {
          position: "top-right",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please try again.", {
        position: "top-right",
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className='relative bg-white rounded-xl shadow-xl border max-w-lg w-full p-8 mx-4'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
              aria-label='Close Modal'
            >
              ✕
            </button>

            <h2 className='font-semibold text-2xl mb-3 text-center'>
              Request a Demo
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className='mb-4'>
                <label
                  className='block text-gray-700 font-semibold mb-2'
                  htmlFor='name'
                >
                  Name
                </label>
                <input
                  id='name'
                  type='text'
                  className='border border-gray-300 rounded-md w-full py-2 px-3'
                  placeholder='Your full name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div className='mb-4'>
                <label
                  className='block text-gray-700 font-semibold mb-2'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  id='email'
                  type='email'
                  className='border border-gray-300 rounded-md w-full py-2 px-3'
                  placeholder='you@example.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Role */}
              <div className='mb-4'>
                <label
                  className='block text-gray-700 font-semibold mb-2'
                  htmlFor='role'
                >
                  Role
                </label>
                <input
                  id='role'
                  type='text'
                  className='border border-gray-300 rounded-md w-full py-2 px-3'
                  placeholder='Your role'
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </div>

              {/* Organization */}
              <div className='mb-4'>
                <label
                  className='block text-gray-700 font-semibold mb-2'
                  htmlFor='organization'
                >
                  Organization
                </label>
                <input
                  id='organization'
                  type='text'
                  className='border border-gray-300 rounded-md w-full py-2 px-3'
                  placeholder='Your organization'
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  required
                />
              </div>

              {/* Industry */}
              <div className='mb-4'>
                <label
                  className='block text-gray-700 font-semibold mb-2'
                  htmlFor='industry'
                >
                  Industry
                </label>
                <input
                  id='industry'
                  type='text'
                  className='border border-gray-300 rounded-md w-full py-2 px-3'
                  placeholder='Your industry'
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  required
                />
              </div>

              {/* Message */}
              <div className='mb-4'>
                <label
                  className='block text-gray-700 font-semibold mb-2'
                  htmlFor='message'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  rows={4}
                  className='border border-gray-300 rounded-md w-full py-2 px-3'
                  placeholder='Tell us more about your needs...'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <div className='text-right'>
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
