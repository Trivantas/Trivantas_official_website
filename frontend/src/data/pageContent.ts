
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
        title: "Smart Level Sensors for Industrial Applications",
        subtitle: "Radar, ultrasonic, capacitive, and vibrating fork level measurement for process plants",
        introPrefix: "For tanks, silos, and process lines that cannot afford false trips or drift, Trivantas supplies application-matched level instrumentation.",
        description: "Choose from radar, ultrasonic, capacitance, vibrating fork, and hydrostatic level sensors and switches—plus microwave moisture and gas detection—built for waterproof, dust-tight, high-temperature, and high-pressure duty. We configure outputs, materials, and mounting for your PLC, SCADA, or panel spec, including custom builds for OEM and plant upgrades.",
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
        title: "Advanced Industrial Filtration Systems",
        subtitle: "Coolant, oil, and process filtration for machining and manufacturing",
        introPrefix: "When chip loads, tramp oil, or fine particulate threaten tool life and uptime, Trivantas designs filtration that fits your line—not generic catalog boxes.",
        description: "Industrial coolant and oil filtration: magnetic separators, paper and compact band filters, centralized systems, skimmers, chip wringers, and reusable cartridge or bag units for machining, metalworking, and process fluids. Systems are sized for your flow rate, particle size, and shop layout, with options for high pressure, temperature, and wash-down environments. Food-grade oil filtration and environmental process-water modules are available on request.",
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
                title: "Food-Grade Oil & Alcohol Filtration",
                description: "Hygienic and food-safe filtration systems for edible oils and alcohol purification.",
                items: [
                    "Fine Mesh Oil Filters",
                    "Water Purifiers",
                    "Reusable Food Oil Filters",
                    "High-Temperature Cooking Oil Filtration Units"
                ]
            },
            {
                title: "Environmental Filtration Systems",
                description: "Advanced solutions for industrial process water, desalination, and drinking water purification.",
                items: [
                    "Mineral Water Filtration Plants",
                    "Desalination & Process Water Solutions"
                ]
            },
        ],
        customSolutionText: "Can’t find what you’re looking for? Trivantas provides tailor-made filtration solutions, built to your exact specifications—based on fluid type, flow rate, filtration grade, environmental conditions, and operational layout.",
        contactText: "Interested in a custom quote or demo? Contact Trivantas to speak with a filtration expert today."
    },
    "water-treatment": {
        id: "water-treatment",
        title: "Industrial Water Treatment Systems",
        subtitle: "STP, ETP, RO/UF, and process water for compliant discharge and reuse",
        introPrefix: "Plants facing tightening discharge norms or rising raw-water cost need treatment packages engineered for your influent, footprint, and operating team.",
        description: "Trivantas delivers sewage treatment plants (STP), effluent treatment plants (ETP), RO and UF purification, and industrial water filtration for manufacturing and process industries. Solutions emphasize reliable biology and membrane performance, water recovery where feasible, and layouts that fit existing civil works. Automation, PLC integration, and commissioning support help you move from bid to compliant operation faster.",
        whyChooseTitle: "Why Trivantas Water Treatment?",
        whyChoosePoints: [
            "Complete environmental & local regulatory compliance",
            "Advanced resource recovery and water reuse technologies",
            "Heavy-duty, long-life components for continuous operation",
            "Custom-engineered layouts optimized for your facility footprint",
            "Fully automated control options with PLC integration"
        ],
        productGroups: [
            {
                title: "Wastewater Treatment Systems",
                description: "Custom-designed treatment systems for industrial effluents and municipal sewage.",
                items: [
                    "Sewage Treatment Plant",
                    "Effluent treatment plant"
                ]
            },
            {
                title: "Water Purification Systems",
                description: "Advanced membrane and filtration systems for high-purity water.",
                items: [
                    "RO & UF System",
                    "Water Filtration System"
                ]
            }
        ],
        customSolutionText: "Need a custom treatment system? Trivantas provides bespoke engineering from concept to commissioning, customized to your raw water quality, required discharge standards, flow rate, and space limitations.",
        contactText: "Interested in a custom quote or demo? Contact Trivantas today to speak with a water treatment expert."
    },
    handling: {
        id: "handling",
        title: "Material Handling Systems",
        subtitle: "Chip conveyors, automated conveying, and centralized chip handling for machine shops",
        introPrefix: "When scrap volume or plant layout demands reliable transfer, Trivantas designs material handling systems that keep machines running.",
        description: "Material handling systems including scraper and screw chip conveyors, centralized chip handling, pneumatic and vibrating transport, and chip processing—from single-machine swarf removal to plant-wide automated chip conveying. Built for high-temperature and cooling duty, automation-ready, and sized for throughput, material type, and floor layout.",
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
                    "Cleat Conveyor",
                    "Centralized Chip Handling System",
                    "Roller Type Conveyor",
                    "Spare Parts for Chip Conveyors",
                    "Centralized Chips Conveyor",
                    // "All-Material Chip Handling System"
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
        title: "Special Purpose Machines (SPM)",
        subtitle: "Custom SPM and automated assembly, testing, and process-specific machines",
        introPrefix: "When standard machines cannot hit your cycle time, quality gate, or integration target, Trivantas builds special purpose machines from concept through commissioning.",
        description: "Assembly, drilling, tapping, milling, cutting, welding, riveting, testing, inspection, and packaging SPMs—fully or semi-automated—engineered around your process, tooling, and plant layout. We support fixture design, safety compliance, and tie-in with existing lines so you get repeatable output without compromising uptime.",
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
        contactText: "Share your cycle-time target or sample part drawing—contact Trivantas to scope an SPM concept review and timeline.",
    },
    "lubrication-systems": {
        id: "lubrication-systems",
        title: "Industrial Lubrication Systems",
        subtitle: "Progressive lubricators, grease pumps, and oil mist lubrication for machine tools",
        introPrefix: "Wherever reliable lubrication is critical to prevent machine wear and downtime, Trivantas delivers.",
        description: "Oil, grease, motorised, pneumatic, and air-oil mist systems with pumps, progressive distributors, injectors, and electronic timers—delivering metered lubricant to every friction point on presses, machine tools, and process lines. High-pressure options, manifolds, and hose routing are engineered for wash-down, heat, and continuous-duty plants, with spares and retrofit kits for legacy equipment.",
        whyChooseTitle: "Why Trivantas Lubrication Systems?",
        whyChoosePoints: [
            "Comprehensive range covering oil, grease, motorised, and manual systems",
            "High pressure capability and precise volumetric dosing",
            "Rugged components designed for harsh industrial environments",
            "Real-time monitoring options with timers and controllers",
            "Custom manifolds and tube routing designs"
        ],
        productGroups: [
            {
                title: "Lubrication Systems",
                description: "Automated, motorised, and manual systems for oil, grease, and air-mist distribution.",
                items: [
                    "Oil Lubrication Systems",
                    "Grease Lubrication Systems",
                    "Motorised Lubrication Systems",
                    "Pneumatic Lubrication Systems",
                    "Air & Oil Mist Lubrication Systems",
                    "Battery Operated Lubricators"
                ]
            },
            {
                title: "Lubrication Pumps",
                description: "Pumps ranging from hand-operated piston devices to electric and pneumatic high-pressure equipment.",
                items: [
                    "Hand Operated Piston Oil Pumps",
                    "Manual Grease Pumps",
                    "Rotary Pumps",
                    "Multiline Radial Lubricators",
                    "Pneumatic Grease Pumps",
                    "Miniature Electric Grease Pumps"
                ]
            },
            {
                title: "Lubrication Components",
                description: "Essential components including controllers, injectors, progressive distributor blocks, and fittings.",
                items: [
                    "Electronic Timers & Controllers",
                    "Metering Cartridges",
                    "Metering Injectors",
                    "Progressive Distributor Blocks",
                    "Manifolds",
                    "Hoses & Tubes",
                    "Fittings",
                    "Spares"
                ]
            }
        ],
        customSolutionText: "Need a customized lubrication layout or custom manifold configurations? Trivantas provides custom system design, tube selection, and component engineering tailored to your machinery's specific points and duty cycle.",
        contactText: "Interested in a customized lubrication solution? Contact Trivantas today to consult with our lubrication engineers."
    }
};
