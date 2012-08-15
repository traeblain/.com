echo off
REM Batch file to build my blog

echo "Running Pelican Site Generator"
pelican -t tbcom -s %1 -v src
if %errorlevel% neq 0 exit /b %errorlevel%

echo "Generating Sitemap using Google Sitemap Generator"
call sitemap.bat

echo "Checking for last Git commit message..."
for /f "delims=" %%a in ('"git log -1 --format=oneline --abbrev-commit"') do @set COMMITMSG=%%a

echo "Latest commit message is:"
echo %COMMITMSG%
echo.

echo "Auto-managing Mercurial commits, assigning Git's commit message,"
echo "and pushing to server..."
cd output
hg addremove && hg commit -m "%COMMITMSG%"
hg push

cd ..

echo.
echo.
echo.
echo "Your website is now live!! LIVE I TELL YOU!!!"
echo.
echo.