<!DOCTYPE html>
<html>
<head>
<title> volume of cuboid</title>
</head>
<body onload="RandomFn()">
<p>width=<b id="wdt"></b>
</p>
<p>length=<b id="lgt"></b>
</p>
<p>height=<b id="hgt"></b>
</p>
<p id="ans">what is the volume?</p>
<input type="button"
value="calculate volume"
onclick="calsize()"><br><br>
<input type="button"
value="next question"
onclick="location.reload();">
<script>
function RandomFn(){
document.getElementById("wdt").innerHtml=
parseInt(Math.random()*9+1);
document.getElementById("lgt").innerHtml=
parseInt(Math.random()*3+1);
document.getElementById("hgt").innerHtml=
parseInt(Math.random()5+1);

}
</script>
<script type="text/javascript"
src="volume.js"></script>
</body>
</html>
