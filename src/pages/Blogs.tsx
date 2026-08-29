import React, { useState } from 'react';
import { ArrowLeft, Tag, ChevronRight, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ultrasonicBlogImg from '@/assets/ultrasonic-sensor-blog.png';
import fuelBlogImg from '@/assets/fuel-transmitter-blog.png';
import recyclingBlogImg from '@/assets/industrial-recycling-blog.png';

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
    id: 'industrial-water-oil-coolant-recycling',
    title: 'Industrial Water, Oil & Coolant Recycling: A Smarter Approach to Sustainable Manufacturing',
    excerpt:
      'Discover how recycling, filtration and resource recovery solutions for industrial water, oil and coolant enable more efficient and sustainable manufacturing operations.',
    date: 'August 29, 2026',
    readTime: '7 min read',
    category: 'Sustainable Manufacturing',
    tag: 'Recycling',
    image: recyclingBlogImg,
    sections: [
      {
        body: 'Industries today are under increasing pressure to reduce waste, conserve natural resources and improve operational efficiency. Water, oil and coolant are essential resources in many manufacturing and industrial processes, but contamination and frequent replacement can result in significant waste.\n\nInstead of following the traditional use-and-dispose approach, industries can adopt recycling, filtration and resource recovery solutions to make better use of these valuable fluids.\n\nAt Trivantas, we believe that smarter filtration and recycling technologies can help industries move toward more efficient and sustainable operations.',
      },
      {
        heading: 'Why Is Industrial Fluid Recycling Important?',
        body: 'Manufacturing processes can generate large quantities of contaminated water, used oil and spent coolant. If these fluids are simply discarded, industries lose valuable resources while increasing waste and disposal requirements.\n\nIndustrial fluid recycling provides an alternative approach:\n\nUse → Filter → Recover → Reuse\n\nDepending on the application and fluid quality requirements, appropriate filtration and treatment technologies can help recover usable resources and reduce unnecessary consumption.\n\nThis can support three important goals:',
        bullets: [
          { text: 'Reduce waste' },
          { text: 'Conserve resources' },
          { text: 'Improve process efficiency' },
        ],
      },
      {
        heading: '1. Industrial Water Recycling',
        body: 'Water is an essential resource across manufacturing and industrial operations. It may be used for cooling, cleaning, processing and other applications.\n\nDuring these processes, water can become contaminated with suspended solids, oils, chemicals or other unwanted materials.\n\nWith appropriate industrial water filtration and recycling systems, water may be treated and reused where the required quality allows.\n\nBenefits of Industrial Water Recycling - Industrial water recycling can help businesses:',
        bullets: [
          { text: 'Reduce fresh water consumption' },
          { text: 'Minimize wastewater generation' },
          { text: 'Recover process water' },
          { text: 'Reduce water-related operating costs' },
          { text: 'Improve overall resource utilization' },
          { text: 'Support sustainable manufacturing practices' },
        ],
      },
      {
        body: 'The right water recycling solution depends on factors such as water quality, contaminants, flow rate and the intended reuse application.',
      },
      {
        heading: '2. Industrial Oil Recycling & Filtration',
        body: 'Oil is widely used in manufacturing for lubrication, hydraulic applications and other industrial processes.\n\nDuring operation, oil can accumulate contaminants such as metal particles, dirt, sludge and other impurities. Continued use of contaminated oil can affect equipment performance and process efficiency.\n\nIndustrial oil filtration and recovery systems can help remove suitable contaminants and potentially extend the usable life of oil, depending on the application.\n\nBenefits of Oil Recycling - An effective oil filtration and recycling approach can help:',
        bullets: [
          { text: 'Reduce oil consumption' },
          { text: 'Extend oil service life' },
          { text: 'Recover valuable resources' },
          { text: 'Reduce waste oil generation' },
          { text: 'Reduce disposal requirements' },
          { text: 'Improve fluid cleanliness' },
          { text: 'Support efficient industrial operations' },
        ],
      },
      {
        body: 'Oil recycling should always be designed according to the oil type, contamination level, operating conditions and required quality for reuse.',
      },
      {
        heading: '3. Coolant Recycling & Filtration',
        body: 'Coolants are widely used in machining and metalworking applications to provide cooling, lubrication and chip removal.\n\nOver time, machining coolant can become contaminated with:',
        bullets: [
          { text: 'Metal fines' },
          { text: 'Machining chips' },
          { text: 'Dirt and suspended particles' },
          { text: 'Tramp oil' },
          { text: 'Other process contaminants' },
        ],
      },
      {
        body: 'Without effective filtration, contaminated coolant may require more frequent replacement.\n\nA coolant recycling and filtration system can help remove unwanted contaminants and maintain coolant quality, potentially extending its useful life.\n\nBenefits of Coolant Recycling - Coolant filtration and recycling can help industries:',
        bullets: [
          { text: 'Reduce coolant consumption' },
          { text: 'Extend coolant life' },
          { text: 'Minimize waste generation' },
          { text: 'Improve coolant cleanliness' },
          { text: 'Support consistent machining operations' },
          { text: 'Reduce disposal requirements' },
          { text: 'Improve overall process efficiency' },
        ],
      },
      {
        heading: 'From Waste Disposal to Resource Recovery',
        body: 'Traditional industrial processes often follow a linear model:\n\nUse → Contaminate → Dispose → Replace\n\nA more resource-efficient approach is:\n\nUse → Filter → Recover → Reuse\n\nThis shift can help industries look at contaminated fluids not simply as waste, but as resources that may have recoverable value.\n\nThe objective is not to recycle everything regardless of application. Instead, the focus should be on understanding the process, identifying recoverable resources and selecting the appropriate filtration or treatment technology.',
      },
      {
        heading: 'Key Benefits of Industrial Recycling Systems',
        body: 'Implementing suitable industrial filtration and recycling solutions can provide both environmental and operational advantages.',
        bullets: [
          { label: '♻️ Reduced Waste', text: 'Recycling and recovery can reduce the quantity of fluids requiring disposal.' },
          { label: '💧 Resource Conservation', text: 'Water, oil and coolant can potentially be used more efficiently.' },
          { label: '⚙️ Improved Process Efficiency', text: 'Cleaner fluids can contribute to more consistent industrial processes.' },
          { label: '💰 Potential Cost Reduction', text: 'Reduced consumption and disposal requirements can create opportunities for operational savings.' },
          { label: '🌍 Sustainable Manufacturing', text: 'Resource recovery supports industries in developing more responsible manufacturing practices.' },
        ],
      },
      {
        heading: 'How Trivantas Supports Sustainable Industrial Operations',
        body: 'At Trivantas, we understand that every industrial process has different requirements.\n\nOur approach focuses on developing intelligent filtration, recycling and resource-recovery solutions based on the specific application.\n\nFrom water filtration and recycling to oil and coolant filtration, the objective is to help industries improve fluid management while reducing unnecessary waste.\n\nOur engineering approach combines:',
        bullets: [
          { text: 'Industrial filtration technology' },
          { text: 'Process understanding' },
          { text: 'Customized system design' },
          { text: 'Automation' },
          { text: 'Resource recovery' },
          { text: 'Performance-focused solutions' },
        ],
      },
      {
        body: 'The result is a smarter approach to industrial fluid management.',
      },
    ],
    conclusion:
      'Building a More Sustainable Industrial Future\n\nSustainability does not always require completely changing an existing manufacturing process.\n\nSometimes, meaningful improvement can begin with a simple question:\n\n“Can we recover and reuse what we currently throw away?”\n\nBy implementing suitable water recycling, oil filtration and coolant recycling systems, industries can take practical steps toward reducing waste and improving resource efficiency.\n\nThe future of manufacturing is not only about producing more. It is about producing smarter.\n\nRecycle. Recover. Reuse.\n\nEvery drop. Every litre. Every resource counts.\n\nAt Trivantas, we are committed to developing intelligent solutions that help industries operate smarter, cleaner and more sustainably.',
  },
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
  if (parts.length > 1 && !isNaN(Number(parts[0]))) {
    return (
      <>
        <span className="text-primary font-extrabold">{parts[0]}.</span> {parts.slice(1).join('. ')}
      </>
    );
  }
  return heading;
};

const renderTitle = (title: string) => {
  const targetWords = ["Ultrasonic Level Sensors", "Fuel Level Transmitters", "Industrial Water, Oil & Coolant Recycling"];
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
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
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
