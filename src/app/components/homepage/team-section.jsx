"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Twitter,
  Mail,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function TeamSection() {
  const [expandedMember, setExpandedMember] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      department: "Leadership",
      image: "/doctor-2.jpg",
      bio: "Dr. Sarah Johnson brings over 15 years of experience in healthcare management and clinical practice. She oversees all medical operations and ensures that our platform maintains the highest standards of care and medical ethics.",
      specialties: [
        "Internal Medicine",
        "Healthcare Administration",
        "Telemedicine",
      ],
      education: "MD from Johns Hopkins University, MBA from Stanford",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@healthclick.com",
      },
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Chief Technology Officer",
      department: "Technology",
      image: "/doctor-1.jpg",
      bio: "Michael leads our technology team, bringing his expertise in healthcare IT systems and AI-driven solutions. He's passionate about leveraging technology to solve complex healthcare challenges and improve patient outcomes.",
      specialties: [
        "AI in Healthcare",
        "Health Informatics",
        "Software Architecture",
      ],
      education:
        "MS in Computer Science from MIT, BS in Biomedical Engineering",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@healthclick.com",
      },
    },
    {
      id: 3,
      name: "Dr. James Wilson",
      role: "Head of Telemedicine",
      department: "Medical",
      image: "/doctor-4.jpg",
      bio: "Dr. Wilson specializes in virtual care delivery and has been instrumental in developing our telemedicine protocols. He ensures that patients receive the same quality of care virtually as they would in person.",
      specialties: ["Telemedicine", "Family Medicine", "Digital Health"],
      education: "MD from University of California, MPH from Harvard",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "james@healthclick.com",
      },
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "User Experience Director",
      department: "Design",
      image: "/doctor-3.jpg",
      bio: "Priya leads our design team with a focus on creating intuitive, accessible healthcare experiences. Her work ensures that our platform is easy to use for patients of all ages and technical abilities.",
      specialties: ["Healthcare UX", "Accessibility Design", "User Research"],
      education: "MFA in Interaction Design from RISD, BA in Psychology",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "priya@healthclick.com",
      },
    },
    {
      id: 5,
      name: "Dr. Maria Rodriguez",
      role: "Medical Content Director",
      department: "Medical",
      image: "/doctor-1.jpg",
      bio: "Dr. Rodriguez oversees all medical content on our platform, ensuring it's accurate, up-to-date, and easy to understand. She's passionate about health literacy and patient education.",
      specialties: [
        "Medical Communications",
        "Public Health",
        "Patient Education",
      ],
      education: "MD from Yale, MS in Health Communication",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "maria@healthclick.com",
      },
    },
    {
      id: 6,
      name: "David Kim",
      role: "Head of Patient Relations",
      department: "Operations",
      image: "/doctor-1.jpg",
      bio: "David ensures that patient needs are at the center of everything we do. He leads our customer support team and develops strategies to continuously improve the patient experience on our platform.",
      specialties: [
        "Patient Advocacy",
        "Healthcare Operations",
        "Customer Experience",
      ],
      education: "MBA in Healthcare Management, BS in Health Sciences",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@healthclick.com",
      },
    },
  ];

  const departments = [
    "All",
    "Leadership",
    "Medical",
    "Technology",
    "Design",
    "Operations",
  ];

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      activeFilter === "All" || member.department === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="team" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-20 top-1/3 w-40 h-40 rounded-full bg-primaryTeal opacity-5"></div>
        <div className="absolute -left-20 bottom-1/3 w-60 h-60 rounded-full bg-secondaryBlue opacity-5"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind Health Click, dedicated to
              transforming healthcare through technology and compassion.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            variants={itemVariants}
            className="mb-10 flex flex-col md:flex-row gap-4 justify-between items-center"
          >
            <div className="relative w-full md:w-64">
              <Input
                type="text"
                placeholder="Search team members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-primaryTeal/30 focus:border-primaryTeal focus:ring-transparent focus:!ring-0"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={activeFilter === dept ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(dept)}
                  className={`rounded-full text-sm whitespace-nowrap ${
                    activeFilter === dept
                      ? "bg-primaryTeal text-white hover:bg-primaryTeal/90"
                      : "border-gray-300 text-gray-700"
                  }`}
                >
                  {dept}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300"
                >
                  <div className="relative">
                    <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-primaryTeal/10 to-secondaryBlue/10">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={400}
                        height={400}
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primaryTeal border border-primaryTeal/20">
                      {member.department}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primaryTeal font-medium mb-3">
                      {member.role}
                    </p>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {member.bio}
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <a
                          href={member.social.linkedin}
                          className="text-gray-500 hover:text-primaryTeal transition-colors"
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          <Linkedin size={18} />
                        </a>
                        <a
                          href={member.social.twitter}
                          className="text-gray-500 hover:text-primaryTeal transition-colors"
                          aria-label={`${member.name}'s Twitter profile`}
                        >
                          <Twitter size={18} />
                        </a>
                        <a
                          href={`mailto:${member.social.email}`}
                          className="text-gray-500 hover:text-primaryTeal transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail size={18} />
                        </a>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          setExpandedMember(
                            expandedMember === member.id ? null : member.id
                          )
                        }
                        aria-expanded={expandedMember === member.id}
                        aria-controls={`member-details-${member.id}`}
                        className="text-primaryTeal hover:text-primaryTeal/90 hover:bg-primaryTeal/10 -mr-2"
                      >
                        {expandedMember === member.id ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </Button>
                    </div>

                    <AnimatePresence>
                      {expandedMember === member.id && (
                        <motion.div
                          id={`member-details-${member.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-gray-100">
                            <h4 className="font-semibold text-gray-800 mb-2">
                              Specialties
                            </h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {member.specialties.map((specialty, idx) => (
                                <span
                                  key={idx}
                                  className="bg-primaryTeal/10 text-primaryTeal text-xs px-3 py-1 rounded-full"
                                >
                                  {specialty}
                                </span>
                              ))}
                            </div>

                            <h4 className="font-semibold text-gray-800 mb-2">
                              Education
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {member.education}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500 text-lg">
                  No team members found matching your criteria.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveFilter("All");
                  }}
                  variant="outline"
                  className="mt-4"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
