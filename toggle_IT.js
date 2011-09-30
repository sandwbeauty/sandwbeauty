/**
  * toggles MENU image display within a page
  */

function changeIt() 
{
var theImg = document.getElementsByTagName('img')[0].src;

var x = theImg.split("/");
var t = x.length-1;
var y = x[t];

if(y=='Menu_CN.jpg')
{
	document.images.menu_Language.src='Menu_EN.jpg'
}
if(y=='Menu_EN.jpg')
{
	document.images.menu_Language.src='Menu_CN.jpg'
}
}
</script>


/** call via the following method
	*
	*  <a href="#" onclick="changeIt()">test</a> <img src='em1.gif' name='example' border='0' />
	*
	*/
	