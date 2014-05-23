<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>elRTE</title>

	<!-- jQuery and jQuery UI -->
	<script src="js/jquery-1.6.1.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="js/jquery-ui-1.8.13.custom.min.js" type="text/javascript" charset="utf-8"></script>
	<link rel="stylesheet" href="css/smoothness/jquery-ui-1.8.13.custom.css" type="text/css" media="screen" charset="utf-8">

	<!-- elRTE -->
	<script src="js/elrte.min.js" type="text/javascript" charset="utf-8"></script>
	<link rel="stylesheet" href="css/elrte.min.css" type="text/css" media="screen" charset="utf-8">

	<script src="js/i18n/elrte.ru.js" type="text/javascript" charset="utf-8"></script>
	<!-- elRTE translation messages -->

	<script type="text/javascript" charset="utf-8">
		$().ready(function() {
			var opts = {
				cssClass : 'el-rte',
				// lang     : 'ru',
				height   : 250,
				width   : 1000,
				toolbar  : 'complete',
				cssfiles : ['css/elrte-inner.css']
			}
			$('#editor').elrte(opts);
		})
	</script>

	<style type="text/css" media="screen">
		body { padding:20px;}
	</style>
	
</head>
<body>
<form action="" method="post">
	<textarea id="editor" name="someDate">

	</textarea>
</form>	
    <pre>
    <?php
       // print_r($_POST);
        echo str_replace("www","www",$_POST['someDate']);
    ?>  
        </pre>
</body>
</html>
