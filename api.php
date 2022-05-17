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
		case "PUT":
			response(DoPut());
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
						'warehouse_address'=>$row['warehouse_address'],
						'gst_no'=>$row['gst_no']
                    );	
                }
                return $resultSet;
            }
		}
		// For admin : To get all the orders according to status
		elseif (isset($_GET['orders']) && isset($_GET['status']) && isset($_GET['admin'])) 
		{
			$sql="SELECT order_id, quantity, order_date, delivery_date, manufacture_date, status, `recipe`.`recipe_id`,`recipe`.name AS 'recipe_name',`customer`.customer_id,`customer`.name AS 'customer_name' FROM `orders`,`recipe`,`customer` WHERE `recipe`.recipe_id = `orders`.recipe_id AND `customer`.customer_id = `orders`.customer_id AND status= '".$_GET['status']."'";
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
						'customer_id '=>$row['customer_id'],
						'recipe_name'=>$row['recipe_name'],
						'customer_name'=>$row['customer_name']
                    );	
                }
                return $resultSet;
            }
		}
		// For admin : To get all the recipes only list
		elseif(isset($_GET['recipes']) && isset($_GET['admin'])){
			$sql="SELECT * FROM `recipe`";
            $result = mysqli_query($conn, $sql);

            if (mysqli_num_rows($result) > 0) 
            {
                while($row = mysqli_fetch_assoc($result)) 
                {
                    $key=$row['recipe_id'];
                
                    $resultSet[$key]=array(
                        'recipe_id'=>$row['recipe_id'],
                        'name'=>$row['name']
                    );	
                }
                return $resultSet;
            }
		}
		// For admin : To get all the recipe items
		elseif (isset($_GET['recipe_items']) && isset($_GET['admin']) && isset($_GET['recipe_id'])){
			$sql = "SELECT `recipe_items`.recipe_items_id,`item`.`name`,`recipe_items`.`quantity` FROM `recipe`,`item`,`recipe_items` 
						WHERE `recipe`.`recipe_id` = `recipe_items`.`recipe_id`
						AND `item`.`item_id` = `recipe_items`.`item_id`
						AND `recipe`.`recipe_id` = ".$_GET['recipe_id'];
			$result = mysqli_query($conn, $sql);

            // fetch from result variable
            if (mysqli_num_rows($result) > 0) 
            {
                while($row = mysqli_fetch_assoc($result)) 
                {
                    $key=$row['recipe_items_id'];
					
                    $resultSet[$key]=array(
                        'recipe_items_id'=>$row['recipe_items_id'],
                        'name'=>$row['name'],
						'quantity'=>$row['quantity'],
                    );	
                }
                return $resultSet;
            }
		}
		// For admin : To get all the details of stock
		elseif(isset($_GET['stocks']) && isset($_GET['admin'])){
			$sql="SELECT * FROM `item`";
            $result = mysqli_query($conn, $sql);
			
            if (mysqli_num_rows($result) > 0) 
            {
				while($row = mysqli_fetch_assoc($result)) 
                {
                    $key=$row['item_id'];
					
                    $resultSet[$key]=array(
						'item_id'=>$row['item_id'],
                        'name'=>$row['name'],
						'quantity'=>$row['quantity']
                    );	
                }
                return $resultSet;
            }
		}
		// For admin : To get all the details of suppliers
		elseif(isset($_GET['suppliers']) && isset($_GET['admin'])){
			$sql="SELECT * FROM `supplier`";
			$result = mysqli_query($conn, $sql);

			if (mysqli_num_rows($result) > 0) 
			{
				while($row = mysqli_fetch_assoc($result)) 
				{
					$key=$row['supplier_id'];
				
					$resultSet[$key]=array(
						'supplier_id'=>$row['supplier_id'],
						'name'=>$row['name']
					);	
				}
				return $resultSet;
			}
		}
		// For customer : To get all the orders according to status
		elseif (isset($_GET['orders']) && isset($_GET['status']) && isset($_GET['customer_id'])) 
		{
			$sql="SELECT * FROM `orders` WHERE status = '".$_GET['status']."' AND customer_id = '".$_GET['customer_id']."'";
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
						'customer_id '=>$row['customer_id']
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
						'customer_id '=>$row['customer_id']
                    );	
                }
                return $resultSet;
            }
		}
		// For customer : To get all the recipe details
		elseif (isset($_GET['recipe_id']) && isset($_GET['customer_id'])) 
		{
			$sql = "SELECT `recipe_items`.recipe_items_id,`item`.`name`,`recipe_items`.`quantity` FROM `recipe`,`item`,`recipe_items` 
						WHERE `recipe`.`recipe_id` = `recipe_items`.`recipe_id`
						AND `item`.`item_id` = `recipe_items`.`item_id`
						AND `recipe`.`recipe_id` = ".$_GET['recipe_id'].
						"AND `recipe`.customer_id = ".$_GET['customer_id'];
			$result = mysqli_query($conn, $sql);

            // fetch from result variable
            if (mysqli_num_rows($result) > 0) 
            {
                while($row = mysqli_fetch_assoc($result)) 
                {
                    $key=$row['recipe_items_id'];
					
                    $resultSet[$key]=array(
                        'recipe_items_id'=>$row['recipe_items_id'],
                        'name'=>$row['name'],
						'quantity'=>$row['quantity'],
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
			if(isset($_POST['email']) && isset($_POST['password']) && isset($_POST['login'])){
				$sql="SELECT * FROM `authentication` WHERE username = '".$_POST['email']."'";
				$result = mysqli_query($conn, $sql);

				if (mysqli_num_rows($result) > 0) 
				{
					$row = mysqli_fetch_assoc($result);
					$username = $row['username'];
					$pwd = hash("sha256",$_POST['password']);
					$password = $row['password'];

					if(!substr_compare($pwd,$password,1,16))
					{
						$response=array("error"=>"Invalid password !");	
					}
					else
					{
						$response=array("message"=>"Login Success");	
					}
				}
				else
				{
					$response=array("error"=>"No such user !");	
				}
				return $response;
			}
			elseif(isset($_POST['customer_name']) 
			&& isset($_POST['email']) 
			&& isset($_POST['company_name']) 
			&& isset($_POST['office_address']) 
			&& isset($_POST['warehouse_address']) 
			&& isset($_POST['gstin']) 
			&& isset($_POST['contact_no'])
			&& isset($_POST['password'])
			&& isset($_POST['signup']))
			{
				$cust_name = $_POST['customer_name'];
				$email = $_POST['email'];
				$company_name = $_POST['company_name'];
				$office_address = $_POST['office_address'];
				$warehouse_address = $_POST['warehouse_address'];
				$gstin = $_POST['gstin'];
				$contact_no = $_POST['contact_no'];
				$password = hash("sha256",$_POST['password']);

				mysqli_begin_transaction($conn);

				try{
					$sql1="INSERT INTO `customer`(name,phone,email,company_name,office_address,warehouse_address,gst_no) VALUES('$cust_name','$contact_no','$email','$company_name','$office_address','$warehouse_address','$gstin')";
					$sql2="INSERT INTO `authentication`(username,password) VALUES('$email','$password')";
					

					$query1 = mysqli_query($conn, $sql1);
					$query2 = mysqli_query($conn, $sql2);

					if($query1 && $query2){
						$response = array("message"=>"Customer added !");
					}
					else{
						$response = array("error"=>"Couldn't add customer");
					}
				}
				catch(mysqli_sql_exception $exception){
					mysqli_rollback($conn);
					throw $exception;
				}				
				
				return $response;
			}
			// New item insertion
			elseif(isset($_POST['item_name']) && isset($_POST['item_quantity']) && isset($_POST['supplier_id']) && isset($_POST['admin']) && isset($_POST['stock']))
			{
				
				$sql="SELECT * FROM `item` WHERE name = '".$_POST['item_name']."'";
				$result = mysqli_query($conn, $sql);
				
				$item_id = '';
				if (mysqli_num_rows($result) > 0) 
				{
					$row = mysqli_fetch_assoc($result);
					$item_id = $row['item_id'];
					$item_quantity = floatval($row['quantity']) + floatval($_POST['item_quantity']) ;
					
					$sql="UPDATE `item` SET quantity = $item_quantity WHERE item_id=$item_id";
					$query= mysqli_query($conn, $sql);
				}
				else
				{
					$sql="INSERT INTO `item` (name,quantity) VALUES ('".$_POST['item_name']."',". $_POST['item_quantity'] .")";
					$query= mysqli_query($conn, $sql);
					$sql="SELECT item_id FROM `item` WHERE name = '".$_POST['item_name']."'";
					$result = mysqli_query($conn, $sql);
					$row = mysqli_fetch_assoc($result);
					$item_id = $row['item_id'];
				}	

				$sql="INSERT INTO `item_supplier` (item_id,supplier_id,purchase_date,quantity) VALUES ('$item_id',". $_POST['supplier_id'].",'".date("Y/m/d"). "',".$_POST['item_quantity'].")";
				$query= mysqli_query($conn, $sql);
				
				if($query)
				{
					$response=array("message"=>"Item added !");					
				}
		
				return $response;
			}
			// new supplier insertion
			elseif(isset($_POST['supplier_name']) && isset($_POST['admin']))
			{
				
				$sql="INSERT INTO `supplier` (name) VALUES ('".$_POST['supplier_name']."')";
				
				$query= mysqli_query($conn, $sql);
				if($query == true)
				{
					$response=array("message"=>"Supplier added !");					
				}
		
				return $response;
			}
			
		}	
	}

	function doPut(){
		global $conn;
		// to update status of an ongoing order
		if(isset($_REQUEST['update']) 
		&& isset($_REQUEST['order_id']) 
		&& isset($_REQUEST['ongoing']) 
		&& isset($_REQUEST['admin']) ){
			$sql = "UPDATE `orders` SET status='delivered' , delivery_date='".date("Y/m/d"). "' WHERE order_id=".$_REQUEST['order_id'];
			
			$query= mysqli_query($conn, $sql);
			if($query)
				$response = array("message"=>"Order delivered successfully !");
			else
				$response = array("error"=>"Could not deliver order !");
			
			return $response;
		}
		// To remove quantiity of an item manually
		else if(isset($_REQUEST['subtract']) 
		&& isset($_REQUEST['item_id']) 
		&& isset($_REQUEST['admin'])){

			$sql = "UPDATE `item` SET quantity= (quantity-".$_REQUEST['subtract'].") WHERE item_id=".$_REQUEST['item_id'];
			$query= mysqli_query($conn, $sql);

			if($query)
				$response = array("message"=>"Quantity updated!");
			else
				$response = array("error"=>"Could not update quantity !");
			
			return $response;
		}
	
	}

	//to return response as json
	function response($response)
	{
		echo json_encode(array("status"=>"200","data"=>$response));
	}


?>