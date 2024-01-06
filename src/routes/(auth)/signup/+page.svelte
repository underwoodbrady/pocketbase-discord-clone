<form action="?/signup" method="POST" class="card-body">
	<h2 class="mt-0 mb-6">Create Account</h2>
	<div class="form-control">
		<label class="label" for="username">
			<span class="label-text">Username</span>
		</label>
		<input type="text" name="username" placeholder="Username" class="input input-bordered bg-base-200" required />
	</div>
	<div class="form-control">
		<label class="label" for="email">
			<span class="label-text">Email</span>
		</label>
		<input type="email" name="email" placeholder="Email" class="input input-bordered bg-base-200" required />
	</div>
	<div class="form-control">
		<label class="label" for="password">
			<span class="label-text">Password</span>
		</label>
		<input type="password" name="password" placeholder="Password" class="input input-bordered bg-base-200" required />
	</div>
	<div class="form-control mt-6">
		<button class="btn btn-primary">Register</button>
	</div>
	<div>
		<p class="label-text-alt my-1 text-center">
			Have an account? <a class="link link-hover" href="/login">Log In Instead</a>
		</p>
	</div>
</form>
