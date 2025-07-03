
import { Server, Globe, CloudUpload, Database, Shield, Zap, Users, Cloud, Code, Cpu, HardDrive, Wifi, Container, Sparkles, Bot, CircuitBoard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Container,
      title: "VPS Docker",
      description: "Virtual Private Server dengan teknologi Docker Container untuk fleksibilitas dan performa maksimal",
      features: ["Docker Container Technology", "Full Root Access", "Support PHP, MySQL & WordPress", "SSD NVMe Storage"],
      specs: ["CPU: 1-4 Cores", "RAM: 1-8 GB", "Storage: 20-200 GB SSD", "Bandwidth: Unlimited"],
      price: "Mulai dari Rp 20.000/bulan",
      available: true,
      popular: true,
      color: "from-blue-500 to-cyan-500",
      badge: "🚀 Available Now"
    },
    {
      icon: Globe,
      title: "Web Hosting",
      description: "Hosting website berkualitas tinggi dengan uptime 99.9% dan support teknis terbaik",
      features: ["SSL Certificate Gratis", "cPanel Control Panel", "Auto Backup Harian", "CDN Global"],
      specs: ["Storage: 10-100 GB", "Bandwidth: Unlimited", "Email: Unlimited", "Database: MySQL/PostgreSQL"],
      price: "Target: Q3 2024",
      available: false,
      color: "from-green-500 to-emerald-500",
      badge: "🔜 Coming Soon"
    },
    {
      icon: CloudUpload,
      title: "NextCloud",
      description: "Solusi cloud storage pribadi dengan keamanan end-to-end encryption untuk data bisnis",
      features: ["End-to-End Encryption", "File Sharing & Collaboration", "Office Online Integration", "Mobile Apps"],
      specs: ["Storage: 100 GB - 10 TB", "Users: 10-1000", "API Access", "Custom Branding"],
      price: "Target: Q4 2024",
      available: false,
      color: "from-purple-500 to-pink-500",
      badge: "🔜 Coming Soon"
    }
  ];

  const dockerAdvantages = [
    {
      icon: Container,
      title: "Container Isolation",
      description: "Setiap aplikasi berjalan dalam container terpisah untuk keamanan maksimal",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Fast Deployment",
      description: "Deploy aplikasi dalam hitungan detik dengan container technology",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: HardDrive,
      title: "Resource Efficiency",
      description: "Optimalisasi penggunaan resource server untuk performa terbaik",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Code,
      title: "Multi-Stack Support",
      description: "Support berbagai teknologi: PHP, Node.js, Python, Ruby, dan lainnya",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Clouding
              </span>
              <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30 text-xs">
                v2024
              </Badge>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/services" className="text-cyan-400 font-medium">Services</Link>
              <Link to="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link>
              <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30 px-4 py-2">
            <Sparkles className="mr-2 h-4 w-4" />
            Next-Gen Cloud Services
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Advanced Services
            </span>
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <CircuitBoard className="w-8 h-8 text-cyan-400" />
            <p className="text-2xl md:text-3xl text-gray-200 font-light">
              Enterprise-Grade Infrastructure
            </p>
          </div>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Platform cloud computing terdepan dengan teknologi Docker Container, 
            arsitektur mikroservice, dan AI-powered management untuk masa depan digital Indonesia
          </p>
        </div>
      </section>

      {/* Docker Technology Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-purple-900/10"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
              <Container className="mr-2 h-4 w-4" />
              Advanced Container Technology
            </Badge>
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Docker-Powered Infrastructure
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Memanfaatkan teknologi containerization terdepan untuk memberikan isolasi sempurna, 
              skalabilitas otomatis, dan deployment yang lightning-fast
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {dockerAdvantages.map((advantage, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${advantage.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25`}>
                    <advantage.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-cyan-900/10"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30 px-4 py-2">
              <Server className="mr-2 h-4 w-4" />
              Cloud Services Portfolio
            </Badge>
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Future-Ready Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ekosistem cloud computing lengkap yang dirancang untuk mendukung transformasi digital 
              perusahaan modern dengan teknologi paling advanced
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className={`relative group transition-all duration-500 hover:scale-105 hover:-translate-y-4 ${
                service.available 
                  ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-cyan-500/30 hover:border-cyan-400/70 shadow-2xl shadow-cyan-500/10' 
                  : 'bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50'
              } backdrop-blur-sm overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -top-4 -right-4">
                  <Badge className={`${
                    service.available 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg' 
                      : 'bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300'
                  } border-0 px-3 py-1`}>
                    {service.badge}
                  </Badge>
                </div>
                
                <CardHeader className="text-center pb-6 relative z-10">
                  <div className="flex justify-center mb-8">
                    <div className={`p-8 rounded-2xl ${
                      service.available 
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl shadow-cyan-500/25' 
                        : 'bg-gradient-to-br from-gray-600 to-gray-700'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-4 text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-8 relative z-10">
                  <div className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Spesifikasi:</h4>
                    <div className="space-y-2">
                      {service.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Cpu className="w-4 h-4 text-cyan-400" />
                          <span className="text-gray-400 text-sm">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-700/50">
                    <p className="text-2xl font-semibold text-center mb-6">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {service.price}
                      </span>
                    </p>
                    <Button 
                      className={`w-full rounded-xl py-3 ${
                        service.available 
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 border border-cyan-400/20' 
                          : 'bg-gray-600 cursor-not-allowed hover:bg-gray-600'
                      } transition-all duration-300`}
                      disabled={!service.available}
                    >
                      {service.available ? 'Launch Now' : 'Coming Soon'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30 px-6 py-3 text-lg">
              <Sparkles className="mr-2 h-5 w-5" />
              Ready to Deploy?
            </Badge>
            <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
              Launch Your Digital Future
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Bergabunglah dengan revolusi cloud computing Indonesia. 
              Infrastruktur canggih, harga terjangkau, teknologi masa depan.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-6 text-xl rounded-xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 border border-cyan-400/20">
                <Container className="mr-3 h-6 w-6" />
                Deploy VPS Docker
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-purple-400/50 text-purple-400 hover:bg-purple-400/10 px-12 py-6 text-xl rounded-xl backdrop-blur-sm hover:border-purple-400 transition-all duration-300">
                <Bot className="mr-3 h-6 w-6" />
                Talk to AI Assistant
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 bg-black/40 backdrop-blur-xl py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Clouding
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Next-generation cloud platform untuk era digital Indonesia. 
                Powered by advanced AI dan container technology.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/services" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><Container className="w-4 h-4" />VPS Docker</Link></li>
                <li><span className="text-gray-600 flex items-center gap-2"><Globe className="w-4 h-4" />Web Hosting (Q3 2024)</span></li>
                <li><span className="text-gray-600 flex items-center gap-2"><CloudUpload className="w-4 h-4" />NextCloud (Q4 2024)</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Clouding</Link></li>
                <li><Link to="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Legal & Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
