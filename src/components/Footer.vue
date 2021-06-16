<template>

		<!-- footer-copyright start -->
		<footer  v-show="isFooter" class="footer-copyright">
			<div class="container">
				<div class="footer-content">
					<div class="row">

						<div class="col-sm-3">
							<div class="single-footer-item">
								<div class="footer-logo">
									<a href="index.html">
										tour<span>Vago</span>
									</a>
									<p>
										best tour agency
									</p>
								</div>
							</div><!--/.single-footer-item-->
						</div><!--/.col-->

						<div class="col-sm-3">
							<div class="single-footer-item">
								<h2></h2>
								<div class="single-footer-txt">
									<p><a href="#">home</a></p>
									<p><a href="#">destination</a></p>
									<p><a href="#">spacial packages</a></p>
									<p><a href="#">special offers</a></p>
								
								</div><!--/.single-footer-txt-->
							</div><!--/.single-footer-item-->

						</div><!--/.col-->

						<div class="col-sm-3">
							<div class="single-footer-item">
								<h2>popular destination</h2>
								<div class="single-footer-txt">
								<p><a href="#">Bahir Dar</a></p>
									<p><a href="#">Lalibela</a></p>
									<p><a href="#">Gondar</a></p>
									<p><a href="#">Omo </a></p>
								</div><!--/.single-footer-txt-->
							</div><!--/.single-footer-item-->
						</div><!--/.col-->

						<div class="col-sm-3">
							<div class="single-footer-item text-center">
								<h2 class="text-left">contacts</h2>
								<div class="single-footer-txt text-left">
									<p>+2519 534 5 6778</p>
									<p class="foot-email"><a href="#">info@tourvago.com</a></p>
									<p>Bole Medanialem, Edna Mall 5th floor</p>
									<p>Addis Ababa, Ethiopia</p>
								</div><!--/.single-footer-txt-->
							</div><!--/.single-footer-item-->
						</div><!--/.col-->

					</div><!--/.row-->

				</div><!--/.footer-content-->
				<hr>
				<div class="foot-icons ">
					<ul class="footer-social-links list-inline list-unstyled">
		                <li><a href="#" target="_blank" class="foot-icon-bg-1"><i class="fa fa-facebook"></i></a></li>
		                <li><a href="#" target="_blank" class="foot-icon-bg-2"><i class="fa fa-twitter"></i></a></li>
		                <li><a href="#" target="_blank" class="foot-icon-bg-3"><i class="fa fa-instagram"></i></a></li>
		        	</ul>
		        	<p>&copy; 2021 <a href="https://www.tourvago.com">TourVago</a>. All Right Reserved</p>

		        </div><!--/.foot-icons-->
				<div id="scroll-Top">
					<i class="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
				</div><!--/.scroll-Top-->
			</div><!-- /.container-->

		</footer><!-- /.footer-copyright-->
		<!-- footer-copyright end -->


 
</template>

<script>
import {bus}from '../main'

export default {
 props:{
   title:{
     type:String
   }
 },
  data () {
    return {
      isFooter:true,
    }
  },
  created()
  {
	  	  this.changeFooter();
bus.$on('titleChanged',(data) =>{
  this.title =data;
})

  },
  methods :{
	  	  changeFooter:function(){
		if(this.$route.name == "login"){
			  this.isFooter =false;
		  };
	  }
  }, 
   beforeMount(){
	  this.changeFooter()
  }
 
}
</script>
