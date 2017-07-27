	$(function() {
		$("#login").click(function(e) {
			//alert("D");
			$(function() {
				var user = {};
				user.act = "login";
				user.ac = $("input[name='log_ac']").val();
				user.pw = $("input[name='log_pw']").val();
				//	alert(user.ac);
				$.ajax({
					url: "http://port-5000.desmond2-desmondyiu724118.codeanyapp.com/index.html",
					type: "POST",
					data: user,
					success: function(result) {
						alert(result);
						if (result == "Login successful") {
							localStorage.setItem("login", user.ac);
							$('.loginname').html(user.ac);
							$('.loginstay').html("Logout");
							$(".popupLogin_DY").fadeOut();
						}
						console.log(result);
						if (result.status == 200) {
							console.log("hope can see here");
						}
					},
					error: function(result) {
						console.log(result);
					}
				});
				return false;
			});
		});
		$("#sign_up").click(function(e) {
			var user = {};
			user.act = "signup";
			user.ac = $("input[name='ac']").val();
			user.pw = $("input[name='pw']").val();
			user.email = $("input[name='email']").val();
			if (user.ac == "" || user.pw == "" || $("input[name='re_pw']").val() == "" || user.email == "") {
				alert("Please input all infomration!");
			} else if ($("input[name='re_pw']").val() != user.pw) {
				alert("Please input same password at repeat password!");
			} else {
				$.ajax({
					url: "http://port-5000.desmond2-desmondyiu724118.codeanyapp.com/index.html",
					type: "POST",
					data: user,
					datatype: "json",
					success: function(result) {
						alert(result);
						localStorage.setItem("login", user.ac);
						$('.loginname').html(user.ac);
						$('.loginstay').html("Logout");
						$(".popupLogin_DY").fadeOut();
						console.log(result);
						if (result.status == 200) {
							console.log("hope can see here");
						}
					},
					error: function(result) {
						console.log(result);
						
					}
				});
			}
			return false;
		});
	});