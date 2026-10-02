import React from 'react';
import { motion } from 'framer-motion';

import cementImg        from '@/assets/industry-cement.png';
import animalFeedImg    from '@/assets/industry-animal-feed.png';
import chemicalImg      from '@/assets/industry-chemical.png';
import dairyImg         from '@/assets/industry-dairy.png';
import foodImg          from '@/assets/industry-food.png';
import bulkHandlingImg  from '@/assets/industry-bulk-handling.png';
import oilImg           from '@/assets/industry-oil.png';
import packagingImg     from '@/assets/industry-packaging.png';
import pharmaImg        from '@/assets/industry-pharmaceutical.png';
import powerImg         from '@/assets/industry-power.png';
import polymerImg       from '@/assets/industry-polymer.png';
import steelImg         from '@/assets/industry-steel.png';
import tyreImg          from '@/assets/industry-tyre.png';
import waterImg         from '@/assets/industry-water-treatment.png';

const industries = [
  { name: 'Cement Industry',                   img: cementImg       },
  { name: 'Animal Feed',                        img: animalFeedImg   },
  { name: 'Chemical Industry',                  img: chemicalImg     },
  { name: 'Dairy Industry',                     img: dairyImg        },
  { name: 'Food Industry',                      img: foodImg         },
  { name: 'Bulk Material Handling',             img: bulkHandlingImg },
  { name: 'Oil Industry',                       img: oilImg          },
  { name: 'Packaging Industry',                 img: packagingImg    },
  { name: 'Pharmaceutical Industry',            img: pharmaImg       },
  { name: 'Power Industry',                     img: powerImg        },
  { name: 'Polymer Industry',                   img: polymerImg      },
  { name: 'Steel Industry',                     img: steelImg        },
  { name: 'Tyre Industry',                      img: tyreImg         },
  { name: 'Water Engineering & Water Treatment',img: waterImg        },
];

const Industries = () => {
  return (
    <section className="py-12 md:py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-6"
          >
            Industries We <span className="text-primary">Serve</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Deploying precision engineered solutions across diverse sectors to drive industrial excellence.
          </motion.p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 cursor-default"
            >
              {/* Photo */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={industry.img}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Name label */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-sm md:text-base leading-snug text-center drop-shadow-lg">
                  {industry.name}
                </h3>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
