function seer() {
  const rh = document.getElementById("tgl-hrmj") /*hiragana romaji toggle*/
  const rk = document.getElementById("tgl-krmj") /*katakana romaji toggle*/
  const th = document.getElementById("h-tbl") /*hiragana table*/
  const tk = document.getElementById("k-tbl") /*katakana table*/

  if (rh.checked == true) {
    th.classList.add("hide-even")
  } else {
    th.classList.remove("hide-even")
  }
  if (rk.checked == true) {
    tk.classList.add("hide-even")
  } else {
    tk.classList.remove("hide-even")
  }
}
