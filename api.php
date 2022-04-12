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
		$posts=array();

		//to get record of replied posts
		if(isset($_GET['reply_to']))
		{
			$id=$_GET['reply_to'];

			$sql="SELECT * FROM CarWashPost where reply_to=".$id;
            $result = mysqli_query($conn, $sql);

            // fetch from result variable
            if (mysqli_num_rows($result) > 0) 
            {
                while($row = mysqli_fetch_assoc($result)) 
                {
                    $key="post".$row['id'];
                    $repto=-1;
                    if($row['reply_to']==null){
                        $repto="not";
                    }else{
                        $repto=$row['reply_to'];
                    }
                    $posts[$key]=array(
                        'id'=>$row['id'],
                        'name'=>$row['name'],
                        'text'=>$row['text'],
                        'post_date'=>$row['post_date'],
                        'likes'=>$row['likes'],
                        'reply_to'=>$repto,
                        'link'=> array("self"=>"/api/?id=".$row['id']."","replies"=>"/api/?reply_to=".$row['id']."")
                    );	
                }
                return $posts;
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
			if(isset($_POST['recipe_name']) && isset($_POST['recipe_quantity']) )
			{
				
				$sql="insert into `recipes` (recipe_name,recipe_quantity,customer_id) values ('".$_POST['recipe_name']."',". $_POST['recipe_quantity'] .",".$_POST['customer_id'].")";
				
				// insert query for new record
				$query= mysqli_query($conn, $sql);
				if($query == true)
				{
					$response=array("message"=>"Recipe created successfuly !");					
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