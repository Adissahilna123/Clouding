curl -s -X POST "https://api.cloudflare.com/client/v4/zones/dbe1f173f25226071cf0d17023b2c6f7/dns_records" \
     -H "X-Auth-Email: utomoa448@gmail.com" \
     -H "X-Auth-Key: c4d1f26eec9efc9edd4425a92d573304b9844" \
     -H "Content-Type: application/json" \
     --data '{"type":"A","name":"unik.dosnet.my.id","content":"103.87.67.60","ttl":120,"priority":10,"proxied":true}' > /dev/null
