import { fetchData } from "@/Utility/api"

export default function Home({ data }) {
  return <></>
}
export async function getStaticProps() {
  const data = await fetchData("trending/movie/day?language=en-US")
  return {
    props: {
      data: data.results.slice(0, 5),
    },
  }
}
