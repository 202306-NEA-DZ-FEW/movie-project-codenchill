import { fetchData } from "@/Utility/api"
import Layout from "@/components/Layout/Layout"
import ActorList from "@/components/actorlist/actorlist"
export default function Actors({ actors }) {
  return (
    <Layout>
      <h1>Actors</h1>
      <ActorList actors={actors} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const actors = await fetchData(`person/popular`)
  return {
    props: {
      actors: actors.results,
    },
  }
}
