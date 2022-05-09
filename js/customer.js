$(document).ready(function () {
  /** Slider */
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
      $("#title").text("New Order");
      $(".new-order-tab").slideDown();
      
      $(".dropdown").hover(
        function () {
          $(".dropdown-content").slideDown();
          $(".dropdown-icon").removeClass("fa-angle-down");
          $(".dropdown-icon").addClass("fa-angle-up");
        },
        function () {
          $(".dropdown-content").slideUp();
          $(".dropdown-icon").removeClass("fa-angle-up");
          $(".dropdown-icon").addClass("fa-angle-down");
        }
      );
    } else {
      $(".icons-2").removeClass("fas");
      $(".icons-2").addClass("fal");
    }
    if ($("#slide-item-3").is(":checked")) {
      $(".icons-3").removeClass("fal");
      $(".icons-3").addClass("fas");
      hideTabs();
      $("#title").text("Your Orders");
      $(".orders-tab").slideDown();
    } else {
      $(".icons-3").removeClass("fas");
      $(".icons-3").addClass("fal");
    }
    if ($("#slide-item-4").is(":checked")) {
      $(".icons-4").removeClass("fal");
      $(".icons-4").addClass("fas");
      hideTabs();
      $("#title").text("Your Recipes");
      $(".recipe-tab").slideDown();
    } else {
      $(".icons-4").removeClass("fas");
      $(".icons-4").addClass("fal");
    }
    if ($("#slide-item-5").is(":checked")) {
      $(".icons-5").removeClass("fal");
      $(".icons-5").addClass("fas");
      hideTabs();
      $("#title").text("Your Profile");
      $(".profile-tab").slideDown().css("display", "grid");
    } else {
      $(".icons-5").removeClass("fas");
      $(".icons-5").addClass("fal");
    }

    $(".bar-toggle").click(function () {
      if ($("#bar-item-1").is(":checked")) {
        $(".bar-icons-1").removeClass("fal");
        $(".bar-icons-1").addClass("fas");
        hideFilterTabs();
        $(".placed-tab").slideDown();
      } else {
        $(".bar-icons-1").removeClass("fas");
        $(".bar-icons-1").addClass("fal");
      }

      if ($("#bar-item-2").is(":checked")) {
        $(".bar-icons-2").removeClass("fal");
        $(".bar-icons-2").addClass("fas");
        hideFilterTabs();
        $(".ongoing-tab").slideDown();
      } else {
        $(".bar-icons-2").removeClass("fas");
        $(".bar-icons-2").addClass("fal");
      }

      if ($("#bar-item-3").is(":checked")) {
        $(".bar-icons-3").removeClass("fal");
        $(".bar-icons-3").addClass("fas");
        hideFilterTabs();
        $(".delivered-tab").slideDown();
      } else {
        $(".bar-icons-3").removeClass("fas");
        $(".bar-icons-3").addClass("fal");
      }
    });
  });

  $(".dropdown-content > :button").click(function (e) {
    $(".dropbtn").text($(this).text());
    $("#recipe_selection").text($(this).attr('id'));
    $(".dropdown-content").slideUp();
  });

  // Name
  $(".edit-icons-1").click(function () {
    $(".edit-icons-1").hide();
    $(".edit-details-1").css("display", "flex");
    $(".edit-input-btn-1").prop("disabled", false);
  });

  $(".edit-details-1 > *").click(function () {
    $(".edit-icons-1").css("display", "");
    $(".edit-details-1").hide();
    $(".edit-input-btn-1").prop("disabled", true);
  });

  // email
  $(".edit-icons-2").click(function () {
    $(".edit-icons-2").hide();
    $(".edit-details-2").css("display", "flex");
    $(".edit-input-btn-2").prop("disabled", false);
  });

  $(".edit-details-2 > *").click(function () {
    $(".edit-icons-2").css("display", "");
    $(".edit-details-2").hide();
    $(".edit-input-btn-2").prop("disabled", true);
  });

  // contact
  $(".edit-icons-3").click(function () {
    $(".edit-icons-3").hide();
    $(".edit-details-3").css("display", "flex");
    $(".edit-input-btn-3").prop("disabled", false);
  });

  $(".edit-details-3 > *").click(function () {
    $(".edit-icons-3").css("display", "");
    $(".edit-details-3").hide();
    $(".edit-input-btn-3").prop("disabled", true);
  });

  // company
  $(".edit-icons-4").click(function () {
    $(".edit-icons-4").hide();
    $(".edit-details-4").css("display", "flex");
    $(".edit-input-btn-4").prop("disabled", false);
  });

  $(".edit-details-4 > *").click(function () {
    $(".edit-icons-4").css("display", "");
    $(".edit-details-4").hide();
    $(".edit-input-btn-4").prop("disabled", true);
  });

  // gst
  $(".edit-icons-5").click(function () {
    $(".edit-icons-5").hide();
    $(".edit-details-5").css("display", "flex");
    $(".edit-input-btn-5").prop("disabled", false);
  });

  $(".edit-details-5 > *").click(function () {
    $(".edit-icons-5").css("display", "");
    $(".edit-details-5").hide();
    $(".edit-input-btn-5").prop("disabled", true);
  });

  // office address
  $(".edit-icons-6").click(function () {
    $(".edit-icons-6").hide();
    $(".edit-details-6").css("display", "flex");
    $(".edit-input-btn-6").prop("disabled", false);
  });

  $(".edit-details-6 > *").click(function () {
    $(".edit-icons-6").css("display", "");
    $(".edit-details-6").hide();
    $(".edit-input-btn-6").prop("disabled", true);
  });

  // warehouse address
  $(".edit-icons-7").click(function () {
    $(".edit-icons-7").hide();
    $(".edit-details-7").css("display", "flex");
    $(".edit-input-btn-7").prop("disabled", false);
  });

  $(".edit-details-7 > *").click(function (e) {
    // if (e.target.className == "black-btn") {
    // xhttp = new XMLHttpRequest();
    // $.post(
    //   "../api.php",
    //   {
    //     warehouse_address: $(".edit-input-btn-7").val(),
    //   },
    //   function (data, status) {
    //     alert("Data: " + data + "\nStatus: " + status);
    // }
    // );
    // }
    $(".edit-icons-7").css("display", "");
    $(".edit-details-7").hide();
    $(".edit-input-btn-7").prop("disabled", true);
  });

  // display create-recipe popup
  $(".create-btn").click(function () {
    $(".popup-card-bg").css("display", "flex");
    $(".popup-card").show();
  });

  // display add-recipe popup
  $(".add-recipe-btn").click(function () {
    $(".popup-card-bg").css("display", "flex");
    $(".popup-card").show();
  });

  // display edit-recipe popup
  $(".edit-recipe-btn").click(function () {
    $(".edit-popup-card-bg").css("display", "flex");
    $(".edit-popup-card").show();
  });
  // close create recipe popup using close icon
  $(".cancel-btn").click(function () {
    $(".popup-card-bg").hide();
    $(".edit-popup-card-bg").hide();
  });

  // close create recipe popup using cancel button
  $(".popup-card > .fa-times").click(function () {
    $(".popup-card-bg").hide();
  });

  // close create recipe popup using cancel button
  $(".edit-popup-card > .fa-times").click(function () {
    $(".edit-popup-card-bg").hide();
  });

  $(".add-item-btn").click(function () {
    var $items = $("<div/>", { class: "items" }),
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
    var $items = $("<div/>", { class: "items" }),
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
  $(".new-order-tab").hide();
  $(".orders-tab").hide();
  $(".profile-tab").hide();
  $(".recipe-tab").hide();
}

// to hide the filter tabs
function hideFilterTabs() {
  $(".placed-tab").hide();
  $(".ongoing-tab").hide();
  $(".delivered-tab").hide();
}
