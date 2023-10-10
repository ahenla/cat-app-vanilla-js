//load css
export async function loadCSS(styles, component) {
  const request = await fetch(`/styles/components/${component}.css`);
  styles.textContent = await request.text()
}
