import Image from "next/image";
import Link from "next/link";
import { type ProfileType } from "@/types";

export default function HeroSection({ profile }: { profile: ProfileType }) {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Deep Space Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/50 to-[#0F172A] z-10"></div>
            </div>

            <div className="container mx-auto px-6 z-20 relative max-w-7xl pt-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left animate-float">
                        <div className="inline-block px-4 py-2 mb-6 rounded-full glass-panel border border-blue-500/30 text-blue-400 font-mono text-sm tracking-wide">
                            Hello, I&apos;m {profile.fullName} 👋
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                            Engineering <br />
                            <span className="text-gradient-primary">Digital Empires</span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                            {profile.shortBio}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="#projects"
                                className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-1"
                            >
                                View Architecture
                            </Link>
                        </div>

                        {/* Metrics Ticker */}
                        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-1">$1M+</h3>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Revenue Generated</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-1">40%</h3>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Latency Reduced</p>
                            </div>
                            <div className="hidden md:block">
                                <h3 className="text-3xl font-bold text-white mb-1">20+</h3>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">Cloud Integrations</p>
                            </div>
                        </div>
                    </div>

                    {/* Digital Identity / Abstract Art */}
                    <div className="flex-1 relative w-full max-w-lg lg:max-w-xl aspect-square">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-glow"></div>
                        <div className="relative z-10 w-full h-full glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 p-2">
                            {/* Styled Profile Image */}
                            <Image
                                src={profile.profileImage.image}
                                alt={profile.profileImage.alt}
                                fill
                                className="object-cover rounded-xl"
                                priority
                            />
                            <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-xl border border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-sm font-mono text-emerald-400">System Status: ONLINE</span>
                                </div>
                                <div className="mt-2 text-xs text-gray-400 font-mono">
                                    Base: {profile.location} <br />
                                    Role: {profile.headline}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
