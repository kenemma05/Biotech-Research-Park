import React, { useState } from 'react';
import { PageView } from '../types';
import { CORPORATE_DETAILS } from '../data/biotechData';
import { Dna, MapPin, Phone, Mail, Globe, ExternalLink, ShieldCheck, Database, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';
import { newsletterApi } from '../services/api';
import { useFirebase } from '../context/FirebaseContext';
import { useToast } from './GlobalToast';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenContact: (subject?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  const { openPortal, user, submissions } = useFirebase();
  const { showToast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState<string | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribing(true);
    setNewsletterError(null);
    try {
      await newsletterApi.subscribe(newsletterEmail, 'website_footer');
      setSubscribed(true);
      showToast({
        title: 'Subscribed to Neon R&D Briefing',
        message: `${newsletterEmail} has been added to our Neon database newsletter registry.`,
        variant: 'success'
      });
      setNewsletterEmail('');
    } catch (err: any) {
      console.error('Newsletter subscription failed:', err);
      setNewsletterError(err.message || 'Subscription failed. Please try again.');
    } finally {
      setSubscribing(false);
    }
  };
  return (
    <footer className="border-t border-slate-700/80 bg-[#0A192F] text-slate-300 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Footer Row: Brand & Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          
          {/* Brand & Mission (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-[1.5px] shadow-lg shadow-blue-500/25">
                <div className="w-full h-full bg-[#0A192F] rounded-[10px] flex items-center justify-center">
                  <Dna className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white tracking-tight block">
                  {CORPORATE_DETAILS.registeredCorporateName}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300 block">
                  Business: {CORPORATE_DETAILS.operatingName} is registered as {CORPORATE_DETAILS.registeredCorporateName}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              Integrated life sciences enterprise operating advanced genomic engineering, recombinant biochemistry, and cGMP third-party pharmaceutical biomanufacturing from Greater London, United Kingdom, with corporate liaison in the United States.
            </p>

            <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-700/80 space-y-1 text-[11px] font-mono text-slate-300 max-w-md">
              <div className="text-white font-semibold">
                Business: Bedfordshire Biotech is registered as BIOTECH RESEARCH PARK
              </div>
              <div>
                Registered Company Name: <span className="text-cyan-300 font-semibold">BIOTECH RESEARCH PARK</span>
              </div>
              <div>
                Company number <span className="text-white font-bold">{CORPORATE_DETAILS.registrationNumber}</span>
              </div>
            </div>

            <div className="pt-1 flex flex-wrap items-center gap-3 text-[11px] font-mono text-slate-300">
              <span className="text-white font-semibold">Company number {CORPORATE_DETAILS.registrationNumber}</span>
              <span>·</span>
              <span className="text-blue-400 font-semibold">MHRA Licence: UK-GMP-48201</span>
              <span>·</span>
              <span className="text-blue-300 font-semibold">ISO 13485:2016</span>
            </div>

            <div className="pt-1">
              <a
                href={CORPORATE_DETAILS.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{CORPORATE_DETAILS.officialWebsite}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('science')} className="hover:text-blue-400 transition-colors">
                  Our Science
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-blue-400 transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('research')} className="hover:text-blue-400 transition-colors">
                  Research
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('uk-science')} className="hover:text-blue-400 transition-colors">
                  UK Science (R&D Highlights)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('publications')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Publications
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faqs')} className="hover:text-blue-400 transition-colors cursor-pointer font-semibold text-cyan-300">
                  FAQs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('register')} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Register Partner Account
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('login')} className="hover:text-blue-400 transition-colors">
                  Client & Investigator Login
                </button>
              </li>
              <li>
                <button onClick={() => onOpenContact('General Enterprise Inquiry')} className="text-blue-400 font-semibold hover:text-white transition-colors">
                  Contacts
                </button>
              </li>
            </ul>
          </div>

          {/* Key Capabilities & Direct CTA (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              CDMO & Regulatory Services
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('manufacturing')} className="hover:text-blue-400 transition-colors">
                  Third-Party CDMO Manufacturing (50L – 2,000L)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('bedfordshire-uk')} className="hover:text-blue-400 transition-colors">
                  Greater London Advanced Therapeutics Center (GLATC)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenContact('Clinical Pipeline Licensing')} className="hover:text-blue-400 transition-colors">
                  Clinical Pipeline Licensing & Co-Dev
                </button>
              </li>
              <li>
                <button onClick={() => onOpenContact('Schedule Facility Audit')} className="hover:text-blue-400 transition-colors">
                  Schedule Cleanroom Audit (ISO 4.8 / Grade A)
                </button>
              </li>
            </ul>

            <div className="pt-3">
              <button
                onClick={() => onOpenContact('Executive Inquiry')}
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-600/30 text-center"
              >
                Inquire with Executive Desk
              </button>
            </div>
          </div>

        </div>

        {/* Commercial Product Portfolios Directory (8 Divisions) */}
        <div className="my-10 pt-8 border-t border-slate-700/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Commercial Product Portfolios · 8 Dedicated Landing Pages</span>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1 transition-colors self-start sm:self-auto cursor-pointer"
            >
              <span>View Full Products Catalogue</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { slug: 'products-cgmp-api-manufacturing', title: 'cGMP Active Pharmaceutical Ingredient (API) Manufacturing', tag: 'API Synthesis' },
              { slug: 'products-prescription-medicines', title: 'Prescription Medicines & Ethical Pharmaceuticals', tag: 'Rx Ethical' },
              { slug: 'products-translational-medicine', title: 'Translational Medicine Products & Diagnostic Biomarkers', tag: 'IVDR Biomarkers' },
              { slug: 'products-consumer-health-products', title: 'Consumer Health & Over-The-Counter (OTC) Products', tag: 'Consumer OTC' },
              { slug: 'products-various-products', title: 'Various Specialized Healthcare & Biopharmaceutical Products', tag: 'Orphan & Specials' },
              { slug: 'products-eye-care', title: 'Ophthalmic & Advanced Eye Care Solutions', tag: 'Aseptic BFS' },
              { slug: 'products-our-veterinary-products', title: 'Veterinary Pharmaceuticals & Animal Health Formulations', tag: 'VMD Veterinary' },
              { slug: 'products-other-products', title: 'Other Products & Custom Biological Reagents', tag: 'Custom Reagents' }
            ].map((prod) => (
              <button
                key={prod.slug}
                onClick={() => onNavigate(prod.slug)}
                className="p-3 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/70 hover:border-blue-500/60 text-left transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase text-blue-400 font-semibold block mb-1">
                    {prod.tag}
                  </span>
                  <span className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors leading-tight line-clamp-2 block">
                    {prod.title}
                  </span>
                </div>
                <div className="mt-2 text-[10px] font-mono text-slate-400 group-hover:text-cyan-300 flex items-center gap-1">
                  <span>Open Subpage</span>
                  <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Technical Dispatch & Real-Time Firebase Backend Access Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0F203C] to-[#0A192F] border border-blue-900/60 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl space-y-1.5 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono uppercase text-blue-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Firebase Cloud Backend · Active Integration</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Subscribe to Life Sciences Technical Dispatches & Whitepapers
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bi-weekly technical briefings on bioreactor yields, cell line development protocols, and MHRA/FDA regulatory filings from our Greater London team.
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3">
            {subscribed ? (
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Subscription saved to Firestore. Thank you!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="w-full sm:w-auto flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your corporate email..."
                  className="px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 w-full sm:w-64"
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold font-mono uppercase tracking-wider transition-colors disabled:opacity-60 flex items-center justify-center gap-1.5 shrink-0 shadow-md shadow-blue-600/30"
                >
                  {subscribing ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}

            <button
              onClick={openPortal}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-blue-300 hover:text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shrink-0"
            >
              <Database className="w-3.5 h-3.5 text-blue-400" />
              <span>Submissions Portal {submissions.length > 0 ? `(${submissions.length})` : ''}</span>
            </button>
          </div>
        </div>

        {/* Side-by-Side Corporate Offices: UK & USA */}
        <div className="pt-10 pb-8 border-t border-slate-700/80">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span>Global Corporate Offices & Registered Facilities</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* UK Registered Office Card */}
            <div className="p-6 rounded-2xl bg-[#0F203C] border border-slate-700 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <div>
                  <span className="text-[10px] font-mono uppercase text-blue-400 font-semibold block">United Kingdom</span>
                  <h4 className="text-sm font-bold text-white">Registered Office Address</h4>
                </div>
                <span className="text-[10px] font-mono text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                  Company number {CORPORATE_DETAILS.registrationNumber}
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5 text-slate-300">
                  <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <div className="leading-relaxed">
                    <span className="font-semibold text-white block">Registered Company Name: BIOTECH RESEARCH PARK</span>
                    <span className="text-cyan-300 text-[11px] font-mono block mb-0.5">Business: Bedfordshire Biotech is registered as BIOTECH RESEARCH PARK (Company number 11399495)</span>
                    <span className="text-slate-300 block">c/o Hunters Law LLP</span>
                    <span className="text-slate-300 block">Lincoln's Inn, 9 New Square</span>
                    <span className="text-slate-300 block">London, Greater London</span>
                    <span className="text-slate-300 block">WC2A 3QN, United Kingdom</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <a
                      href={`tel:${CORPORATE_DETAILS.uk.phones[0].raw}`}
                      className="font-mono text-white hover:text-blue-300 transition-colors"
                    >
                      {CORPORATE_DETAILS.uk.phones[0].display}
                    </a>
                  </div>
                  <span className="hidden sm:inline text-slate-600">|</span>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <a
                      href={`tel:${CORPORATE_DETAILS.uk.phones[1].raw}`}
                      className="font-mono text-white hover:text-blue-300 transition-colors"
                    >
                      {CORPORATE_DETAILS.uk.phones[1].display}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <a
                    href={`mailto:${CORPORATE_DETAILS.uk.email}`}
                    className="font-mono text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    {CORPORATE_DETAILS.uk.email}
                  </a>
                </div>
              </div>
            </div>

            {/* USA Corporate Liaison Office Card */}
            <div className="p-6 rounded-2xl bg-[#0F203C] border border-slate-700 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <div>
                  <span className="text-[10px] font-mono uppercase text-blue-400 font-semibold block">United States</span>
                  <h4 className="text-sm font-bold text-white">North America Corporate Liaison Office</h4>
                </div>
                <span className="text-[10px] font-mono text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                  Delaware, USA
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5 text-slate-300">
                  <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <div className="leading-relaxed">
                    <span className="font-semibold text-white block">{CORPORATE_DETAILS.usa.companyName}</span>
                    <span>100 Business Park Ln, Unit E, Ste US702508</span>
                    <span className="block">Milton, Delaware - 19968, United States</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <a
                    href={`mailto:${CORPORATE_DETAILS.usa.email}`}
                    className="font-mono text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    {CORPORATE_DETAILS.usa.email}
                  </a>
                </div>

                <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
                  <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>North American inquiries routed to US Technical Liaison</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
          <div>
            © 2026 Business: Bedfordshire Biotech is registered as BIOTECH RESEARCH PARK · Registered Company Name: BIOTECH RESEARCH PARK · Company number {CORPORATE_DETAILS.registrationNumber} (Registered in England & Wales).
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href={CORPORATE_DETAILS.officialWebsite} className="text-blue-400 hover:text-blue-300">
              {CORPORATE_DETAILS.officialWebsite}
            </a>
            <span>·</span>
            <span className="text-slate-300">MHRA cGMP Verified</span>
            <span>·</span>
            <button onClick={() => onNavigate('faqs')} className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
              FAQs
            </button>
            <span>·</span>
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
