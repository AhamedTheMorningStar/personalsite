#!/bin/bash

sudo yum install docker

sudo systemctl start docker

docker run -n alpha -p 8080:8080 -p 50000:50000 -d -v jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock -v $(which docker):$(which docker) jenkins/jenkins:lts 

# sudo docker exec -u 0 -it 3d211e9dbbf0 bash
# cat /var/jenkins_home/secrets/initialAdminPassword

# docker volume inspect jenkins_home
# 8d2c6c8636f8
# bbebbc1d9a12
# fc5d7565d347

# apt install curl
# curl -sL https://deb.nodesource.com/setup_20.x -o NodeNpm_setup.sh
# bash NodeNpm_setup.sh
# apt insatll nodejs

