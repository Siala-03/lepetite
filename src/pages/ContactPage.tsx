import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  ChevronDownIcon,
  ChevronUpIcon } from
'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { PHONE_DISPLAY, WHATSAPP_NUMBER, EMAIL, ADDRESS_LINE, ADDRESS_CITY } from '../config/contact';
import { usePageTitle } from '../hooks/usePageTitle';
const faqs = [
{
  q: 'Do you accommodate dietary restrictions?',
  a: 'Yes — our kitchen can accommodate most dietary requirements, including gluten-free and vegan requests. Please let us know when you book so our chef can prepare accordingly.'
},
{
  q: 'Do I need a reservation?',
  a: "Walk-ins are welcome, but we recommend booking ahead via WhatsApp for larger groups, weekend brunch, or peak evening hours."
},
{
  q: 'Can I host a private event?',
  a: 'Yes — please reach out via the contact form or WhatsApp to discuss private dining for your celebration or gathering.'
}];

export function ContactPage() {
  usePageTitle('Contact | Le Petit Chalet');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: 'General',
        message: ''
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };
  return (
    <PageTransition>
      <main className="flex-grow bg-chalet-black text-chalet-cream min-h-screen">
        {/* Hero Banner */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/DSC_8478.webp"
              alt="Le Petit Chalet entrance"
              className="w-full h-full object-cover" />
            
            <div className="absolute inset-0 bg-chalet-black/80 backdrop-blur-sm"></div>
          </div>
          <div className="relative z-10 text-center px-4 mt-16">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="font-display text-5xl md:text-6xl text-chalet-warm-white mb-4">
              
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.2
              }}
              className="text-chalet-amber tracking-widest uppercase text-sm">
              
              We'd love to hear from you
            </motion.p>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Contact Form */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              className="bg-chalet-rich-black border border-chalet-charcoal p-8 md:p-10 rounded-sm">
              
              <h2 className="font-display text-3xl md:text-4xl text-chalet-warm-white mb-8">
                Send a Message
              </h2>

              {isSuccess ?
              <div className="bg-chalet-charcoal/50 border border-chalet-amber/30 p-6 rounded-sm text-center">
                  <p className="text-chalet-amber font-medium mb-2">
                    Message Sent Successfully!
                  </p>
                  <p className="text-chalet-cream/70 text-sm">
                    We will get back to you as soon as possible.
                  </p>
                </div> :

              <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm text-chalet-cream/70 mb-2 uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value
                    })
                    }
                    className="w-full bg-chalet-black border border-chalet-charcoal text-chalet-cream px-4 py-3 focus:outline-none focus:border-chalet-amber transition-colors rounded-sm" />
                  
                  </div>
                  <div>
                    <label className="block text-sm text-chalet-cream/70 mb-2 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value
                    })
                    }
                    className="w-full bg-chalet-black border border-chalet-charcoal text-chalet-cream px-4 py-3 focus:outline-none focus:border-chalet-amber transition-colors rounded-sm" />
                  
                  </div>
                  <div>
                    <label className="block text-sm text-chalet-cream/70 mb-2 uppercase tracking-wider">
                      Subject
                    </label>
                    <select
                    value={formData.subject}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      subject: e.target.value
                    })
                    }
                    className="w-full bg-chalet-black border border-chalet-charcoal text-chalet-cream px-4 py-3 focus:outline-none focus:border-chalet-amber transition-colors rounded-sm appearance-none">
                    
                      <option>General Inquiry</option>
                      <option>Reservation Issue</option>
                      <option>Private Event</option>
                      <option>Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-chalet-cream/70 mb-2 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value
                    })
                    }
                    className="w-full bg-chalet-black border border-chalet-charcoal text-chalet-cream px-4 py-3 focus:outline-none focus:border-chalet-amber transition-colors rounded-sm resize-none">
                  </textarea>
                  </div>
                  <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-chalet-amber text-chalet-black font-medium tracking-wider hover:bg-chalet-honey transition-colors rounded-full uppercase disabled:opacity-70 flex justify-center">
                  
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              }
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              className="space-y-10">
              
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-chalet-warm-white mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPinIcon className="w-6 h-6 text-chalet-amber mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-chalet-warm-white font-medium mb-1">
                        Location
                      </h4>
                      <p className="text-chalet-cream/70">
                        {ADDRESS_LINE}
                        <br />
                        {ADDRESS_CITY}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PhoneIcon className="w-6 h-6 text-chalet-amber mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-chalet-warm-white font-medium mb-1">
                        Phone
                      </h4>
                      <p className="text-chalet-cream/70">{PHONE_DISPLAY}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MailIcon className="w-6 h-6 text-chalet-amber mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-chalet-warm-white font-medium mb-1">
                        Email
                      </h4>
                      <p className="text-chalet-cream/70">
                        {EMAIL}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-chalet-amber mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-chalet-warm-white font-medium mb-1">
                        Hours
                      </h4>
                      <p className="text-chalet-cream/70">
                        Daily: 11:30 AM - 10:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Le+Petit+Chalet+KG+5+Kigali+Rwanda"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-chalet-charcoal h-64 rounded-sm border border-chalet-amber/20 overflow-hidden group hover:border-chalet-amber/50 transition-colors">
                <iframe
                  src="https://www.google.com/maps?q=Le+Petit+Chalet+KG+5+Kigali+Rwanda&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Le Petit Chalet Location"
                  className="w-full h-full"
                />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-4 bg-[#25D366] text-white font-medium tracking-wider hover:bg-[#128C7E] transition-colors rounded-full uppercase">

                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-chalet-warm-white mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-0.5 bg-chalet-amber mx-auto"></div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) =>
              <div
                key={idx}
                className="bg-chalet-rich-black border border-chalet-charcoal rounded-sm overflow-hidden">
                
                  <button
                  onClick={() =>
                  setOpenFaqIndex(openFaqIndex === idx ? null : idx)
                  }
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none">
                  
                    <span className="font-display text-lg text-chalet-warm-white">
                      {faq.q}
                    </span>
                    {openFaqIndex === idx ?
                  <ChevronUpIcon className="w-5 h-5 text-chalet-amber flex-shrink-0" /> :

                  <ChevronDownIcon className="w-5 h-5 text-chalet-amber flex-shrink-0" />
                  }
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === idx &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.3
                    }}>
                    
                        <div className="px-6 pb-6 text-chalet-cream/70 leading-relaxed border-t border-chalet-charcoal pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                  }
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>);

}