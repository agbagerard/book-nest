<script lang="ts">
	import { SideNav } from '$components';
	let { children } = $props();
</script>

<div class="auth-area">
	<SideNav />
	<div class="main-area">
		{@render children()}
	</div>
</div>
