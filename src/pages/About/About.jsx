import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles, MapPin, HeartHandshake, Sprout, Sun, Droplet, Star, Flame, Quote } from "lucide-react";
import DeraraImage from "../../assets/10001.jpg";
import logistics from "../../assets/logistics.jpg";
import exemplary from "../../assets/exemplery.jpg";
import integrity from "../../assets/integrity.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/ops/about`);
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setAboutData(data[0]);
        }
      } catch (err) {
        console.error("Failed to fetch founder details from API:", err);
      }
    };
    fetchAboutData();
  }, []);
  return (
    <div className="relative min-h-screen bg-[#FDFCF8] dark:bg-[#0a0a0a] text-gray-900 dark:text-white selection:bg-red-500/30 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none transform-gpu overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-200/30 dark:bg-orange-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-red-200/30 dark:bg-red-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[10%] left-[10%] w-[600px] h-[600px] bg-green-200/30 dark:bg-green-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1920&q=80"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/30" />

          <div className="relative z-10 max-w-7xl px-6 pt-20 pb-10 mx-auto h-full flex flex-col justify-center text-left w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-[#d3cec4] leading-tight font-serif"
            >
              Experience <br /> the Art of Coffee.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "60px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-[2px] bg-white/40 mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg text-[#9a9488] font-medium mb-10 max-w-md"
            >
              Enjoy our premium selection of handcrafted coffee beans, brewed to perfection.
            </motion.p>

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#FDFCF8] dark:to-[#0a0a0a] z-20 pointer-events-none"></div>
      </section>

      {/* Company Overview & Mission */}
      <section className="relative pt-12 pb-8 md:pb-16 bg-[#FDFCF8] dark:bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-red-50/50 dark:bg-red-900/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 -z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-[#A37D5C] font-black uppercase tracking-[0.4em] text-xs mb-4 block">
                  Our Story
                </span>
                <h2 className="text-5xl md:text-6xl font-black text-[#3B2E24] dark:text-white leading-none font-serif">
                  Our Roots
                </h2>
              </div>

              <div className="space-y-6 text-xl text-[#3B2E24] dark:text-white leading-relaxed font-bold">
                <p className="border-l-4 border-amber-500 pl-8 py-2">
                  We're a team passionate about sharing the real taste of Ethiopian coffee. We don't just export beans; we're deeply connected to the local farmers and the ancient coffee forests where it all started.
                </p>
                <p className="opacity-80">
                  For us, it's all about keeping things real. We believe in being totally open about where our coffee comes from, making sure every bean is top-notch, and building strong, fair relationships with the farmers who make it all possible.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-12 bg-white dark:bg-[#3B2E24] rounded-[3rem] shadow-2xl text-[#3B2E24] dark:text-white border border-gray-100 dark:border-none overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:scale-125 transition-transform duration-700" />

              <h3 className="text-3xl font-serif italic mb-10 text-amber-600 dark:text-amber-400">
                Our Promise
              </h3>
              <ul className="space-y-8">
                {[
                  { title: "Know Your Coffee", desc: "We trace every bean back to the exact washing station.", icon: MapPin },
                  { title: "Fair Pricing", desc: "We pay farmers fairly so they can thrive, not just survive.", icon: HeartHandshake },
                  { title: "Earth Friendly", desc: "Growing coffee in harmony with nature.", icon: Sprout },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li key={idx} className="flex gap-6 group/item">
                      <div className="w-12 h-12 rounded-full border border-amber-500/30 flex items-center justify-center shrink-0 group-hover/item:bg-amber-500/20 transition-colors">
                        <Icon className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-gray-800 dark:text-white/90 text-sm leading-relaxed font-semibold">{item.desc}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section className="relative py-10 md:py-16 bg-[#FFFDF9] dark:bg-[#0d0d0d] overflow-hidden border-t border-gray-100 dark:border-white/5">
        {/* Subtle decorative background circle */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-amber-100/40 dark:bg-amber-900/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/2 -z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Founder Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              {/* Premium Frame styling */}
              <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-[#1E1A15] group">
                <img
                  src={aboutData?.image || DeraraImage}
                  alt={aboutData?.name || "Tekle T."}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Decorative Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Name / Role Badges inside photo on mobile / absolute positioning */}
                <div className="absolute bottom-6 left-6 right-6 text-white block lg:hidden">
                  <p className="font-serif italic text-2xl mb-1">{aboutData?.name || "Tekle T."}</p>
                  <p className="text-amber-400 font-bold uppercase tracking-widest text-xs">{aboutData?.role || "Founder & CEO"}</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-600/5 rounded-full blur-xl -z-10" />
            </motion.div>

            {/* Founder Details Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              {/* Founder Quote */}
              <div className="relative p-8 bg-amber-500/5 dark:bg-amber-900/10 rounded-3xl border border-amber-500/10 italic">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-amber-500/20 transform rotate-180" />
                <p className="text-lg md:text-xl font-serif text-amber-900 dark:text-amber-300 leading-relaxed pl-6 pt-2 font-medium">
                  "{aboutData?.quote || "For us, coffee has never been just a commodity—it is a language of gathering, of respect, and of shared warmth. We built Derara to connect the extraordinary farmers of our highlands directly to the global stage, ensuring their stories are heard in every single cup."}"
                </p>
              </div>

              {/* Biography / Description */}
              <div className="space-y-6 text-gray-700 dark:text-gray-200 leading-relaxed text-base md:text-lg font-medium">
                <p className="opacity-90">
                  {aboutData?.description || "Tekle T. didn't just set out to start an export business; he wanted to share a piece of his home. Growing up in the lush coffee-growing regions of Ethiopia, the sound of crackling beans over a small brazier and the ceremony of gathering was a natural part of daily life. To him, coffee represents community, dedication, and connection."}
                </p>
                <p className="opacity-90">
                  {aboutData?.description ? null : "He founded Derara with a singular focus: to build a direct and honest bridge between smallholder farming families across Yirgacheffe, Sidama, and Guji, and coffee enthusiasts worldwide. Tekle spends months each year in the field, working alongside growers, listening to their challenges, and ensuring that they are fairly rewarded for their incredible work. He believes that true specialty coffee can only exist when the hands that grow it are honored and empowered."}
                </p>
              </div>

              {/* Name & Role Sign-off (Desktop only) */}
              <div className="hidden lg:block pt-4 border-t border-gray-100 dark:border-white/5">
                <h4 className="font-serif italic text-3xl text-[#3B2E24] dark:text-white">
                  {aboutData?.name || "Tekle T."}
                </h4>
                <p className="text-amber-600 font-extrabold uppercase tracking-widest text-xs mt-1">
                  {aboutData?.role || "Founder & CEO"}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 bg-white dark:bg-[#050505] py-10 md:py-16 px-6 md:px-16 border-y border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#3B2E24] dark:text-white font-serif">
              How We Do Things
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: "01",
                title: "Obsessed with Quality",
                desc: "We're pretty picky. Our experts cup and score every batch to make sure you're getting only the best, defect-free beans.",
                image: exemplary,
              },
              {
                id: "02",
                title: "Doing the Right Thing",
                desc: "We care about the people and the planet. That means trading directly with farmers and supporting farming methods that give back to the earth.",
                image: integrity,
              },
              {
                id: "03",
                title: "Nothing to Hide",
                desc: "We track our coffee every step of the way, so you know exactly what's in your cup and where it came from.",
                image:
                  "https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&w=800&q=80",
              },
              {
                id: "04",
                title: "Freshness Delivered",
                desc: "We've got the logistics down to an art. We make sure our coffee travels safely and stays fresh until it reaches you.",
                image: logistics,
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative flex flex-col bg-white dark:bg-white/5 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-white/10"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="relative p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-black text-[#3B2E24] dark:text-white font-serif leading-tight mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-800 dark:text-gray-100 text-sm leading-relaxed font-bold">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Regions */}
      <section className="hidden md:block relative py-12 md:py-16 px-6 md:px-16 bg-[#FDFCF8] dark:bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-amber-600 font-black uppercase tracking-[0.5em] text-[10px] block">
                Where the Magic Happens
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-[#3B2E24] dark:text-white font-serif leading-none">
                Explore <br />
                <span className="text-[#A37D5C]">Our Regions</span>
              </h2>
              <p className="text-xl text-gray-800 dark:text-gray-200 font-bold leading-relaxed">
                Every region in Ethiopia brings something special to the table. From bright, floral notes to deep, rich flavors, there's a whole world of taste to explore.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100"
            >
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80"
                alt="Traditional Ethiopian Coffee Ceremony with Jebena"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B2E24]/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-serif italic text-2xl">"The Heart of Ethiopian Coffee"</p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                region: "Yirgacheffe",
                process: "Washed/Natural",
                desc: "Famous for its intense floral scent, bright lemony acidity, and light body.",
                icon: Sun,
              },
              {
                region: "Sidama",
                process: "Washed/Natural",
                desc: "A beautifully balanced cup with hints of stone fruit, herbal tea, and a smooth finish.",
                icon: Droplet,
              },
              {
                region: "Guji",
                process: "Natural",
                desc: "Expect bold tropical fruit flavors, sweet berry notes, and a touch of chocolate.",
                icon: Star,
              },
              {
                region: "Harrar",
                process: "Natural (Dry)",
                desc: "Known for its unique wine-like acidity, wild berry flavors, and classic spicy notes.",
                icon: Flame,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-8 bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 hover:border-amber-500/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-2xl font-serif text-[#3B2E24] dark:text-white group-hover:text-amber-600 transition-colors">
                      {item.region}
                    </h4>
                    <div className="w-8 h-8 rounded-full bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-amber-600" />
                    </div>
                  </div>
                  <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-4">{item.process}</p>
                  <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed font-bold">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
