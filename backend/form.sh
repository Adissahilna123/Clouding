#!/bin/bash
echo "Content-type: text/html"
echo ""
patch=$(tr -dc A-Za-z0-9 </dev/urandom | head -c 13 ; echo '')
cat <<EOT
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pendaftaran VPS Docker Container - Clouding</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
        :root {
            --primary-blue: #00B4D8;
            --primary-purple: #7B68EE;
            --primary-pink: #FF69B4;
            --dark-bg: #0A0E1A;
            --dark-card: #1A1F2E;
            --dark-secondary: #2A2F3E;
            --text-light: #E8E8E8;
            --text-secondary: #A8A8A8;
            --gradient-primary: linear-gradient(135deg, #00B4D8 0%, #7B68EE 50%, #FF69B4 100%);
            --gradient-card: linear-gradient(135deg, #1A1F2E 0%, #2A2F3E 100%);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: var(--dark-bg);
            color: var(--text-light);
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Background Animation */
        .bg-animation {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: radial-gradient(circle at 20% 20%, rgba(0, 180, 216, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(123, 104, 238, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 60% 40%, rgba(255, 105, 180, 0.1) 0%, transparent 50%);
        }

        /* Header - Removed */

        /* Hero Section */
        .hero {
            background: var(--dark-bg);
            padding: 40px 0 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--gradient-primary);
            opacity: 0.05;
            z-index: -1;
        }

        .hero-badge {
            display: inline-block;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 25px;
            padding: 0.5rem 1.5rem;
            margin-bottom: 1rem;
            font-size: 0.9rem;
            color: var(--primary-blue);
            border: 1px solid rgba(0, 180, 216, 0.3);
        }

        .hero-title {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1rem;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            line-height: 1.2;
        }

        .hero-subtitle {
            font-size: 1.1rem;
            color: var(--text-secondary);
            margin-bottom: 2rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        /* Form Section */
        .form-section {
            padding: 30px 0;
            background: var(--dark-bg);
        }

        .form-container {
            background: var(--gradient-card);
            border-radius: 20px;
            padding: 2rem;
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            position: relative;
            overflow: hidden;
        }

        .form-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: var(--gradient-primary);
        }

        .section-title {
            color: var(--text-light);
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 2rem;
            text-align: center;
        }

        .form-group {
            margin-bottom: 2rem;
        }

        .form-group label {
            color: var(--text-light);
            font-weight: 600;
            margin-bottom: 0.5rem;
            display: block;
        }

        .form-group label i {
            color: var(--primary-blue);
            margin-right: 0.5rem;
        }

        .form-control {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            color: var(--text-light);
            padding: 1rem;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .form-control:focus {
            background: rgba(255, 255, 255, 0.08);
            border-color: var(--primary-blue);
            box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.2);
            color: var(--text-light);
        }

        .form-control::placeholder {
            color: var(--text-secondary);
        }

        .input-group-text {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: var(--text-secondary);
            border-radius: 0 10px 10px 0;
        }

        .btn-register {
            background: var(--gradient-primary);
            color: white;
            border: none;
            border-radius: 10px;
            padding: 1rem 3rem;
            font-size: 1.1rem;
            font-weight: 600;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .btn-register:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(0, 180, 216, 0.4);
        }

        .btn-register:active {
            transform: translateY(-1px);
        }

        /* Features Section */
        .features-section {
            padding: 100px 0;
            background: var(--dark-bg);
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .feature-card {
            background: var(--gradient-card);
            border-radius: 15px;
            padding: 2.5rem;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--gradient-primary);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .feature-card:hover::before {
            opacity: 0.05;
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .feature-icon {
            width: 80px;
            height: 80px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            font-size: 2rem;
            color: white;
            position: relative;
            z-index: 2;
        }

        .feature-icon.blue {
            background: linear-gradient(135deg, #00B4D8, #0077BE);
        }

        .feature-icon.orange {
            background: linear-gradient(135deg, #FF8C00, #FF6B35);
        }

        .feature-icon.green {
            background: linear-gradient(135deg, #28A745, #20C997);
        }

        .feature-icon.purple {
            background: linear-gradient(135deg, #7B68EE, #9B59B6);
        }

        .feature-card h5 {
            color: var(--text-light);
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 1rem;
            position: relative;
            z-index: 2;
        }

        .feature-card p {
            color: var(--text-secondary);
            line-height: 1.6;
            position: relative;
            z-index: 2;
        }

        /* Additional Features */
        .additional-features {
            margin-top: 4rem;
        }

        .features-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-top: 2rem;
        }

        .feature-item {
            background: rgba(255, 255, 255, 0.05);
            padding: 1rem;
            border-radius: 10px;
            display: flex;
            align-items: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
        }

        .feature-item:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateX(5px);
        }

        .feature-item i {
            color: var(--primary-blue);
            margin-right: 0.8rem;
            font-size: 1.2rem;
        }

        .alert-info {
            background: rgba(0, 180, 216, 0.1);
            border: 1px solid rgba(0, 180, 216, 0.3);
            color: var(--text-light);
            border-radius: 10px;
            padding: 1.5rem;
            margin-top: 3rem;
        }

        /* Footer */
        .footer {
            background: var(--dark-secondary);
            padding: 3rem 0;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer p {
            color: var(--text-secondary);
            margin: 0;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
            .hero-title {
                font-size: 2.5rem;
            }

            .hero-subtitle {
                font-size: 1rem;
            }

            .form-container {
                padding: 2rem;
            }

            .section-title {
                font-size: 2rem;
            }

            .features-grid {
                grid-template-columns: 1fr;
            }

            .features-list {
                grid-template-columns: 1fr;
            }
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .fade-in-up {
            animation: fadeInUp 0.8s ease-out;
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: var(--dark-bg);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--gradient-primary);
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--primary-blue);
        }
    </style>
</head>
<body>
    <!-- Background Animation -->
    <div class="bg-animation"></div>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="#">
                <i class="fas fa-cloud"></i> Clouding
            </a>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="https://dosnet.my.id">Home</a>
                    </li>
                </ul>
                
                <a href="#form" class="btn-get-started">Get Started</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-badge fade-in-up">
                <i class="fas fa-rocket"></i> Best-in-Class Services
            </div>
            <h1 class="hero-title fade-in-up">Advanced VPS Services</h1>
            <p class="hero-subtitle fade-in-up">
                Platform cloud computing terdepan dengan teknologi Docker Container, arsitektur mikroservice, 
                dan AI-powered management untuk masa depan digital Indonesia
            </p>
        </div>
    </section>

    <!-- Form Section -->
    <section class="form-section" id="form">
        <div class="container">
            <div class="form-container fade-in-up">
                <h2 class="section-title">
                    <i class="fab fa-docker"></i> Daftar VPS Docker Container
                </h2>

                <form action="aksesrun2.sh" method="get">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label><i class="fas fa-globe"></i> Nama Domain:</label>
                                <input type="text" name="namedomain" pattern="^[a-zA-Z0-9.@]+$" title="Hanya format domain" class="form-control" placeholder="yourdomain.com">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label><i class="fas fa-sitemap"></i> Nama Sub Domain:</label>
                                <div class="input-group">
                                    <input type="text" name="name" pattern="^[a-z0-9]+$" title="Hanya mendukung huruf kecil dan angka." class="form-control" placeholder="mysite">
                                    <div class="input-group-append">
                                        <span class="input-group-text">.clouding.my.id</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label><i class="fas fa-lock"></i> Password:</label>
                                <input type="password" name="password" pattern="^[a-z0-9]+$" title="Hanya mendukung huruf kecil dan angka." class="form-control" placeholder="Masukkan password">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label><i class="fas fa-envelope"></i> Alamat E-mail:</label>
                                <input type="email" name="email" pattern="^[a-zA-Z0-9.@]+$" title="Hanya format e-mail" class="form-control" placeholder="email@example.com">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label><i class="fab fa-whatsapp"></i> Nomor WhatsApp:</label>
                                <input type="text" name="wa" pattern="^[0-9]+$" title="Dibutuhkan untuk recovery password" class="form-control" placeholder="628123456789">
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label><i class="fas fa-shield-alt"></i> Kode Aktivasi:</label>
                                <input type="text" name="cek" pattern="^[a-zA-Z0-9]+$" title="Captcha" class="form-control" placeholder="Masukkan kode aktivasi">
                            </div>
                        </div>
                    </div>

                    <div class="text-center">
                        <button type="submit" class="btn-register" onclick="hideButton(this)">
                            <i class="fas fa-paper-plane"></i> Daftar Sekarang
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
        <div class="container">
            <div class="text-center mb-5">
                <div class="hero-badge">
                    <i class="fas fa-star"></i> Docker-Powered Infrastructure
                </div>
                <h2 class="section-title">Docker-Powered Infrastructure</h2>
                <p class="hero-subtitle">
                    Memanfaatkan teknologi containerization terdepan untuk memberikan isolasi 
                    sempurna, skalabilitas otomatis, dan deployment yang lightning-fast
                </p>
            </div>

            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon blue">
                        <i class="fas fa-cube"></i>
                    </div>
                    <h5>Container Isolation</h5>
                    <p>Setiap aplikasi berjalan dalam container terpisah untuk keamanan dan performa optimal</p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon orange">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h5>Fast Deployment</h5>
                    <p>Deploy aplikasi dalam hitungan detik dengan container technology</p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon green">
                        <i class="fas fa-server"></i>
                    </div>
                    <h5>Resource Efficiency</h5>
                    <p>Optimalisasi penggunaan resource server untuk performa terbaik</p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon purple">
                        <i class="fas fa-code"></i>
                    </div>
                    <h5>Multi-Stack Support</h5>
                    <p>Support berbagai teknologi: PHP, Node.js, Python, Ruby, dan lainnya</p>
                </div>
            </div>

            <div class="additional-features">
                <h4 class="text-center mb-4" style="color: var(--primary-blue);">Layanan Tambahan</h4>
                <div class="features-list">
                    <div class="feature-item">
                        <i class="fas fa-check-circle"></i>
                        <span>Basic Firewall</span>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-check-circle"></i>
                        <span>99% Uptime</span>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-check-circle"></i>
                        <span>Email Support</span>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-check-circle"></i>
                        <span>Web-based SSH</span>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-check-circle"></i>
                        <span>Subdomain Gratis</span>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-check-circle"></i>
                        <span>Support port 80 (HTTP)</span>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-check-circle"></i>
                        <span>Support port 22 (SSH)</span>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-check-circle"></i>
                        <span>Support Databases</span>
                    </div>
                </div>

                <div class="alert-info">
                    <i class="fas fa-info-circle fa-lg mr-2"></i>
                    Dengan mendaftar, Anda mendapatkan akses ke semua fitur enterprise-grade kami dalam hitungan detik!
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>© 2025 Clouding VPS - Advanced Cloud Infrastructure Solutions</p>
        </div>
    </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.0/js/bootstrap.min.js"></script>
    <script>
        function hideButton(x) {
            x.style.display = 'none';
        }

        // Navbar scroll effect
        $(window).scroll(function() {
            if ($(window).scrollTop() > 50) {
                $('.navbar').addClass('scrolled');
            } else {
                $('.navbar').removeClass('scrolled');
            }
        });

        // Smooth scrolling
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            var target = this.hash;
            var $target = $(target);
            
            if ($target.length) {
                $('html, body').animate({
                    'scrollTop': $target.offset().top - 80
                }, 800, 'swing');
            }
        });

        // Form validation
        $('form').on('submit', function(e) {
            var valid = true;
            $(this).find('input[required]').each(function() {
                if ($(this).val() === '') {
                    valid = false;
                    $(this).addClass('is-invalid');
                } else {
                    $(this).removeClass('is-invalid');
                }
            });
            
            if (!valid) {
                e.preventDefault();
            }
        });

        // Animation on scroll
        $(window).scroll(function() {
            $('.fade-in-up').each(function() {
                var elementTop = $(this).offset().top;
                var elementBottom = elementTop + $(this).outerHeight();
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();
                
                if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    $(this).addClass('fade-in-up');
                }
            });
        });
    </script>
</body>
</html>
EOT
