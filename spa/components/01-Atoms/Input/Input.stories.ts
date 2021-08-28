import '@/assets/css/tailwind.css'
export default {
  title: 'Input',
}

export const all = () => `
<ul>
  <li>
    <p>text</p>
    <Input placeholder="text" />
  </li>
  <li>
    <p>password</p>
    <Input placeholder="password" type="password"/>
  </li>
</ul>
`
