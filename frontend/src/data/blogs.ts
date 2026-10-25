import ultrasonicBlogImg from '@/assets/ultrasonic-sensor-blog.png';
import fuelBlogImg from '@/assets/fuel-transmitter-blog.png';
import recyclingBlogImg from '@/assets/industrial-recycling-blog.png';

export interface BlogPostSection {
  heading?: string;
  body: string;
  bullets?: { label?: string; text: string }[];
  citation?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tag: string;
  image: string;
  sections: BlogPostSection[];
  conclusion: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'industrial-water-oil-coolant-recycling',
    title: 'Industrial Water, Oil & Coolant Recycling: A Smarter Approach to Sustainable Manufacturing',
    excerpt:
      'Industrial water, oil and coolant recycling for sustainable manufacturing—filtration and resource recovery strategies for machining and process plants.',
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
      'Ultrasonic level sensors guide: non-contact tank level for chemical plants and water treatment—accuracy, automation, and maintenance benefits.',
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
      'Fuel level transmitter applications for generators, mining, and industrial tanks—real-time fuel monitoring and downtime prevention.',
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

export function getBlogPostById(id: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.id === id);
}

export function getRelatedBlogPosts(currentId: string, limit = 2): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.id !== currentId).slice(0, limit);
}
