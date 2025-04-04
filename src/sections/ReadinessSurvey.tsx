"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Link from "next/link";

interface ReadinessSurveyProps {
  onOpenModal?: () => void;
}

interface FormData {
  // AI Strategy Section
  hasAiStrategy: string;
  aiImplementationProgress: string;
  aiTechnologies: string[];
  businessAlignment: string;
  personalUnderstanding: string;
  businessChallenges: string;

  // Business Process Integration
  digitalIntegration: string;
  workflowTools: string[];
  processAutomation: string;
  informationFlow: string;
  manualDataTransfer: string;
  integrationChallenges: string;

  // Cybersecurity & Privacy
  securityIncident: string;
  securityKnowledge: string;
  securityTechnologies: string[];
  privacyDesign: string;
  securityTraining: string;
  securityConcerns: string;

  // Data Quality & Accessibility
  dataManagement: string;
  dataGovernance: string;
  dataQualityIssues: string;
  dataAccess: string;
  dataTools: string[];
  dataQualityChallenges: string;

  // Financial Budget
  digitalBudget: string;
  resourceAccess: string;
  roiProcess: string;
  budgetAllocation: string;
  financialMetrics: string[];
  budgetConstraints: string;

  // Infrastructure
  cloudServices: string[];
  infraReliability: string;
  cloudMigration: string;
  workDevices: string;
  infraTechnologies: string[];
  infraImprovements: string;

  // System Maintenance
  monitoringTools: string;
  devOpsPractices: string;
  systemDowntime: string;
  backupSolutions: string[];
  issueResolution: string;
  maintenanceChallenges: string;

  // Training & HR Skills
  digitalComfort: string;
  trainingReceived: string;
  importantSkills: string[];
  skillsFramework: string;
  skillsFrequency: string;
  desiredSkills: string;

  // Lead capture fields
  name: string;
  email: string;
}

const ReadinessSurvey = ({ onOpenModal }: ReadinessSurveyProps) => {
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    // AI Strategy
    hasAiStrategy: "",
    aiImplementationProgress: "",
    aiTechnologies: [],
    businessAlignment: "",
    personalUnderstanding: "",
    businessChallenges: "",

    // Business Process Integration
    digitalIntegration: "",
    workflowTools: [],
    processAutomation: "",
    informationFlow: "",
    manualDataTransfer: "",
    integrationChallenges: "",

    // Cybersecurity & Privacy
    securityIncident: "",
    securityKnowledge: "",
    securityTechnologies: [],
    privacyDesign: "",
    securityTraining: "",
    securityConcerns: "",

    // Data Quality & Accessibility
    dataManagement: "",
    dataGovernance: "",
    dataQualityIssues: "",
    dataAccess: "",
    dataTools: [],
    dataQualityChallenges: "",

    // Financial Budget
    digitalBudget: "",
    resourceAccess: "",
    roiProcess: "",
    budgetAllocation: "",
    financialMetrics: [],
    budgetConstraints: "",

    // Infrastructure
    cloudServices: [],
    infraReliability: "",
    cloudMigration: "",
    workDevices: "",
    infraTechnologies: [],
    infraImprovements: "",

    // System Maintenance
    monitoringTools: "",
    devOpsPractices: "",
    systemDowntime: "",
    backupSolutions: [],
    issueResolution: "",
    maintenanceChallenges: "",

    // Training & HR Skills
    digitalComfort: "",
    trainingReceived: "",
    importantSkills: [],
    skillsFramework: "",
    skillsFrequency: "",
    desiredSkills: "",

    // Lead capture fields
    name: "",
    email: ""
  });

  const [results, setResults] = useState({
    score: 0,
    title: "",
    description: "",
    categoryBreakdown: [
      { label: "Digital Presence", score: 0 },
      { label: "Technology Adoption", score: 0 },
      { label: "Customer Engagement", score: 0 },
      { label: "Market Adaptability", score: 0 },
      { label: "Employee Development", score: 0 }
    ],
    recommendations: [""]
  });

  const [leadCaptured, setLeadCaptured] = useState(false);

  // Update total number of steps
  const TOTAL_STEPS = 8; // 8 sections total

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const calculateScore = () => {
    // Calculate scores for each section
    const aiStrategyScore = calculateSectionScore('AI Strategy', {
      hasAiStrategy: formData.hasAiStrategy === 'Yes' ? 5 : 0,
      aiImplementationProgress: getProgressScore(formData.aiImplementationProgress),
      aiTechnologies: formData.aiTechnologies.length,
    });

    const processScore = calculateSectionScore('Process Integration', {
      digitalIntegration: getProgressScore(formData.digitalIntegration),
      workflowTools: formData.workflowTools.length,
      processAutomation: getProgressScore(formData.processAutomation),
    });

    const securityScore = calculateSectionScore('Security & Privacy', {
      securityKnowledge: getProgressScore(formData.securityKnowledge),
      securityTechnologies: formData.securityTechnologies.length,
      securityTraining: getTrainingScore(formData.securityTraining),
    });

    const dataScore = calculateSectionScore('Data Management', {
      dataManagement: getProgressScore(formData.dataManagement),
      dataTools: formData.dataTools.length,
      dataQualityIssues: getReverseScore(formData.dataQualityIssues),
    });

    const financialScore = calculateSectionScore('Financial Readiness', {
      digitalBudget: formData.digitalBudget === 'Yes' ? 5 : 0,
      budgetAllocation: getBudgetScore(formData.budgetAllocation),
      financialMetrics: formData.financialMetrics.length,
    });

    const infraScore = calculateSectionScore('Infrastructure', {
      cloudServices: formData.cloudServices.length,
      infraReliability: getProgressScore(formData.infraReliability),
      cloudMigration: getProgressScore(formData.cloudMigration),
    });

    const maintenanceScore = calculateSectionScore('System Maintenance', {
      monitoringTools: getProgressScore(formData.monitoringTools),
      devOpsPractices: getProgressScore(formData.devOpsPractices),
      systemDowntime: getReverseScore(formData.systemDowntime),
    });

    const trainingScore = calculateSectionScore('Training & Skills', {
      digitalComfort: getProgressScore(formData.digitalComfort),
      trainingReceived: getProgressScore(formData.trainingReceived),
      skillsFrequency: getProgressScore(formData.skillsFrequency),
    });

    // Calculate total score
    const totalScore = [
      aiStrategyScore,
      processScore,
      securityScore,
      dataScore,
      financialScore,
      infraScore,
      maintenanceScore,
      trainingScore
    ].reduce((acc, curr) => acc + curr, 0);

    // Generate title and description based on total score
    const { title, description } = getResultsDescription(totalScore);

    // Category breakdown
    const categoryBreakdown = [
      { label: "AI Strategy & Innovation", score: aiStrategyScore },
      { label: "Process Integration", score: processScore },
      { label: "Security & Privacy", score: securityScore },
      { label: "Data Management", score: dataScore },
      { label: "Financial Readiness", score: financialScore },
      { label: "Infrastructure", score: infraScore },
      { label: "System Maintenance", score: maintenanceScore },
      { label: "Training & Skills", score: trainingScore }
    ];

    // Generate recommendations based on lowest scoring categories
    const recommendations = generateRecommendations(categoryBreakdown);

    return {
      score: totalScore,
      title,
      description,
      categoryBreakdown,
      recommendations
    };
  };

  // Helper functions for scoring
  const calculateSectionScore = (section: string, scores: Record<string, number>) => {
    const total = Object.values(scores).reduce((acc, curr) => acc + curr, 0);
    return Math.min(Math.round(total * 5 / Object.keys(scores).length), 5);
  };

  const getProgressScore = (value: string): number => {
    const progressMap: Record<string, number> = {
      'Not started': 0,
      'Planning phase': 1,
      'Early implementation': 2,
      'Partial implementation': 3,
      'Full implementation': 4,
      'Advanced implementation': 5
    };
    return progressMap[value] || 0;
  };

  const getTrainingScore = (value: string): number => {
    const trainingMap: Record<string, number> = {
      'Never': 0,
      'Annually': 1,
      'Quarterly': 2,
      'Monthly': 3,
      'Continuously through various channels': 4
    };
    return trainingMap[value] || 0;
  };

  const getReverseScore = (value: string): number => {
    const reverseMap: Record<string, number> = {
      'Daily': 0,
      'Weekly': 1,
      'Monthly': 2,
      'Rarely': 3,
      'Never': 4
    };
    return reverseMap[value] || 0;
  };

  const getBudgetScore = (value: string): number => {
    const budgetMap: Record<string, number> = {
      '0%': 0,
      '1–5%': 1,
      '6–10%': 2,
      '11–15%': 3,
      '16–20%': 4,
      '20%+': 5
    };
    return budgetMap[value] || 0;
  };

  const getResultsDescription = (totalScore: number): { title: string; description: string } => {
    if (totalScore <= 10) {
      return {
        title: "Early Stage Digital Transformation",
        description: "Your organization is in the early stages of digital transformation with significant opportunities for growth."
      };
    } else if (totalScore <= 20) {
      return {
        title: "Developing Digital Capabilities",
        description: "Your organization has begun its digital journey but has room for strategic improvements."
      };
    } else if (totalScore <= 30) {
      return {
        title: "Established Digital Practice",
        description: "Your organization has established good digital practices with opportunities for optimization."
      };
    } else {
      return {
        title: "Digital Leader",
        description: "Your organization is at the forefront of digital transformation with advanced capabilities."
      };
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const resultsData = calculateScore();
    setResults(resultsData);
    setShowResults(true);
    window.scrollTo(0, 0);
  };
  
  const handleLeadCapture = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      // Here you would typically send data to your backend/CRM
      // For demo purposes, we'll just simulate a successful submission
      setTimeout(() => {
        toast.success("Thank you! Your detailed report will be emailed to you shortly.", {
          position: "top-right",
          duration: 5000
        });
        setLeadCaptured(true);
      }, 1000);
      
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast.error("There was an error submitting your information. Please try again.", {
        position: "top-right"
      });
    }
  };

  const renderAiStrategyQuestions = () => (
    <div className="questions-section">
      <h2 className="text-xl font-semibold mb-6">AI Strategy & Business Alignment</h2>
      
      {/* Question 1 */}
      <div className="mb-8">
        <p className="font-medium mb-3">Does your organization have a formal AI/digital transformation strategy?</p>
        <div className="space-y-3">
          {["Yes", "No"].map(value => (
            <div key={`strategy-${value}`} className="flex items-center">
              <input
                type="radio"
                id={`strategy-${value}`}
                name="hasAiStrategy"
                value={value}
                checked={formData.hasAiStrategy === value}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`strategy-${value}`}>{value}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Question 2 */}
      <div className="mb-8">
        <p className="font-medium mb-3">How would you rate your organization's progress in implementing AI solutions?</p>
        <div className="space-y-3">
          {[
            "Not started",
            "Early planning phase",
            "Initial implementation",
            "Partial implementation",
            "Full implementation"
          ].map(label => (
            <div key={`progress-${label}`} className="flex items-center">
              <input
                type="radio"
                id={`progress-${label}`}
                name="aiImplementationProgress"
                value={label}
                checked={formData.aiImplementationProgress === label}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`progress-${label}`}>{label}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Question 3 */}
      <div className="mb-8">
        <p className="font-medium mb-3">Which specific AI technologies is your organization currently using or exploring?</p>
        <div className="space-y-3">
          {[
            "None",
            "Machine learning",
            "Natural language processing",
            "Computer vision",
            "Predictive analytics",
            "Generative AI",
            "Robotic process automation",
            "Other"
          ].map(tech => (
            <div key={`tech-${tech}`} className="flex items-center">
              <input
                type="checkbox"
                id={`tech-${tech}`}
                name="aiTechnologies"
                value={tech}
                checked={formData.aiTechnologies.includes(tech)}
                onChange={handleMultiSelectChange}
                className="mr-3"
              />
              <label htmlFor={`tech-${tech}`}>{tech}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Helper function for multi-select handling
  const handleMultiSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData(prev => {
      const currentArray = prev[name as keyof FormData] as string[];
      return {
        ...prev,
        [name]: checked 
          ? [...currentArray, value]
          : currentArray.filter(item => item !== value)
      };
    });
  };

  // Helper function for progress labels
  const getAiProgressLabel = (value: number): string => {
    const labels = [
      'Not started',
      'Early planning phase',
      'Initial implementation',
      'Partial implementation',
      'Full implementation'
    ];
    return labels[value - 1];
  };

  const renderBusinessProcessQuestions = () => (
    <div className="questions-section">
      <h2 className="text-xl font-semibold mb-6">Business Process Integration</h2>
      
      <div className="mb-8">
        <p className="font-medium mb-3">How would you rate the level of digital integration between different departments?</p>
        <div className="space-y-3">
          {[
            "No integration",
            "Basic integration",
            "Moderate integration",
            "Advanced integration",
            "Full integration"
          ].map(label => (
            <div key={`integration-${label}`} className="flex items-center">
              <input
                type="radio"
                id={`integration-${label}`}
                name="digitalIntegration"
                value={label}
                checked={formData.digitalIntegration === label}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`integration-${label}`}>{label}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Add other business process questions similarly */}
    </div>
  );

  const renderCybersecurityQuestions = () => (
    <div className="questions-section">
      <h2 className="text-xl font-semibold mb-6">Cybersecurity & Privacy Readiness</h2>
      
      {/* Security Incident */}
      <div className="mb-8">
        <p className="font-medium mb-3">Has your organization experienced a cybersecurity incident in the past 12 months?</p>
        <div className="space-y-3">
          {["Yes", "No", "Not sure"].map(value => (
            <div key={`incident-${value}`} className="flex items-center">
              <input
                type="radio"
                id={`incident-${value}`}
                name="securityIncident"
                value={value}
                checked={formData.securityIncident === value}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`incident-${value}`}>{value}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Security Knowledge */}
      <div className="mb-8">
        <p className="font-medium mb-3">How would you rate your personal knowledge of cybersecurity best practices?</p>
        <div className="space-y-3">
          {[
            "Beginner",
            "Basic understanding",
            "Intermediate",
            "Advanced",
            "Expert"
          ].map(label => (
            <div key={`knowledge-${label}`} className="flex items-center">
              <input
                type="radio"
                id={`knowledge-${label}`}
                name="securityKnowledge"
                value={label}
                checked={formData.securityKnowledge === label}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`knowledge-${label}`}>{label}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Security Technologies */}
      <div className="mb-8">
        <p className="font-medium mb-3">Which specific cybersecurity technologies does your organization currently implement?</p>
        <div className="space-y-3">
          {[
            "Firewalls",
            "Endpoint protection",
            "SIEM solutions",
            "Zero trust architecture",
            "Intrusion detection systems",
            "DLP solutions",
            "None of these",
            "Other"
          ].map(tech => (
            <div key={`security-${tech}`} className="flex items-center">
              <input
                type="checkbox"
                id={`security-${tech}`}
                name="securityTechnologies"
                value={tech}
                checked={formData.securityTechnologies.includes(tech)}
                onChange={handleMultiSelectChange}
                className="mr-3"
              />
              <label htmlFor={`security-${tech}`}>{tech}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Security Training */}
      <div className="mb-8">
        <p className="font-medium mb-3">How frequently does your organization conduct cybersecurity training?</p>
        <div className="space-y-3">
          {[
            "Never",
            "Annually",
            "Quarterly",
            "Monthly",
            "Continuously through various channels"
          ].map(freq => (
            <div key={`training-${freq}`} className="flex items-center">
              <input
                type="radio"
                id={`training-${freq}`}
                name="securityTraining"
                value={freq}
                checked={formData.securityTraining === freq}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`training-${freq}`}>{freq}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDataQualityQuestions = () => (
    <div className="questions-section">
      <h2 className="text-xl font-semibold mb-6">Data Quality & Accessibility</h2>
      
      {/* Data Management */}
      <div className="mb-8">
        <p className="font-medium mb-3">How would you rate your organization's data storage and management systems?</p>
        <div className="space-y-3">
          {[
            "Basic/Manual systems",
            "Partially digitized",
            "Mostly digital but fragmented",
            "Integrated digital systems",
            "Fully optimized systems"
          ].map(label => (
            <div key={`management-${label}`} className="flex items-center">
              <input
                type="radio"
                id={`management-${label}`}
                name="dataManagement"
                value={label}
                checked={formData.dataManagement === label}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`management-${label}`}>{label}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Data Quality Issues */}
      <div className="mb-8">
        <p className="font-medium mb-3">How frequently do you encounter data quality issues in your daily work?</p>
        <div className="space-y-3">
          {[
            "Daily",
            "Weekly",
            "Monthly",
            "Rarely",
            "Never"
          ].map(freq => (
            <div key={`quality-${freq}`} className="flex items-center">
              <input
                type="radio"
                id={`quality-${freq}`}
                name="dataQualityIssues"
                value={freq}
                checked={formData.dataQualityIssues === freq}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`quality-${freq}`}>{freq}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Data Tools */}
      <div className="mb-8">
        <p className="font-medium mb-3">Which data management technologies does your organization currently use?</p>
        <div className="space-y-3">
          {[
            "Spreadsheets",
            "Database management systems",
            "Data warehouses",
            "Data lakes",
            "Business intelligence tools",
            "ETL tools",
            "None of these",
            "Other"
          ].map(tool => (
            <div key={`tool-${tool}`} className="flex items-center">
              <input
                type="checkbox"
                id={`tool-${tool}`}
                name="dataTools"
                value={tool}
                checked={formData.dataTools.includes(tool)}
                onChange={handleMultiSelectChange}
                className="mr-3"
              />
              <label htmlFor={`tool-${tool}`}>{tool}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFinancialQuestions = () => (
    <div className="questions-section">
      <h2 className="text-xl font-semibold mb-6">Financial Budget for Tech & Experimentation</h2>
      
      {/* Digital Budget */}
      <div className="mb-8">
        <p className="font-medium mb-3">Does your organization allocate a specific budget for digital transformation initiatives?</p>
        <div className="space-y-3">
          {["Yes", "No", "Planning to"].map(value => (
            <div key={`budget-${value}`} className="flex items-center">
              <input
                type="radio"
                id={`budget-${value}`}
                name="digitalBudget"
                value={value}
                checked={formData.digitalBudget === value}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`budget-${value}`}>{value}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Budget Allocation */}
      <div className="mb-8">
        <p className="font-medium mb-3">What percentage of your annual budget is allocated to digital technology?</p>
        <div className="space-y-3">
          {[
            "0%",
            "1–5%",
            "6–10%",
            "11–15%",
            "16–20%",
            "20%+",
            "Don't know"
          ].map(percent => (
            <div key={`allocation-${percent}`} className="flex items-center">
              <input
                type="radio"
                id={`allocation-${percent}`}
                name="budgetAllocation"
                value={percent}
                checked={formData.budgetAllocation === percent}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`allocation-${percent}`}>{percent}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Metrics */}
      <div className="mb-8">
        <p className="font-medium mb-3">Which financial metrics does your organization use to prioritize digital initiatives?</p>
        <div className="space-y-3">
          {[
            "ROI",
            "NPV",
            "Payback period",
            "Strategic alignment only",
            "No formal metrics",
            "Other"
          ].map(metric => (
            <div key={`metric-${metric}`} className="flex items-center">
              <input
                type="checkbox"
                id={`metric-${metric}`}
                name="financialMetrics"
                value={metric}
                checked={formData.financialMetrics.includes(metric)}
                onChange={handleMultiSelectChange}
                className="mr-3"
              />
              <label htmlFor={`metric-${metric}`}>{metric}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderInfrastructureQuestions = () => (
    <div className="questions-section">
      <h2 className="text-xl font-semibold mb-6">Infrastructure</h2>
      
      {/* Cloud Services */}
      <div className="mb-8">
        <p className="font-medium mb-3">What cloud computing services does your organization currently use?</p>
        <div className="space-y-3">
          {[
            "None",
            "AWS",
            "Microsoft Azure",
            "Google Cloud",
            "IBM Cloud",
            "Oracle Cloud",
            "Private cloud",
            "Other"
          ].map(service => (
            <div key={`cloud-${service}`} className="flex items-center">
              <input
                type="checkbox"
                id={`cloud-${service}`}
                name="cloudServices"
                value={service}
                checked={formData.cloudServices.includes(service)}
                onChange={handleMultiSelectChange}
                className="mr-3"
              />
              <label htmlFor={`cloud-${service}`}>{service}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Infrastructure Reliability */}
      <div className="mb-8">
        <p className="font-medium mb-3">How would you rate the reliability of your organization's technical infrastructure?</p>
        <div className="space-y-3">
          {[
            "Frequent issues",
            "Occasional disruptions",
            "Mostly reliable",
            "Very reliable",
            "Highly reliable with redundancy"
          ].map(rating => (
            <div key={`reliability-${rating}`} className="flex items-center">
              <input
                type="radio"
                id={`reliability-${rating}`}
                name="infraReliability"
                value={rating}
                checked={formData.infraReliability === rating}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`reliability-${rating}`}>{rating}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Cloud Migration */}
      <div className="mb-8">
        <p className="font-medium mb-3">At what stage is your organization in its cloud migration journey?</p>
        <div className="space-y-3">
          {[
            "No plans for cloud migration",
            "Planning stage",
            "Partially migrated",
            "Mostly cloud-based",
            "Fully cloud-based"
          ].map(stage => (
            <div key={`migration-${stage}`} className="flex items-center">
              <input
                type="radio"
                id={`migration-${stage}`}
                name="cloudMigration"
                value={stage}
                checked={formData.cloudMigration === stage}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`migration-${stage}`}>{stage}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Infrastructure Technologies */}
      <div className="mb-8">
        <p className="font-medium mb-3">Which infrastructure technologies does your organization currently use?</p>
        <div className="space-y-3">
          {[
            "Virtual machines",
            "Containers (Docker, Kubernetes)",
            "Serverless computing",
            "Edge computing",
            "Microservices architecture",
            "None of these",
            "Other"
          ].map(tech => (
            <div key={`infra-${tech}`} className="flex items-center">
              <input
                type="checkbox"
                id={`infra-${tech}`}
                name="infraTechnologies"
                value={tech}
                checked={formData.infraTechnologies.includes(tech)}
                onChange={handleMultiSelectChange}
                className="mr-3"
              />
              <label htmlFor={`infra-${tech}`}>{tech}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMaintenanceQuestions = () => (
    <div className="questions-section">
      <h2 className="text-xl font-semibold mb-6">System Maintenance & Monitoring</h2>
      
      {/* Monitoring Tools */}
      <div className="mb-8">
        <p className="font-medium mb-3">Does your organization use automated monitoring tools for digital systems?</p>
        <div className="space-y-3">
          {[
            "No monitoring tools",
            "Basic monitoring tools",
            "Advanced monitoring with alerts",
            "Comprehensive monitoring with predictive capabilities",
            "Don't know"
          ].map(tool => (
            <div key={`monitoring-${tool}`} className="flex items-center">
              <input
                type="radio"
                id={`monitoring-${tool}`}
                name="monitoringTools"
                value={tool}
                checked={formData.monitoringTools === tool}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`monitoring-${tool}`}>{tool}</label>
            </div>
          ))}
        </div>
      </div>

      {/* DevOps Practices */}
      <div className="mb-8">
        <p className="font-medium mb-3">At what stage is your organization in implementing DevOps practices?</p>
        <div className="space-y-3">
          {[
            "Not started",
            "Planning phase",
            "Early implementation",
            "Established practices",
            "Advanced implementation"
          ].map(stage => (
            <div key={`devops-${stage}`} className="flex items-center">
              <input
                type="radio"
                id={`devops-${stage}`}
                name="devOpsPractices"
                value={stage}
                checked={formData.devOpsPractices === stage}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`devops-${stage}`}>{stage}</label>
            </div>
          ))}
        </div>
      </div>

      {/* System Downtime */}
      <div className="mb-8">
        <p className="font-medium mb-3">How frequently do you experience system downtime that affects your work?</p>
        <div className="space-y-3">
          {[
            "Daily",
            "Weekly",
            "Monthly",
            "Rarely",
            "Never"
          ].map(freq => (
            <div key={`downtime-${freq}`} className="flex items-center">
              <input
                type="radio"
                id={`downtime-${freq}`}
                name="systemDowntime"
                value={freq}
                checked={formData.systemDowntime === freq}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`downtime-${freq}`}>{freq}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Backup Solutions */}
      <div className="mb-8">
        <p className="font-medium mb-3">Which backup and recovery solutions does your organization use?</p>
        <div className="space-y-3">
          {[
            "None",
            "On-premises backup",
            "Cloud backup",
            "Disaster recovery as a service",
            "Hybrid backup",
            "Other"
          ].map(solution => (
            <div key={`backup-${solution}`} className="flex items-center">
              <input
                type="checkbox"
                id={`backup-${solution}`}
                name="backupSolutions"
                value={solution}
                checked={formData.backupSolutions.includes(solution)}
                onChange={handleMultiSelectChange}
                className="mr-3"
              />
              <label htmlFor={`backup-${solution}`}>{solution}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Issue Resolution */}
      <div className="mb-8">
        <p className="font-medium mb-3">How quickly are technical issues typically resolved in your organization?</p>
        <div className="space-y-3">
          {[
            "Within hours",
            "Within 1 day",
            "Within 2–3 days",
            "Within a week",
            "More than a week"
          ].map(time => (
            <div key={`resolution-${time}`} className="flex items-center">
              <input
                type="radio"
                id={`resolution-${time}`}
                name="issueResolution"
                value={time}
                checked={formData.issueResolution === time}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`resolution-${time}`}>{time}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTrainingQuestions = () => (
    <div className="questions-section">
      <h2 className="text-xl font-semibold mb-6">Training & HR Skills</h2>
      
      {/* Digital Comfort */}
      <div className="mb-8">
        <p className="font-medium mb-3">How comfortable are you with digital technologies and tools?</p>
        <div className="space-y-3">
          {[
            "Not comfortable at all",
            "Slightly uncomfortable",
            "Neutral",
            "Comfortable",
            "Very comfortable"
          ].map(level => (
            <div key={`comfort-${level}`} className="flex items-center">
              <input
                type="radio"
                id={`comfort-${level}`}
                name="digitalComfort"
                value={level}
                checked={formData.digitalComfort === level}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`comfort-${level}`}>{level}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Training Received */}
      <div className="mb-8">
        <p className="font-medium mb-3">How much training have you received in digital skills?</p>
        <div className="space-y-3">
          {[
            "No training",
            "Basic training",
            "Intermediate training",
            "Advanced training",
            "Industry-specific training"
          ].map(level => (
            <div key={`training-${level}`} className="flex items-center">
              <input
                type="radio"
                id={`training-${level}`}
                name="trainingReceived"
                value={level}
                checked={formData.trainingReceived === level}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`training-${level}`}>{level}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Important Skills */}
      <div className="mb-8">
        <p className="font-medium mb-3">Which skills are most important for your role in digital transformation?</p>
        <div className="space-y-3">
          {[
            "Data analysis",
            "Project management",
            "Digital marketing",
            "Cybersecurity",
            "Data management",
            "AI and machine learning",
            "Other"
          ].map(skill => (
            <div key={`skill-${skill}`} className="flex items-center">
              <input
                type="checkbox"
                id={`skill-${skill}`}
                name="importantSkills"
                value={skill}
                checked={formData.importantSkills.includes(skill)}
                onChange={handleMultiSelectChange}
                className="mr-3"
              />
              <label htmlFor={`skill-${skill}`}>{skill}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Framework */}
      <div className="mb-8">
        <p className="font-medium mb-3">Which skills framework does your organization use for digital skills development?</p>
        <div className="space-y-3">
          {[
            "None",
            "ITIL",
            "COBIT",
            "ISO 27001",
            "CMMI",
            "Other"
          ].map(framework => (
            <div key={`framework-${framework}`} className="flex items-center">
              <input
                type="radio"
                id={`framework-${framework}`}
                name="skillsFramework"
                value={framework}
                checked={formData.skillsFramework === framework}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`framework-${framework}`}>{framework}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Frequency */}
      <div className="mb-8">
        <p className="font-medium mb-3">How frequently do you seek out new digital skills?</p>
        <div className="space-y-3">
          {[
            "Never",
            "Rarely",
            "Occasionally",
            "Regularly",
            "Continuously"
          ].map(freq => (
            <div key={`freq-${freq}`} className="flex items-center">
              <input
                type="radio"
                id={`freq-${freq}`}
                name="skillsFrequency"
                value={freq}
                checked={formData.skillsFrequency === freq}
                onChange={handleInputChange}
                required
                className="mr-3"
              />
              <label htmlFor={`freq-${freq}`}>{freq}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Desired Skills */}
      <div className="mb-8">
        <p className="font-medium mb-3">Which skills are most important for your role in digital transformation?</p>
        <div className="space-y-3">
          {[
            "Data analysis",
            "Project management",
            "Digital marketing",
            "Cybersecurity",
            "Data management",
            "AI and machine learning",
            "Other"
          ].map(skill => (
            <div key={`desired-${skill}`} className="flex items-center">
              <input
                type="checkbox"
                id={`desired-${skill}`}
                name="desiredSkills"
                value={skill}
                checked={formData.desiredSkills.includes(skill)}
                onChange={handleMultiSelectChange}
                className="mr-3"
              />
              <label htmlFor={`desired-${skill}`}>{skill}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderNavigationButtons = () => (
    <div className="flex justify-between mt-8">
      {step > 1 && (
        <button
          type="button"
          onClick={handlePrevious}
          className="btn btn-text border border-gray-300"
        >
          Previous
        </button>
      )}
      
      {step < TOTAL_STEPS ? (
        <button
          type="button"
          onClick={handleNext}
          className="btn btn-primary ml-auto"
        >
          Next
        </button>
      ) : (
        <button
          type="submit"
          className="btn btn-primary ml-auto"
        >
          Get Results
        </button>
      )}
    </div>
  );

  return (
    <section id="readiness-survey" className="bg-gradient-to-b from-[#fff] to-[#d2ffec] py-16" aria-label="Industry Readiness Survey">      
      <div className="container py-8">
        {!showResults ? (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex justify-center">
                <div className="tag">Industry Assessment</div>
              </div>
              <h1 className="section-title mt-5">Industry Readiness Survey</h1>
              <p className="section-description mt-5">
                Complete this quick assessment to discover where your business stands and receive personalized recommendations.
              </p>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-10">
              <div 
                className="bg-[#007bff] h-2.5 rounded-full transition-all duration-500 ease-in-out" 
                style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
              ></div>
            </div>

            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-xl border border-[#222222]/10"
            >
              <form onSubmit={handleSubmit}>
                {step === 1 && renderAiStrategyQuestions()}
                {step === 2 && renderBusinessProcessQuestions()}
                {step === 3 && renderCybersecurityQuestions()}
                {step === 4 && renderDataQualityQuestions()}
                {step === 5 && renderFinancialQuestions()}
                {step === 6 && renderInfrastructureQuestions()}
                {step === 7 && renderMaintenanceQuestions()}
                {step === 8 && renderTrainingQuestions()}
                {renderNavigationButtons()}
              </form>
            </motion.div>
          </div>
        ) : (
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <div className="flex justify-center">
                <div className="tag">Results</div>
              </div>
              <h1 className="section-title mt-5">Your Assessment Results</h1>
              <p className="section-description mt-5">
                Here's where your business stands based on your responses.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-xl border border-[#222222]/10">
              {/* Score Circle */}
              <div className="flex justify-center mb-8">
                <div className="relative w-40 h-40 rounded-full flex items-center justify-center bg-[#f0f8ff] border-4 border-[#007bff]">
                  <div className="text-center">
                    <span className="block text-5xl font-bold text-[#007bff]">{results.score}</span>
                    <span className="text-gray-500 text-sm">out of 25</span>
                  </div>
                </div>
              </div>
              
              {/* Results Summary */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#007bff]">{results.title}</h2>
                <p className="text-gray-600 mt-2">{results.description}</p>
              </div>
              
              {/* Category Breakdown and Recommendations */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Category Breakdown</h3>
                  <ul className="space-y-3">
                    {results.categoryBreakdown.map((category, index) => (
                      <li key={index} className="flex justify-between items-center pb-2 border-b border-gray-200 last:border-0">
                        <span>{category.label}</span>
                        <span className="font-semibold">{category.score}/5</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Recommendations</h3>
                  <ul className="space-y-2">
                    {results.recommendations.map((recommendation, index) => (
                      <li key={index} className="pl-4 border-l-2 border-[#007bff] py-1">
                        {recommendation}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Lead Capture Form */}
              {!leadCaptured ? (
                <div className="bg-[#f0f8ff] p-6 rounded-lg">
                  <h3 className="font-semibold text-lg text-center mb-2">Get Your Detailed Report</h3>
                  <p className="text-center text-gray-600 mb-4">
                    Enter your details to receive a comprehensive report with actionable insights.
                  </p>
                  
                  <form onSubmit={handleLeadCapture}>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="lead-name">
                          Name
                        </label>
                        <input
                          type="text"
                          id="lead-name"
                          name="lead-name"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          placeholder="Your name"
                          defaultValue={formData.name}
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="lead-email">
                          Email
                        </label>
                        <input
                          type="email"
                          id="lead-email"
                          name="lead-email"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          placeholder="you@example.com"
                          defaultValue={formData.email}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-start mb-4">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        className="mt-1 mr-2"
                        required
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        I agree to receive communications about my assessment results and related insights.
                      </label>
                    </div>
                    
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        Send Me My Detailed Report
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-semibold text-lg text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700 mb-4">
                    Your detailed report has been sent to your email. Check your inbox shortly!
                  </p>
                  <Link href="/" className="btn btn-primary inline-block">
                    Back to Homepage
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Helper functions to get question labels
function getQ1Label(value: number): string {
  const labels = [
    'Minimal or non-existent',
    'Basic website and social media',
    'Active online presence',
    'Strong digital strategy',
    'Industry-leading digital presence'
  ];
  return labels[value - 1];
}

function getQ2Label(value: number): string {
  const labels = [
    'Rarely or never',
    'Only when absolutely necessary',
    'Occasionally',
    'Regularly',
    'Continuously seeking innovation'
  ];
  return labels[value - 1];
}

function getQ3Label(value: number): string {
  const labels = [
    'No formal strategy',
    'Basic outreach efforts',
    'Established engagement processes',
    'Data-driven engagement strategy',
    'Comprehensive omnichannel approach'
  ];
  return labels[value - 1];
}

function getQ4Label(value: number): string {
  const labels = [
    'Very slow to adapt',
    'Responds after competitors',
    'Adapts at industry average pace',
    'Quickly responds to changes',
    'Anticipates and leads changes'
  ];
  return labels[value - 1];
}

function getQ5Label(value: number): string {
  const labels = [
    'Minimal or none',
    'Basic required training only',
    'Regular development opportunities',
    'Comprehensive development programs',
    'Industry-leading talent development'
  ];
  return labels[value - 1];
}

// Add this function before the calculateScore function
const generateRecommendations = (categoryBreakdown: Array<{ label: string; score: number }>) => {
  // Sort categories by score to find lowest scoring areas
  const sortedCategories = [...categoryBreakdown].sort((a, b) => a.score - b.score);
  const recommendations: string[] = [];

  // Generate recommendations based on lowest scoring categories
  sortedCategories.slice(0, 3).forEach(category => {
    switch (category.label) {
      case "AI Strategy & Innovation":
        recommendations.push("Develop a formal AI strategy and roadmap for implementation");
        break;
      case "Process Integration":
        recommendations.push("Focus on integrating digital processes across departments");
        break;
      case "Security & Privacy":
        recommendations.push("Strengthen cybersecurity measures and implement regular training");
        break;
      case "Data Management":
        recommendations.push("Improve data quality and implement robust data governance");
        break;
      case "Financial Readiness":
        recommendations.push("Allocate specific budget for digital transformation initiatives");
        break;
      case "Infrastructure":
        recommendations.push("Modernize technical infrastructure and consider cloud migration");
        break;
      case "System Maintenance":
        recommendations.push("Implement automated monitoring and maintenance procedures");
        break;
      case "Training & Skills":
        recommendations.push("Invest in comprehensive digital skills training programs");
        break;
      default:
        recommendations.push("Focus on overall digital transformation strategy");
    }
  });

  return recommendations;
};

export default ReadinessSurvey;