
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import LandingNavbar from "@/components/LandingNavbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <LandingNavbar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                  Recruiting Simplified
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Modern staffing & recruiting platform
                </h1>
                <p className="mt-6 text-xl text-muted-foreground">
                  Streamline your hiring process, find the best talent, and make data-driven decisions with our all-in-one recruiting platform.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/signup">
                    Get started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="#features">See how it works</Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`h-8 w-8 rounded-full bg-primary-foreground border-2 border-background flex items-center justify-center`}>
                      <span className="text-xs">👤</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Join over <span className="font-medium text-foreground">2,000+</span> recruitment teams
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -z-10 top-0 right-0 h-72 w-72 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="rounded-lg overflow-hidden border shadow-xl bg-gradient-to-br from-background via-background to-background/80 backdrop-blur-sm aspect-[4/3]">
                <div className="h-full w-full bg-card p-4">
                  <div className="border-b pb-4 mb-4">
                    <h3 className="text-xl font-semibold">Candidates Pipeline</h3>
                  </div>
                  <div className="grid gap-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-2 border rounded-md">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-sm">👤</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Candidate {i}</div>
                          <div className="text-xs text-muted-foreground">Applied for Senior Developer</div>
                        </div>
                        <div className="ml-auto">
                          <div className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                            Interview
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/50 px-4" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Powerful features for modern recruiters</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to streamline your hiring process from start to finish
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Candidate Management",
                description: "Organize candidates with customizable pipelines and automated follow-ups."
              },
              {
                title: "Job Listings",
                description: "Create and manage job postings with customizable templates and multi-channel distribution."
              },
              {
                title: "Analytics & Reporting",
                description: "Get insights into your hiring process with customizable dashboards and reports."
              }
            ].map((feature, i) => (
              <Card key={i}>
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 md:py-24 px-4" id="pricing">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Simple, transparent pricing</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the plan that's right for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$49",
                description: "For small teams getting started with recruiting",
                features: ["5 active job postings", "100 candidate profiles", "Basic analytics", "Email support"]
              },
              {
                name: "Professional",
                price: "$99",
                description: "For growing teams with advanced needs",
                features: ["20 active job postings", "Unlimited candidate profiles", "Advanced analytics", "Priority support", "Custom pipelines"]
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large organizations with complex requirements",
                features: ["Unlimited job postings", "Unlimited candidate profiles", "Advanced analytics & reporting", "Dedicated account manager", "API access", "Custom integrations"]
              }
            ].map((plan, i) => (
              <Card key={i} className={`${i === 1 ? "border-primary ring-2 ring-primary" : ""}`}>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">per month</span>
                    </div>
                    <p className="mt-3 text-muted-foreground">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full" variant={i === 1 ? "default" : "outline"}>
                    Get started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary/50 px-4" id="testimonials">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">What our customers say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear from some of the amazing teams using TalentSphere
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "TalentSphere has transformed our hiring process. We've cut our time-to-hire in half and improved the quality of our candidates.",
                author: "Sarah Johnson",
                title: "Head of HR, TechCorp"
              },
              {
                quote: "The analytics and reporting features give us valuable insights that have helped us make more strategic hiring decisions.",
                author: "Michael Chen",
                title: "Recruiting Manager, StartX"
              },
              {
                quote: "The candidate management system is intuitive and powerful. It's streamlined our entire workflow.",
                author: "Jessica Patel",
                title: "Talent Acquisition, GrowthCo"
              }
            ].map((testimonial, i) => (
              <Card key={i}>
                <CardContent className="p-6 space-y-4">
                  <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to transform your recruiting process?</h2>
          <p className="mt-6 text-xl text-muted-foreground">
            Join thousands of companies using TalentSphere to hire the best talent faster and more efficiently.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link to="/signup">Start your free trial</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">No credit card required. 14-day free trial.</p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">TS</span>
                </div>
                <span className="font-bold text-lg">TalentSphere</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Modern staffing and recruiting platform for efficient talent acquisition
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Product</h4>
              <ul className="space-y-2">
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-foreground">Integrations</Link></li>
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-foreground">What's new</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-foreground">Help center</Link></li>
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-foreground">Documentation</Link></li>
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-foreground">Webinars</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Company</h4>
              <ul className="space-y-2">
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-foreground">About us</Link></li>
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-foreground">Contact us</Link></li>
                <li><Link to="#" className="text-sm text-muted-foreground hover:text-foreground">Legal</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} TalentSphere. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
