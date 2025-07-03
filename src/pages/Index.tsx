
import { Cloud, CloudUpload, CloudDownload, Server, Globe, Shield, Zap, Users, Check, ArrowRight, Star, Rocket, Code, Database, Container, HardDrive, Cpu, Network, Sparkles, CircuitBoard, Bot, Terminal, Layers, Activity, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animateElements, setAnimateElements] = useState(false);

  useEffect(() => {
    // Trigger animations after loading is complete
    const timer = setTimeout(() => {
      setAnimateElements(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative">
      {/* Professional Animated Background */}
      <div className="absolute inset-0">
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Moving particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full animate-particle-1"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-400/40 rounded-full animate-particle-2"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-400/35 rounded-full animate-particle-3"></div>
          <div className="absolute top-1/2 right-20 w-2 h-2 bg-blue-300/25 rounded-full animate-particle-4"></div>
        </div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className={`flex items-center space-x-3 ${animateElements ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg">
                <img 
                  src="/uploads/9b4e90f8-4b9d-4dba-b97a-99d77e8f347b.png" 
                  alt="Clouding Logo" 
                  className="w-6 h-6"
                />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  Clouding
                </span>
                <div className="text-xs text-gray-400 -mt-1">Cloud Platform</div>
              </div>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs px-2 py-1">
                LIVE
              </Badge>
            </div>
            <div className={`hidden md:flex items-center space-x-6 ${animateElements ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <Link to="/" className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
                Home
              </Link>
              <Link to="/services" className="hover:text-blue-400 transition-colors">
                Services
              </Link>
              <Link to="/pricing" className="hover:text-blue-400 transition-colors">
                Pricing
              </Link>
              <Link to="/about" className="hover:text-blue-400 transition-colors">
                About
              </Link>
              <a
                href="https://dosnet.my.id/cgi-bin/form.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" />
                Deploy VPS
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Left Right Layout */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className={`flex items-center gap-2 ${animateElements ? 'animate-fade-in' : 'opacity-0'}`}>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Next-Generation Cloud Infrastructure
                </Badge>
              </div>
              
              <div className="space-y-6">
                <h1 className={`text-4xl md:text-6xl font-bold leading-tight ${animateElements ? 'animate-scale-in' : 'opacity-0'}`}>
                  <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                    CLOUDING
                  </span>
                </h1>
                
                <p className={`text-xl md:text-2xl text-gray-200 font-light ${animateElements ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                  Professional Cloud Computing Platform
                </p>
                
                <p className={`text-lg text-gray-400 leading-relaxed max-w-xl ${animateElements ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                  Platform cloud computing modern dengan teknologi Docker Container, 
                  infrastruktur yang handal, dan performa tinggi untuk kebutuhan bisnis Indonesia
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 ${animateElements ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                <a
                  href="https://dosnet.my.id/cgi-bin/form.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                    <Rocket className="mr-3 h-5 w-5" />
                    Deploy VPS Docker
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg rounded-lg transition-all duration-300">
                  <Bot className="mr-3 h-5 w-5" />
                  Pelajari Lebih Lanjut
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 ${animateElements ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
                {[
                  { number: "99.9%", label: "Uptime", icon: Zap },
                  { number: "24/7", label: "Support", icon: Users },
                  { number: "New", label: "Platform", icon: Star },
                  { number: "2025", label: "Launched", icon: Rocket }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                      <stat.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Logo & Visual */}
            <div className="flex items-center justify-center">
              <div className={`relative ${animateElements ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl scale-150 animate-pulse-glow"></div>
                
                {/* Logo container */}
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 shadow-2xl">
                  <img 
                    src="/uploads/9b4e90f8-4b9d-4dba-b97a-99d77e8f347b.png" 
                    alt="Clouding - Cloud Computing Platform" 
                    className="w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating elements around logo */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full animate-float"></div>
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500/20 rounded-full animate-float-delayed"></div>
                  <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-500/20 rounded-full animate-float-slow"></div>
                </div>
                
                {/* Tech stack indicators */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  {[Container, Shield, Zap].map((Icon, index) => (
                    <div key={index} className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-3 border border-gray-600/30">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 relative">
        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: Container, 
                title: "Docker Technology", 
                description: "Containerization modern untuk isolasi dan performa optimal", 
                color: "from-blue-600 to-cyan-600" 
              },
              { 
                icon: Shield, 
                title: "Keamanan Tinggi", 
                description: "Proteksi berlapis dengan firewall dan monitoring real-time", 
                color: "from-purple-600 to-violet-600" 
              },
              { 
                icon: Zap, 
                title: "Performa Cepat", 
                description: "SSD NVMe dan infrastruktur modern untuk kecepatan maksimal", 
                color: "from-orange-600 to-red-600" 
              }
            ].map((feature, index) => (
              <div key={index} className={`text-center ${animateElements ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `${1.2 + index * 0.2}s` }}>
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
                  <div className={`bg-gradient-to-r ${feature.color} rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Docker Technology Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-purple-900/10"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
              <Container className="mr-2 h-4 w-4" />
              Container Technology
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Docker-Powered Infrastructure
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Teknologi containerization modern dengan AI orchestration dan deployment yang efisien
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: HardDrive,
                title: "Resource Isolation",
                description: "Setiap container memiliki resource yang terisolasi dan terjamin"
              },
              {
                icon: Cpu,
                title: "Lightweight & Fast",
                description: "Boot time cepat dan penggunaan resource yang efisien"
              },
              {
                icon: Network,
                title: "Easy Scaling",
                description: "Scale up/down dengan mudah sesuai kebutuhan aplikasi"
              },
              {
                icon: Code,
                title: "Multiple Stacks",
                description: "Support berbagai teknologi: PHP, Node.js, Python, dan lainnya"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-800/40 backdrop-blur-sm border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2">
              <Server className="mr-2 h-4 w-4" />
              Cloud Solutions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Layanan Cloud Profesional
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Solusi cloud computing lengkap dengan teknologi terdepan untuk mendukung bisnis Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Container,
                title: "VPS Docker",
                description: "Virtual Private Server dengan teknologi Docker Container untuk fleksibilitas maksimal",
                features: ["Docker Container Ready", "Full Root Access", "Support PHP, MySQL & WordPress"],
                available: true,
                price: "Mulai dari Rp 20.000/bulan",
                badge: "🚀 Tersedia Sekarang"
              },
              {
                icon: Globe,
                title: "Web Hosting",
                description: "Hosting website dengan uptime tinggi dan performa optimal",
                features: ["SSL Gratis", "cPanel", "Unlimited Bandwidth"],
                available: false,
                price: "Segera Hadir",
                badge: "🔜 Coming Soon",
                comingSoon: "Q3 2025"
              },
              {
                icon: CloudUpload,
                title: "NextCloud",
                description: "Solusi cloud storage pribadi dengan keamanan end-to-end",
                features: ["End-to-End Encryption", "File Sharing", "Collaborative Tools"],
                available: false,
                price: "Segera Hadir",
                badge: "🔜 Coming Soon",
                comingSoon: "Q4 2025"
              }
            ].map((service, index) => (
              <Card key={index} className={`relative transition-all duration-500 hover:scale-105 ${
                service.available 
                  ? 'bg-gray-800/50 border-cyan-500/30 hover:border-cyan-400/60' 
                  : 'bg-gray-900/40 border-gray-700/50'
              } backdrop-blur-sm`}>
                <div className="absolute -top-3 -right-3">
                  <Badge className={`${
                    service.available 
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white' 
                      : 'bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300'
                  } border-0 px-3 py-1`}>
                    {service.badge}
                  </Badge>
                </div>
                
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-6">
                    <div className={`p-6 rounded-xl ${
                      service.available 
                        ? 'bg-gradient-to-br from-cyan-600 to-blue-700' 
                        : 'bg-gradient-to-br from-gray-600 to-gray-700'
                    }`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-4 text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-base">
                    {service.description}
                  </CardDescription>
                  {service.comingSoon && (
                    <Badge className="mt-3 bg-orange-500/20 text-orange-300 border-orange-500/30 px-3 py-1">
                      Target: {service.comingSoon}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-700/50">
                    <p className="text-2xl font-bold text-center mb-6">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {service.price}
                      </span>
                    </p>
                  </div>
                  {service.available ? (
                    <a
                      href="https://dosnet.my.id/cgi-bin/form.sh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full rounded-lg py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 transition-all duration-300">
                        <Rocket className="mr-2 h-4 w-4" />
                        Deploy Sekarang
                      </Button>
                    </a>
                  ) : (
                    <Button className="w-full rounded-lg py-3 bg-gray-600 cursor-not-allowed hover:bg-gray-600" disabled>
                      <Clock className="mr-2 h-4 w-4" />
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2">
              <Shield className="mr-2 h-4 w-4" />
              Platform Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Mengapa Memilih Clouding?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Infrastruktur cloud dengan standar enterprise, dilengkapi dengan monitoring AI dan keamanan berlapis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Container, 
                title: "Docker Technology", 
                description: "Containerization modern untuk isolasi dan performa optimal", 
                color: "from-blue-600 to-cyan-600" 
              },
              { 
                icon: Shield, 
                title: "Keamanan Tinggi", 
                description: "Proteksi berlapis dengan firewall dan monitoring real-time", 
                color: "from-purple-600 to-violet-600" 
              },
              { 
                icon: Zap, 
                title: "Performa Cepat", 
                description: "SSD NVMe dan infrastruktur modern untuk kecepatan maksimal", 
                color: "from-orange-600 to-red-600" 
              },
              { 
                icon: Users, 
                title: "Support Responsif", 
                description: "Tim teknis berpengalaman siap membantu", 
                color: "from-green-600 to-emerald-600" 
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <div className={`bg-gradient-to-r ${feature.color} rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-8 bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-6 py-3 text-lg">
              <Sparkles className="mr-2 h-5 w-5" />
              Siap untuk Deploy?
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Mulai Journey Cloud Anda
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Bergabunglah dengan revolusi cloud computing Indonesia. 
              Infrastruktur modern, harga terjangkau, teknologi masa depan.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://dosnet.my.id/cgi-bin/form.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white px-10 py-4 text-xl rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                  <Container className="mr-3 h-6 w-6" />
                  Deploy VPS Docker
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-2 border-purple-400/50 text-purple-400 hover:bg-purple-400/10 px-10 py-4 text-xl rounded-lg backdrop-blur-sm hover:border-purple-400 transition-all duration-300">
                <Bot className="mr-3 h-6 w-6" />
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black/60 backdrop-blur-xl py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
                  <img 
                    src="/uploads/9b4e90f8-4b9d-4dba-b97a-99d77e8f347b.png" 
                    alt="Clouding Logo" 
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                    Clouding
                  </span>
                  <div className="text-xs text-gray-400 -mt-1">Cloud Platform</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Platform cloud computing modern untuk mendukung transformasi digital Indonesia.
              </p>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                <Sparkles className="mr-1 h-3 w-3" />
                Launched 2025
              </Badge>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a 
                    href="https://dosnet.my.id/cgi-bin/form.sh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                  >
                    <Container className="w-4 h-4" />
                    VPS Docker (Available)
                  </a>
                </li>
                <li><span className="text-gray-600 flex items-center gap-2"><Globe className="w-4 h-4" />Web Hosting (Q3 2025)</span></li>
                <li><span className="text-gray-600 flex items-center gap-2"><CloudUpload className="w-4 h-4" />NextCloud (Q4 2025)</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link></li>
                <li><Link to="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link></li>
                <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
                <li><a href="mailto:support@clouding.id" className="hover:text-cyan-400 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Clouding. Platform cloud computing modern untuk Indonesia. 
              <span className="text-blue-400"> Built with excellence.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
