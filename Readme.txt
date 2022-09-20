# create the index.js file and write the code as
"""
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello from the jenkins server");
});
server.listen(3000);
"""

# create the git repository in github
git init
git add .
git commit -m "message"
git branch -M main
git remote add origin https://github.com/Harikrishnan-VCodingMart/task16.git
git push -u origin main


# enter into jenkins and select pipeline project
# select the git project command and paste the project url
# in pipeline select the pipeline script and write the code
"""
pipeline {
    agent any
      stages {
          stage('deploy') {
              steps {
                   sh "sudo systemctl restart nodeapp"
              }
          }
      }
}
"""

# in terminal change directory to /etc and create the file as sudoers using
sudo nano sudoers
# type the line at end   jenkins ALL=(ALL) NOPASSWD: ALL

# in terminal change directory to /lib/systemd/system/ and create the file as nodeapp.service using
sudo nano nodeapp.service
# type the statements as 
"""
[Unit]
Description=DevOps From Scratch Demo NodeJS App
Documentation=https://esc.sh
After=network.target

[Service]
Type=simple
User=vagrant
WorkingDirectory=/home/balaji/Documents/sep_16_task
ExecStart=/usr/bin/node /home/balaji/Documents/sep_16_task/index.js
Restart=on-failure

[Install]
WantedBy=multi-user.target
"""

# enter into jenkins and build the project using build now button
# view the project in localhost:<port given in index.js>