import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white page-container">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <div>
            <div className="font-bold text-lg">Nesti AI</div>
            <div className="text-sm text-gray-600">The Real Estate Intelligence.</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-800 hover:text-primary">Home</Link>
          <Link href="#features" className="text-gray-800 hover:text-primary">Features</Link>
          <Link href="#pricing" className="text-gray-800 hover:text-primary">Pricing</Link>
          <Link href="#about" className="text-gray-800 hover:text-primary">About</Link>
          <Link href="#contact" className="text-gray-800 hover:text-primary">Contact</Link>
        </nav>
        <Link href="/login" className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark">
          Get Started
        </Link>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            AI-Powered Real Estate Solutions
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Real Estate With AI Intelligence.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Nesti AI helps agents, brokers, and investors generate quality leads, match clients, and close deals faster.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 min-w-[200px] shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 min-w-[200px] shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">500K+</div>
              <div className="text-gray-600">Leads Generated</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 min-w-[200px] shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Match Accuracy</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 min-w-[200px] shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">65%</div>
              <div className="text-gray-600">Time Saved</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/signup" className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark">
              Start Free Trial
            </Link>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-green-50">
              Watch Demo
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
              ))}
            </div>
            <span className="ml-2">10K+ Happy Customers</span>
          </div>
        </div>
      </section>

      {/* AI Dream Team Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            AI Assistants
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Your AI Dream Team.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nesti AI's virtual agents work 24/7 to qualify leads, match clients, and nurture deals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "🏠",
              title: "Buyer Assistant",
              features: ["Automated Buyer Qualification", "Personalized Property Matching", "Virtual Showings", "Offer Negotiation Support", "Market Insights"]
            },
            {
              icon: "💰",
              title: "Seller Assistant",
              features: ["Automated Seller Qualification", "Property Valuation", "Marketing Campaign Creation", "Open House Management", "Offer Management"]
            },
            {
              icon: "📄",
              title: "Underwriter Assistant",
              features: ["Automated Document Verification", "Risk Assessment", "Compliance Checks", "Loan Application Processing", "Fraud Detection"]
            },
            {
              icon: "💬",
              title: "General Assistant",
              features: ["Smart Data Entry", "Automated Scheduling", "Client Communication", "Task Management", "Reporting & Analytics"]
            },
            {
              icon: "⏰",
              title: "Follow-up Assistant",
              features: ["Automated Follow-ups", "Engagement Tracking", "Reminder System", "Feedback Collection", "Lead Nurturing"]
            },
            {
              icon: "📊",
              title: "Analytics Engine",
              features: ["Performance Tracking", "Market Trend Analysis", "ROI Calculation", "Predictive Analytics", "Customizable Dashboards"]
            }
          ].map((assistant, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">{assistant.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{assistant.title}</h3>
              <ul className="space-y-2">
                {assistant.features.map((feature, i) => (
                  <li key={i} className="text-gray-600 text-sm">• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Core Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Unlock Market Dominance with NestiAI.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive suite of AI-powered tools for generating quality leads and converting them.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "N",
              iconColor: "bg-purple-500",
              title: "Smart Lead Scoring",
              description: "Prioritize leads with AI-driven scoring, focusing on high-potential prospects for maximum conversion."
            },
            {
              icon: "A",
              iconColor: "bg-blue-500",
              title: "Intelligent Matching",
              description: "Connect buyers with their ideal properties and sellers with qualified buyers using advanced AI algorithms."
            },
            {
              icon: "I",
              iconColor: "bg-primary",
              title: "Real-Time Analytics",
              description: "Gain actionable insights into market trends, agent performance, and lead conversion rates with dynamic dashboards."
            }
          ].map((feature, idx) => (
            <div key={idx} className="text-center">
              <div className={`w-16 h-16 ${feature.iconColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <span className="text-white text-2xl font-bold">{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Started in 3 Easy Steps.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple process to get you started with Nesti AI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Create Your Profile",
              description: "Set up your personalized Nesti AI profile, detailing your preferences, target market, and business goals."
            },
            {
              step: "2",
              title: "AI Matches & Scores",
              description: "Our AI engine will instantly generate qualified leads, match clients, and provide predictive scores."
            },
            {
              step: "3",
              title: "Close More Deals",
              description: "Leverage AI-powered insights and automated assistance to streamline your workflow and close deals faster."
            }
          ].map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">{step.step}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our plans and find the perfect fit for your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Basic",
              price: "$100",
              features: ["50 Leads/Month", "Buyer Assistant", "Seller Assistant", "Basic Analytics", "Email Support", "Limited Integrations"],
              highlighted: false
            },
            {
              name: "Professional",
              price: "$150",
              features: ["150 Leads/Month", "Buyer Assistant", "Seller Assistant", "Underwriter Assistant", "General Assistant", "Advanced Analytics", "Priority Support", "CRM Integrations", "Follow-up Assistant"],
              highlighted: true
            },
            {
              name: "Premium",
              price: "$300",
              features: ["Unlimited Leads", "All AI Assistants", "Custom AI Models", "Dedicated Account Manager", "API Access", "24/7 Support", "White-labeling Options", "Market Dominance Suite"],
              highlighted: false
            }
          ].map((plan, idx) => (
            <div key={idx} className={`bg-white border-2 rounded-lg p-8 ${plan.highlighted ? 'border-primary shadow-lg' : 'border-gray-200'}`}>
              {plan.highlighted && (
                <div className="bg-primary text-white text-center py-1 rounded-full text-sm font-medium mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                {plan.price} <span className="text-lg font-normal text-gray-600">/ month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/signup" className={`block text-center py-3 rounded-lg font-medium ${plan.highlighted ? 'bg-primary text-white hover:bg-primary-dark' : 'border-2 border-primary text-primary hover:bg-green-50'}`}>
                Start Free Trial
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Top Professionals.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real estate professionals love Nesti AI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Realtor",
              quote: "Nesti AI has transformed my lead management process. I'm closing more deals than ever before!"
            },
            {
              name: "Michael Chen",
              role: "Broker",
              quote: "The AI matching is incredibly accurate. My clients are always impressed with the perfect property suggestions. It's a game-changer!"
            },
            {
              name: "Amy Rodriguez",
              role: "Investor",
              quote: "I've seen a significant increase in my ROI since using Nesti AI. The analytics engine provides invaluable insights."
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Media Mentions Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Media Mentions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured in Top Publications.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nesti AI is recognized by leading industry publications.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {["Wall Street Times", "Forbes", "Bloomberg", "TechCrunch", "The US Times"].map((pub, idx) => (
            <div key={idx} className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-600 font-medium text-sm">
              {pub}
            </div>
          ))}
        </div>
      </section>

      {/* Role Selection Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            For Who?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            I am a Real Estate...
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select your role to get started.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "X",
              iconColor: "bg-purple-500",
              title: "Realtor / Agent",
              description: "Streamline your lead generation, client matching, and deal closing."
            },
            {
              icon: "A",
              iconColor: "bg-orange-500",
              title: "Real Estate Lawyer",
              description: "Automate document review, compliance checks, and client communication."
            },
            {
              icon: "M",
              iconColor: "bg-blue-500",
              title: "Mortgage Broker",
              description: "Accelerate loan processing, client qualification, and application management."
            }
          ].map((role, idx) => (
            <div key={idx} className="text-center">
              <div className={`w-16 h-16 ${role.iconColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <span className="text-white text-2xl font-bold">{role.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{role.title}</h3>
              <p className="text-gray-600">{role.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Happens After Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          What happens after you choose?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "AI Onboarding",
              description: "Our AI will guide you through a personalized onboarding process, setting up your preferences and goals."
            },
            {
              step: "2",
              title: "Real Matching",
              description: "Experience instant, intelligent matching of clients to properties or services, powered by advanced algorithms."
            },
            {
              step: "3",
              title: "Rich Community",
              description: "Join a thriving network of real estate professionals, share insights, and grow your business together."
            }
          ].map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">{step.step}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Real Estate Business?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Join thousands of our happy professionals who are generating more leads, closing more deals, and growing their businesses with Nesti AI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup" className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100">
              Get Started Today
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Nesti AI</div>
                  <div className="text-sm text-gray-600">The Real Estate Intelligence.</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Transform your real estate business with AI-powered intelligence.
              </p>
              <p className="text-gray-600 text-sm mb-4">info@nestiai.com</p>
              <div className="flex gap-3">
                {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social, idx) => (
                  <div key={idx} className="w-8 h-8 bg-gray-200 rounded-full"></div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#pricing" className="hover:text-primary">Pricing</Link></li>
                <li><Link href="#features" className="hover:text-primary">Features</Link></li>
                <li><Link href="#" className="hover:text-primary">Blog</Link></li>
                <li><Link href="#" className="hover:text-primary">New Features</Link></li>
                <li><Link href="#" className="hover:text-primary">Testimonials</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-primary">About Us</Link></li>
                <li><Link href="#" className="hover:text-primary">Careers</Link></li>
                <li><Link href="#" className="hover:text-primary">Partners</Link></li>
                <li><Link href="#" className="hover:text-primary">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-primary">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2023 Nesti AI. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <div className="flex gap-2">
                {["Visa", "Mastercard", "Amex", "PayPal"].map((payment, idx) => (
                  <div key={idx} className="w-12 h-8 bg-gray-200 rounded text-xs flex items-center justify-center text-gray-600">
                    {payment}
                  </div>
                ))}
              </div>
              <select className="text-gray-600 text-sm border border-gray-300 rounded px-2 py-1">
                <option>English</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

