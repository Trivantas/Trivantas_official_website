import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CalendarDays, Clock, Users, CheckCircle } from 'lucide-react';

const Schedule = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Meeting scheduled');
  };

  const meetingTypes = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Product Consultation',
      description: 'Get expert guidance on choosing the right Trivantas solution for your specific industrial needs.',
      duration: '30–45 minutes'
    },
    {
      icon: <CalendarDays className="h-8 w-8 text-primary" />,
      title: 'Technical Demonstration',
      description: 'Experience a detailed demo of our products, including real-world performance insights.',
      duration: '45–60 minutes'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: 'Site Evaluation',
      description: 'An on-site or virtual assessment to understand your process and recommend tailored solutions.',
      duration: '1–2 hours'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Schedule a Meeting</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Let’s discuss how Trivantas can help improve your efficiency with advanced sensing, filtration, and automation solutions.
          </p>
        </div>
      </section>

      {/* Meeting Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Choose Your <span className="text-primary">Meeting Type</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Select a meeting type that fits your requirement. Our technical experts are ready to provide clear, practical guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {meetingTypes.map((type, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-hover transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">{type.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{type.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-primary font-semibold">
                    <Clock className="h-4 w-4" />
                    <span>{type.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scheduling Form */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Book Your Appointment</h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below, and our team will get in touch within 24 hours to confirm your meeting schedule.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <Input placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company *</label>
                    <Input placeholder="Your Company Name" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <Input type="email" placeholder="john@company.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <Input type="tel" placeholder="+91 98765 43210" required />
                  </div>
                </div>

                {/* Meeting Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Meeting Type *</label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" required>
                      <option value="">Select meeting type</option>
                      <option value="consultation">Product Consultation</option>
                      <option value="demo">Technical Demonstration</option>
                      <option value="assessment">Site Evaluation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Preferred Date *</label>
                    <Input type="date" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Preferred Time *</label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" required>
                      <option value="">Select time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Meeting Format</label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="in-person">In-Person (Recommended)</option>
                      <option value="video">Video Call</option>
                      <option value="phone">Phone Call</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Requirements</label>
                  <Textarea 
                    placeholder="Describe your project or the specific products you're interested in (e.g., sensors, filtration systems, material handling, or SPM machines)..."
                    className="min-h-32"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Additional Notes</label>
                  <Textarea 
                    placeholder="Any additional details or questions you'd like to discuss during the meeting..."
                    className="min-h-20"
                  />
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-3">
                  <input type="checkbox" id="terms" className="mt-1" required />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to be contacted by Trivantas regarding this meeting request and understand that my information will be handled according to the privacy policy.
                  </label>
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button type="submit" variant="default" size="lg">
                    Schedule Meeting
                  </Button>
                  <Button type="button" variant="outline" size="lg">
                    Save as Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What to <span className="text-primary">Expect</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Prompt Response</h3>
              <p className="text-muted-foreground">
                Our team will reach out within 24 hours to confirm your meeting and discuss any initial details.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Focused Discussion</h3>
              <p className="text-muted-foreground">
                We’ll review your requirements and show how Trivantas technology can enhance your operations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Clear Next Steps</h3>
              <p className="text-muted-foreground">
                After the meeting, you’ll receive a clear proposal outlining solutions, timelines, and recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
