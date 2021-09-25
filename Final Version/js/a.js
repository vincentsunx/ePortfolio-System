function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
function getId(id) {
   if (id == "filterName")
   {
     document.form1.ok.value = "Name";
   }
   if (id == "filterCountry")
   {
     document.form1.ok.value="Country";
   }
   if (id == "filterCity")
   {
     document.form1.ok.value="City";
   }
   if (id == "filterUniversity")
   {
     document.form1.ok.value="University";
   }
   if (id == "filterFaculty")
   {
     document.form1.ok.value="Faculty";
   }
   if (id == "filterJob")
   {
     document.form1.ok.value="Occupation";
   }
}
