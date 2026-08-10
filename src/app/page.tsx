"use client";

import { useEffect } from "react";
import ShaderAnimation from "./components/ShaderAnimation";
import ThreeJSAnimation from "./components/ThreeJSAnimation";

export default function Home() {
 useEffect(() => {
 // Simple intersection observer for fade-in animations
 const observer = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 entry.target.classList.add("visible");
 }
 });
 },
 { threshold: 0.1 }
 );

 document.querySelectorAll(".fade-in-up").forEach((el) => {
 observer.observe(el);
 });

 return () => observer.disconnect();
 }, []);

 return (
 <>
 {/* Top Navigation */}
 <header className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md border-b border-outline-variant/30 shadow-sm transition-all duration-300 ease-in-out">
 <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
 <a
 className="font-headline-lg text-headline-lg font-bold text-primary tracking-tight"
 href="#"
 >
 Kunal Garg
 </a>
 <nav className="hidden md:flex gap-gutter">
 <a
 className="text-on-surface-variant transition-colors hover:text-primary duration-200"
 href="#experience"
 >
 Experience
 </a>
 <a
 className="text-on-surface-variant transition-colors hover:text-primary duration-200"
 href="#projects"
 >
 Projects
 </a>
 <a
 className="text-on-surface-variant transition-colors hover:text-primary duration-200"
 href="#skills"
 >
 Skills
 </a>
 <a
 className="text-on-surface-variant transition-colors hover:text-primary duration-200"
 href="#certifications"
 >
 Certifications
 </a>
 <a
 className="text-on-surface-variant transition-colors hover:text-primary duration-200"
 href="#contact"
 >
 Contact
 </a>
 </nav>
 <a
 className="hidden md:inline-flex items-center justify-center px-6 py-2 bg-primary text-on-primary rounded hover:bg-primary/90 transition-colors duration-200"
 href="#contact"
 >
 Download Resume
 </a>
 </div>
 </header>
 
 {/* Hero Section */}
 <section className="relative min-h-screen flex items-center pt-24 pb-section-gap overflow-hidden">
 
 {/* Background Animations */}
 <div className="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none">
 <ShaderAnimation />
 </div>
 <div className="absolute inset-0 w-full h-full z-0 opacity-30 pointer-events-none mix-blend-multiply">
 <ThreeJSAnimation />
 </div>
 <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full text-center">
 <div className="fade-in-up inline-block mb-6 px-4 py-1.5 rounded-full border border-outline-variant/50 bg-surface-container-lowest/50 backdrop-blur-sm text-sm font-label-sm uppercase tracking-widest text-on-surface-variant">
 Gurugram, India
 </div>
 <h1
 className="font-display-lg text-display-lg text-primary mb-6 fade-in-up"
 style={{ transitionDelay: "0.1s" }}
 >
 Kunal Garg
 </h1>
 <h2
 className="font-headline-lg text-headline-lg md:text-[32px] text-secondary mb-8 font-light italic fade-in-up"
 style={{ transitionDelay: "0.2s" }}
 >
 Financial Analyst
 </h2>
 <div
 className="flex flex-wrap justify-center gap-4 fade-in-up"
 style={{ transitionDelay: "0.3s" }}
 >
 <a
 className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
 href="mailto:kunalgarg2231@gmail.com"
 >
 <span className="material-symbols-outlined text-lg">mail</span>
 kunalgarg2231@gmail.com
 </a>
 <a
 className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
 href="tel:9023805708"
 >
 <span className="material-symbols-outlined text-lg">call</span>
 9023805708
 </a>
 <a
 className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
 href="https://linkedin.com/in/kunalgarg13"
 rel="noopener noreferrer"
 target="_blank"
 >
 <span className="material-symbols-outlined text-lg">link</span>
 linkedin.com/in/kunalgarg13
 </a>
 </div>
 </div>
 </section>
 
 {/* Main Content Grid */}
 <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter pb-section-gap">
 {/* Sidebar (Desktop) */}
 <aside className="md:col-span-4 flex flex-col gap-12 fade-in-up">
 {/* Education */}
 <div className="glass-panel p-8 rounded-lg hover-lift">
 <h3 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2 border-b border-outline-variant/30 pb-4">
 <span className="material-symbols-outlined">school</span>
 Education
 </h3>
 <div className="space-y-6">
 <div>
 <div className="flex justify-between items-baseline mb-1">
 <h4 className="font-bold text-on-surface">Postgraduate Financial Analysis</h4>
 <span className="text-sm text-on-surface-variant">02/2026 – 07/2026</span>
 </div>
 <p className="text-on-surface-variant italic">Imarticus Learning, Delhi</p>
 </div>
 <div>
 <div className="flex justify-between items-baseline mb-1">
 <h4 className="font-bold text-on-surface">MBA</h4>
 <span className="text-sm text-on-surface-variant">2021 – 2023</span>
 </div>
 <p className="text-on-surface-variant italic">NMIMS, Mumbai</p>
 </div>
 <div>
 <div className="flex justify-between items-baseline mb-1">
 <h4 className="font-bold text-on-surface">Bachelor of Commerce</h4>
 <span className="text-sm text-on-surface-variant">2017 – 2020</span>
 </div>
 <p className="text-on-surface-variant italic">Punjab University, Chandigarh</p>
 </div>
 </div>
 </div>
 
 {/* Skills & Certifications */}
 <div className="glass-panel p-8 rounded-lg hover-lift" id="skills">
 <h3 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2 border-b border-outline-variant/30 pb-4">
 <span className="material-symbols-outlined">psychology</span>
 Skills
 </h3>
 <div className="mb-6">
 <h4 className="font-bold text-on-surface mb-3 text-sm uppercase tracking-wider">Financial</h4>
 <div className="flex flex-wrap">
 <span className="skill-chip">Financial Statement Analysis</span>
 <span className="skill-chip">Financial Planning & Analysis</span>
 <span className="skill-chip">Financial Modeling</span>
 <span className="skill-chip">DCF Valuation</span>
 <span className="skill-chip">Equity Research</span>
 <span className="skill-chip">Risk Analysis</span>
 <span className="skill-chip">Capital Budgeting</span>
 </div>
 </div>
 <div className="mb-6">
 <h4 className="font-bold text-on-surface mb-3 text-sm uppercase tracking-wider">Technical</h4>
 <div className="flex flex-wrap">
 <span className="skill-chip">Advanced Excel</span>
 <span className="skill-chip">Power BI</span>
 <span className="skill-chip">SQL</span>
 </div>
 </div>
 <div className="mt-8 border-t border-outline-variant/30 pt-6" id="certifications">
 <h3 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
 <span className="material-symbols-outlined">workspace_premium</span>
 Certificates
 </h3>
 <ul className="space-y-3">
 <li className="list-dash text-sm">NISM - IV</li>
 <li className="list-dash text-sm">Investment Banking Course - JOBAAJ</li>
 <li className="list-dash text-sm">Investment Banking Certification - Udemy</li>
 <li className="list-dash text-sm">Analyze The Financial Statement & Company Reports - SKILL EDGE</li>
 </ul>
 </div>
 </div>
 </aside>
 
 {/* Main Content Area */}
 <div className="md:col-span-8 flex flex-col gap-12">
 {/* Summary */}
 <section className="glass-panel p-8 rounded-lg hover-lift fade-in-up">
 <h3 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2 border-b border-outline-variant/30 pb-4">
 <span className="material-symbols-outlined">person</span>
 Professional Summary
 </h3>
 <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
 Results-driven Finance professional with an MBA and a Post Graduate Program in Financial Analysis. Skilled in Financial Modeling, Business Valuation, Financial Statement Analysis, Equity Research, Risk Analysis, and Data Analytics. Proficient in Advanced Microsoft Excel, Power BI, SQL, and PowerPoint with hands-on experience in building DCF valuation models, forecasting financial statements, and analyzing market trends. Strong analytical, problem-solving, and communication skills with a keen interest in Investment Banking, Corporate Finance, Equity Research, and Financial Planning & Analysis (FP&A). Passionate about leveraging financial insights to support strategic business decisions.
 </p>
 </section>
 
 {/* Experience */}
 <section className="glass-panel p-8 rounded-lg hover-lift fade-in-up" id="experience">
 <h3 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2 border-b border-outline-variant/30 pb-4">
 <span className="material-symbols-outlined">work</span>
 Experience
 </h3>
 <div className="relative pl-6 border-l-2 border-outline-variant/30">
 <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
 <div className="flex justify-between items-baseline mb-2">
 <h4 className="font-bold text-lg text-primary">Financial Sales Intern - SHINE PROJECTS</h4>
 <span className="text-sm font-semibold text-secondary">09/2021 – 10/2021</span>
 </div>
 <ul className="space-y-2 mt-4">
 <li className="list-dash text-on-surface-variant">Completed training in Financial markets, Mutual funds, Insurance, and Banking products.</li>
 <li className="list-dash text-on-surface-variant">Acquired and onboarded 60+ clients through relationship management and consultative selling.</li>
 <li className="list-dash text-on-surface-variant">Assisted in managing customer investment portfolios and recommended suitable financial and banking products.</li>
 <li className="list-dash text-on-surface-variant">Generated leads through consultative selling and relationship management.</li>
 </ul>
 </div>
 </section>
 
 {/* Projects */}
 <section className="glass-panel p-8 rounded-lg hover-lift fade-in-up" id="projects">
 <h3 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2 border-b border-outline-variant/30 pb-4">
 <span className="material-symbols-outlined">architecture</span>
 Projects
 </h3>
 <div className="space-y-10">
 <div>
 <h4 className="font-bold text-lg text-primary mb-1">Equity Research Report & DCF Valuation - Colgate Palmolive India Ltd</h4>
 <p className="text-sm text-secondary italic mb-3">Conducted detailed financial statement analysis of 5 years to evaluate business performance.</p>
 <ul className="space-y-2">
 <li className="list-dash text-on-surface-variant">Built a Three Statement Discounted Cash Flow (DCF) valuation model to estimate intrinsic value.</li>
 <li className="list-dash text-on-surface-variant">Forecasted Free Cash Flow to Firm (FCFF) using historical financial data and business assumptions.</li>
 <li className="list-dash text-on-surface-variant">Performed sensitivity analysis to assess valuation under different growth and discount rate scenarios.</li>
 </ul>
 </div>
 <div>
 <h4 className="font-bold text-lg text-primary mb-1">Financial Modelling - Tata Motors Ltd</h4>
 <ul className="space-y-2 mt-3">
 <li className="list-dash text-on-surface-variant">Developed a comprehensive three-statement financial model.</li>
 <li className="list-dash text-on-surface-variant">Forecasted five years of FCFF based on operational and financial assumptions.</li>
 <li className="list-dash text-on-surface-variant">Calculated Weighted Average Cost of Capital (WACC) using comparable company beta analysis.</li>
 </ul>
 </div>
 </div>
 </section>
 </div>
 </main>
 
 {/* Footer */}
 <footer
 className="w-full py-12 bg-surface-container-lowest border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop gap-gutter max-w-container-max mx-auto"
 id="contact"
 >
 <div className="font-headline-md text-headline-md text-primary mb-4 md:mb-0">
 Kunal Garg
 </div>
 <div className="text-on-surface font-body-md text-body-md text-center md:text-left mb-4 md:mb-0">
 © 2024 Kunal Garg. Financial Analyst Portfolio.
 </div>
 <div className="flex gap-6">
 <a
 className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
 href="https://linkedin.com/in/kunalgarg13"
 >
 LinkedIn
 </a>
 <a
 className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
 href="mailto:kunalgarg2231@gmail.com"
 >
 Email
 </a>
 <a
 className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
 href="#"
 >
 Privacy Policy
 </a>
 </div>
 </footer>
 </>
 );
}
