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
      $(".stocks-tab").slideDown().css("display", "grid");
    } else {
      $(".icons-5").removeClass("fas");
      $(".icons-5").addClass("fal");
    }
    /*** Filters slider */
    $(".bar-toggle").click(function () {
      if ($("#bar-item-1").is(":checked")) {
        $(".bar-icons-1").removeClass("fal");
        $(".bar-icons-1").addClass("fas");
        hideFilterTabs();
        $(".requests-tab").slideDown();
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
  $(".customers-tab").hide();
  $(".orders-tab").hide();
  $(".stocks-tab").hide();
  $(".recipe-tab").hide();
}

// to hide the filter tabs
function hideFilterTabs() {
  $(".requests-tab").hide();
  $(".ongoing-tab").hide();
  $(".delivered-tab").hide();
}
