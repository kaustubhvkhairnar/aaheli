$(document).ready(function () {
  /** Tabs slider */
  $(".slide-toggle").click(function () {
    if ($("#slide-item-1").is(":checked")) {
      $(".icons-1").removeClass("fal");
      $(".icons-1").addClass("fas");
      hideTabs();
      $("#title").text("Dashboard");
      $(".dashboard-tab").slideDown();
    } else {
      $(".icons-1").removeClass("fas");
      $(".icons-1").addClass("fal");
    }
    if ($("#slide-item-2").is(":checked")) {
      $(".icons-2").removeClass("fal");
      $(".icons-2").addClass("fas");
      hideTabs();
      $("#title").text("Customers");
      showLists("customers");
      $(".customers-tab").slideDown();
    } else {
      $(".icons-2").removeClass("fas");
      $(".icons-2").addClass("fal");
    }
    if ($("#slide-item-3").is(":checked")) {
      $(".icons-3").removeClass("fal");
      $(".icons-3").addClass("fas");
      hideTabs();
      $("#title").text("Orders");
      showLists("orders-pending");
      $(".orders-tab").slideDown();
    } else {
      $(".icons-3").removeClass("fas");
      $(".icons-3").addClass("fal");
    }
    if ($("#slide-item-4").is(":checked")) {
      $(".icons-4").removeClass("fal");
      $(".icons-4").addClass("fas");
      hideTabs();
      $("#title").text("Recipes");
      showLists("recipes");
      $(".recipe-tab").slideDown();
    } else {
      $(".icons-4").removeClass("fas");
      $(".icons-4").addClass("fal");
    }
    if ($("#slide-item-5").is(":checked")) {
      $(".icons-5").removeClass("fal");
      $(".icons-5").addClass("fas");
      hideTabs();
      $("#title").text("Stocks");
      showLists("stocks");
      $(".stocks-tab").slideDown().css("display", "grid");
    } else {
      $(".icons-5").removeClass("fas");
      $(".icons-5").addClass("fal");
    }

    if ($("#slide-item-6").is(":checked")) {
      $(".icons-6").removeClass("fal");
      $(".icons-6").addClass("fas");
      hideTabs();
      $("#title").text("Suppliers");
      showLists("suppliers");
      $(".suppliers-tab").slideDown();
    } else {
      $(".icons-6").removeClass("fas");
      $(".icons-6").addClass("fal");
    }
    /*** Filters slider */
    $(".bar-toggle").click(function () {
      if ($("#bar-item-1").is(":checked")) {
        $(".bar-icons-1").removeClass("fal");
        $(".bar-icons-1").addClass("fas");
        hideFilterTabs();
        showLists("orders-pending");
        showLists("orders-ongoing");
        showLists("orders-delivered");
        $(".pending-tab").slideDown();
      } else {
        $(".bar-icons-1").removeClass("fas");
        $(".bar-icons-1").addClass("fal");
      }

      if ($("#bar-item-2").is(":checked")) {
        $(".bar-icons-2").removeClass("fal");
        $(".bar-icons-2").addClass("fas");
        hideFilterTabs();
        showLists("orders-ongoing");
        $(".ongoing-tab").slideDown();
      } else {
        $(".bar-icons-2").removeClass("fas");
        $(".bar-icons-2").addClass("fal");
      }

      if ($("#bar-item-3").is(":checked")) {
        $(".bar-icons-3").removeClass("fal");
        $(".bar-icons-3").addClass("fas");
        hideFilterTabs();
        showLists("orders-delivered");
        $(".delivered-tab").slideDown();
      } else {
        $(".bar-icons-3").removeClass("fas");
        $(".bar-icons-3").addClass("fal");
      }
    });
  });

  // display create-recipe popup
  $(".create-btn").click(function () {
    $(".popup-card-bg").css("display", "flex");
    $(".popup-card").show();
    $(".extra").remove();
  });

  // display add-recipe popup
  $(".add-recipe-btn").click(function () {
    $(".popup-card-bg").css("display", "flex");
    $(".popup-card").show();
    $(".extra").remove();
  });

  // display edit-recipe popup
  $(".edit-recipe-btn").click(function () {
    $(".edit-popup-card-bg").css("display", "flex");
    $(".edit-popup-card").show();
    $(".extra").remove();
  });

  // display subtact-quantity popup
  $(".subtract-quantity-btn").click(function () {
    $(".subtract-quantity-popup-card-bg").css("display", "flex");
    $(".subtract-quantity-popup-card").show();
  });

  // display add-quantity popup
  $(".add-quantity-btn").click(function () {
    $(".add-quantity-popup-card-bg").css("display", "flex");
    $(".add-quantity-popup-card").show();
  });

  // display add-item popup
  $(".add-item-btn").click(function () {
    supplierDropdown();
    $(".add-item-popup-card-bg").css("display", "flex");
    $(".add-item-popup-card").show();
  });

  // display view details popup
  $(".view-popup-btn").click(function () {
    $(".view-popup-card-bg").css("display", "flex");
    $(".view-popup-card").show();
  });

  // display add-item popup
  $(".add-supplier-btn").click(function () {
    $(".add-supplier-popup-card-bg").css("display", "flex");
    $(".add-supplier-popup-card").show();
  });

  // display view customer popup
  $(".view-customer-btn").click(function () {
    $(".view-customer-popup-card-bg").css("display", "flex");
    $(".view-customer-popup-card").show();
  });

  // display view customer popup
  $(".delete-popup-btn").click(function () {
    $(".delete-popup-card-bg").css("display", "flex");
    $(".delete-popup-card").show();
  });

  // display update status popup
  $(".confirm-popup-btn").click(function () {
    $(".confirm-popup-card-bg").css("display", "flex");
    $(".confirm-popup-card").show();
  });

  // close popups using close button
  $(".cancel-btn").click(function () {
    $(".popup-card-bg").hide();
    $(".edit-popup-card-bg").hide();
    $(".subtract-quantity-popup-card-bg").hide();
    $(".add-item-popup-card-bg").hide();
    $(".add-quantity-popup-card-bg").hide();
    $(".add-supplier-popup-card-bg").hide();
    $(".view-customer-popup-card-bg").hide();
    $(".delete-popup-card-bg").hide();
    $(".confirm-popup-card-bg").hide();
  });

  // close popups using close icon
  $(".fa-times").click(function () {
    $(".view-popup-card-bg").hide();
    $(".popup-card-bg").hide();
    $(".edit-popup-card-bg").hide();
    $(".subtract-quantity-popup-card-bg").hide();
    $(".add-item-popup-card-bg").hide();
    $(".add-quantity-popup-card-bg").hide();
    $(".add-supplier-popup-card-bg").hide();
    $(".view-customer-popup-card-bg").hide();
    $(".delete-popup-card-bg").hide();
    $(".confirm-popup-card-bg").hide();
  });

  $(".new-add-item-btn").click(function () {
    var $items = $("<div/>", { class: "items extra" }),
      $label1 = $("<label/>", { for: "items_names", text: "Item Name" }),
      $input1 = $("<input/>", {
        type: "text",
        id: "item_names",
        name: "item_names[]",
      }),
      $label2 = $("<label/>", { for: "items_perc", text: "Percentage" }),
      $input2 = $("<input/>", {
        type: "number",
        id: "item_perc",
        name: "item_perc[]",
      }),
      $icon = $("<i/>", { class: "fal fa-percent" });
    $items
      .append($label1, $input1, $label2, $input2, $icon)
      .appendTo(".popup-card-middle");
  });

  $(".edit-add-item-btn").click(function () {
    var $items = $("<div/>", { class: "items extra" }),
      $label1 = $("<label/>", { for: "items_names", text: "Item Name" }),
      $input1 = $("<input/>", {
        type: "text",
        id: "item_names",
        name: "item_names[]",
      }),
      $label2 = $("<label/>", { for: "items_perc", text: "Percentage" }),
      $input2 = $("<input/>", {
        type: "number",
        id: "item_perc",
        name: "item_perc[]",
      }),
      $icon = $("<i/>", { class: "fal fa-percent" });
    $items
      .append($label1, $input1, $label2, $input2, $icon)
      .appendTo(".edit-popup-card-middle");
  });
});

// to hide the tabs
function hideTabs() {
  $(".dashboard-tab").hide();
  $(".customers-tab").hide();
  $(".orders-tab").hide();
  $(".stocks-tab").hide();
  $(".recipe-tab").hide();
  $(".suppliers-tab").hide();
}

// to hide the filter tabs
function hideFilterTabs() {
  $(".pending-tab").hide();
  $(".ongoing-tab").hide();
  $(".delivered-tab").hide();
}

function showLists(type) {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      var jObj = JSON.parse(this.responseText);

      if (type == "customers") {
        $(".customer-card").remove();
        for (customer in jObj["data"]) {
          var $customer_card = $("<div/>", { class: "customer-card" }),
            $customer_id = $("<p/>", {
              text: jObj["data"][customer]["customer_id"],
            }),
            $customer_details = $("<div/>", { class: "customer-details" }),
            $name = $("<p/>", { text: jObj["data"][customer]["name"] }),
            $company_name = $("<p/>", {
              text: jObj["data"][customer]["company_name"],
            }),
            $edit_section = $("<div/>", { class: "edit-section" }),
            // $p_icon = $("<p/>"),
            // $icon = $("<i/>", {
            //   class: "fal fa-trash-alt delete-popup-btn",
            //   id: jObj["data"][customer]["customer_id"],
            //   value: "delete-customer",
            // }),
            $view_customer_btn = $("<button/>", {
              id: jObj["data"][customer]["customer_id"],
              text: "View",
              type: "button",
              class: "black-btn view-customer-btn",
            });

          // $p_icon.append($icon),
          $customer_details.append($name, $company_name),
            $edit_section.append($view_customer_btn),
            $customer_card
              .append($customer_id, $customer_details, $edit_section)
              .appendTo(".customer-list-tab");
        }
        // display view customer popup
        $(".view-customer-btn").click(function () {
          var id = $(this).attr("id");
          $(".inline-form-tab > #customer_name").val(jObj["data"][id]["name"]);
          $(".inline-form-tab > #email").val(jObj["data"][id]["email"]);
          $(".inline-form-tab > #phone").val(jObj["data"][id]["phone"]);

          $(".inline-form-tab > #company_name").val(
            jObj["data"][id]["company_name"]
          );
          $(".inline-form-tab > #office_address").val(
            jObj["data"][id]["office_address"]
          );
          $(".inline-form-tab > #gst_number").val(jObj["data"][id]["gst_no"]);
          $(".inline-form-tab > #warehouse_address").val(
            jObj["data"][id]["warehouse_address"]
          );

          $(".view-customer-popup-card-bg").css("display", "flex");
          $(".view-customer-popup-card").show();
        });
      } else if (type == "recipes") {
        $(".recipe-item-card").remove();
        for (recipe in jObj["data"]) {
          var $recipe_card = $("<div/>", { class: "recipe-item-card" }),
            $recipe_id = $("<p/>", {
              text: jObj["data"][recipe]["recipe_id"],
            }),
            $recipe_name = $("<p/>", {
              text: jObj["data"][recipe]["name"],
            }),
            $edit_section = $("<div/>", { class: "edit-section" }),
            $p_edit_icon = $("<p/>"),
            $edit_icon = $("<i/>", {
              class: "fal fa-edit edit-recipe-btn",
              id: jObj["data"][recipe]["recipe_id"],
            }),
            // $p_delete_icon = $("<p/>"),
            // $delete_icon = $("<i/>", {
            //   class: "fal fa-trash-alt delete-popup-btn",
            //   id: jObj["data"][recipe]["recipe_id"],
            //   value: "delete-recipe",
            // }),
            $view_popup_btn = $("<button/>", {
              id: jObj["data"][recipe]["recipe_id"],
              value: jObj["data"][recipe]["name"],
              text: "View",
              type: "button",
              class: "black-btn view-popup-btn",
            });

          $p_edit_icon.append($edit_icon),
            // $p_delete_icon.append($delete_icon),
            $edit_section.append($p_edit_icon, $view_popup_btn),
            $recipe_card
              .append($recipe_id, $recipe_name, $edit_section)
              .appendTo(".recipes-list-tab");
        }

        // display view recipe details popup
        $(".view-popup-btn").click(function () {
          var id = $(this).attr("id");
          var name = $(this).val();
          $(".view-popup-card > h2").text(name);
          showRecipe(id);
          $(".view-popup-card-bg").css("display", "flex");
          $(".view-popup-card").show();
        });

        // display edit-recipe popup
        $(".edit-recipe-btn").click(function () {
          var id = $(this).attr("id");
          $(".edit-popup-card-bg #edit_recipe_name").val(
            jObj["data"][id]["name"]
          );
          showEditRecipe(id);
          $(".edit-popup-card-bg").css("display", "flex");
          $(".edit-popup-card").show();
          $(".extra").remove();
        });
      } else if (type == "stocks") {
        $(".stocks-card").remove();
        for (item in jObj["data"]) {
          var $stocks_card = $("<div/>", { class: "stocks-card" }),
            $item_id = $("<p/>", {
              text: jObj["data"][item]["item_id"],
            }),
            $stocks_details = $("<div/>", { class: "stocks-details" }),
            $item_name = $("<p/>", {
              text: jObj["data"][item]["name"],
            }),
            $edit_section = $("<div/>", { class: "edit-section" }),
            $subtract = $("<button/>", {
              id: jObj["data"][item]["item_id"],
              text: "-",
              type: "button",
              class: "black-btn subtract-quantity-btn",
            }),
            $quantity = $("<p/>", {
              text: jObj["data"][item]["quantity"] + " KG",
            }),
            $add = $("<button/>", {
              id: jObj["data"][item]["item_id"],
              text: "+",
              type: "button",
              class: "black-btn add-quantity-btn",
            });

          $stocks_details.append($item_name),
            $edit_section.append($subtract, $quantity, $add),
            $stocks_card
              .append($item_id, $stocks_details, $edit_section)
              .appendTo(".stocks-list-tab");
        }

        // display subtact-quantity popup
        $(".subtract-quantity-btn").click(function () {
          var id = $(this).attr("id");
          $("#subtract_quantity_id").val(id);

          $(".subtract-quantity-popup-card-bg").css("display", "flex");
          $(".subtract-quantity-popup-card").show();
        });

        // display add-quantity popup
        $(".add-quantity-btn").click(function () {
          supplierDropdown();
          var id = $(this).attr("id");
          $("#add_quantity_id").val(id);

          $(".add-quantity-popup-card #old_item_name").val(
            jObj["data"][id]["name"]
          );
          $(".add-quantity-popup-card-bg").css("display", "flex");
          $(".add-quantity-popup-card").show();
        });

        // add item in stock
        $(".add-item-popup-card #add_item_btn").click(function () {
          var name = $("#new_item_name").val();
          var quantity = $("#new_item_quantity").val();
          var supplier = $("#new_item_supplier_name option:selected").attr(
            "id"
          );

          addStockItem(name, quantity, supplier);
        });

        // subtract item in stock
        $(".subtract-quantity-popup-card #subtract_btn").click(function () {
          var item_id = $("#subtract_quantity_id").val();
          var quantity = $("#subtract_item_quantity").val();

          subtractQuantity(item_id, quantity);
        });

        // subtract item in stock
        $(".add-quantity-popup-card #add_quantity_btn").click(function () {
          var name = $("#old_item_name").val();
          var quantity = $("#add_item_quantity").val();
          var supplier = $("#add_quantity_supplier option:selected").attr("id");

          addStockItem(name, quantity, supplier);
        });
      } else if (type == "suppliers") {
        $(".supplier-card").remove();
        for (supplier in jObj["data"]) {
          var $supplier_card = $("<div/>", { class: "supplier-card" }),
            $supplier_id = $("<p/>", {
              text: jObj["data"][supplier]["supplier_id"],
            }),
            $supplier_details = $("<div/>", { class: "supplier-details" }),
            $supplier_name = $("<p/>", {
              text: jObj["data"][supplier]["name"],
            }),
            $edit_section = $("<div/>", {
              class: "edit-section",
            });
          // $p_icon = $("<p/>"),
          // $icon = $("<i/>", {
          //   class: "fal fa-trash-alt delete-popup-btn",
          //   id: jObj["data"][supplier]["supplier_id"],
          //   value: "delete-supplier",
          // });
          // $p_icon.append($icon),
          $supplier_details.append($supplier_name),
            $edit_section.append($view_customer_btn),
            $supplier_card
              .append($supplier_id, $supplier_details, $edit_section)
              .appendTo(".supplier-list-tab");
        }

        // add supplier
        $(".add-supplier-popup-card #add_supplier_btn").click(function () {
          var name = $("#new_supplier_name").val();
          addSupplier(name);
        });
      } else if (type == "orders-pending") {
        $(".pending-item-card").remove();
        $(".ongoing-item-card").remove();
        $(".delivered-item-card").remove();
        for (order in jObj["data"]) {
          var $pending_item_card = $("<div/>", { class: "pending-item-card" }),
            $order_id = $("<p/>", {
              text: jObj["data"][order]["order_id"],
            }),
            $order_name = $("<p/>", {
              text: jObj["data"][order]["recipe_name"],
            }),
            $order_quantity = jObj["data"][order]["quantity"] + " KG",
            $order_date_text = $("<p/>", {
              text: "Order Date",
            }),
            $order_date = $("<time/>", {
              text: jObj["data"][order]["order_date"],
            }),
            $customer_name = $("<time/>", {
              text: jObj["data"][order]["customer_name"],
            });
          $order_name.append("</br>", $order_quantity),
            $order_date_text.append(
              $order_date,
              "<br/> Customer :",
              $customer_name
            ),
            $pending_item_card
              .append($order_id, $order_name, $order_date_text)
              .appendTo(".pending-tab");
        }
      } else if (type == "orders-ongoing") {
        $(".pending-item-card").remove();
        $(".ongoing-item-card").remove();
        $(".delivered-item-card").remove();
        for (order in jObj["data"]) {
          var $ongoing_item_card = $("<div/>", { class: "ongoing-item-card" }),
            $order_id = $("<p/>", {
              text: jObj["data"][order]["order_id"],
            }),
            $order_name = $("<p/>", {
              text: jObj["data"][order]["recipe_name"],
            }),
            $order_quantity = jObj["data"][order]["quantity"] + "KG",
            $order_date_text = $("<p/>", {
              text: "Order Date",
            }),
            $order_date = $("<time/>", {
              text: jObj["data"][order]["order_date"],
            }),
            $customer_name = $("<time/>", {
              text: jObj["data"][order]["customer_name"],
            }),
            $update_status = $("<button/>", {
              id: jObj["data"][order]["order_id"],
              text: "Update Status",
              type: "button",
              class: "black-btn confirm-popup-btn",
            });
          $order_name.append("</br>", $order_quantity),
            $order_date_text.append(
              $order_date,
              "<br/> Customer :",
              $customer_name
            ),
            $ongoing_item_card
              .append($order_id, $order_name, $order_date_text, $update_status)
              .appendTo(".ongoing-tab");
        }

        // display update status popup
        $(".confirm-popup-btn").click(function () {
          var id = $(this).attr("id");

          $(".confirm-popup-card-bg").css("display", "flex");
          $(".confirm-popup-card").show();
          // $("#confirm_btn").attr("id", id);
          $("#confirm_btn").click(function () {
            updateStatus(id);
          });
        });
      } else if (type == "orders-delivered") {
        $(".pending-item-card").remove();
        $(".ongoing-item-card").remove();
        $(".delivered-item-card").remove();
        for (order in jObj["data"]) {
          var $delivered_item_card = $("<div/>", {
              class: "delivered-item-card",
            }),
            $order_id = $("<p/>", {
              text: jObj["data"][order]["order_id"],
            }),
            $order_name = $("<p/>", {
              text: jObj["data"][order]["recipe_name"],
            }),
            $order_quantity = jObj["data"][order]["quantity"] + "KG",
            $order_date_text = $("<p/>", {
              text: "Order Date",
            }),
            $order_date = $("<time/>", {
              text: jObj["data"][order]["order_date"],
            }),
            $delivery_date = $("<time/>", {
              text: jObj["data"][order]["delivery_date"],
            }),
            $customer_text = $("<p/>", {
              text: "Customer : ",
            }),
            $customer_name = $("<p/>", {
              text: jObj["data"][order]["customer_name"],
            });

          $order_date_text.append(
            $order_date,
            "<br/> Delivered On",
            $delivery_date
          ),
            $order_name.append("</br>", $order_quantity),
            $delivered_item_card
              .append(
                $order_id,
                $order_name,
                $order_date_text,
                $customer_text,
                $customer_name
              )
              .appendTo(".delivered-tab");
        }
      }
      // delete confirmation popup
      // $(".delete-popup-btn").click(function () {
      //   var id = $(this).attr("id");
      //   var type = $(this).attr("value");
      //   deleteEntry(id, type);

      //   $(".delete-popup-card-bg").css("display", "flex");
      //   $(".delete-popup-card").show();
      // });

      // // close popups using close button
      // $(".cancel-btn").click(function () {
      //   $(".popup-card-bg").hide();
      //   $(".edit-popup-card-bg").hide();
      //   $(".subtract-quantity-popup-card-bg").hide();
      //   $(".add-item-popup-card-bg").hide();
      //   $(".add-quantity-popup-card-bg").hide();
      //   $(".add-supplier-popup-card-bg").hide();
      //   $(".view-customer-popup-card-bg").hide();
      //   $(".delete-popup-card-bg").hide();
      // });

      // // close popups using close icon
      // $(".fa-times").click(function () {
      //   $(".view-popup-card-bg").hide();
      //   $(".popup-card-bg").hide();
      //   $(".edit-popup-card-bg").hide();
      //   $(".subtract-quantity-popup-card-bg").hide();
      //   $(".add-item-popup-card-bg").hide();
      //   $(".add-quantity-popup-card-bg").hide();
      //   $(".add-supplier-popup-card-bg").hide();
      //   $(".view-customer-popup-card-bg").hide();
      //   $(".delete-popup-card-bg").hide();
      // });
    }
  };
  switch (type) {
    case "customers":
      xhttp.open(
        "GET",
        "http://localhost/aaheli/api/?customers=1&admin=1",
        true
      );
      xhttp.send();
      break;
    case "recipes":
      xhttp.open("GET", "http://localhost/aaheli/api/?recipes=1&admin=1", true);
      xhttp.send();
      break;

    case "stocks":
      xhttp.open("GET", "http://localhost/aaheli/api/?stocks=1&admin=1", true);
      xhttp.send();
      break;

    case "suppliers":
      xhttp.open(
        "GET",
        "http://localhost/aaheli/api/?suppliers=1&admin=1",
        true
      );
      xhttp.send();
      break;
    case "orders-pending":
      xhttp.open(
        "GET",
        "http://localhost/aaheli/api/?orders=1&status=pending&admin=1",
        true
      );
      xhttp.send();
      break;
    case "orders-ongoing":
      xhttp.open(
        "GET",
        "http://localhost/aaheli/api/?orders=1&status=ongoing&admin=1",
        true
      );
      xhttp.send();
      break;
    case "orders-delivered":
      xhttp.open(
        "GET",
        "http://localhost/aaheli/api/?orders=1&status=delivered&admin=1",
        true
      );
      xhttp.send();
      break;
  }
}
function showEditRecipe(id) {
  $(".items").remove();

  var xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      var jObj = JSON.parse(this.responseText);

      for (item in jObj["data"]) {
        var $items = $("<div/>", { class: "items" }),
          $itemLabel = $("<label/>", { for: "items_names", text: "Item Name" }),
          $itemName = $("<input/>", {
            type: "text",
            id: "item_names",
            value: jObj["data"][item]["name"],
          }),
          $percLabel = $("<label/>", { for: "item_perc", text: "Percentage" }),
          $perc = $("<input/>", {
            type: "number",
            id: "item_perc",
            value: jObj["data"][item]["quantity"],
          }),
          $percIcon = $("<i/>", {
            class: "fal fa-percent",
          });

        $items
          .append($itemLabel, $itemName, $percLabel, $perc, $percIcon)
          .appendTo(".edit-popup-card-middle");
      }
    }
  };
  xhttp.open(
    "GET",
    "http://localhost/aaheli/api/?recipe_items=1&admin=1&recipe_id=" + id,
    true
  );
  xhttp.send();
}

function showRecipe(id) {
  $(".view-popup-items").remove();

  var xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      var jObj = JSON.parse(this.responseText);

      for (item in jObj["data"]) {
        var $view_popup_items = $("<div/>", { class: "view-popup-items" }),
          $item_name = $("<h4/>", {
            text: jObj["data"][item]["name"],
          }),
          $item_perc = $("<h4/>", {
            text: jObj["data"][item]["quantity"],
          }),
          $perc = $("<i/>", {
            class: "fal fa-percent",
          });

        $item_perc.append($perc),
          $view_popup_items
            .append($item_name, $item_perc)
            .appendTo(".view-popup-card-middle");
      }
    }
  };
  xhttp.open(
    "GET",
    "http://localhost/aaheli/api/?recipe_items=1&admin=1&recipe_id=" + id,
    true
  );
  xhttp.send();
}

function supplierDropdown() {
  $(".supplier-selector option:not(:first-child)").remove();

  var xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      var jObj = JSON.parse(this.responseText);

      for (supplier in jObj["data"]) {
        var $option = $("<option/>", {
          id: jObj["data"][supplier]["supplier_id"],
          value: jObj["data"][supplier]["name"],
          text: supplier + " - " + jObj["data"][supplier]["name"],
        });

        $option.appendTo(".supplier-selector");
      }
    }
  };
  xhttp.open("GET", "http://localhost/aaheli/api/?suppliers=1&admin=1", true);
  xhttp.send();
}

function updateStatus(id) {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      $(".confirm-popup-card-bg").hide();
      showLists("orders-ongoing");
    }
  };
  xhttp.open(
    "PUT",
    "http://localhost/aaheli/api/?update=1&ongoing=1&admin=1&order_id=" + id,
    true
  );
  xhttp.send();
}

function addSupplier(name) {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      var jObj = JSON.parse(this.responseText);
      console.log(jObj["data"]);
      $(".add-supplier-popup-card-bg").hide();
      showLists("suppliers");
      $("#new_supplier_name").val("");
    }
  };
  xhttp.open("POST", "http://localhost/aaheli/api/", true);

  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("supplier_name=" + name + "&admin=1");
}

function addStockItem(name, quantity, supplier) {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      $(".add-item-popup-card-bg").hide();
      $(".add-quantity-popup-card-bg").hide();
      showLists("stocks");
      $("#new_item_name").val("");
      $("#new_item_quantity").val("");
      $("#add_item_quantity").val("");
    }
  };

  xhttp.open("POST", "http://localhost/aaheli/api/", true);

  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(
    "item_name=" +
      name +
      "&item_quantity=" +
      quantity +
      "&supplier_id=" +
      supplier +
      "&admin=1&stock=1"
  );
}

function subtractQuantity(id, value) {
  var xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      $("#subtract_item_quantity").val("");
      $(".subtract-quantity-popup-card-bg").hide();
      showLists("stocks");
    }
  };

  xhttp.open(
    "PUT",
    "http://localhost/aaheli/api/?item_id=" +
      id +
      "&subtract=" +
      value +
      "&admin=1",
    true
  );
  xhttp.send();
}
