/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  CheckCircle2, 
  Code2, 
  Globe2, 
  Zap, 
  Users2, 
  Rocket, 
  Mail, 
  ArrowRight,
  ChevronRight,
  Clock,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';

const CONTACT_EMAIL = 'kollinear.consultants@zohomail.in';

const technologies = [
  'SAP',
  'Salesforce',
  'ServiceNow',
  'ERPNext',
  'Shopify',
  'WooCommerce',
  'Full Stack Development',
  'DevOps',
  'Cloud Engineers'
];

const industries = [
  'SaaS',
  'Ecommerce',
  'Fintech',
  'Healthcare',
  'Insurance',
  'Manufacturing'
];

const steps = [
  { title: 'Share your requirement', description: 'Tell us about your project and the skills you need.' },
  { title: 'Get matched with vetted developers', description: 'We handpick the best talent from our pool of experts.' },
  { title: 'Start a 1 week trial', description: 'Test the waters with a risk-free engagement.' },
  { title: 'Scale the team anytime', description: 'Easily add or remove resources as your project evolves.' }
];

const benefits = [
  { title: 'Affordable offshore developers from India', icon: <TrendingUp className="w-6 h-6" /> },
  { title: '1 week trial engagement', icon: <Clock className="w-6 h-6" /> },
  { title: 'Work in US, UK, Australia time zones', icon: <Globe2 className="w-6 h-6" /> },
  { title: 'Standby resources available', icon: <Users2 className="w-6 h-6" /> },
  { title: 'Scale teams quickly', icon: <Zap className="w-6 h-6" /> }
];

export default function App() {
  const generateMailto = (tech: string) => {
    const subject = encodeURIComponent(`Hiring Request – ${tech}`);
    const body = encodeURIComponent(`Hi Team,

We are looking for resources with the following details:

Technology: ${tech}
Experience Required:
Budget Range:
Location:
Contract Duration:

Please share available profiles so we can connect.

Thanks`);
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-bottom border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Code2 className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Kollinear</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">How it Works</button>
              <button onClick={() => scrollToSection('technologies')} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Technologies</button>
              <button onClick={() => scrollToSection('why-us')} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Why Us</button>
              <button 
                onClick={() => scrollToSection('technologies')}
                className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm hover:shadow-md"
              >
                Hire Developers
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
                Global Tech Talent from India
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                Build Your Global Tech Team <br className="hidden lg:block" />
                <span className="text-indigo-600">Faster & Affordable</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                Hire pre-vetted developers, consultants and architects across niche technologies with a 1-week risk-free trial.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => scrollToSection('technologies')}
                  className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 flex items-center justify-center gap-2 group"
                >
                  Hire Developers
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-bold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all"
                >
                  Start 1 Week Trial
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-600">A simple 4-step process to scale your engineering team.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Technologies We Specialize In</h2>
            <p className="text-slate-600">Find the right expertise for your tech stack.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group p-6 bg-white border border-slate-200 rounded-2xl hover:border-indigo-600 transition-all hover:shadow-xl hover:shadow-indigo-50">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{tech}</h3>
                  <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-indigo-50 transition-colors">
                    <Rocket className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
                  </div>
                </div>
                <p className="text-slate-500 text-sm mb-6">Expert developers and consultants ready to join your team.</p>
                <a 
                  href={generateMailto(tech)}
                  className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all"
                >
                  Hire {tech} <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight">Why Startups <br />Choose Us</h2>
              <p className="text-slate-400 text-lg mb-12">We bridge the gap between global startups and top-tier Indian talent with a focus on reliability and scale.</p>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-600/20 text-indigo-400 rounded-xl flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <span className="text-lg font-medium text-slate-200">{benefit.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-indigo-600/10 rounded-3xl border border-white/10 p-8 flex flex-col justify-center">
                <div className="mb-8">
                  <ShieldCheck className="w-16 h-16 text-indigo-500 mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Risk-Free Trial</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Every engagement starts with a 1-week risk-free trial. If you're not satisfied, you don't pay. It's that simple.
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold">
                          U{i}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-indigo-400">Trusted by 50+ Startups</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-slate-600">Tailored solutions for diverse business sectors.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="p-6 bg-white border border-slate-100 rounded-2xl text-center hover:bg-slate-50 transition-colors shadow-sm">
                <span className="font-bold text-slate-900">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Start Your Offshore Team <br />in 7 Days</h2>
          <button 
            onClick={() => scrollToSection('technologies')}
            className="px-10 py-5 bg-white text-indigo-600 rounded-xl font-bold text-xl hover:bg-slate-50 transition-all shadow-xl"
          >
            Request Developers
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Code2 className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Kollinear</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <Mail className="w-5 h-5 text-indigo-600" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium hover:text-indigo-600 transition-colors">
                {CONTACT_EMAIL}
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Kollinear Consultants. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
