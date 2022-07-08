function toggle(input, id) {
    if (input.checked == true) {
      document.getElementById(id).classList.add("hide-even")
    } else {
      document.getElementById(id).classList.remove("hide-even")
    }
  } 