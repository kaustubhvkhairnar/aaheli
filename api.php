<?php
	
	header('Content-Type: application/json');
	
	// to connet to database
	require 'dbconn.php';
	
	$request_method=$_SERVER['REQUEST_METHOD'];

	switch($request_method)
	{
		case "GET":
			response(DoGet());
			break;
		case "POST":
			response(DoPost());
			break;
	}
	
	//get api request based on query parameters
	function DoGet()
	{
		//global variable of database connection object
		global $conn;
		$resultSet=array();

		// For admin : To get all the customers in database
		if(isset($_GET['customers']) && isset($_GET['admin'])){
			$sql="SELECT * FROM `customer`";
            $result = mysqli_query($conn, $sql);

            if (mysqli_num_rows($result) > 0) 
            {
                while($row = mysqli_fetch_assoc($result)) 
                {
                    $key=$row['customer_id'];
                
                    $resultSet[$key]=array(
                        'customer_id'=>$row['customer_id'],
                        'name'=>$row['name'],
						'phone'=>$row['phone'],
						'email'=>$row['email'],
						'company_name'=>$row['company_name'],
						'office_address'=>$row['office_address'],
						'godown_address'=>$row['godown_address'],
						'gst_no'=>$row['gst_no']
                    );	
                }
                return $resultSet;
            }
		}
		// For customer : To get all the orders according to status
		elseif (isset($_GET['orders']) && isset($_GET['status']) && isset($GET['customer_id'])) 
		{
			$sql="SELECT * FROM `orders` WHERE order_status = '".$_GET['status']."' AND customer_id = '".$GET['customer_id']."'";
            $result = mysqli_query($conn, $sql);

            // fetch from result variable
            if (mysqli_num_rows($result) > 0) 
            {
                while($row = mysqli_fetch_assoc($result)) 
                {
                    $key=$row['order_id'];
					
                    $resultSet[$key]=array(
                        'order_id'=>$row['order_id'],
                        'quantity'=>$row['quantity'],
						'date'=>$row['date'],
						'delivery_date'=>$row['delivery_date'],
						'manufacture_date'=>$row['manufacture_date'],
						'status' => $row['status'],
						'recipe_id'=>$row['recipe_id'],
						'customer_id '=>$row['customer_id ']
                    );	
                }
                return $resultSet;
            }
		}
		// For admin : To get all the orders according to status
		elseif (isset($_GET['orders']) && isset($_GET['status']) && isset($_GET['admin'])) 
		{
			$sql="SELECT * FROM `orders` WHERE order_status = '".$_GET['status']."'";
            $result = mysqli_query($conn, $sql);

            // fetch from result variable
            if (mysqli_num_rows($result) > 0) 
            {
                while($row = mysqli_fetch_assoc($result)) 
                {
                    $key=$row['order_id'];
					
                    $resultSet[$key]=array(
                        'order_id'=>$row['order_id'],
                        'quantity'=>$row['quantity'],
						'order_date'=>$row['order_date'],
						'delivery_date'=>$row['delivery_date'],
						'manufacture_date'=>$row['manufacture_date'],
						'status' => $row['status'],
						'recipe_id'=>$row['recipe_id'],
						'customer_id '=>$row['customer_id ']
                    );	
                }
                return $resultSet;
            }
		}
		// For customer : To get all the recipes 
		elseif (isset($_GET['recipes']) && isset($_GET['customer_id'])) 
		{
			$sql="SELECT * FROM `recipe` WHERE customer_id = '".$_GET['customer_id']."'";
            $result = mysqli_query($conn, $sql);

            // fetch from result variable
            if (mysqli_num_rows($result) > 0) 
            {
                while($row = mysqli_fetch_assoc($result)) 
                {
                    $key=$row['recipe_id'];
					
                    $resultSet[$key]=array(
                        'recipe_id'=>$row['recipe_id'],
                        'name'=>$row['name'],
						'quantity'=>$row['quantity'],
						'customer_id '=>$row['customer_id ']
                    );	
                }
                return $resultSet;
            }
		}
		// For customer : To get all the recipe details
		elseif (isset($_GET['recipe_id']) && isset($_GET['customer_id'])) 
		{
			// SELECT `item`.`item_id`,`item`.`name`,`recipe_items`.`quantity` FROM `item`,`recipe_items` WHERE `item`.`item_id` IN (SELECT item_id FROM `recipe_items` WHERE recipe_id = 1) GROUP BY 'item.item_id';
			$sql="SELECT * FROM `recipe_items` WHERE recipe_id= AND AND customer_id = '".$_GET['customer_id']."'";
            $result = mysqli_query($conn, $sql);

            // fetch from result variable
            if (mysqli_num_rows($result) > 0) 
            {
                while($row = mysqli_fetch_assoc($result)) 
                {
                    $key=$row['recipe_id'];
					
                    $resultSet[$key]=array(
                        'recipe_id'=>$row['recipe_id'],
                        'name'=>$row['name'],
						'quantity'=>$row['quantity'],
						'customer_id '=>$row['customer_id ']
                    );	
                }
                return $resultSet;
            }
		}
	}
	
	// post api request based on query parameters
	function DoPost()
	{
		//global variable of database connection object
		global $conn;
		
		if($_POST)
		{
			// New order placed
			if(isset($_POST['recipe_selection']) && isset($_POST['recipe_quantity']) )
			{
				
				$sql="insert into `orders` (quantity,recipe_id,customer_id) values ('".$_POST['recipe_quantity']."',". $_POST['recipe_selection'] .",".$_POST['customer_id'].")";
				
				$query= mysqli_query($conn, $sql);
				if($query == true)
				{
					$response=array("message"=>"Order Placed !");					
				}
		
				return $response;
			}
			elseif (isset($_POST['recipe_name']) && isset($_POST['item_names'])) {
				$sql="insert into `recipe` (recipe_name,recipe_id,customer_id) values ('".$_POST['recipe_quantity']."',". $_POST['recipe_selection'] .",".$_POST['customer_id'].")";
				
				$query= mysqli_query($conn, $sql);
				if($query == true)
				{
					$response=array("message"=>"Order Placed !");					
				}
		
				return $response;
			}
			else if(isset($_POST['name']) && isset($_POST['text']))
			{
				if(trim($_POST['name'])=="")
				{
					$name="anonymous";
				}else{
					
					$name=$_POST['name'];
				}
				
				// insert query
				$sql="insert into `carwashpost` (name,text,likes) values ('".$name."','".$_POST['text']."',0)";
		
				$query= mysqli_query($conn, $sql);
				
				if($query == true){
					$response=array("message"=>"post record inserted");					
				}
				
				return $response;
			}
			else if(isset($_POST['id']) && isset($_POST['like']))
			{
				$like=0;
				
				if($_POST['like']=="yes"){
					$like=1;					
				}
				else{
					$like=-1;
				}
				
				// update query
				$sql="update `carwashpost` set likes=likes+".$like." where id=".$_POST['id'];
		
				$query= mysqli_query($conn, $sql);
				
				if($query == true)
				{
					$response=array("message"=>"Likes Updated");					
				}
			
				return $response;
			}
			else
			{
				echo "error";
			}	
		}	
	}
	
	//to return response as json
	function response($response)
	{
		echo json_encode(array("status"=>"200","data"=>$response));
	}


?>