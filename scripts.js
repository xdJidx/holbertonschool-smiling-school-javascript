$(document).ready(function(){
	$.ajax({
		type: "get",
		url: "https://smileschool-api.hbtn.info/quotes",
		beforeSend: function() {
			$(".loader").show();
		},
			success: function(response) {
				$(".loader").hide();
				for (let i = 0; i < response.length; i++) {
					const a = $(`
				<div class="carousel-item ${i === 0 ? "active" : ''}">
					<div class="container-md">
						<div class="row justify-content-center alig-items-center carousel-quote-fz mx-sm-5 mx-md-auto pl-sm-3 pl-md-0">
							<img class="col-6 col-sm-4 col-md-3 rounded-circle mb-4 mb-sm-auto" src=${response[0].pic_url} alt="A profile picture containing a smilling person">
							<div class="col-12 col-sm-8 col-md-9 align-self-center">
								<blockquote class="blockquote carousel-quote-fz ">
									<p class="mb-4">${response[i].text}</p>
									<footer>
										<p class="font-weight-bold mb-0">${response[i].name}</p>
										<p class="mb-0"><cite>${response[i].title}</cite></p>
									</footer>
								</blockquote>
							</div>
						</div>
					</div>
				</div>`);
				$("#JQquotes").append(a);
				}
				$("#JQquotes").append($(`
			<a class="carousel-control-prev uplift" href="#carouselExampleInterval" role="button" data-slide="prev">
			<span class="carousel-control-prev-icon white-left-arrow left-arrow" aria-hidden="true"></span>
			<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next uplift" href="#carouselExampleInterval" role="button" data-slide="next">
				<span class="carousel-control-next-icon white-right-arrow right-arrow" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
				`));
			},
	});
	$.ajax({
		type: "get",
		url: 'https://smileschool-api.hbtn.info/popular-tutorials',
		beforeSend: function() {
			$("#loader1").show();
		},
		success: function(response) {
			$("#loader1").hide();
			for (let k = 0; k < 2; k++) {
				const b = $(`<div class="carousel-item ${k === 0 ? "active" : ''}">
					<div class="container mt-5 pt-4 pb-3"> <!--	CONTAINER BEGINS -->
						<div class="row align-items-center" id="${k === 0 ? "now" : "now2"}">
						`);
				const y = k === 1 ? true : false;
				let i = y ? 4 : 0;
				$("#vid").append(b);
			for (; i < response.length; i++) {
				if ((y === false) && (i === 4)) {
					break;
				}
				let stars = '';
				for (let j = 0; j < response[i].star; j++)
					stars += "<img class='star-size' src='./images/star_on.png' alt='A purple star'>";

				for (let j = 0; j < 5 - response[i].star; j++)
					stars += "<img class='star-size' src='./images/star_off.png' alt='A grey star'>"
				const a = $(` 

														<div class="card col-8 col-sm-6 col-md-3 border-0 p-0 px-3 mx-auto">
											<div class="position-relative">
												<img class="w-100 h-100 card-img-top" src="${response[0].thumb_url}" alt="A thumbnail of a smilling white man">
												<img class="d-block position-absolute play-btn m-auto" src="./images/play.png" alt="Play button" width="64px" height="64px">
											</div>
											<div class="card-body p-3">
												<p class="font-weight-bold card-title text-dark">${response[i].title}</p>
												<p class="card-text">${response[i]["sub-title"]}</p>
												<div class="row pl-3">
													<img class="col-2 p-0 rounded-circle" src="${response[0].author_pic_url}" alt="A profile picture of a smilling man">
													<p class="col-10 font-weight-bold text-primary align-self-center mb-0">
														${response[i].author}
													</p>
												</div>
												<div class="d-flex justify-content-between align-items-center mt-2">
													<div class="star-con">
														${stars}
													</div>
													<p class="mb-0 time font-weight-bold text-primary">${response[i].duration}</p>
												</div>
											</div>
											</div> <!-- CARD ENDS -->	
											</div>
											</div>
											</div>
					`)
				if (k === 0) $("#now").append(a);
				else $("#now2").append(a);
			}
		}
				$("#vid").append($(`
					<a class="carousel-control-prev" href="#carouselExampleInterva" role="button" data-slide="prev">
			  		  <span class="carousel-control-prev-icon left-black-arrow left-arrow" aria-hidden="true"></span>
			  		  <span class="sr-only">Previous</span>
			  		</a>
			  		<a class="carousel-control-next" href="#carouselExampleInterva" role="button" data-slide="next">
			  		  <span class="carousel-control-next-icon right-black-arrow right-arrow" aria-hidden="true"></span>
			  		  <span class="sr-only">Next</span>
			  		</a>

					`))
		}
	});
	$.ajax({
		type: "get",
		url: 'https://smileschool-api.hbtn.info/latest-videos',
		beforeSend: function() {
			$("#loader2").show();
		},
		success: function(response) {
			$("#loader2").hide();
			for (let k = 0; k < 2; k++) {
				const b = $(`<div class="carousel-item ${k === 0 ? "active" : ''}">
					<div class="container mt-5 pt-4 pb-3"> <!--	CONTAINER BEGINS -->
						<div class="row align-items-center" id="${k === 0 ? "now3" : "now4"}">
						`);
				$("#tot").append(b);
			for (let i = 0; i < response.length; i++) {
				let stars = '';
				for (let j = 0; j < response[i].star; j++)
					stars += "<img class='star-size' src='./images/star_on.png' alt='A purple star'>";

				for (let j = 0; j < 5 - response[i].star; j++)
					stars += "<img class='star-size' src='./images/star_off.png' alt='A grey star'>"
				const a = $(` 

														<div class="card col-8 col-sm-6 col-md-3 border-0 p-0 px-3 mx-auto">
											<div class="position-relative">
												<img class="w-100 h-100 card-img-top" src="${response[0].thumb_url}" alt="A thumbnail of a smilling white man">
												<img class="d-block position-absolute play-btn m-auto" src="./images/play.png" alt="Play button" width="64px" height="64px">
											</div>
											<div class="card-body p-3">
												<p class="font-weight-bold card-title text-dark">${response[i].title}</p>
												<p class="card-text">${response[i]["sub-title"]}</p>
												<div class="row pl-3">
													<img class="col-2 p-0 rounded-circle" src="${response[0].author_pic_url}" alt="A profile picture of a smilling man">
													<p class="col-10 font-weight-bold text-primary align-self-center mb-0">
														${response[i].author}
													</p>
												</div>
												<div class="d-flex justify-content-between align-items-center mt-2">
													<div class="star-con">
														${stars}
													</div>
													<p class="mb-0 time font-weight-bold text-primary">${response[i].duration}</p>
												</div>
											</div>
											</div> <!-- CARD ENDS -->	
											</div>
											</div>
											</div>
					`)
				if (k === 0) $("#now3").append(a);
				else $("#now4").append(a);
			}
		}
				$("#tot").append($(`
					<a class="carousel-control-prev" href="#carouselExampleInterv" role="button" data-slide="prev">
			  		  <span class="carousel-control-prev-icon left-black-arrow left-arrow" aria-hidden="true"></span>
			  		  <span class="sr-only">Previous</span>
			  		</a>
			  		<a class="carousel-control-next" href="#carouselExampleInterv" role="button" data-slide="next">
			  		  <span class="carousel-control-next-icon right-black-arrow right-arrow" aria-hidden="true"></span>
			  		  <span class="sr-only">Next</span>
			  		</a>

					`))
		}
	});
		$.ajax({
			type: "get",
			url: "https://smileschool-api.hbtn.info/courses",
			dataType: "json",
			data: {
				q,
				topic,
				sort,
			},
			beforeSend: function() {
				$(".loader2").show();
			},
				success: function(response) {
					$(".loader2").hide();
					if (response.courses.length === 1)  $("#te").html(`1 video`);
					else $("#te").html(`${response.courses.length} videos`);
					$("#ap").empty();
					for (let i = 0; i < response.courses.length; i++) {
						let stars = '';
						for (let j = 0; j < response.courses[i].star; j++) {
							stars += `<img class="star-size" src="./images/star_on.png" alt="A purple star">`;
						}
						for (let j = 0; j < 5 - response.courses[i].star; j++) {
							stars += `<img class="star-size" src="./images/star_off.png" alt="A grey star">`;
						}
						const a = $(`
				<div class="card col-12 col-sm-4 col-md-3 border-0 p-0 px-3 mx-auto"> <!-- CARD ENDS -->
				<div class="position-relative">
					<img class="w-100 h-100 card-img-top" src="${response.courses[1].thumb_url}" alt="A thumbnail of a smilling white man">
					<img class="d-block position-absolute play-btn m-auto" src="./images/play.png" alt="Play button" width="64px" height="64px">
				</div>
				<div class="card-body p-3">
					<p class="font-weight-bold card-title text-dark">${response.courses[i].title}</p>
					<p class="card-text">${response.courses[i]["sub-title"]}</p>
					<div class="row pl-3">
						<img class="col-2 p-0 rounded-circle" src="${response.courses[1].author_pic_url}" alt="A profile picture of a smilling man">
						<p class="col-10 font-weight-bold text-primary align-self-center mb-0">
							${response.courses[i].author}
						</p>
					</div>
					<div class="d-flex justify-content-between align-items-center mt-2">
						<div class="star-con">
							${stars}
						</div>
						<p class="mb-0 time font-weight-bold text-primary">${response.courses[i].duration}</p>
					</div>
				</div>
				</div> <!-- CARD ENDS -->	

							`)
						$("#ap").append(a);
					}
				}
		});
});