import { useRouter } from "next/compat/router";

export default function SSRPage({ a }: { a: number }) {
  const router = useRouter();

  return (
    <main>
      <h1>SSR Page - {a}</h1>
      <h2>asPath - {router?.asPath}</h2>
      <h2>pathname - {router?.pathname}</h2>
      <h2>route - {router?.route}</h2>

      <button
        onClick={() =>
          router?.push(
            {
              pathname: "/",
            },
            undefined,
            {
              shallow: true,
            }
          )
        }
      >
        go home
      </button>
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
        go another
      </button>
    </main>
  );
}

export const getServerSideProps = () => {
  console.log("SSR gssp running");
  return {
    props: {
      a: 30,
    },
  };
};
