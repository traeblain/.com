@echo off
REM Batch file to build my blog

echo Running Pelican Site Generator
echo.
echo.
pelican -t tbcom -s %1 -v src
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
echo Auto-managing Mercurial commits, assigning Git's commit message,
echo and pushing to server...
echo.
echo.
cd output
call C:\Python27\Scripts\hg addremove
call C:\Python27\Scripts\hg commit -m "%COMMITMSG%"
call C:\Python27\Scripts\hg push -f

cd ..

echo.
echo.
echo.
echo Your website is now live!! LIVE I TELL YOU!!!
echo.
echo.