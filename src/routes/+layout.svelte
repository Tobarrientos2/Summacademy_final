<script>
	import One_Header from './../lib/Components/One/One_Header.svelte';
	import One_Footer from './../lib/Components/One/One_Footer.svelte';
import "../style.css"

</script>


<svelte:head>
	<!-- favicon -->
	<link rel="icon" href="/tm/tm_logo.jpeg" />

</svelte:head>





<One_Header></One_Header>
<slot></slot>

<One_Footer></One_Footer>