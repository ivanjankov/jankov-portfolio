const routes = {
  '#home': () => import('../pages/home.js'),
  '#about': () => import('../pages/about.js'),
}

export async function router () {
  const path = location.hash;
  const view = routes[path] || routes['/']
  console.log('router called', path, view)
  const module = await view()
  document.getElementById('app').innerHTML = ''
  document.getElementById('app').appendChild(module.render());
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
