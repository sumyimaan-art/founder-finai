import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Building2,
  Users,
  DollarSign,
  TrendingUp,
  Calendar,
  Target,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const totalSteps = 4;

  // Form data state
  const [formData, setFormData] = useState({
    // Company basics
    companyName: "",
    industry: "",
    foundedYear: "",
    stage: "",

    // Team & Operations
    headcount: "",
    fullTimeEmployees: "",
    contractors: "",
    locationHQ: "",

    // Financials
    monthlyRevenue: "",
    annualRevenue: "",
    monthlyBurnRate: "",
    cashOnHand: "",
    fundingRaised: "",
    lastFundingRound: "",

    // Growth & Planning
    targetRevenue: "",
    growthRate: "",
    businessModel: "",
    primaryGoal: "",
    challenges: "",
  });

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    setIsLoading(true);

    // Simulate processing the onboarding data
    setTimeout(() => {
      console.log("Onboarding data collected:", formData);
      navigate("/dashboard");
    }, 1500);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold">Company Basics</h2>
              <p className="text-gray-600">
                Tell us about your company and industry
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  placeholder="Enter your company name"
                  value={formData.companyName}
                  onChange={(e) =>
                    updateFormData("companyName", e.target.value)
                  }
                />
              </div>

              <div>
                <Label htmlFor="industry">Industry *</Label>
                <Select
                  value={formData.industry}
                  onValueChange={(value) => updateFormData("industry", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="saas">SaaS</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="fintech">FinTech</SelectItem>
                    <SelectItem value="healthtech">HealthTech</SelectItem>
                    <SelectItem value="edtech">EdTech</SelectItem>
                    <SelectItem value="marketplace">Marketplace</SelectItem>
                    <SelectItem value="consumer">Consumer</SelectItem>
                    <SelectItem value="b2b">B2B Services</SelectItem>
                    <SelectItem value="hardware">Hardware</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="foundedYear">Founded Year</Label>
                  <Input
                    id="foundedYear"
                    placeholder="2023"
                    value={formData.foundedYear}
                    onChange={(e) =>
                      updateFormData("foundedYear", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="stage">Company Stage</Label>
                  <Select
                    value={formData.stage}
                    onValueChange={(value) => updateFormData("stage", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="idea">Idea</SelectItem>
                      <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                      <SelectItem value="seed">Seed</SelectItem>
                      <SelectItem value="series-a">Series A</SelectItem>
                      <SelectItem value="series-b">Series B+</SelectItem>
                      <SelectItem value="growth">Growth</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold">Team & Operations</h2>
              <p className="text-gray-600">
                Information about your team and operations
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="headcount">Total Headcount *</Label>
                <Input
                  id="headcount"
                  placeholder="Total number of people"
                  value={formData.headcount}
                  onChange={(e) => updateFormData("headcount", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullTimeEmployees">Full-time Employees</Label>
                  <Input
                    id="fullTimeEmployees"
                    placeholder="Number of FTEs"
                    value={formData.fullTimeEmployees}
                    onChange={(e) =>
                      updateFormData("fullTimeEmployees", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="contractors">Contractors/Freelancers</Label>
                  <Input
                    id="contractors"
                    placeholder="Number of contractors"
                    value={formData.contractors}
                    onChange={(e) =>
                      updateFormData("contractors", e.target.value)
                    }
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="locationHQ">Headquarters Location</Label>
                <Input
                  id="locationHQ"
                  placeholder="City, Country"
                  value={formData.locationHQ}
                  onChange={(e) => updateFormData("locationHQ", e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-semibold">Financial Metrics</h2>
              <p className="text-gray-600">
                Share your key financial information
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="monthlyRevenue">Monthly Revenue ($)</Label>
                  <Input
                    id="monthlyRevenue"
                    placeholder="50000"
                    value={formData.monthlyRevenue}
                    onChange={(e) =>
                      updateFormData("monthlyRevenue", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="annualRevenue">Annual Revenue ($)</Label>
                  <Input
                    id="annualRevenue"
                    placeholder="600000"
                    value={formData.annualRevenue}
                    onChange={(e) =>
                      updateFormData("annualRevenue", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="monthlyBurnRate">Monthly Burn Rate ($)</Label>
                  <Input
                    id="monthlyBurnRate"
                    placeholder="30000"
                    value={formData.monthlyBurnRate}
                    onChange={(e) =>
                      updateFormData("monthlyBurnRate", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="cashOnHand">Cash on Hand ($)</Label>
                  <Input
                    id="cashOnHand"
                    placeholder="500000"
                    value={formData.cashOnHand}
                    onChange={(e) =>
                      updateFormData("cashOnHand", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fundingRaised">
                    Total Funding Raised ($)
                  </Label>
                  <Input
                    id="fundingRaised"
                    placeholder="1000000"
                    value={formData.fundingRaised}
                    onChange={(e) =>
                      updateFormData("fundingRaised", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="lastFundingRound">Last Funding Round</Label>
                  <Select
                    value={formData.lastFundingRound}
                    onValueChange={(value) =>
                      updateFormData("lastFundingRound", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select round" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bootstrap">Bootstrap</SelectItem>
                      <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                      <SelectItem value="seed">Seed</SelectItem>
                      <SelectItem value="series-a">Series A</SelectItem>
                      <SelectItem value="series-b">Series B</SelectItem>
                      <SelectItem value="series-c">Series C+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h2 className="text-2xl font-semibold">Goals & Planning</h2>
              <p className="text-gray-600">
                Tell us about your goals and challenges
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="targetRevenue">
                    Target Annual Revenue ($)
                  </Label>
                  <Input
                    id="targetRevenue"
                    placeholder="2000000"
                    value={formData.targetRevenue}
                    onChange={(e) =>
                      updateFormData("targetRevenue", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="growthRate">Monthly Growth Rate (%)</Label>
                  <Input
                    id="growthRate"
                    placeholder="15"
                    value={formData.growthRate}
                    onChange={(e) =>
                      updateFormData("growthRate", e.target.value)
                    }
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="businessModel">Primary Business Model</Label>
                <Select
                  value={formData.businessModel}
                  onValueChange={(value) =>
                    updateFormData("businessModel", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select business model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="subscription">
                      Subscription (SaaS)
                    </SelectItem>
                    <SelectItem value="transaction">
                      Transaction-based
                    </SelectItem>
                    <SelectItem value="marketplace">Marketplace</SelectItem>
                    <SelectItem value="advertising">Advertising</SelectItem>
                    <SelectItem value="one-time">One-time Purchase</SelectItem>
                    <SelectItem value="freemium">Freemium</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="primaryGoal">
                  Primary Goal for Next 12 Months
                </Label>
                <Select
                  value={formData.primaryGoal}
                  onValueChange={(value) =>
                    updateFormData("primaryGoal", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select primary goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="growth">Revenue Growth</SelectItem>
                    <SelectItem value="profitability">
                      Achieve Profitability
                    </SelectItem>
                    <SelectItem value="fundraising">Raise Funding</SelectItem>
                    <SelectItem value="expansion">Market Expansion</SelectItem>
                    <SelectItem value="optimization">
                      Cost Optimization
                    </SelectItem>
                    <SelectItem value="acquisition">
                      Customer Acquisition
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="challenges">
                  Current Challenges (Optional)
                </Label>
                <Textarea
                  id="challenges"
                  placeholder="Describe your main business challenges..."
                  value={formData.challenges}
                  onChange={(e) => updateFormData("challenges", e.target.value)}
                  rows={3}
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="bg-white/90 backdrop-blur-sm border-white/20 shadow-2xl">
          <CardHeader className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Welcome to Founder FinAI
              </CardTitle>
            </div>
            <CardDescription className="text-base">
              Let's set up your financial intelligence dashboard with your
              business information
            </CardDescription>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>
                  Step {currentStep} of {totalSteps}
                </span>
                <span>
                  {Math.round((currentStep / totalSteps) * 100)}% Complete
                </span>
              </div>
              <Progress
                value={(currentStep / totalSteps) * 100}
                className="h-2"
              />
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </Button>

              <Button
                onClick={handleNext}
                disabled={isLoading}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <span>
                  {currentStep === totalSteps
                    ? isLoading
                      ? "Setting up..."
                      : "Complete Setup"
                    : "Next"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
