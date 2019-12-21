# Install ncftp
sudo apt-get install ncftp

# Upload new version
ncftpput -R -v -u $USER -p $PASSWORD \
-W "mkdir tmpDir" \
-W "rename www/images tmpDir/images" \
-W "rename www/auctionImages tmpDir/auctionImages" \
-W "rename www/robots.txt tmpDir/robots.txt" \
-W "rename www/web.config tmpDir/web.config" \
-W "rename www/.htaccess tmpDir/.htaccess" \
-W "rename www/subdom tmpDir/subdom" \
-W "rename www/domains tmpDir/domains" \
-W "rmdir www" \
-W "mkdir www" \
-W "rename tmpDir/images www/images" \
-W "rename tmpDir/auctionImages www/auctionImages" \
-W "rename tmpDir/robots.txt www/robots.txt" \
-W "rename tmpDir/web.config www/web.config" \
-W "rename tmpDir/.htaccess www/.htaccess" \
-W "rename tmpDir/subdom www/subdom" \
-W "rename tmpDir/domains www/domains" \
-W "rmdir tmpDir" \
$HOST /www /dist/.