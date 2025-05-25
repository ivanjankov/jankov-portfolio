export function render() {
  const div = document.createElement('div');
  div.innerHTML = 
  `	<h1 id="home-title" class="ff-roboto-slab fs-900">
				I'm Web Designer <br />
				Based in Skopje, Macedonia
		</h1>
		<p id="home-paragraph" class="fs-400">
					Thank you for visiting. Keep exploring you might find something you
					like.
		</p>

		<a id="home-btn" href="#contact" class="btn btn-cta ff-roboto-mono">Contact Me</a>`;
  return div;
}