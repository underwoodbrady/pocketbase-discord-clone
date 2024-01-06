<form action="?/login" method="POST" class="card-body">
	<h2 class="mt-0 mb-6">Log In</h2>
	<div class="form-control">
		<label class="label" for="email">
			<span class="label-text">Email</span>
		</label>
		<input type="email" placeholder="Email" class="input input-bordered bg-base-200" required />
	</div>
	<div class="form-control">
		<label class="label" for="password">
			<span class="label-text">Password</span>
		</label>
		<input type="password" placeholder="Password" class="input input-bordered bg-base-200" required />
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
