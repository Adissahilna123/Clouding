
import React, { useEffect, useState } from 'react';
import { Cloud, Container, Shield, Zap } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { icon: Cloud, text: "Initializing Cloud Platform", color: "from-cyan-500 to-blue-600" },
    { icon: Container, text: "Loading Docker Engine", color: "from-blue-500 to-purple-600" },
    { icon: Shield, text: "Securing Connection", color: "from-purple-500 to-pink-600" },
    { icon: Zap, text: "Optimizing Performance", color: "from-green-500 to-cyan-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 800);

    return () => clearInterval(stepInterval);
  }, []);

  const CurrentIcon = steps[currentStep].icon;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-12">
          <div className="p-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-2xl shadow-cyan-500/25 animate-pulse">
            <Cloud className="w-16 h-16 text-white" />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
          Clouding
        </h1>
        
        <p className="text-xl text-gray-300 mb-12 animate-fade-in">
          Next-Generation Cloud Platform
        </p>

        {/* Current Step */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className={`p-4 rounded-xl bg-gradient-to-r ${steps[currentStep].color} animate-pulse`}>
            <CurrentIcon className="w-8 h-8 text-white" />
          </div>
          <span className="text-lg text-gray-300 animate-fade-in">
            {steps[currentStep].text}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-96 mx-auto">
          <div className="bg-gray-800 rounded-full h-2 mb-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-100 ease-out shadow-lg shadow-cyan-500/50"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-cyan-400 font-mono text-lg">
            {progress.toFixed(0)}%
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping delay-500"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
