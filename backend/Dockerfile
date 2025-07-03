FROM ubuntu:22.04

# timezone
RUN apt update && apt install -y tzdata; \
    apt clean;

# nano
RUN apt install -y nano;

# curl
RUN apt install -y curl;

# net-tools
RUN apt install -y net-tools;

# sshd
RUN mkdir /run/sshd; \
    apt install -y openssh-server; \
    sed -i 's/^#\(PermitRootLogin\) .*/\1 yes/' /etc/ssh/sshd_config; \
    sed -i 's/^\(UsePAM yes\)/# \1/' /etc/ssh/sshd_config; \
    apt clean;

# apache
RUN apt install -y apache2;

# entrypoint
RUN { \
    echo '#!/bin/bash -eu'; \
    echo 'ln -fs /usr/share/zoneinfo/${TZ} /etc/localtime'; \
    echo 'echo "root:${ROOT_PASSWORD}" | chpasswd'; \
    echo 'exec "$@"'; \
    } > /usr/local/bin/entry_point.sh; \
    chmod +x /usr/local/bin/entry_point.sh;

ENV TZ Asia/Jakarta

ENV ROOT_PASSWORD root

EXPOSE 22
EXPOSE 80

ENTRYPOINT ["entry_point.sh"]

COPY script.sh script.sh
CMD ["./script.sh"]
