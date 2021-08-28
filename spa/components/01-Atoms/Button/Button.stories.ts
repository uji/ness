import '@/assets/css/tailwind.css'
export default {
  title: 'Button',
}

export const all = () => `
<ul>
  <li>
    <p>primary</p>
    <Button design="primary" text="button text" />
  </li>
  <li>
    <p>secondary</p>
    <Button design="secondary" text="button text" />
  </li>
</ul>
`
