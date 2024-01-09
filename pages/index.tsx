import { useRouter } from "next/compat/router";

export default function Home({ a }: { a: number }) {
  const router = useRouter();

  console.log(router?.query);
  return (
    <main>
      <h1>Home - {a}</h1>
      <h2>asPath - {router?.asPath}</h2>
      <h2>pathname - {router?.pathname}</h2>
      <h2>route - {router?.route}</h2>
      <button
        onClick={() =>
          router?.push(
            {
              pathname: "/another",
            },
            undefined,
            {
              shallow: true,
            }
          )
        }
      >
        go to another page
      </button>

      <button
        onClick={() =>
          router?.push(
            {
              pathname: "/ssr",
            },
            undefined,
            {
              shallow: true,
            }
          )
        }
      >
        go to ssr
      </button>
    </main>
  );
}

export const getStaticProps = () => {
  console.log("gsp running");
  return {
    props: {
      a: 10,
    },
    revalidate: 30,
  };
};
