@echo off
echo Starting Hugo Server with No-Cache settings...
hugo server --disableFastRender --noHTTPCache --ignoreCache
pause
