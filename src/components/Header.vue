
<template>
	<header class="top-area">
			<div class="header-area">
				<div class="container">
					<div class="row">
						<div class="col-sm-2">
							<div class="logo">
								<a href="index.html">
									Tour<span>Vago</span>
								</a>
							</div><!-- /.logo-->
						</div><!-- /.col-->
						<div class="col-sm-10">
							<div class="main-menu">
							
								<!-- Brand and toggle get grouped for better mobile display -->
								<div class="navbar-header">
									<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
										<i class="fa fa-bars"></i>
									</button><!-- / button-->
								</div><!-- /.navbar-header-->
								<div v-if="isMain" class="collapse navbar-collapse" >		  
                                      
									<ul class="nav navbar-nav navbar-right">
										<li class="smooth-menu"><a href="#home">home</a></li>
										
										<li class="smooth-menu" ><a href="#gallery">Destination</a></li>
										<li class="smooth-menu"><a href="#pack">Packages </a></li>
										<li class="smooth-menu"><a href="#spo">Special Offers</a></li>
										<li class="smooth-menu"><a href="#blog">blog</a></li>
										<li class="smooth-menu"><a href="#subs">subscription</a></li>
										<li class="smooth-menu" v-show="loggedIn"><router-link to="/history">History</router-link></li>

										<li>
											<router-link :to="{name:'login'}"> <button class="book-btn" v-show="!loggedIn">Log in</button> </router-link>
										</li>
											<li>
											<button class="book-btn" v-show="loggedIn" @click="temp" >Log out</button>
										</li>
									</ul>




									
								</div><!-- /.navbar-collapse -->
     


	 <!-- agent-->
			<div v-else-if="isAgent" class="collapse navbar-collapse" >		  
                                      
									<ul class="nav navbar-nav navbar-right">
										
										<li class="smooth-menu"><a href="#subs" onclick="document.getElementById('id02').style.display='block'">Tours</a></li>
											<li>
											<button class="book-btn" v-show="loggedIn" @click="temp" >Log out</button>
										</li>
									</ul>




									
								</div><!-- /.navbar-collapse -->
     	<div v-else-if="isAdmin" class="collapse navbar-collapse" >		  
                                      
									<ul class="nav navbar-nav navbar-right">
										
										<li class="smooth-menu"><a href="#subs">Agents</a></li>

								
											<li>
											<button class="book-btn" v-show="loggedIn" @click="temp" >Log out</button>
										</li>
									</ul>




									
								</div><!-- /.navbar-collapse -->
     
	 <!-- Second navigation-->
	 		<div v-else-if="!isMain" class="collapse navbar-collapse">		  
									<ul class="nav navbar-nav navbar-right">
										<li class="smooth-menu"><router-link :to="{name:'welcome'}">home</router-link></li>
										<li class="smooth-menu" ><router-link to="/">Destination</router-link></li>
										<li class="smooth-menu"><router-link to="/">Packages</router-link> </li>
										<li class="smooth-menu"><router-link to="/">Special Offers</router-link></li>
										<li class="smooth-menu"><router-link to="/">Blog</router-link></li>
										<li class="smooth-menu"><router-link to="/">Subscription</router-link></li>
										<li class="smooth-menu" v-show="loggedIn"><router-link to="/history">History</router-link></li>

										<li>
																					<router-link :to="{name:'login'}"> <button class="book-btn" v-show="!loggedIn">Log in</button> </router-link>

										</li>
											<li>
											<button class="book-btn" v-show="loggedIn">Log out
											</button>
										</li>
									</ul>
								</div>





							</div><!-- /.main-menu-->
						</div><!-- /.col-->
					</div><!-- /.row -->
					<div class="home-border"></div><!-- /.home-border-->
				</div><!-- /.container-->
			</div><!-- /.header-area -->

		</header>
</template>

<script>
import {bus} from '../main';
export default {
	props:['loggedIn'],

    
  data () {
	  
    return {
		name:"aman",
		isMain:false,
		isAgent:false,
		isAdmin:false
		
    }
  },
  methods:{
      changeTitle:function(){
  
          this.title="Vue Changed";
          bus.$emit('titleChanged','Vue Changed')
      },
	  temp:function(){
		alert("worked"+this.name)
	  },
	  changeNav:function(){
		if(this.$route.name == "welcome"){
			  this.isMain =true;
		  }
		  else	if(this.$route.name == "addTour"){
			  this.isAgent =true;
		  }
		  	 else	if(this.$route.name == "addAgent"){
			  this.isAdmin =true;
		  };
	  }

  },
  beforeMount(){
	  this.changeNav()
  }
}
</script>

<style scoped>
header{
    background-color:black;
    
}
h1{
    color:white;
}
</style>
