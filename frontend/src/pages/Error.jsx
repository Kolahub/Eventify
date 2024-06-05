import React from 'react'
import MainNavigation from '../components/MainNavigation'
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError()

  let title = 'An Error Occurred!'
  let msg = 'Something went wrong'

  if(error.status === 500) {
    msg = error.data.message
  }

  if(error.status === 404) {
    title = 'Not found.'
    msg = 'Could not find resource or page.'
  }


  return (
    <>
    <MainNavigation />
    <PageContent title={title}>
      <p>{msg}</p>
    </PageContent>
    </>
  )
}

export default Error