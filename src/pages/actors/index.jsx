import { fetchData } from "@/Utility/api"
import Layout from "@/components/Layout/Layout"
import ActorList from "@/components/actorlist/actorlist"
export default function Actors({ actors }) {
  return (
    <Layout>
      <div className="text-neutral-50 text-4xl font-semibold font-['Montserrat'] leading-loose">
        Actors
      </div>
      <div className="w-64 h-px border-4 border-red-400"></div>
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
