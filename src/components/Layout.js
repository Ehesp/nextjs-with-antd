import Head from 'next/head';

// https://github.com/plxel/nextjs-ant-design-custom-theme
import '../variables.less';

export default ({ children, title }) => (
  <div>
    <Head>
      {title && <title>{title}</title>}
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="/static/styles.css" />
    </Head>
    {children}
  </div>
)
