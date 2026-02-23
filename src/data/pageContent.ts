
export interface PageContent {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    introPrefix?: string; // e.g. "Wherever sensing is required..."
    whyChooseTitle?: string;
    whyChoosePoints?: string[];
    productGroups: {
        title: string;
        description: string;
        items?: string[];
    }[];
    customSolutionText?: string;
    contactText?: string;
}

export const pageContent: Record<string, PageContent> = {
    sensors: {
        id: "sensors",
        title: "Smart Level Sensors",
        subtitle: "Precision Monitoring for Liquids, Solids, Moisture & Gas",
        introPrefix: "Wherever precision sensing is essential, Trivantas delivers.",
        description: "Our smart level sensors are engineered for accuracy and durability available in waterproof, dust-proof, high-temperature, and high-pressure designs. We also specialize in custom-built sensors tailored to your application's exact requirements.",
        whyChooseTitle: "Why Choose Trivantas?",
        whyChoosePoints: [
            "Robust performance in demanding environments",
            "Waterproof, Dust-proof, High-temp & High-pressure options",
            "Tailor-made outputs to match your system requirements",
            "Application-specific modifications available"
        ],
        productGroups: [
            {
                title: "Liquid Level Sensors & Switches",
                description: "Accurate level sensing solutions for tanks, vessels, and pipelines.",
                items: [
                    "High-Accuracy Level Indicator",
                    "Magnetic Float Level Switch",
                    "Vibrating Fork Level Switch Aquafork Swift",
                    "Conductivity Level Sensors",
                    "Capacitance Level Sensors",
                    "Fuel Level Transmitters",
                    "Ultrasonic Level Sensors",
                    "Radar Level Sensors",

                    "Hydrostatic Level Sensors",
                    "Magnetic Level Switches",
                    "Side & Top Mounted Level Switches",
                    "Miniature Level Sensors",
                    "Level Transmitters",
                    "Electromagnetic Flow Meter",
                    "Ultrasonic Flow Meters"
                ]
            },
            {
                title: "Solid Level Sensors & Switches",
                description: "Reliable detection of powders, granules, and bulk solids in hoppers and silos.",
                items: [
                    "Vibrating Fork Level Switch for Solid",
                    "RF Admittance Level Switch",
                    "Vibrating Rod Type Level Sensors",
                    "NRF / RF Admittance Level Sensors",
                    "Rotating Paddle Level Sensors",
                    "Capacitance Level Sensors(Probes)",
                    "Radar Solid Level Sensors",

                    "Tilt Level Switch",
                    "Mini Level Switch",
                    "Electromagnetic Flow Sensors"
                ]
            },
            {
                title: "Microwave Moisture Measurement Sensor",
                description: "Real-time measurements for process optimization and quality control.",
                items: [
                    "Moisture Sensors",
                    "Online Moisture Sensors for Hoppers & Conveyors",
                    "Bulk Material Moisture Measurement",
                    "Capacitance-Based Moisture Sensors",
                    "Hydro-Probe Microwave Moisture Measurement Sensor",
                    "Hydro-Mix Microwave Moisture Measurement Sensors",
                    "Hydro-Probe BX",
                    "Hydro-Mix XT"
                ]
            },
            {
                title: "Gas Level & Detection Sensors",
                description: "Smart monitoring of gas flow, pressure, and concentration levels.",
                items: [
                    "Gas Sensors",
                    "Ultrasonic Gas Flow & Level Sensors",
                    "Capacitance-Based Gas Detection Probes",

                ]
            }
        ],
        customSolutionText: "Need a sensor adapted to your system? Trivantas offers custom design & output configurations to perfectly match your industrial needs.",
        contactText: "Interested in a custom quote or demo? Contact Trivantas today."
    },
    filtration: {
        id: "filtration",
        title: "Advanced Filtration Solutions ",
        subtitle: "Clean. Reliable. Sustainable.",
        introPrefix: "Where clean separation is critical, Trivantas delivers advanced filtration systems engineered for performance, durability, and sustainability.",
        description: "Whether you're filtering liquids, oils, emulsions, or gases, our systems are designed for high-pressure, high-temperature, waterproof, and dust-proof operations adapted to meet your specific industrial needs.We also offer custom-built filtration systems based on your exact flow rate, media type, and filtration grade requirements.",
        whyChooseTitle: "Why Trivantas Filtration?",
        whyChoosePoints: [
            "multi-stage filtration options",
            "Customizable for specific media & particle size",
            "Recyclable filtration where applicable",
            "Heavy-duty performance in industrial environments",
            "Compact or large-scale systems tailored to your application"
        ],
        productGroups: [
            {
                title: "Industrial Coolant/Oil Filtration",
                description: "Efficient removal of metal fines, particles, and impurities from coolant used in machining and cutting operations.",
                items: [
                    "Mag Band Filter",
                    "Centralized Coolant Filtration Systems",
                    "Magnetic Separators",
                    "Paper Band Filters",
                    "Compact Band Filters",
                    "Coolant / Oil Sump Cleaners",
                    "Compact Pressure Bed Filters",
                    "Oil Skimmers",
                    "Individual Machine Coolant Filters",
                    "Mobile Type Filters",
                    "Compact Filters",
                    "Magnetic Candle & Gravity Filters",
                    "Cartridge, RBC & Bag-Based Coolant/Oil Filters",
                    "Oil Recovery Press Units",
                    "Chip Wringer Systems",
                    "Up-Flow Filters",
                    "Self-Cleaning Industrial Filters",
                    "Reusable Oil & Coolant Filters",
                    "Backwashable Filter Units",
                    "Spare Parts for Filtration Systems (Bags, Paper, Candle, etc.)"
                ]
            },
            {
                title: "Food-Grade Oil, Alcohol & Drinking Water Filtration",
                description: "Hygienic and food-safe filtration systems for edible oils, alcohol, and water purification.",
                items: [
                    "Fine Mesh Oil Filters",
                    "Mineral Water Filtration Plants",
                    "Wastewater Treatment Plants",
                    "Water Purifiers",
                    "Reusable Food Oil Filters",
                    "High-Temperature Cooking Oil Filtration Units"
                ]
            },
            {
                title: "Environmental Filtration Systems",
                description: "Sustainable treatment and recycling systems for industrial and environmental applications.",
                items: [
                    "Effluent Treatment Plants (ETP)",
                    "Sewage Treatment Plants (STP)",
                    "Common Effluent Treatment Plants (CETP)",
                    "Zero Liquid Discharge (ZLD) Systems",
                    "Reverse Osmosis (RO), Ultrafiltration (UF), and Demineralization (DM) Plants",
                    "Sludge Management & Dewatering Systems",
                    "Water Recycling & Reuse Technologies",
                    "Biogas Generation & Pre-treatment Systems",
                    "Desalination & Process Water Solutions"
                ]
            },
        ],
        customSolutionText: "Can’t find what you’re looking for? Trivantas provides tailor-made filtration solutions, built to your exact specifications—based on fluid type, flow rate, filtration grade, environmental conditions, and operational layout.",
        contactText: "Interested in a custom quote or demo? Contact Trivantas to speak with a filtration expert today."
    },
    handling: {
        id: "handling",
        title: "Material Handling Equipment",
        subtitle: "Move Smarter. Save Time.",
        introPrefix: "When you need to shift and transfer materials quickly while saving time, our efficient material handling equipment is the perfect solution.",
        description: "Built for high temperatures as well as cooling operations, our systems deliver reliable performance even in the most demanding environments.\\nWe also design and supply custom-built material handling solutions tailored to your specific requirements and automation needs.",
        whyChooseTitle: "Why Trivantas Material Handling?",
        whyChoosePoints: [
            "End-to-end solutions for conveying, lifting, shifting, and storage",
            "Built for high-temperature & cooling operations",
            "Automation-ready systems for efficiency and precision",
            "Heavy-duty performance in industrial environments",
            "Customized layouts and concepts designed around your facility"
        ],
        productGroups: [
            {
                title: "Conveyors & Chip Handling Systems",
                description: "Efficient chip removal and material transport systems.",
                items: [
                    "Scraper Type Chip Conveyor",
                    "Slat Type Chip Conveyor",
                    "Screw Type Chip Conveyor",
                    "Magnetic Type Chip Conveyor",
                    "Centralized Chip Handling System",
                    "Roller Type Conveyor",
                    "Spare Parts for Chip Conveyors",
                    "Centralized Chips Conveyor",
                    "All-Material Chip Handling System"
                ]
            },
            {
                title: "Auxiliary & Specialized Conveyors",
                description: "Specialized conveyors for various industries.",
                items: [
                    "Food Conveyor",
                    "Pneumatic Conveyors",
                    "Vibrating Conveyors",
                    "Bucket Elevators / Conveyors",
                    "Gravity Conveyors",
                    "Aero-Mechanical Conveyors",
                    "Cooling Conveyors"
                ]
            },
            {
                title: "Chip Processing & Advanced Solutions",
                description: "Equipment for chip processing and automated handling.",
                items: [
                    "Chips Shredder / Cutter",
                    "Chips Compacting & Briquetting",
                    "Automated Handling Systems",
                    "Customized Concepts & Automation Solutions"
                ]
            }
        ],
        customSolutionText: "Can’t find exactly what you’re looking for? Trivantas provides tailor-made material handling systems, built to your exact specifications—based on: Material capacity & load requirements, Material grade & handling type, Full or semi-automation needs, Customized layouts for your facility",
        contactText: "Interested in a custom quote or demo? Contact Trivantas today to speak with a material handling expert and explore the right solution for your business."
    },
    spm: {
        id: "spm",
        title: "SPM Machines",
        subtitle: "Your Turnkey Project Partner",
        introPrefix: "Fully customized Special Purpose Machines (SPM) — from concept to commissioning.",
        description: "From your concept or problem, we deliver the right solution. All Types of SPM Machines.",
        whyChooseTitle: "Why Trivantas SPM Machines?",
        whyChoosePoints: [
            "End-to-end support: concept, design, manufacturing & commissioning",
            "Built for productivity, reliability & long service life",
            "Automation-ready & industry-compliant",
            "Proven expertise across multiple industries",
            "Custom integration with your existing systems"
        ],
        productGroups: [
            {
                title: "Product Range",
                description: "Our diverse range of Special Purpose Machines.",
                items: [
                    "Assembly SPMs",
                    "Drilling SPMs",
                    "Tapping SPMs",
                    "Milling SPMs",
                    "Cutting SPMs",
                    "Welding SPMs",
                    "Riveting SPMs",
                    "Testing SPMs",
                    "Inspection SPMs",
                    "Packaging SPMs",
                    "Process-Specific SPMs",
                    "Fully Automated SPMs",
                    "Semi-Automated SPMs"
                ]
            }
        ],
        customSolutionText: "Can’t find exactly what you’re looking for? Trivantas provides tailor-made Special Purpose Machines, built to your exact specifications based on: Your production process & workflow, Required level of automation, Output, speed & cycle time targets, Integration with existing equipment & plant layout",
        contactText: "Interested in a custom SPM solution? Contact Trivantas today and let’s build the machine that fits your needs perfectly."
    }
};
