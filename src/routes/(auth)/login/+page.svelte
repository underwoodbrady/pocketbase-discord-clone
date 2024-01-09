<script lang="ts">
	export let form;

	let openAlert = true;
</script>

<div class="toast toast-end">
	{#if form?.notVerified && openAlert}
		<div role="alert" class="alert alert-warning">
			<button class="" on:click={() => (openAlert = false)}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				></button
			>
			<span>You must verify your email before logging in</span>
		</div>
	{/if}
</div>

<form action="?/login" method="POST" class="card-body">
	<h2 class="mt-0 mb-6">Log In</h2>
	<div class="form-control">
		<label class="label" for="username">
			<span class="label-text">Username</span>
		</label>
		<input
			name="username"
			type="username"
			placeholder="Username"
			class="input input-bordered bg-base-200"
			required
		/>
	</div>
	<div class="form-control">
		<label class="label" for="password">
			<span class="label-text">Password</span>
		</label>
		<input
			name="password"
			type="password"
			placeholder="Password"
			class="input input-bordered bg-base-200"
			required
		/>
		<label class="label" for="forgotpassword">
			<a href="/" class="label-text-alt link link-hover">Forgot password?</a>
		</label>
	</div>
	<div class="form-control mt-6">
		<button class="btn btn-primary">Login</button>
	</div>
	<div>
		<p class="label-text-alt my-1 text-center">
			Need an account? <a class="link link-hover" href="/signup">Sign Up Instead</a>
		</p>
	</div>
</form>
