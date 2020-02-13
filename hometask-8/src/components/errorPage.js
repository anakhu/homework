const errorLink = document.getElementById('error-link');

function initErrorLink(render) {
  errorLink.addEventListener('click', () => {
    window.history.pushState(null, null, '/');
    render(window.location.pathname);
  });
}

export default initErrorLink;
