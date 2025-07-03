<?php
system("docker run -d --name server12162 -e ROOT_PASSWORD=456 -p 12162:22 -p 21162:80 --restart=always xcodedata")
?>
