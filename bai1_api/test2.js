$(document).ready(function () {
    $(".btn").click(function () {
      // url of the data to be delete
      console.log("first")
      
    });
  });

  function deletePost(id) {
    $.ajax({
        url: `https://62135c6ef43692c9c601aea7.mockapi.io/posts/${id}`,
        type: "DELETE",
        dataType: "json",
        success: function (data) {
          $("p").append("Delete request is Success.");
          let tmp = "."+`${id}`;
          $(tmp).fadeOut();
        },
        error: function (jqXhr, textStatus, errorMessage) {
          $("p").append("Delete request is Fail.");
        },
      });
  }

$.ajax({
  url: "https://62135c6ef43692c9c601aea7.mockapi.io/posts",
  type: "GET",
  dataType: "json",
  success: function (result) {
    $.each(result, function (array, v) {
      var s = `
          <tr class="${v.id}">
            <td>${v.userId}</td>
            <td class="id" >${v.id}</td>
            <td>${v.title}</td>
            <td>${v.body}</td>
            <td><button class="btn" value="${v.id}">Xóa</button></td>
          </tr>
        `;
      $(".test1").append(s);
    });
    
    $(document).ready(function () {
      $(`.btn`).click(function (e) {
          e.preventDefault();
        const id = this.value;
        deletePost(id);
      });
    });
  },
});




