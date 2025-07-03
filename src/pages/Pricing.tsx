
import { Check, X, Star, Zap, Container, Rocket, Cloud, Sparkles, Bot, CircuitBoard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Pricing = () => {
  const vpsPlans = [
    {
      name: "Starter",
      price: "20.000",
      originalPrice: "30.000",
      icon: Rocket,
      description: "Perfect untuk pemula dan project kecil dengan Docker Container",
      features: [
        "1 CPU Core",
        "1 GB RAM",
        "20 GB SSD Storage",
        "Unlimited Bandwidth",
        "1 IPv4 Address",
        "Docker Container Ready",
        "Basic Support",
        "99.9% Uptime Target"
      ],
      limitations: [
        "No Backup Service",
        "Limited to 1 Domain"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Developer",
      price: "50.000",
      originalPrice: "75.000",
      icon: Container,
      description: "Ideal untuk developer dan aplikasi medium dengan multi-container",
      features: [
        "2 CPU Cores",
        "2 GB RAM",
        "50 GB SSD Storage",
        "Unlimited Bandwidth",
        "1 IPv4 Address",
        "Multiple Docker Containers",
        "Priority Support",
        "99.9% Uptime Target",
        "Weekly Backup",
        "SSL Certificate",
        "Docker Compose Support"
      ],
      limitations: [],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Business",
      price: "100.000",
      originalPrice: "150.000",
      icon: Zap,
      description: "Solusi lengkap untuk bisnis dan aplikasi production-ready",
      features: [
        "4 CPU Cores",
        "4 GB RAM",
        "100 GB SSD Storage",
        "Unlimited Bandwidth",
        "2 IPv4 Address",
        "Unlimited Docker Containers",
        "24/7 Premium Support",
        "99.95% Uptime Target",
        "Daily Backup",
        "SSL Certificate",
        "Docker Swarm Ready",
        "Load Balancer Support",
        "Monitoring Dashboard"
      ],
      limitations: [],
      popular: false,
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    {
      feature: "CPU Cores",
      starter: "1 Core",
      developer: "2 Cores",
      business: "4 Cores"
    },
    {
      feature: "RAM Memory",
      starter: "1 GB",
      developer: "2 GB",
      business: "4 GB"
    },
    {
      feature: "SSD Storage",
      starter: "20 GB",
      developer: "50 GB",
      business: "100 GB"
    },
    {
      feature: "Bandwidth",
      starter: "Unlimited",
      developer: "Unlimited",
      business: "Unlimited"
    },
    {
      feature: "Docker Containers",
      starter: "1 Container",
      developer: "Multiple",
      business: "Unlimited"
    },
    {
      feature: "Backup Service",
      starter: false,
      developer: true,
      business: true
    },
    {
      feature: "SSL Certificate",
      starter: false,
      developer: true,
      business: true
    },
    {
      feature: "Docker Compose",
      starter: false,
      developer: true,
      business: true
    },
    {
      feature: "Load Balancer",
      starter: false,
      developer: false,
      business: true
    },
    {
      feature: "24/7 Support",
      starter: false,
      developer: true,
      business: true
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
              <Link to="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
              <Link to="/pricing" className="text-cyan-400 font-medium">Pricing</Link>
              <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30 px-4 py-2">
            <Sparkles className="mr-2 h-4 w-4" />
            Enterprise Pricing
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Future Pricing
            </span>
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <CircuitBoard className="w-8 h-8 text-cyan-400" />
            <p className="text-2xl md:text-3xl text-gray-200 font-light">
              Advanced Cloud Computing Plans
            </p>
          </div>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Pilih paket VPS Docker yang sesuai dengan kebutuhan dan budget Anda. Platform cloud baru dengan harga kompetitif.
          </p>
          <Badge className="bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 border-red-500/30 text-lg px-6 py-3">
            🎉 Promo Launch: Diskon hingga 33%!
          </Badge>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {vpsPlans.map((plan, index) => (
              <Card key={index} className={`relative group transition-all duration-500 hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-2 border-purple-400/50 shadow-2xl shadow-purple-500/25' 
                  : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20 hover:border-cyan-400/50'
              } backdrop-blur-sm overflow-hidden`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 px-4 py-2 text-sm">
                      🔥 MOST POPULAR
                    </Badge>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <CardHeader className="text-center pb-4 pt-8 relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className={`p-6 rounded-2xl bg-gradient-to-r ${plan.color} shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <plan.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl mb-2 text-white">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-300 text-base mb-6">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-gray-400 line-through text-lg">Rp {plan.originalPrice}</span>
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/30">-33%</Badge>
                    </div>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Rp {plan.price}
                      </span>
                      <span className="text-gray-400 ml-2">/bulan</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 px-6 pb-8 relative z-10">
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, idx) => (
                      <div key={idx} className="flex items-center gap-3 opacity-60">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-gray-400">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full rounded-full py-3 text-lg font-semibold ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/25'
                    } transition-all duration-300 hover:scale-105`}
                  >
                    <Container className="mr-2 h-5 w-5" />
                    Pilih {plan.name}
                  </Button>
                  
                  <p className="text-center text-gray-400 text-sm">
                    Setup gratis • Garansi 7 hari • No hidden fees
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Perbandingan Paket VPS Docker</h2>
            <p className="text-gray-400 text-lg">Detail lengkap semua fitur yang tersedia di setiap paket</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-cyan-500/20">
                      <th className="text-left p-6 text-white font-semibold">Fitur</th>
                      <th className="text-center p-6 text-white font-semibold">Starter</th>
                      <th className="text-center p-6 text-white font-semibold relative">
                        Developer
                        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs">
                          Popular
                        </Badge>
                      </th>
                      <th className="text-center p-6 text-white font-semibold">Business</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((item, index) => (
                      <tr key={index} className="border-b border-gray-700/30 hover:bg-cyan-500/5 transition-colors">
                        <td className="p-4 text-gray-300 font-medium">{item.feature}</td>
                        <td className="p-4 text-center">
                          {typeof item.starter === 'boolean' ? (
                            item.starter ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-300">{item.starter}</span>
                          )}
                        </td>
                        <td className="p-4 text-center bg-purple-500/10">
                          {typeof item.developer === 'boolean' ? (
                            item.developer ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-purple-300 font-semibold">{item.developer}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof item.business === 'boolean' ? (
                            item.business ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-orange-300 font-semibold">{item.business}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
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
              Bergabunglah dengan revolusi cloud computing Indonesia dengan harga terjangkau
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-6 text-xl rounded-xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 border border-cyan-400/20">
                <Container className="mr-3 h-6 w-6" />
                Mulai dari Rp 20.000
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-purple-400/50 text-purple-400 hover:bg-purple-400/10 px-12 py-6 text-xl rounded-xl backdrop-blur-sm hover:border-purple-400 transition-all duration-300">
                <Bot className="mr-3 h-6 w-6" />
                Konsultasi Gratis
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

export default Pricing;
