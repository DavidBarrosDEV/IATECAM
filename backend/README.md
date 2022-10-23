# BACK-END

### Pre-requisitos:
    - Docker e Docker-Compose
    - Python 3.8 +
    - Biblioteca Virtual Environment

### BANCO DE DADOS (MARIADB)
Executar o comando para subir o container do MariaDB com as variaveis de ambiente
```bash
"docker-compose up -d" 
```

### CONFIGURANDO AMBIENTE LINUX PARA FUNCIONAMENTO DO MYSQL DEVELOPMENT
Ubuntu / Debian:
```bash
    sudo apt-get install python3-dev default-libmysqlclient-dev build-essential
```

Red Hat / CentOS:
```bash
sudo yum install python3-devel mysql-devel
```

### INSTALANDO DEPENDENCIAS
Executar o comando PIP para instalacao das dependencias DENTRO DA Virtual Environment do projeto e bibliotecas do python:
```bash
pip install -r requirements.txt
```

### EXECUTANDO MIGRACOES
```bash
python manage.py migrate
```

### RODANDO APLICACAO
```bash
python manage.py runserver
```