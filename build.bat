@pelican -t tbcom -s %1 -v src
@call sitemap.bat
@rsync.exe -rv --chmod=u+rwx,g+rx,o+rx --include "*/" --exclude "*" output/ -e "ssh -p %3" %2@v.traebla.in:/home/%2/www/blog
@rsync.exe -rlvzc --chmod=u+rw,g+r,o+r output/ -e "ssh -p %3" %2@v.traebla.in:/home/%2/www/blog