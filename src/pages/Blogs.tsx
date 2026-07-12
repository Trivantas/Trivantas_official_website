import React, { useState } from 'react';
import { ArrowLeft, Tag, ChevronRight, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ultrasonicBlogImg from '@/assets/ultrasonic-sensor-blog.png';
import fuelBlogImg from '@/assets/fuel-transmitter-blog.png';

/* ─────────────────────────────────────────────
   Blog data
   ───────────────────────────────────────────── */
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tag: string;
  image: string;
  sections: {
    heading?: string;
    body: string;
    bullets?: { label?: string; text: string }[];
    citation?: string;
  }[];
  conclusion: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ultrasonic-level-sensors',
    title: 'How Ultrasonic Level Sensors Solve Modern Industrial Level Challenges',
    excerpt:
      'From chemical plants to water treatment facilities, discover how non-contact ultrasonic sensing delivers accurate, automated, and maintenance-light level measurement.',
    date: 'July 9, 2026',
    readTime: '6 min read',
    category: 'Industrial Automation',
    tag: 'Sensors',
    image: ultrasonicBlogImg,
    sections: [
      {
        body: "In today's fast-evolving industrial environment, accurate level measurement is essential for productivity, safety, and automation. From chemical plants and water treatment facilities to food and pharmaceutical processing, industries require reliable, real-time data to avoid costly failures. Among non-contact measurement technologies, Ultrasonic Level Sensors (ULS) stand out as a practical and cost-effective choice for industrial applications.",
      },
      {
        body: "Ultrasonic sensors measure liquid or material level by emitting high-frequency sound waves and detecting the echo from the surface — a method that avoids direct contact with the product and reduces wear, fouling, and maintenance.",
        citation: 'Peer-reviewed Journal',
      },
      {
        body: 'This blog explains how ultrasonic sensors provide real operational solutions to common industrial level measurement problems.',
      },
      {
        heading: '1. Ending Manual and Inconsistent Level Monitoring',
        body: "Manual methods such as dip rods, float gauges, and periodic checks are prone to human error and inconsistent readings — particularly in large or hazardous tanks. Ultrasonic sensors provide continuous, automated level data and can trigger high/low alarms or feed data directly into a PLC or SCADA system for real-time control.",
        bullets: [
          {
            label: 'Why this matters',
            text: 'Automated measurement reduces human dependency and avoids unplanned downtime due to manual error.',
          },
        ],
      },
      {
        heading: '2. Safe, Non-Contact Measurement for Difficult Liquids',
        body: 'Ultrasonic sensors work without contacting the medium being measured. This is especially important in environments where liquids are corrosive, foamy, vaporous, or contaminated — all conditions where contact sensors struggle or fail. Research shows ultrasonic sensing can consistently detect liquid surface levels in such cases when properly calibrated.',
        citation: 'MDPI',
        bullets: [
          { text: 'Chemicals' },
          { text: 'Wastewater and effluent' },
          { text: 'Slurries and suspensions' },
          { text: 'Oils and fuels' },
        ],
      },
      {
        heading: '3. Preventing Overflows, Dry Runs, and Production Losses',
        body: 'Overflow incidents and dry-run pump failures are common and costly issues in industrial liquid handling systems. Ultrasonic level sensors deliver instant high/low level status, enabling automated process control to:',
        bullets: [
          { text: 'Stop filling operations automatically' },
          { text: 'Protect pumps from running dry' },
          { text: 'Reduce spills, wastage, and safety hazards' },
        ],
      },
      {
        heading: '4. Automation-Ready Measurement and Control',
        body: 'Modern industrial facilities rely on digital networking and automation. Ultrasonic level sensors typically support:',
        bullets: [
          { text: '4–20 mA analog outputs' },
          { text: 'Digital communications (such as Modbus, HART)' },
          { text: 'Integration with PLCs and SCADA systems' },
        ],
      },
      {
        heading: '5. Reliable Performance with Low Maintenance',
        body: "Ultrasonic sensors have no moving or wetted parts, which means they do not wear out, clog, or corrode — traits that contribute to long lifespan and low maintenance. Sensor calibration, especially when based on well-defined installation conditions, improves measurement accuracy and reduces calibration errors.",
        citation: 'MDPI',
        bullets: [
          { text: 'Fewer maintenance cycles' },
          { text: 'Lower service costs' },
          { text: 'Higher uptime and stability' },
        ],
      },
      {
        heading: '6. Practical Accuracy and Field Validation',
        body: "Field evaluations — including comparative studies of ultrasonic sensor types — show that with proper calibration and temperature compensation, certain ultrasonic sensors can produce very low error rates in level/flow measurement, demonstrating their practical accuracy in real conditions.",
        citation: 'NIScPR',
        bullets: [
          {
            label: 'Key takeaway',
            text: 'Ultrasonic measurement performs consistently when properly installed and calibrated.',
          },
        ],
      },
    ],
    conclusion:
      "Ultrasonic Level Sensors provide a reliable, non-contact, and easy-to-integrate solution for industrial level measurement. Their ability to eliminate manual checks, handle difficult liquids, support automation, and reduce maintenance makes them a valuable choice for modern industrial control systems.\n\nBy choosing ultrasonic level sensors, industries gain real-time accuracy, reduced operational risk, and long-term cost savings — key requirements for today's automated and performance-driven industrial environments.",
  },
  {
    id: 'fuel-level-transmitter',
    title: 'How Fuel Level Transmitters Solve Critical Fuel Monitoring Challenges',
    excerpt:
      'From diesel generators to mining equipment, discover how Fuel Level Transmitters deliver real-time accuracy, prevent downtime, and automate fuel management across industries.',
    date: 'July 9, 2026',
    readTime: '5 min read',
    category: 'Fuel Management',
    tag: 'Sensors',
    image: fuelBlogImg,
    sections: [
      {
        body: "In industries where fuel is the backbone of operations—such as power generation, logistics, mining, construction, and industrial plants—accurate fuel level monitoring is essential. Fuel losses, overconsumption, manual errors, and unexpected shortages can directly impact productivity and operational costs. This is where Fuel Level Transmitters (FLT) play a critical role.",
      },
      {
        body: "Fuel Level Transmitters provide continuous, real-time measurement of fuel levels in tanks and storage systems. Unlike basic gauges or manual checks, FLTs deliver precise, reliable data that supports automation, safety, and cost control.",
      },
      {
        body: 'This blog explains how Fuel Level Transmitters provide practical solutions to real industrial fuel-management problems.',
      },
      {
        heading: '1. Eliminating Manual Fuel Measurement Errors',
        body: 'Manual fuel checking using dip rods or visual inspection is inaccurate and time-consuming. It also increases the risk of fuel theft and reporting errors. Fuel Level Transmitters solve this by:',
        bullets: [
          { text: 'Providing continuous fuel level data' },
          { text: 'Eliminating human dependency' },
          { text: 'Offering digital output to monitoring systems' },
          { label: 'Result', text: 'Accurate fuel inventory and better control.' },
        ],
      },
      {
        heading: '2. Preventing Fuel Shortage and Unexpected Downtime',
        body: 'Unexpected fuel depletion can stop generators, machinery, and critical processes. FLT ensures:',
        bullets: [
          { text: 'Real-time low-level alerts' },
          { text: 'Timely refueling decisions' },
          { text: 'Continuous operation of fuel-dependent equipment' },
          { label: 'Result', text: 'Zero downtime due to fuel shortage.' },
        ],
      },
      {
        heading: '3. Accurate Measurement Despite Fuel Movement and Temperature Changes',
        body: 'Fuel tanks often experience vibration, sloshing, and temperature variation—common causes of false readings in conventional sensors. Modern Fuel Level Transmitters are designed to:',
        bullets: [
          { text: 'Compensate for temperature variation' },
          { text: 'Provide stable output during fuel movement' },
          { text: 'Maintain accuracy in mobile and stationary tanks' },
          { label: 'Result', text: 'Reliable readings in real operating conditions.' },
        ],
      },
      {
        heading: '4. Supporting Automated Fuel Management Systems',
        body: 'Fuel Level Transmitters integrate seamlessly with automation systems. They support:',
        bullets: [
          { text: '4–20 mA output' },
          { text: 'PLC, SCADA, and BMS connectivity' },
          { text: 'Remote fuel monitoring' },
          { label: 'Result', text: 'Centralized and automated fuel management.' },
        ],
      },
      {
        heading: '5. Improving Safety in Fuel Storage and Handling',
        body: 'Fuel overflow, leakage, and dry running of pumps pose serious safety risks. FLT helps prevent:',
        bullets: [
          { text: 'Tank overfilling' },
          { text: 'Fuel spillage' },
          { text: 'Pump damage due to dry running' },
          { label: 'Result', text: 'Safer fuel handling and storage operations.' },
        ],
      },
      {
        heading: '6. Reducing Fuel Loss and Operating Costs',
        body: 'Fuel losses—whether due to leakage, theft, or poor monitoring—directly impact operating expenses. Fuel Level Transmitters help by:',
        bullets: [
          { text: 'Tracking real fuel consumption' },
          { text: 'Detecting abnormal fuel level drops' },
          { text: 'Supporting fuel audit and accountability' },
          { label: 'Result', text: 'Lower fuel losses and better cost control.' },
        ],
      },
      {
        heading: 'Where Fuel Level Transmitters Are Commonly Used',
        body: 'One solution for multiple fuel-monitoring needs:',
        bullets: [
          { text: 'Diesel generator tanks' },
          { text: 'Fuel storage tanks' },
          { text: 'Mobile fuel bowsers' },
          { text: 'Construction and mining equipment' },
          { text: 'Power plants and industrial utilities' },
        ],
      },
    ],
    conclusion:
      "Fuel Level Transmitters are not just measurement devices—they are fuel-management solutions. By delivering accurate, real-time level data, they help industries prevent downtime, improve safety, reduce fuel losses, and automate operations.\n\nFor industries looking to achieve reliable fuel control, cost efficiency, and uninterrupted operations, Fuel Level Transmitters offer a smart and proven solution for modern fuel monitoring challenges.",
  },
];

const renderHeading = (heading: string) => {
  const parts = heading.split('. ');
  if (parts.length > 1) {
    return (
      <>
        <span className="text-primary font-extrabold">{parts[0]}.</span> {parts.slice(1).join('. ')}
      </>
    );
  }
  return heading;
};

const renderTitle = (title: string) => {
  const targetWords = ["Ultrasonic Level Sensors", "Fuel Level Transmitters"];
  for (const word of targetWords) {
    if (title.includes(word)) {
      const parts = title.split(word);
      return (
        <>
          {parts[0]}
          <span className="text-primary">{word}</span>
          {parts[1]}
        </>
      );
    }
  }
  return title;
};

/* ─────────────────────────────────────────────
   Blog Detail View
   ───────────────────────────────────────────── */
const BlogDetail = ({ post, onBack }: { post: BlogPost; onBack: () => void }) => (
  <div className="min-h-screen bg-background">
    {/* Hero banner */}
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 border-b border-border">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-30%] left-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-hover font-semibold transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform text-primary" />
          Back to Blogs
        </button>

        <div className="flex flex-wrap gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <Tag className="h-3 w-3" />
            {post.tag}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white border border-primary/20">
            {post.category}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
          {renderTitle(post.title)}
        </h1>
      </div>
    </div>

    {/* Article body */}
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="mb-10 rounded-2xl overflow-hidden shadow-md border border-border aspect-video max-h-[400px] w-full">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose-custom space-y-8">
        {post.sections.map((sec, i) => (
          <div key={i} className="space-y-3">
            {sec.heading && (
              <h2 className="text-xl md:text-2xl font-bold text-foreground border-l-4 border-primary pl-4">
                {renderHeading(sec.heading)}
              </h2>
            )}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {sec.body}
              {sec.citation && (
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                  {sec.citation}
                </span>
              )}
            </p>
            {sec.bullets && sec.bullets.length > 0 && (
              <ul className="space-y-2 mt-2">
                {sec.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <ChevronRight className="h-4 w-4 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">
                      {b.label && (
                        <span className="font-semibold text-foreground">{b.label}: </span>
                      )}
                      {b.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Conclusion */}
        <div className="mt-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-background to-primary/10 border-l-4 border-l-primary border border-border shadow-md">
          <h2 className="text-xl font-bold mb-4 text-primary">Conclusion</h2>
          {post.conclusion.split('\n\n').map((para, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-3 last:mb-0">
              {para}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button onClick={onBack} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-xl px-8 transition-all duration-300">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to all blogs
        </Button>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   Blog Card
   ───────────────────────────────────────────── */
const BlogCard = ({ post, onClick }: { post: BlogPost; onClick: () => void }) => (
  <article
    onClick={onClick}
    className="group relative bg-card border border-border rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
  >
    {/* Image wrapper */}
    <div className="h-48 w-full overflow-hidden bg-muted relative">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {/* Category badges overlaid on top left of image */}
      <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary text-white border border-primary/20 backdrop-blur-md bg-opacity-95 shadow-sm">
          <Tag className="h-3 w-3" />
          {post.tag}
        </span>
      </div>
    </div>

    <div className="p-6 space-y-4 flex flex-col flex-grow">
      <div className="flex flex-wrap gap-2">
        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-muted-foreground border border-border">
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-lg md:text-xl font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
        {post.title}
      </h2>

      {/* Excerpt */}
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-end pt-4 border-t border-border mt-auto">
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
          Read more <ChevronRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  </article>
);

/* ─────────────────────────────────────────────
   Blogs listing page
───────────────────────────────────────────── */
const Blogs = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return <BlogDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Trivantas Blog
          </h1>
          <p className="text-2xl text-secondary font-light mb-6">
            Insights &amp; Industry Updates
          </p>
          <div className="prose prose-lg prose-invert text-white/90 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
              Expert articles on industrial automation, filtration technology, sensor innovation,
              and specialized machinery — straight from our engineering team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} onClick={() => setSelectedPost(post)} />
          ))}
        </div>

        {BLOG_POSTS.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">No posts yet. Check back soon!</div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
