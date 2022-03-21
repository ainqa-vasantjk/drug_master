set -x

echo "install npm"

# pwd

# cd public/$1

# pwd

npm install

git add .

git commit -m "new changes"

npm version patch

npm run build

echo "start publishing"

# npm login

# echo "user name done"

# expect "Username"
# send "kumaravelcrayond\r"

# echo "pass done"

# expect "Password"
# send "crayond@12345\r"

# echo "email done"

# expect "Email"
# send "kumaravel@crayond.co\r"


npm install -g npm-cli-login

npm-cli-login -u ainqa-qdm -p welcome@qdm2 -e itadmin@ainqa.com
# npm-cli-login -u kumaravelcrayond -p crayond@12345 -e kumaravel@crayond.co

npm publish
