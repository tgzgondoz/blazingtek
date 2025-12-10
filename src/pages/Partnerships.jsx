import { 
  Globe, 
  Handshake, 
  Award, 
  Users, 
  TrendingUp, 
  Shield,
  ExternalLink,
  Building,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Partnerships = () => {
  const partnerCategories = [
    {
      title: "Academic Institutions",
      icon: <Building className="h-8 w-8" />,
      description: "Universities and research centers collaborating on cutting-edge projects",
      partners: [
        { name: "University of Ghana", focus: "AI Research Lab", since: 2019 },
        { name: "Makerere University", focus: "Robotics Engineering", since: 2020 },
        { name: "University of Nairobi", focus: "Sustainable Tech", since: 2021 },
        { name: "MIT Open Learning", focus: "Curriculum Development", since: 2018 },
      ]
    },
    {
      title: "Government & NGOs",
      icon: <Shield className="h-8 w-8" />,
      description: "Public sector partnerships for national development projects",
      partners: [
        { name: "UNICEF Innovation", focus: "Education Technology", since: 2020 },
        { name: "African Union Commission", focus: "Pan-African Initiatives", since: 2019 },
        { name: "UNDP Africa", focus: "Sustainable Development", since: 2021 },
        { name: "Ghana Ministry of Education", focus: "STEM Programs", since: 2018 },
      ]
    },
    {
      title: "Corporate Collaborations",
      icon: <TrendingUp className="h-8 w-8" />,
      description: "Industry partnerships driving commercial innovation",
      partners: [
        { name: "IBM Research Africa", focus: "AI & Cloud Computing", since: 2020 },
        { name: "Google AI Research", focus: "Machine Learning", since: 2019 },
        { name: "Siemens Healthineers", focus: "Medical Robotics", since: 2021 },
        { name: "Nvidia AI Tech Center", focus: "GPU Computing", since: 2022 },
      ]
    },
    {
      title: "International Organizations",
      icon: <Globe className="h-8 w-8" />,
      description: "Global partnerships for technology transfer and capacity building",
      partners: [
        { name: "World Bank Group", focus: "Digital Transformation", since: 2019 },
        { name: "African Development Bank", focus: "Infrastructure Tech", since: 2020 },
        { name: "UNESCO", focus: "Digital Literacy", since: 2021 },
        { name: "World Economic Forum", focus: "4IR in Africa", since: 2022 },
      ]
    }
  ];

  const partnershipBenefits = [
    {
      title: "Research Collaboration",
      description: "Access to cutting-edge research and development resources",
      stats: "25+ Joint Research Papers"
    },
    {
      title: "Funding Opportunities",
      description: "Grant proposals and joint funding applications",
      stats: "$5M+ in Collaborative Grants"
    },
    {
      title: "Talent Development",
      description: "Student exchanges, internships, and training programs",
      stats: "150+ Students Trained"
    },
    {
      title: "Technology Transfer",
      description: "Shared IP and technology commercialization support",
      stats: "8 Patent Filings"
    }
  ];

  const successStories = [
    {
      title: "AI for Agriculture Initiative",
      partner: "UNICEF & University of Ghana",
      outcome: "Deployed smart irrigation systems across 50 farms",
      impact: "40% increase in crop yield"
    },
    {
      title: "Robotics Education Program",
      partner: "Ministry of Education & Google",
      outcome: "Trained 500+ teachers in robotics curriculum",
      impact: "200 schools equipped with robotics kits"
    },
    {
      title: "Medical Robotics Research",
      partner: "Siemens Healthineers & KNUST",
      outcome: "Developed low-cost surgical assistance robots",
      impact: "Reduced procedure costs by 60%"
    }
  ];

  const partnershipProcess = [
    { step: 1, title: "Initial Consultation", description: "Understand mutual goals and objectives" },
    { step: 2, title: "Proposal Development", description: "Create detailed project framework" },
    { step: 3, title: "Agreement Finalization", description: "Legal and operational documentation" },
    { step: 4, title: "Project Implementation", description: "Joint execution with regular reviews" },
    { step: 5, title: "Impact Assessment", description: "Measure outcomes and plan scaling" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Handshake className="h-20 w-20 mx-auto mb-6 text-blue-300" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Strategic <span className="text-blue-300">Partnerships</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Collaborating with leading organizations to drive technological innovation 
            and sustainable development across Africa
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Partner With Us
            <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">40+</div>
              <div className="text-gray-600">Active Partners</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">$10M+</div>
              <div className="text-gray-600">Joint Funding</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partnership Network</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating across sectors to maximize impact and drive innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-blue-600 mr-4">{category.icon}</div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <div className="space-y-4">
                    {category.partners.map((partner, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-semibold">{partner.name}</div>
                          <div className="text-sm text-gray-500">{partner.focus}</div>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          Since {partner.since}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Partner With Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mutual benefits that drive sustainable impact and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl">
                <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.stats}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Award className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real impact through strategic collaborations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="text-blue-600 font-semibold mb-2">{story.partner}</div>
                <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.outcome}</p>
                <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg inline-block">
                  <span className="font-bold">{story.impact}</span> impact achieved
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach to building successful collaborations
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
            <div className="space-y-12">
              {partnershipProcess.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} mt-4 md:mt-0`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our network of partners driving technological innovation across Africa. 
            Let's create impact together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Start Partnership Discussion
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/research" 
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Research Areas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;