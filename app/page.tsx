import React from "react";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-50">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold mb-4">
        Online Shopping & Online Selling at Urubugaa
      </h1>

      <p className="text-lg mb-6 max-w-xl">
        Urubugaa is your one-stop online marketplace in Rwanda. Shop and sell products easily and securely, join our affiliate program, sign up, or signin today!
      </p>

      {/* Call to Action Buttons */}
      <div className="flex gap-4">
        <a
          href="/signup"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Sign Up
        </a>
        <a
          href="/signin"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-100 transition"
        >
          Sign In
        </a>
      </div>

      {/* SEO Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Urubugaa",
            "url": "https://www.urubugaa.vercel.app",
            "potentialAction": [
              {
                "@type": "SearchAction",
                "target": "https://www.urubugaa.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            ]
          })
        }}
      />
    </main>
  );
}