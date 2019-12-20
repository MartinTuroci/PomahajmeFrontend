# Install ncftp
sudo apt-get install ncftp

# Remove old version
find . \
-not -name '.htaccess' \
-not -name 'auctionImages' \
-not -name 'domains' \
-not -name 'images' \
-not -name 'robots.txt' \
-not -name 'subdom' \
-not -name 'web.config' \
--delete

# Upload new version
ncftpput -R -v -u $USER -p $PASSWORD $HOST /www /dist/.