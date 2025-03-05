<script lang="ts">
	import bookNestLogo from '$assets/app-logo.svg';
	import { Button } from '$components';
</script>

<header>
	<a href="/">
		<img class="logo" src={bookNestLogo} alt="Got to home" />
	</a>
	<nav>
		<ul>
			<li>
				<Button isMenu={true} href="/register">Create account</Button>
			</li>
			<li>
				<Button isMenu={true} isSecondary={true} href="/login">Login</Button>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 12px 4vw;
	}

	.logo {
		height: 72px;
	}

	ul {
		display: flex;
		column-gap: 24px;
	}
</style>
