import React, { useState } from 'react';
import { Calendar, ArrowRight, Mail, CheckCircle } from 'lucide-react';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "UX for Beginners: Color Theory Simplified",
      excerpt: "Understanding how colors affect user behavior and emotions in digital interfaces. A practical guide to choosing the right palette.",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "UX Basics",
      image: "https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Clean UI: Why It Matters for Product Success",
      excerpt: "Exploring the principles of minimal design and how clean interfaces contribute to better user experiences and business outcomes.",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Design Principles",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section id="blog" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Insights & Articles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sharing knowledge about design, user experience, and the creative process 
              to help fellow designers and curious minds.
            </p>
          </div>

          {/* Blog Posts */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="space-y-4">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="font-medium">{post.category}</span>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {post.date}
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-gray-900 text-sm font-medium">
                      Read Article
                      <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gray-50 p-8 lg:p-12 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Subscribe for Design Insights
                </h3>
                <p className="text-lg text-gray-600">
                  Get weekly insights on design trends, UX tips, and creative inspiration 
                  delivered straight to your inbox.
                </p>
              </div>

              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent font-mono text-sm"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Mail size={16} className="mr-2" />
                          Subscribe
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex items-center justify-center space-x-3 text-green-600">
                  <CheckCircle size={24} />
                  <span className="text-lg font-medium">
                    Thank you for subscribing! Check your email for confirmation.
                  </span>
                </div>
              )}

              <p className="text-sm text-gray-500">
                No spam, unsubscribe at any time. Your privacy is important to us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;