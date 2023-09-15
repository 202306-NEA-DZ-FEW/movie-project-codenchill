export default function MoviePage({movieData}) {
    return (
    <div>
        <h1>Movie Page</h1>
        {JSON.stringify(movieData)}
    </div>

    )
}

export async function getServerSideProps(context) {
    const { movieId } = context.query

const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDQ0MGFjM2E2NGQ3YTFjNzg2MGE4OWQ5OGU5YWIxMiIsInN1YiI6IjY1MDFkM2I0ZTBjYTdmMDBjYmViMTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sdb2YMTp6rF92nHwh7zxf2PmeXtSR_R32x6z1SE1VWw'
  }
};

const response = await fetch(url, options);
const data = await response.json();
return {
    props: {
        movieData : data, 
    }
}
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
}