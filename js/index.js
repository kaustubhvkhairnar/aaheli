$(document).ready(function () {
  $(".sign-up-btn").click(function () {
    var cust_name = $("#customer_name").val();
    var email = $("#email").val();
    var company_name = $("#company_name").val();
    var office_address = $("#office_address").val();
    var warehouse_address = $("#warehouse_address").val();
    var gstin = $("#gstin").val();
    var contact_no = $("#contact_no").val();
    if (
      cust_name != "" &&
      email != "" &&
      company_name != "" &&
      office_address != "" &&
      warehouse_address != "" &&
      gstin != "" &&
      contact_no != ""
    ) {
      $(".sign-up-card").hide();
      $(".password-card").show();
    } else {
      alert("Enter all empty fields !");
    }
  });

  $("#go_back").click(function () {
    $(".sign-up-card").show();
    $(".password-card").hide();
  });

  $("#create").click(function () {
    var cust_name = $("#customer_name").val();
    var email = $("#email").val();
    var company_name = $("#company_name").val();
    var office_address = $("#office_address").val();
    var warehouse_address = $("#warehouse_address").val();
    var gstin = $("#gstin").val();
    var contact_no = $("#contact_no").val();

    var password = $("#password").val();
    var confirm = $("#confirm_password").val();
    alert("sds");
    if (password == "" || confirm == "") {
      alert("Please enter password !");
    } else if (password == confirm) {
      doRegister(
        cust_name,
        email,
        company_name,
        office_address,
        warehouse_address,
        gstin,
        contact_no,
        password
      );
    } else {
      alert("Password should be equal !");
    }
  });

  $(".log-in-btn").click(function () {
    var username = $("#username").val();
    var password = $("#password").val();
    doLogin(username, password);
  });
});

function doLogin(username, password) {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      var jObj = SON.parse(this.responseText);
      console.log(jObj["data"]);
    }
  };

  xhttp.open("POST", "http://localhost/aaheli/api/");

  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("email=" + username + "&password=" + password + "&login=1");
}

function doRegister(
  cust_name,
  email,
  company_name,
  office_address,
  warehouse_address,
  gstin,
  contact_no,
  password
) {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      var jObj = JSON.parse(this.responseText);
      console.log(jObj["data"]);
    }
  };

  xhttp.open("POST", "http://localhost/aaheli/api/");

  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(
    "customer_name=" +
      cust_name +
      "&email=" +
      email +
      "&company_name=" +
      company_name +
      "&office_address=" +
      office_address +
      "&warehouse_address=" +
      warehouse_address +
      "&gstin=" +
      gstin +
      "&contact_no=" +
      contact_no +
      "&password=" +
      password +
      "&signup=1"
  );
}
