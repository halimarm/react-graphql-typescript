import React, { FC } from 'react'
import { useQuery } from '@apollo/client';
import { DATA_POST } from '../../graphql/Posts/Posts'

const Home: FC = () => {
  const { loading, error, data } = useQuery(DATA_POST)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Ada Kesalahan</p>
  return (
    <>
      <h1>Home</h1>
      {
        data.posts.data.map((v: any) => {
          return (
            <p key={v.id}>{v.title}</p>
          )
        })
      }
    </>
  )
}

export default Home