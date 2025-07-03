
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Cloud, Sparkles, Bot, CircuitBoard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Terms = () => {
  const terms = [
    {
      icon: CheckCircle,
      title: "Layanan yang Diizinkan",
      content: [
        "Website bisnis dan personal yang legal",
        "Aplikasi web dan mobile development",
        "Database dan sistem manajemen data",
        "Backup dan storage legal",
        "Testing dan development environment"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: XCircle,
      title: "Aktivitas yang Dilarang",
      content: [
        "Konten ilegal, berbahaya, atau melanggar hukum",
        "Spam, phishing, atau aktivitas jahat lainnya",
        "Mining cryptocurrency tanpa izin",
        "Overload server atau penyalahgunaan resources",
        "Pelanggaran hak cipta atau intellectual property"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Scale,
      title: "Hak dan Kewajiban",
      content: [
        "Hak akses penuh ke VPS Anda",
        "Kewajiban menjaga keamanan akun",
        "Backup data adalah tanggung jawab pengguna",
        "Pembayaran tepat waktu sesuai paket",
        "Kepatuhan terhadap terms of service"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: AlertTriangle,
      title: "Pembatasan Layanan",
      content: [
        "Fair usage policy untuk bandwidth",
        "Resource sharing pada shared hosting",
        "Maintenance terjadwal tanpa refund",
        "Suspension untuk pelanggaran ToS",
        "Terminasi akun untuk pelanggaran berat"
      ],
      color: "from-orange-500 to-red-500"
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
              <Link to="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link>
              <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
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
          <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
            <Sparkles className="mr-2 h-4 w-4" />
            Terms of Service
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Service Terms
            </span>
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <CircuitBoard className="w-8 h-8 text-cyan-400" />
            <p className="text-2xl md:text-3xl text-gray-200 font-light">
              Advanced Cloud Service Agreement
            </p>
          </div>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Panduan lengkap penggunaan layanan Clouding yang adil dan transparan dengan teknologi cloud terdepan
          </p>
          <p className="text-sm text-gray-400">
            Terakhir diperbarui: 2 Juli 2024
          </p>
        </div>
      </section>

      {/* Terms Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {terms.map((term, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${term.color} group-hover:scale-110 transition-transform duration-300`}>
                      <term.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{term.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {term.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Ketentuan Tambahan</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-cyan-500/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-lg font-semibold text-white mb-3">SLA & Uptime</h3>
                  <p className="text-gray-300 text-sm">
                    Kami berkomitmen memberikan uptime 99.9% untuk VPS dengan teknologi AI monitoring. 
                    Jika tidak tercapai dalam sebulan, Anda berhak mendapat service credit sesuai kebijakan SLA kami.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-purple-400/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-lg font-semibold text-white mb-3">Refund Policy</h3>
                  <p className="text-gray-300 text-sm">
                    Garansi uang kembali 30 hari untuk pelanggan baru yang tidak puas dengan layanan cloud kami. 
                    Syarat dan ketentuan berlaku.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Pertanyaan tentang Terms?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Tim legal kami siap membantu menjelaskan syarat dan ketentuan layanan
          </p>
          <a 
            href="mailto:legal@clouding.id" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
          >
            <FileText className="mr-2 h-5 w-5" />
            Hubungi Tim Legal
          </a>
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
                Next-generation cloud platform dengan terms yang transparan.
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

export default Terms;
