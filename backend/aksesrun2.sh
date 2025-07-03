#!/bin/bash
echo "Content-type: text/html"
echo ""
nameroot=`echo "$QUERY_STRING" | awk '{split($0,array,"&")} END{print array[1]}' | awk '{split($0,array,"=")} END{print array[2]}' | tr [:upper:] [:lower:]`
name=`echo "$QUERY_STRING" | awk '{split($0,array,"&")} END{print array[2]}' | awk '{split($0,array,"=")} END{print array[2]}' | tr [:upper:] [:lower:]`
password=`echo "$QUERY_STRING" | awk '{split($0,array,"&")} END{print array[3]}' | awk '{split($0,array,"=")} END{print array[2]}'`
email=`echo "$QUERY_STRING" | awk '{split($0,array,"&")} END{print array[4]}' | awk '{split($0,array,"=")} END{print array[2]}'`
wa=`echo "$QUERY_STRING" | awk '{split($0,array,"&")} END{print array[5]}' | awk '{split($0,array,"=")} END{print array[2]}'`
cek=`echo "$QUERY_STRING" | awk '{split($0,array,"&")} END{print array[6]}' | awk '{split($0,array,"=")} END{print array[2]}'`
line=$(head -n 1 acak201.txt)
port=$(head -n 1 port.txt)
portweb=$(head -n 1 portweb.txt)
tanggal=$(date +%d-%m-%Y)
random=$(tr -dc a-z0-9 </dev/urandom | head -c 13 ; echo '')
function urldecode() { : "${*//+/ }"; echo -e "${_//%/\x}"; }
email=$(printf '%b' "${email//%/\\x}")
if [[ "${nameroot}" =~ [^a-z0-9.] ]]; then
echo "Username hanya boleh huruf kecil dan angka, harus ada titik"
else
if [[ "${name}" =~ [^a-z0-9] ]]; then
echo "Username hanya boleh huruf kecil dan angka"
else
if [[ "${password}" =~ [^a-z0-9] ]]; then
echo "Password hanya boleh huruf kecil dan angka"
else
if [[ "${email}" =~ [^a-z0-9.@] ]]; then
echo "Hanya mendukung format e-mail"
else
if [[ $email =~ "@peykesabz.com" ]]; then
echo "Registrasi hanya mendukung peykesabz.com"
else
if [ -n "$(ls /home/checkdata/$email | xargs -n 1 basename)" ]; then
echo "E-mail ini sudah digunakan, silahkan gunakan e-mail yang lain"
else
if ! grep -Fxq "$cek" vouchers.txt; then
echo "Kode voucher tersebut sudah digunakan, silahkan menggunakan voucher lain"
else
sed -i "/^$cek$/d" vouchers.txt
echo "username $name password $password. Salam dari kami yaa" | mail -s "Informasi username dan password akun" $email
echo $email > /home/checkdata/$email
echo $name, $password, $email, $wa, $tanggal, $port. > /home/checkdata2/$email
acak=$(tr -dc 2-5 </dev/urandom | head -c 10 ; echo '')
echo $acak > acak201.txt
convert \
    -size 725x100 \
    xc:lightblue \
    -font Bookman-DemiItalic \
    -pointsize 18 \
    -fill blue \
    -gravity center \
    -draw "text 0,0 $acak" \
    image.png
convert \
    -size 725x100 \
    xc:lightblue \
    -font Bookman-DemiItalic \
    -pointsize 18 \
    -fill blue \
    -gravity center \
    -draw "text 0,0 $acak" \
    image.png
convert \
    -size 725x100 \
    xc:lightblue \
    -font Bookman-DemiItalic \
    -pointsize 18 \
    -fill blue \
    -gravity center \
    -draw "text 0,0 $acak" \
    image.png
convert image.png -background white -wave 4x55 image.png
sudo cp /usr/lib/cgi-bin/acak201.txt /var/www/html/xcodekey.txt
if [[ "${wa}" =~ [^a-z0-9] ]]; then
echo "Nomor WA hanya boleh angka"
else
if [ -z "$(ls -A /home/$name)" ]; then
sudo mkdir /home/$name
sudo touch /home/$name/locked
cp /usr/lib/cgi-bin/image.png /var/www/html/
echo $name, $password, $email, $wa, $tanggal $port. > /home/rambutan/$name.$tanggal
echo $name, $password, $email, $wa, $tanggal $port. > /home/recovery/$name.$random
sudo mcrypt /home/recovery/$name.$random -k $wa
cp /home/xcodehoster/subdata.conf /etc/apache2/sites-available/$name.conf
cp /home/xcodehoster/data.conf /etc/apache2/sites-available/$nameroot.conf
sed -i "s/sample/$name/g" /etc/apache2/sites-available/$name.conf
sed -i "s/nomor/$portweb/g" /etc/apache2/sites-available/$name.conf
sed -i "s/contoh/$nameroot/g" /etc/apache2/sites-available/$nameroot.conf
sed -i "s/nomor/$portweb/g" /etc/apache2/sites-available/$nameroot.conf
sudo a2ensite $name.conf
sudo a2ensite $nameroot.conf
sudo systemctl reload apache2
sudo cp /usr/lib/cgi-bin/aktivasi3.sh /usr/lib/cgi-bin/aktivasi4.sh
sed -i "s/unik/$name/g" /usr/lib/cgi-bin/aktivasi4.sh
chmod 777 aktivasi4.sh
./aktivasi4.sh
rm aktivasi4.sh
cp /usr/lib/cgi-bin/running100.php  /usr/lib/cgi-bin/running200.php
sed -i "s/unikport/$port/g" /usr/lib/cgi-bin/running200.php
sed -i "s/numberdata/$portweb/g" /usr/lib/cgi-bin/running200.php
sed -i "s/unikuser/$name/g" /usr/lib/cgi-bin/running200.php
sed -i "s/unikpass/$password/g" /usr/lib/cgi-bin/running200.php
mkdir /home/$name
sudo chmod 777 /home/$name
sudo php running200.php
cp /usr/lib/cgi-bin/running2.php /usr/lib/cgi-bin/list/running$port.php
a=1
port=$((port+a))
echo $port > port.txt
cp port.txt /var/www/html
port2=$(head -n 1 port.txt)
b=1
port2=$((port-b))
x=1
portweb=$((portweb+x))
echo $portweb > portweb.txt
cp portweb.txt /var/www/html
portweb2=$(head -n 1 portweb.txt)
y=1
portweb2=$((portweb-y))
cat <<EOT
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clouding Cloud Services</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            color: #333;
            min-height: 100vh;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 30px;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 15px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
            margin-top: 50px;
        }
        .cloud-bg {
            position: absolute;
            top: -50px;
            right: -50px;
            width: 180px;
            height: 180px;
            background-color: rgba(173, 216, 230, 0.3);
            border-radius: 50%;
            z-index: 0;
        }
        .cloud-bg:before {
            content: '';
            position: absolute;
            top: 30px;
            left: 30px;
            width: 100px;
            height: 100px;
            background-color: rgba(173, 216, 230, 0.3);
            border-radius: 50%;
        }
        .cloud-bg:after {
            content: '';
            position: absolute;
            top: 60px;
            left: -20px;
            width: 120px;
            height: 120px;
            background-color: rgba(173, 216, 230, 0.3);
            border-radius: 50%;
        }
        .header {
            text-align: center;
            position: relative;
            z-index: 1;
            margin-bottom: 30px;
        }
        h2 {
            color: #4a7bdb;
            font-size: 32px;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }
        .welcome-text {
            font-size: 18px;
            color: #555;
            margin-bottom: 20px;
        }
        .info-section {
            background-color: #f0f5ff;
            border-left: 5px solid #4a7bdb;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 5px;
            position: relative;
            z-index: 1;
        }
        .info-title {
            font-weight: bold;
            color: #4a7bdb;
            margin-bottom: 10px;
            font-size: 18px;
        }
        .info-content {
            line-height: 1.6;
        }
        .highlight {
            font-weight: bold;
            color: #4a7bdb;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            font-size: 14px;
            color: #777;
            position: relative;
            z-index: 1;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="cloud-bg"></div>
        <div class="header">
            <h2>Welcome to Clouding Cloud!</h2>
            <div class="welcome-text">Your cloud hosting has been successfully set up, $name!</div>
        </div>
        
        <div class="info-section">
            <div class="info-title">Website Information</div>
            <div class="info-content">
                <p>Main Domain: <span class="highlight">$nameroot</span> (Arahkan ke 103.87.67.60)</p>
                <p>Subdomain: <span class="highlight">https://$name.dosnet.my.id</span></p>
            </div>
        </div>
        
        <div class="info-section">
            <div class="info-title">SSH Access Details</div>
            <div class="info-content">
                <p>Host: <span class="highlight">konek.dosnet.my.id</span></p>
                <p>Port: <span class="highlight">$port2</span></p>
                <p>Username: <span class="highlight">root</span></p>
                <p>Password: <span class="highlight">$password</span></p>
            </div>
        </div>
        
        <div class="footer">
            Thank you for choosing Clouding Cloud Services!
        </div>
    </div>
</body>
</html>
EOT
else
echo "Alamat Sub yang anda masukkan sudah ada pemiliknya"
fi
fi
fi
fi
fi
fi
fi
fi
fi
