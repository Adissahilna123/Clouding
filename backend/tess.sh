#!/bin/bash

echo "Content-type: text/html"
echo ""
patch=$(tr -dc A-Za-z0-9 </dev/urandom | head -c 13 ; echo '')
# Generate HTML with cloud theme
cat <<EOT
<!DOCTYPE html>
<html>
<head>
    <title>Pendaftaran VPS - dosnet.my.id</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <style>
        body {
            background-color: #f0f8ff;
            background-image: linear-gradient(to bottom, #e6f2ff 0%, #ffffff 100%);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-height: 100vh;
        }
        
        .card {
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            border: none;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
        }
        
        .card-header {
            background: linear-gradient(135deg, #3498db, #2c3e50);
            color: white;
            border-radius: 15px 15px 0 0 !important;
            padding: 20px;
            text-align: center;
        }
        
        .form-control {
            border-radius: 8px;
            border: 1px solid #d1d9e6;
            padding: 10px 15px;
            transition: all 0.3s ease;
        }
        
        .form-control:focus {
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);
            border-color: #3498db;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #3498db, #2980b9);
            border: none;
            border-radius: 8px;
            padding: 10px 20px;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
            background: linear-gradient(135deg, #2980b9, #2c3e50);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .floating-clouds {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: -1;
        }
        
        .cloud {
            position: absolute;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
        }
        
        .cloud-1 {
            width: 200px;
            height: 60px;
            top: 10%;
            left: 10%;
            animation: float 30s infinite linear;
        }
        
        .cloud-2 {
            width: 300px;
            height: 80px;
            top: 30%;
            left: 70%;
            animation: float 40s infinite linear reverse;
        }
        
        .cloud-3 {
            width: 150px;
            height: 50px;
            top: 60%;
            left: 30%;
            animation: float 35s infinite linear;
        }
        
        @keyframes float {
            0% { transform: translateX(-100px); }
            100% { transform: translateX(calc(100vw + 100px)); }
        }
        
        .input-group-text {
            background-color: #e6f2ff;
            border: 1px solid #d1d9e6;
            color: #3498db;
        }
        
        .captcha-container {
            border: 1px solid #d1d9e6;
            border-radius: 8px;
            overflow: hidden;
        }
        
        .cloud-icon {
            color: #3498db;
            margin-right: 10px;
        }
        
        .table td {
            padding: 15px;
            vertical-align: middle;
        }
    </style>
</head>
<body>
    <div class="floating-clouds">
        <div class="cloud cloud-1"></div>
        <div class="cloud cloud-2"></div>
        <div class="cloud cloud-3"></div>
    </div>

    <script>
        function hideButton(x) {
            x.style.display = 'none';
        }
    </script>

    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header">
                        <h3><i class="fas fa-cloud cloud-icon"></i>Pendaftaran VPS - Dosnet</h3>
                        <p class="mb-0">Support PHP, MySQL & Wordpress (Docker Container)</p>
                    </div>
                    <div class="card-body p-4">
                        <form action="aksesrun2.sh" method="get">
                            <div class="form-group row">
                                <label for="namedomain" class="col-md-4 col-form-label"><i class="fas fa-globe cloud-icon"></i>Nama domain:</label>
                                <div class="col-md-8">
                                    <input type="text" id="namedomain" name="namedomain" pattern="^[a-zA-Z0-9.@]+$" title="Hanya format domain" class="form-control" placeholder="domain.com">
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label"><i class="fas fa-sitemap cloud-icon"></i>Nama Sub domain:</label>
                                <div class="col-md-8">
                                    <div class="input-group">
                                        <input type="text" id="name" name="name" pattern="^[a-z0-9]+$" title="Hanya mendukung huruf kecil dan angka." class="form-control" placeholder="subdomain">
                                        <div class="input-group-append">
                                            <span class="input-group-text">.dosnet.my.id</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label"><i class="fas fa-lock cloud-icon"></i>Password:</label>
                                <div class="col-md-8">
                                    <input type="password" id="password" name="password" pattern="^[a-z0-9]+$" title="Hanya mendukung huruf kecil dan angka." class="form-control" placeholder="Masukkan password">
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label"><i class="fas fa-envelope cloud-icon"></i>Alamat e-mail:</label>
                                <div class="col-md-8">
                                    <input type="email" id="email" name="email" pattern="^[a-zA-Z0-9.@]+$" title="Hanya format e-mail." class="form-control" placeholder="contoh@domain.com">
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label for="wa" class="col-md-4 col-form-label"><i class="fab fa-whatsapp cloud-icon"></i>Nomor WhatsApp:</label>
                                <div class="col-md-8">
                                    <input type="text" id="wa" name="wa" pattern="^[0-9]+$" title="Jika nomor whatsapp tidak diisi maka tidak bisa recovery password & sebagainya" class="form-control" placeholder="628xxxxxxxxxx">
                                </div>
                            </div>
                            
                            <div class="form-group row">
                                <label for="cek" class="col-md-4 col-form-label"><i class="fas fa-shield-alt cloud-icon"></i>Kode aktivasi:</label>
                                <div class="col-md-8">
                                    <input type="text" id="cek" name="cek" pattern="^[a-zA-Z0-9]+$" title="Captcha." class="form-control" placeholder="Masukkan kode aktivasi">
                                </div>
                            </div>
                            
                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" onclick="hideButton(this)" class="btn btn-primary btn-block">
                                        <i class="fas fa-paper-plane mr-2"></i>Daftar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.5.3/js/bootstrap.min.js"></script>
</body>
</html>
EOT
