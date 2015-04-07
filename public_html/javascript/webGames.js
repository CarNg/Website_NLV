//The source for the following code is here: http://www.frictionpointstudios.com/blog/2010/4/7/unity-webplayer-load-on-demand-javascript.html#Example

function DetectInIE() {
    var tControl = new ActiveXObject("UnityWebPlayer.UnityWebPlayer.1");
    var returnVal = false;
    
    if (tControl != null) {
        if (tControl.GetPluginVersion() == "2.5.0f5") {
            var useragent = navigator.userAgent;
            var re = new RegExp("Windows NT (\\d+)\\.");
            var matches = re.exec(useragent);

            alert("MATCHES " + matches);
            if (matches.length == 2) {
                var major = Number(matches[1]);
                    
                if (major < 6) {
                    returnVal = true;
                }
            }
        }
        else {
            returnVal = true;
        }
    }
    return returnVal;
}


function GetUnity() {
    if (navigator.appVersion.indexOf("MSIE") != -1 && navigator.appVersion.toLowerCase().indexOf("win") != -1)
        return document.getElementById("UnityObject");
    else if (navigator.appVersion.toLowerCase().indexOf("safari") != -1)
        return document.getElementById("UnityObject");
    else
        return document.getElementById("UnityEmbed");
}

function DetectUnityWebPlayer() {
    var tInstalled = false;
    if (navigator.appVersion.indexOf("MSIE") != -1 && navigator.appVersion.toLowerCase().indexOf("win") != -1) {
        tInstalled = DetectInIE();
    }
    else {
        if (navigator.mimeTypes && navigator.mimeTypes["application/vnd.unity"]) {
            if (navigator.mimeTypes["application/vnd.unity"].enabledPlugin && navigator.plugins && navigator.plugins["Unity Player"]) {
                tInstalled = true;
            }
        }
    }
    return tInstalled;
}

function GetInstallerPath() {
    var tDownloadURL = "";
    var hasXpi = navigator.userAgent.toLowerCase().indexOf("firefox") != -1;

    if (1) {
        if (navigator.platform == "MacIntel")
            tDownloadURL = "http://webplayer.unity3d.com/download_webplayer-2.x/webplayer-i386.dmg";
        else if (navigator.platform == "MacPPC")
            tDownloadURL = "http://webplayer.unity3d.com/download_webplayer-2.x/webplayer-ppc.dmg";
        else if (navigator.platform.toLowerCase().indexOf("win") != -1)
            tDownloadURL = "http://webplayer.unity3d.com/download_webplayer-2.x/UnityWebPlayer.exe";
        return tDownloadURL;
    }
    else {
        if (navigator.platform == "MacIntel")
            tDownloadURL = "http://webplayer.unity3d.com/download_webplayer-2.x/UnityWebPlayerOSX.xpi";
        else if (navigator.platform == "MacPPC")
            tDownloadURL = "http://webplayer.unity3d.com/download_webplayer-2.x/UnityWebPlayerOSX.xpi";
        else if (navigator.platform.toLowerCase().indexOf("win") != -1)
            tDownloadURL = "http://webplayer.unity3d.com/download_webplayer-2.x/UnityWebPlayerWin32.xpi";
        return tDownloadURL;
    }
}

function AutomaticReload() {
    navigator.plugins.refresh();
    if (DetectUnityWebPlayer())
        window.location.reload();
    setTimeout('AutomaticReload()', 500);
}

function LoadUnityAfterClick(unityFilePath, sizex, sizey, id) {
    var hasUnity = DetectUnityWebPlayer();
    var brokenUnity = false;
    if (hasUnity) {

        var divId= document.getElementById(id);
        var theHtml = "";
        
        theHtml += '<object id="UnityObject" classid="clsid:444785F1-DE89-4295-863A-D46C3A781394" width="' + sizex + '" height="' + sizey + '"> \n';
        theHtml += '  <param name="src" value="' + unityFilePath + '" /> \n';
        theHtml += '<embed id="UnityEmbed" src="' + unityFilePath + '" width="' + sizex + '" height="' + sizey + '" type="application/vnd.unity" pluginspage="http://www.unity3d.com/unity-web-player-2.x" /> \n';
        theHtml += '</object>';
        divId.innerHTML = theHtml;

        if (navigator.appVersion.indexOf("Safari") != -1
						&& navigator.appVersion.indexOf("Mac OS X 10_6") != -1
						&& document.getElementById("UnityEmbed").GetPluginVersion == undefined){
            brokenUnity = true;
                                                }

        else if (document.getElementById("UnityEmbed").GetPluginVersion() == "2.5.0f5"
						&& navigator.platform == "MacPPC")
            brokenUnity = true;

    }
    if (!hasUnity || brokenUnity) {

        var installerPath = GetInstallerPath();
        if (installerPath != "") {
            document.write('<div align="center" id="UnityPrompt"> \n');
            if (brokenUnity)
                document.write('  <a href= ' + installerPath + '><img src="http://webplayer.unity3d.com/installation/getunityrestart.png" border="0"/></a> \n');
            else
                document.write('  <a href= ' + installerPath + '><img src="http://webplayer.unity3d.com/installation/getunity.png" border="0"/></a> \n');
            document.write('</div> \n');

            if (0) {
                document.write('<div id="InnerUnityPrompt"> <p>Title</p>');
                document.write('<p> Contents</p>');
                document.write("</div>");

                var innerUnityPrompt = document.getElementById("InnerUnityPrompt");

                var innerHtmlDoc =
								'<object id="UnityInstallerObject" classid="clsid:444785F1-DE89-4295-863A-D46C3A781394" width="320" height="50" codebase="http://webplayer.unity3d.com/download_webplayer-2.x/UnityWebPlayer.cab#version=2,0,0,0">\n' +
							    '</object>';

                innerUnityPrompt.innerHTML = innerHtmlDoc;
            }

            document.write('<iframe name="InstallerFrame" height="0" width="0" frameborder="0"></iframe>\n');
        }
        else {
            document.write('<div align="center" id="UnityPrompt"> \n');
            if (brokenUnity)
                document.write('  <a href="javascript: window.open("http://www.unity3d.com/unity-web-player-2.x"); "><img src="http://webplayer.unity3d.com/installation/getunityrestart.png" border="0"/></a> \n');
            else
                document.write('  <a href="javascript: window.open("http://www.unity3d.com/unity-web-player-2.x"); "><img src="http://webplayer.unity3d.com/installation/getunity.png" border="0"/></a> \n');
            document.write('</div> \n');
        }

        if (brokenUnity)
            document.getElementById("UnityEmbed").height = 0;

        if (!brokenUnity)
            AutomaticReload();
    }
}

function showOverlay(overlay){
    $(overlay).addClass("show");
}

function removeOverlay(overlay){
    $(overlay).removeClass("show");
}