
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, Briefcase, Calendar, UserCircle, FileText, Edit, MessageSquare, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Mock candidate data
const candidateData = {
  id: "1",
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  phone: "(555) 123-4567",
  location: "San Francisco, CA",
  position: "Senior Frontend Developer",
  stage: "Interview",
  appliedDate: "May 15, 2025",
  experience: "8 years",
  skills: ["JavaScript", "React", "TypeScript", "CSS", "HTML", "Redux"],
  education: "B.S. Computer Science, Stanford University",
  about: "Experienced frontend developer with 8 years of experience building modern web applications. Passionate about user experience and clean code.",
  resumeLink: "#",
};

const CandidateDetails = () => {
  const { id } = useParams();

  // In a real app, we'd fetch the candidate data based on the ID
  // For now, we'll just use our mock data

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getStageBadge = (stage: string) => {
    switch (stage) {
      case "Screening":
        return <Badge variant="outline">Screening</Badge>;
      case "Interview":
        return <Badge className="bg-blue-500">Interview</Badge>;
      case "Assessment":
        return <Badge className="bg-yellow-500">Assessment</Badge>;
      case "Offer":
        return <Badge className="bg-purple-500">Offer</Badge>;
      case "Hired":
        return <Badge className="bg-green-500">Hired</Badge>;
      case "Rejected":
        return <Badge variant="secondary">Rejected</Badge>;
      default:
        return <Badge>{stage}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/candidates">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">{candidateData.name}</h1>
          {getStageBadge(candidateData.stage)}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
          <Button variant="outline" size="sm">
            <MessageSquare className="h-4 w-4 mr-2" />
            Message
          </Button>
          <Button size="sm">
            <Star className="h-4 w-4 mr-2" />
            Move to Next Stage
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <Tabs defaultValue="profile">
              <div className="p-4 border-b">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="resume">Resume</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="profile" className="p-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">About</h3>
                  <p>{candidateData.about}</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {candidateData.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Experience</h3>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="font-medium">Senior Frontend Developer</div>
                      <div className="text-sm text-muted-foreground">TechCorp • 2020 - Present</div>
                      <div className="mt-2 text-sm">
                        Lead frontend development for multiple products, mentored junior developers, implemented best practices.
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="font-medium">Frontend Developer</div>
                      <div className="text-sm text-muted-foreground">Web Solutions Inc • 2017 - 2020</div>
                      <div className="mt-2 text-sm">
                        Developed responsive web applications using React and TypeScript.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Education</h3>
                  <div className="p-4 border rounded-lg">
                    <div className="font-medium">B.S. Computer Science</div>
                    <div className="text-sm text-muted-foreground">Stanford University • 2013 - 2017</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="resume" className="p-6">
                <div className="flex flex-col items-center justify-center py-8">
                  <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Resume</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    View or download the candidate's resume
                  </p>
                  <Button>Download Resume</Button>
                </div>
              </TabsContent>
              <TabsContent value="notes" className="p-6">
                <div className="flex flex-col items-center justify-center py-8">
                  <p className="text-sm text-muted-foreground mb-4">
                    No notes added yet
                  </p>
                  <Button>Add Note</Button>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4 mb-6">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="text-xl bg-primary text-primary-foreground">
                    {getInitials(candidateData.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="font-semibold">{candidateData.name}</h3>
                  <p className="text-sm text-muted-foreground">{candidateData.position}</p>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <a href={`mailto:${candidateData.email}`} className="text-sm hover:underline">
                      {candidateData.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Phone</div>
                    <a href={`tel:${candidateData.phone}`} className="text-sm hover:underline">
                      {candidateData.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Location</div>
                    <div className="text-sm">{candidateData.location}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Briefcase className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Experience</div>
                    <div className="text-sm">{candidateData.experience}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">Applied</div>
                    <div className="text-sm">{candidateData.appliedDate}</div>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-4">
                <h3 className="font-semibold">Actions</h3>
                <div className="space-y-2">
                  <Button className="w-full">Schedule Interview</Button>
                  <Button variant="outline" className="w-full">Send Email</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;
