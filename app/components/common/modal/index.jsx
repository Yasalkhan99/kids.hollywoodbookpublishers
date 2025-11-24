"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Image from "next/image";

const Modal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [phoneValue, setPhoneValue] = useState("");
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = {
      name: nameRef.current?.value || '',
      email: emailRef.current?.value || '',
      phone: phoneValue || '',
      message: messageRef.current?.value || '',
    };

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        if (nameRef.current) nameRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
        if (messageRef.current) messageRef.current.value = '';
        setPhoneValue('');
        setTimeout(() => {
          setSubmitStatus(null);
          onClose();
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Background Image with Overlay */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute inset-0"
            onClick={onClose}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/22.png"
                alt="Background"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-primary/80 backdrop-blur-md" />
          </motion.div>

          {/* SVG Background Decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-20 left-10"
            >
              <Image
                src="/globe.svg"
                alt=""
                width={120}
                height={120}
                className="opacity-30"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-20 right-10"
            >
              <Image
                src="/file.svg"
                alt=""
                width={100}
                height={100}
                className="opacity-30"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.12, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute top-1/2 right-20"
            >
              <Image
                src="/window.svg"
                alt=""
                width={80}
                height={80}
                className="opacity-25"
              />
            </motion.div>
          </div>

          {/* Modal Content */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-md bg-gradient-to-br from-purple-100 via-yellow-50 to-purple-100 rounded-2xl shadow-2xl z-10 overflow-hidden border border-purple-300/40"
            style={{
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Map - Very Subtle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 z-0 flex items-center justify-center"
            >
              <Image
                src="/images/backgroundmap.png"
                alt="Background map"
                width={500}
                height={300}
                className="w-full h-auto object-contain opacity-[0.25]"
                priority
              />
            </motion.div>

            {/* Left Book - Small & Subtle */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -5, 0]
              }}
              transition={{ 
                delay: 0.3, 
                duration: 0.5,
                y: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute left-2 top-1/3 z-[1] pointer-events-none max-sm:hidden"
            >
              <Image
                src="/images/animationleftbook.png"
                alt="Left book"
                width={70}
                height={90}
                className="opacity-35"
              />
            </motion.div>

            {/* Right Book - Small & Subtle */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -5, 0]
              }}
              transition={{ 
                delay: 0.4, 
                duration: 0.5,
                y: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }
              }}
              className="absolute right-2 top-1/3 z-[1] pointer-events-none max-sm:hidden"
            >
              <Image
                src="/images/animationrightbook.png"
                alt="Right book"
                width={70}
                height={90}
                className="opacity-35"
              />
            </motion.div>

            {/* Children Reading - Top, Small & Clean */}
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1
              }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 z-[2] pointer-events-none"
            >
              <Image
                src="/images/animation1.png"
                alt="Children reading"
                width={160}
                height={130}
                className="object-contain opacity-75 drop-shadow-lg max-sm:w-[120px]"
                priority
              />
            </motion.div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center bg-gray-800/90 hover:bg-gray-900 text-white text-base font-light rounded-full z-30 transition-all"
              aria-label="Close modal"
            >
              ×
            </motion.button>

            {/* Modal Body */}
            <div className="p-6 max-sm:p-5 pt-16 max-sm:pt-14 relative z-20">
              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-5 text-center"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                  Get Started Today!
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mx-auto"></div>
              </motion.div>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="mb-3 p-2 bg-green-100 border border-green-300 text-green-700 rounded text-[10px] w-full max-w-xs mx-auto"
                  >
                    Message sent successfully!
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="mb-3 p-2 bg-red-100 border border-red-300 text-red-700 rounded text-[10px] w-full max-w-xs mx-auto"
                  >
                    Failed to send message. Please try again.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3 flex flex-col items-center">
                 <motion.div
                   variants={formItemVariants}
                   initial="hidden"
                   animate="visible"
                   custom={0}
                   className="w-full max-w-xs"
                 >
                   <motion.input
                     whileFocus={{ scale: 1.01, borderColor: "#38216e" }}
                     ref={nameRef}
                     type="text"
                     id="modal-name"
                     required
                     className="w-full px-3 py-2 text-primary bg-white border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-gray-400"
                     placeholder="name:"
                   />
                 </motion.div>

                 <motion.div
                   variants={formItemVariants}
                   initial="hidden"
                   animate="visible"
                   custom={1}
                   className="w-full max-w-xs"
                 >
                   <motion.input
                     whileFocus={{ scale: 1.01, borderColor: "#38216e" }}
                     ref={emailRef}
                     type="email"
                     id="modal-email"
                     required
                     className="w-full text-primary px-3 py-2 bg-white border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-gray-400"
                     placeholder="email address:"
                   />
                 </motion.div>

                 <motion.div
                   variants={formItemVariants}
                   initial="hidden"
                   animate="visible"
                   custom={2}
                   className="w-full max-w-xs"
                 >
                   <motion.div
                     whileFocus={{ scale: 1.01 }}
                     className="border border-gray-300 text-primary rounded-lg overflow-hidden bg-white focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/30 transition-all"
                   >
                     <PhoneInput
                       international
                       defaultCountry="US"
                       value={phoneValue}
                       onChange={setPhoneValue}
                       className="w-full text-xs px-3 py-2"
                       placeholder="phone:"
                     />
                   </motion.div>
                 </motion.div>

                 <motion.div
                   variants={formItemVariants}
                   initial="hidden"
                   animate="visible"
                   custom={3}
                   className="w-full max-w-xs"
                 >
                   <motion.textarea
                     whileFocus={{ scale: 1.01, borderColor: "#38216e" }}
                     ref={messageRef}
                     id="modal-message"
                     rows="2"
                     required
                     className="w-full px-3 py-2 bg-white text-primary border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none placeholder:text-gray-400"
                     placeholder="message:"
                   />
                 </motion.div>

                 <motion.button
                   type="submit"
                   disabled={isSubmitting}
                   whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(56, 33, 110, 0.3)" }}
                   whileTap={{ scale: 0.98 }}
                   className="w-full max-w-xs bg-gradient-to-r from-primary to-secondary text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wide transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md relative overflow-hidden"
                 >
                   {isSubmitting ? (
                     <motion.span
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       className="flex items-center justify-center gap-2"
                     >
                       <motion.span
                         animate={{ rotate: 360 }}
                         transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                         className="w-3 h-3 border-2 border-white border-t-transparent rounded-full"
                       />
                       Sending...
                     </motion.span>
                   ) : (
                     <span>SEND MESSAGE {'>>'}</span>
                   )}
                 </motion.button>

                 <motion.button
                   type="button"
                   onClick={onClose}
                   whileHover={{ scale: 1.01 }}
                   whileTap={{ scale: 0.99 }}
                   className="w-full max-w-xs bg-gray-50 hover:bg-gray-100 text-gray-600 py-2 rounded-lg text-[10px] font-medium uppercase tracking-wide transition-colors"
                 >
                   CANCEL
                 </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

