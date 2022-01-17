import Head from 'next/head';

type SeoProps = {
  title: string;
  metaDesc?: string;
}

export const Seo = ({ title, metaDesc }:SeoProps): JSX.Element => (
  <Head>
    <title>{title}</title>
    {metaDesc && (
      <meta name="description" content={metaDesc} />
    
    )}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
  </Head>
);
