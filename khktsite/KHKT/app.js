const before = ["Cái l*n má",
    "Con m* nó",
    "Con m* nó rồi",
   "Vãi l*n",
   "Đ* má",
   "Có cái l*n",
   "Con điên",
    "Con c*c",
    "Ch* má",
    "Vãi cả l*n",
    "Thấy mẹ", 
    "Cái l*n",
    "Lòi l*n",
    "Con phò",
    "Phò",
    "Chó",
    "Đầu bu*i",
    "Vãi c*c",
    "Bu*i",
    "Con đĩ"]

const after = ["Cái lùm mía",
    "Cơm mẹ nấu",
    "Cơm mẹ nấu rồi",
    "Vật lộn, vậy luôn",
    "Đậu xanh rau má",
    "Có cái beep",
    "Nha đầu ngốc",
    "Cúc cu",
    "Chào mào",
    "Vãi cả linh hồn",
    "Thấy mồ, thấy mẹo",
    "Cái lon",
    "Lợn lòi",
    "Con pò",
    "Pò",
    "Chá, chóa",
    "Đầu bưởi",
    "Vải cực, Vãi đạn",
    "Bưởi",
    "Con đĩa"
    
    ]

const short = ["","cmn","cmnr","vl","","","","cc","","vcl"]
function myFunction(){

    document.getElementById("ans").innerHTML = "hello";

}
var btnSearch = document.getElementById('search-button')
const searchInput = document.getElementById('search-text')

btnSearch.addEventListener("click", function(){

    this.parentElement.classlist.toggle('open')
    this.previousElementSibling.focus();
    console.log("hello");
    searchInput.addEventListener("input" ,e => {

        const value = e.target.value
        console.log(value)

    })

})


