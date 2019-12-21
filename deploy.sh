# Install ncftp
sudo apt-get install ncftp

ncftp -u $USER -p $PASSWORD $HOST
# Create tmp dir
mkdir tmpDir

# Remove old version while keeping permanent data
rename www/images tmpDir/images
rename www/auctionImages tmpDir/auctionImages
rename www/robots.txt tmpDir/robots.txt
rename www/web.config tmpDir/web.config
rename www/.htaccess tmpDir/.htaccess
rename www/subdom tmpDir/subdom
rename www/domains tmpDir/domains

rmdir www
mkdir www

rename tmpDir/images www/images
rename tmpDir/auctionImages www/auctionImages
rename tmpDir/robots.txt www/robots.txt
rename tmpDir/web.config www/web.config
rename tmpDir/.htaccess www/.htaccess
rename tmpDir/subdom www/subdom
rename tmpDir/domains www/domains

rmdir tmpDir

quit

# Upload new version
ncftpput -R -v -u $USER -p $PASSWORD $HOST /www /dist/.
quit