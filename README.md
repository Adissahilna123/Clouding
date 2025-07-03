

<div align="center">
  <img src="public/lovable-uploads/9b4e90f8-4b9d-4dba-b97a-99d77e8f347b.png" alt="Clouding Logo" width="120" height="120">
  
  # Clouding - Cloud Computing Platform
  
  **Platform cloud computing modern dengan teknologi Docker Container untuk transformasi digital Indonesia**
  
  [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge)](https://github.com/Adissahilna/Clouding)
  [![Deploy VPS](https://img.shields.io/badge/Deploy-VPS-green?style=for-the-badge)](https://dosnet.my.id/cgi-bin/form.sh)
  [![Website](https://img.shields.io/badge/Website-Live-orange?style=for-the-badge)](https://clouding.biz.id)
  [![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
</div>

---

## 🌟 Tentang Clouding

**Clouding** adalah platform cloud computing modern yang dirancang khusus untuk mendukung transformasi digital di Indonesia. Dengan teknologi Docker Container, infrastruktur yang handal, dan performa tinggi, kami menyediakan solusi cloud yang professional dan terjangkau.

### ✨ Fitur Utama

- 🐳 **Docker Technology** - Containerization modern untuk isolasi dan performa optimal
- 🛡️ **Keamanan Tinggi** - Proteksi berlapis dengan firewall dan monitoring real-time
- ⚡ **Performa Cepat** - SSD NVMe dan infrastruktur modern untuk kecepatan maksimal
- 👥 **Support Responsif** - Tim teknis berpengalaman siap membantu 24/7
- 🎯 **99.9% Uptime** - Infrastruktur dengan standar enterprise
- 💰 **Harga Terjangkau** - Mulai dari Rp 20.000/bulan

---

## 🚀 Layanan Tersedia

### 1. VPS Docker (✅ Tersedia Sekarang)
- **Docker Container Ready** - Siap pakai dengan teknologi containerization
- **Full Root Access** - Kontrol penuh atas server Anda
- **Support Multi-Stack** - PHP, MySQL, WordPress, Node.js, Python
- **Auto Scaling** - Scale up/down sesuai kebutuhan
- **Harga**: Mulai dari Rp 20.000/bulan
- **Deploy**: [Klik di sini](https://dosnet.my.id/cgi-bin/form.sh)

### 2. Web Hosting (🔜 Q3 2025)
- SSL Gratis dengan Let's Encrypt
- cPanel untuk manajemen mudah
- Unlimited Bandwidth
- Support WordPress & CMS populer

### 3. NextCloud Storage (🔜 Q4 2025)
- End-to-End Encryption
- File Sharing & Collaboration
- Sinkronisasi multi-device
- Private cloud storage solution

---

## 🛠️ Teknologi Stack

Website ini dibangun menggunakan teknologi modern:

- **Frontend Framework**: React 18+ dengan TypeScript
- **Build Tool**: Vite untuk development yang cepat
- **Styling**: Tailwind CSS untuk desain yang responsif
- **UI Components**: Shadcn/ui untuk komponen yang konsisten
- **Icons**: Lucide React untuk ikon yang modern
- **Animations**: CSS Animations untuk animasi yang smooth
- **Routing**: React Router DOM untuk navigasi SPA
- **Charts**: Recharts untuk visualisasi data
- **Backend Integration**: Supabase untuk database dan autentikasi

---

## 🔧 Development Setup

### Prerequisites

Pastikan Anda memiliki software berikut terinstall:

- **Node.js** (versi 18 atau lebih baru)
- **npm** atau **yarn** sebagai package manager
- **Git** untuk version control

### Quick Start

```bash
# 1. Clone repository
git clone https://github.com/Adissahilna/Clouding.git
cd Clouding

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser dan akses
# http://localhost:5173
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Type checking
npm run type-check   # Check TypeScript types
```

---

## 🚀 Deployment Guide

### 1. Manual Deployment (Vercel)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel --prod

# Follow the prompts untuk konfigurasi
```

### 2. Manual Deployment (Netlify)

```bash
# Build project
npm run build

# Deploy dist folder ke Netlify
# Atau gunakan Netlify CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### 3. Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```bash
# Build & Run Docker container
docker build -t clouding-platform .
docker run -p 80:80 clouding-platform
```

### 4. VPS Deployment (Self-Hosted)

```bash
# Di VPS Ubuntu/Debian
sudo apt update
sudo apt install nginx nodejs npm

# Clone & build project
git clone https://github.com/Adissahilna/Clouding.git
cd clouding
npm install
npm run build

# Setup Nginx
sudo cp dist/* /var/www/html/
sudo systemctl restart nginx
```

### 5. Server Deployment dengan PM2

```bash
# Install PM2 globally
npm install -g pm2

# Build production
npm run build

# Serve dengan PM2
npm install -g serve
pm2 start "serve -s dist -l 3000" --name clouding

# Setup PM2 startup
pm2 startup
pm2 save
```

### 6. Apache Deployment

```bash
# Install Apache
sudo apt install apache2

# Build project
npm run build

# Copy files
sudo cp -r dist/* /var/www/html/

# Setup .htaccess untuk SPA
echo "RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]" | sudo tee /var/www/html/.htaccess

# Enable mod_rewrite
sudo a2enmod rewrite
sudo systemctl restart apache2
```

---

## 🌐 Environment Variables

Untuk production deployment, set environment variables berikut:

```bash
# .env.production
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_APP_URL=https://clouding.biz.id
```

---

## 📊 Performance & Monitoring

### Website Performance
- **Lighthouse Score**: 95+ pada semua metrik
- **Core Web Vitals**: Optimized untuk SEO dan UX
- **Bundle Size**: Optimized dengan code splitting

### Monitoring Tools
- **Google Analytics** - Traffic dan user behavior
- **Sentry** - Error tracking dan monitoring
- **Uptime Kuma** - Server uptime monitoring

---

## 🤝 Contributing

Kami menyambut kontribusi dari komunitas! Berikut cara berkontribusi:

### Development Workflow

```bash
# 1. Fork repository
# 2. Create feature branch
git checkout -b feature/amazing-feature

# 3. Make changes dan commit
git add .
git commit -m "feat: add amazing feature"

# 4. Push ke branch
git push origin feature/amazing-feature

# 5. Create Pull Request
```

### Code Standards
- **TypeScript** - Type safety untuk semua code
- **ESLint** - Code quality dan consistency
- **Prettier** - Code formatting
- **Conventional Commits** - Commit message format

---

## 📞 Support & Contact

### 🆘 Technical Support
- **Email**: support@clouding.id
- **Response Time**: < 24 jam
- **Available**: 24/7 untuk critical issues

### 🌐 Links
- **Website**: [clouding.biz.id](https://clouding.biz.id)
- **GitHub**: [github.com/Adissahilna/Clouding](https://github.com/Adissahilna/Clouding)
- **Documentation**: [docs.clouding.biz.id](https://docs.clouding.biz.id)
- **Status Page**: [status.clouding.biz.id](https://status.clouding.biz.id)
- **Deploy VPS**: [Deploy Now](https://dosnet.my.id/cgi-bin/form.sh)

### 🗺️ Roadmap
- **Q3 2025**: Web Hosting Service Launch
- **Q4 2025**: NextCloud Storage Integration
- **Q1 2026**: Kubernetes Orchestration
- **Q2 2026**: Edge Computing Locations

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🎯 Project Stats

<div align="center">
  <img src="https://img.shields.io/github/stars/Adissahilna/Clouding?style=social" alt="GitHub Stars">
  <img src="https://img.shields.io/github/forks/Adissahilna/Clouding?style=social" alt="GitHub Forks">
  <img src="https://img.shields.io/github/issues/Adissahilna/Clouding" alt="GitHub Issues">
  <img src="https://img.shields.io/github/license/Adissahilna/Clouding" alt="License">
</div>

---

<div align="center">
  <h3>🚀 Ready to Deploy?</h3>
  <p>Mulai journey cloud computing Anda bersama Clouding</p>
  
  <a href="https://dosnet.my.id/cgi-bin/form.sh">
    <img src="https://img.shields.io/badge/Deploy%20VPS-Now-blue?style=for-the-badge&logo=docker" alt="Deploy VPS">
  </a>
</div>

---

**Built with ❤️ by Clouding Team | © 2025 Clouding Platform**

