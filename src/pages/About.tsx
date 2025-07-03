
import { Users, Award, Shield, Zap, Globe, Cloud, Heart, Target, Code, Server, Sparkles, Bot, CircuitBoard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Arya Widyanto",
      role: "CEO & Devops Engineer",
      image: "https://images.unslash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Expert dalam cloud architecture dan security"
    },
    {
      name: "Adissahhillna",
      role: "Front-end Developer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=400&h=400&fit=crop&crop=face",
      description: "Expert dalam implementasi ui ke website"
    },
    {
      name: "Muhammad Malik Haryanto",
      role: "Front-end Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Expert dalam implementasi ui ke website"
    },
    {
      name: "Dani Yudanta Prapaskia",
      role: "Marketing Spesialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Memastikan produk dapat diminati pelanggan"
    }
    {
      name: "Aji Bayu Wicaksono",
      role: "Marketing Spesialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Memastikan produk dapat diminati pelanggan"
    }
    {
      name: "Amirullah ahnaf agil",
      role: "Marketing Spesialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Membuat ui/ux sebelum tahap development"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Keamanan Pertama",
      description: "Keamanan data dan privasi pelanggan adalah prioritas utama kami",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Performa Tinggi",
      description: "Infrastruktur modern dengan teknologi terdepan untuk performa optimal",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Customer-Centric",
      description: "Kami menempatkan kebutuhan dan kepuasan pelanggan di atas segalanya",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Target,
      title: "Inovasi Berkelanjutan",
      description: "Terus berinovasi untuk memberikan solusi cloud terbaik",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const stats = [
    { number: "10k+", label: "Happy Customers", icon: Users },
    { number: "99.99%", label: "Uptime SLA", icon: Zap },
    { number: "24/7", label: "Support", icon: Shield },
    { number: "5+", label: "Years Experience", icon: Award }
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
              <Link to="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
              <Link to="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link>
              <Link to="/about" className="text-cyan-400 font-medium">About</Link>
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
          <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30 px-4 py-2">
            <Sparkles className="mr-2 h-4 w-4" />
            About Clouding
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Our Story
            </span>
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <CircuitBoard className="w-8 h-8 text-cyan-400" />
            <p className="text-2xl md:text-3xl text-gray-200 font-light">
              Pioneering Indonesia's Digital Future
            </p>
          </div>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Perjalanan kami dimulai dengan satu misi sederhana: membuat teknologi cloud yang powerful 
            dan terjangkau untuk semua bisnis di Indonesia dengan teknologi AI dan container terdepan.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <stat.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4 relative z-10" />
                  <div className="text-4xl font-bold text-white mb-2 relative z-10">{stat.number}</div>
                  <div className="text-gray-400 relative z-10">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Misi Kami</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Memberikan solusi cloud computing yang handal, aman, dan terjangkau untuk semua 
                  skala bisnis di Indonesia dengan teknologi AI dan container terdepan untuk mendukung transformasi digital.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <Globe className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Visi Kami</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Menjadi penyedia layanan cloud terpercaya di Asia Tenggara yang memberdayakan 
                  bisnis untuk berkembang di era digital dengan teknologi masa depan yang canggih dan terjangkau.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Nilai-Nilai Kami</h2>
            <p className="text-gray-400 text-lg">Prinsip yang memandu setiap keputusan dan tindakan kami</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700/20 hover:border-white/40 transition-all duration-300 group hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 text-center relative z-10">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Tim Kami</h2>
            <p className="text-gray-400 text-lg">Para ahli yang berdedikasi untuk kesuksesan Anda</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700/20 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 text-center relative z-10">
                  <div className="relative mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
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
              Join Our Journey
            </Badge>
            <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
              Build The Future Together
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Rasakan pengalaman cloud computing terbaik bersama tim yang berpengalaman dan infrastruktur yang handal
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-6 text-xl rounded-xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 border border-cyan-400/20">
                <Code className="mr-3 h-6 w-6" />
                Mulai Sekarang
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-purple-400/50 text-purple-400 hover:bg-purple-400/10 px-12 py-6 text-xl rounded-xl backdrop-blur-sm hover:border-purple-400 transition-all duration-300">
                <Users className="mr-3 h-6 w-6" />
                Hubungi Tim
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
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/services" className="hover:text-cyan-400 transition-colors">VPS Docker</Link></li>
                <li><span className="text-gray-600">Web Hosting (Q3 2024)</span></li>
                <li><span className="text-gray-600">NextCloud (Q4 2024)</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link></li>
                <li><Link to="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Legal</h4>
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

export default About;
