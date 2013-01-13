@echo off
REM Batch file to build my blog

echo Grabbing latest output in case it's behind...
cd output
git pull -u origin master
cd ..
echo.
echo.
echo Running Pelican Site Generator
echo.
echo.
pelican -s prod.py
if %errorlevel% neq 0 exit /b %errorlevel%

echo.
echo Generating Sitemap using Google Sitemap Generator
echo.
echo.
call sitemap.bat

echo.
echo.
echo Checking for last Git commit message...
for /f "delims=" %%a in ('"git log -1 --format=oneline --abbrev-commit"') do @set COMMITMSG=%%a

echo.
echo Latest commit message is:
echo %COMMITMSG%
echo.

echo.
echo.
cd output
echo Adding all files to stage...
git add .

echo Removing deleted files...
git ls-files -d -z | xargs -0 git rm --cached --quiet


echo Please verify status:
git status -sb
pause
echo.
echo Committing changes to built site
echo and assigning source's commit message...
git commit -m "%COMMITMSG%"

echo.
echo.
echo and pushing to server...
git push

cd ..

echo.
echo.
echo.
echo Site is ready, go to your activation link to
echo make it live.
echo.
echo.