sshpass -p ${pass} scp -o StrictHostKeyChecking=no -r build/* ${user}@${ip}:${path} << EOF
EOF