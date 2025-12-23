"use client";

import SocialLinks from "./SocialLinks";
import ContactForm from "./ContactForm";
import { MessageSquare } from "lucide-react";

export default function ContactUs() {
  return (
    <section 
      id="contact" 
      className="px-4 sm:px-6 py-12 sm:py-16"
      aria-labelledby="contact-heading"
    >
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Digital Dreamers Den",
            "alternateName": "D3 Community",
            "url": "https://d3communityofficial.github.io/community-website",
            "logo": "https://d3communityofficial.github.io/community-website/logo.png",
            "description": "A vibrant tech community that brings together AI Full-Stack Developers to build the future. We host events, workshops, and networking opportunities.",
            "foundingDate": "2023",
            "foundingLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chennai",
                "addressCountry": "IN"
              }
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "General Inquiries",
              "email": "d3communityofficial@gmail.com",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://d3community.in/linkedin",
              "https://d3community.in/instagram",
              "https://d3community.in/youtube",
              "https://d3community.in/x",
              "https://github.com/d3communityofficial"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai",
              "addressCountry": "IN"
            }
          })
        }}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 sm:mb-12">
        <h2 
          id="contact-heading"
          className="text-2xl font-bold flex items-center gap-2"
        >
          <MessageSquare className="w-6 h-6 text-dark-secondary" />
          Get in Touch
        </h2>
      </div>

      {/* Combined Card Layout */}
      <div className="max-w-7xl mx-auto">
        {/* Social Links and Email Card */}
        <div className="bg-dark-card rounded-bento border border-dark-border bento-card overflow-hidden">
          {/* Social Links - Full Width */}
          <div className="p-6 sm:p-8">
            <SocialLinks />
          </div>

          {/* Email Button - Bottom */}
          <div className="p-6 sm:p-8 border-t border-dark-border">
            <div className="text-center w-full">
              <h3 className="font-bold text-2xl mb-3 bg-linear-to-r from-dark-primary to-dark-primary-light bg-clip-text text-transparent">
                Get in Touch
              </h3>
              <p className="text-dark-muted mb-6">
                Have a question or want to collaborate? Reach out to us!
              </p>
              <a
                href="mailto:d3communityofficial@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-dark-primary hover:bg-dark-primary-light text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-dark-primary/50"
              >
                <MessageSquare className="w-5 h-5" />
                <span className="font-semibold">Email Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Commented out Contact Form - Will be enabled later */}
        {/* <div className="bg-dark-card rounded-bento border border-dark-border bento-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-dark-border">
              <ContactForm />
            </div>
            <div className="p-6 sm:p-8">
              <SocialLinks />
            </div>
          </div>
        </div> */}

      </div>

      {/* Additional Info */}
      <div className="max-w-7xl mx-auto mt-8 sm:mt-12">
        <div className="bg-dark-card rounded-bento p-6 border border-dark-border text-center">
          <p className="text-dark-muted text-sm">
            <span className="font-semibold text-dark-text">Looking for partnerships or sponsorships?</span>
            {" "}Email us at{" "}
            <a 
              href="mailto:d3communityofficial@gmail.com" 
              className="text-dark-primary hover:underline font-medium"
            >
              d3communityofficial@gmail.com
            </a>
            {" "}with the subject line "Partnership Inquiry"
          </p>
        </div>
      </div>
    </section>
  );
}
