#!/bin/bash
yum update -y
yum install -y httpd
yum install git -y
systemctl start httpd
systemctl enable httpd
cd /var/www || exit
rm -rf html
git clone https://github.com/Santiago-rin/Encrypting.git
mv Encrypting html
cd html/backend || exit
pip3 install -r requirements.txt
nohup uvicorn index:app  --reload --host 127.0.0.1 --port 8000 &