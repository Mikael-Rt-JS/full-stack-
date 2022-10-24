<?php 
include './session.php';
?>
<?php include './blocks/doctype.php'; ?>
  <title>Home</title>
  <!--     
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" rel="stylesheet">
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css'>
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-bold-straight/css/uicons-bold-straight.css'> 
  -->
    
  <link href="./css/global.css" rel="stylesheet" type="text/css" />
  <link href="./css/settings_dialog.css" rel="stylesheet" type="text/css" />
  <link href="./css/index_nav.css" rel="stylesheet" type="text/css" />
  <link href="./css/index_signin.css" rel="stylesheet" type="text/css" />
  <link href="./css/index_header.css" rel="stylesheet" type="text/css" />
  <link href="./css/index_activity.css" rel="stylesheet" type="text/css" />
  <link href="./css/table.css" rel="stylesheet" type="text/css" />
  <link href="./css/index_media.css" rel="stylesheet" type="text/css" />

</head>
<body>
  <?php include './blocks/settings_dialog.php'; ?>
  <?php include './blocks/index_nav.php'; ?>
  <?php include './blocks/index_signin.php'; ?>
  <?php include './blocks/index_header.php'; ?>
  <?php include './blocks/index_activity.php'; ?>
  <?php if(isset($_SESSION['user'])){
    include './blocks/table_orders.php';
    include './blocks/table_action.php';
  } ?>

  <script src="./js/var.js"></script>

<?php  if(!isset($_SESSION['user'])){ ?>
  <script src="./js/signin_block.js"></script>
<?php }?>

  <script src="./js/signin.js"></script>
  <script src="./js/index.js"></script>

</body>
</html>

  